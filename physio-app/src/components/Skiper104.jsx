import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon } from './Icons';

const STEP_ICONS = [ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon];

/**
 * Skiper104: Pinned On-Scroll Reveal Grid Cards.
 * Pins the 4-step recovery pathway cleanly on screen while the user scrolls,
 * smoothly shifting active focus through Phase 1 -> Phase 2 -> Phase 3 -> Phase 4
 * without letting cards scroll off-screen until all phases are complete.
 */
export default function Skiper104({ steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const wrapperRef = useRef(null);

  // Measure scroll through the wrapper height
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate active step (0, 1, 2, 3) as user scrolls through the pinned section
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const count = steps.length;
    if (count === 0) return;

    // Distribute evenly across 4 steps
    const index = Math.min(count - 1, Math.max(0, Math.floor(latest * count)));
    setActiveStep(index);
  });

  return (
    <div ref={wrapperRef} className="skiper104-scroll-wrapper">
      <div className="skiper104-sticky-box">
        {/* Progress Connector Track */}
        <div className="skiper104-track-container" aria-hidden="true">
          <div className="skiper104-track-bar">
            <motion.div
              className="skiper104-track-fill"
              style={{
                scaleX: smoothProgress,
                transformOrigin: 'left',
              }}
            />
          </div>
          <div className="skiper104-phase-indicators">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                className={`skiper104-phase-dot-btn${activeStep === idx ? ' is-active' : ''}`}
                onClick={() => setActiveStep(idx)}
                aria-label={`Jump to ${step.phase}`}
              >
                <span className="dot-num">{step.number}</span>
                <span className="dot-label">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid - Compact & Screen-Fit */}
        <div className="skiper104-grid">
          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            const isSelected = activeStep === idx;

            return (
              <motion.div
                key={step.number}
                className={`skiper104-card${isSelected ? ' is-active' : ''}`}
                animate={{
                  scale: isSelected ? 1.02 : 0.98,
                  y: isSelected ? -4 : 0,
                  opacity: isSelected ? 1 : 0.75,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => setActiveStep(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx);
                }}
              >
                {/* Glowing Top Accent Bar */}
                <div className="skiper104-card-glow" />

                {/* Card Top Header */}
                <div className="skiper104-card-top">
                  <span className="skiper104-step-pill">{step.phase}</span>
                  <span className="skiper104-step-num">{step.number}</span>
                </div>

                {/* Icon Container */}
                <div className="skiper104-icon-wrap">
                  <Icon />
                </div>

                {/* Title & Concise Summary */}
                <h3 className="skiper104-card-title">{step.title}</h3>
                <p className="skiper104-card-summary">{step.summary}</p>

                {/* Milestone Bullet Points */}
                {step.details && (
                  <ul className="skiper104-details-list">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx}>
                        <span className="skiper104-check-dot">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Card Footer Indicator */}
                <div className="skiper104-card-footer">
                  {isSelected ? (
                    <span className="status-badge-active">
                      <span className="status-live-dot" />
                      Active Step
                    </span>
                  ) : (
                    <span className="status-badge-idle">Step {idx + 1}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
