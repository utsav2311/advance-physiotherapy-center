import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon } from './Icons';

const STEP_ICONS = [ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon];

const STEP_PHASES = [
  'Phase 1 • Root Cause',
  'Phase 2 • Care Protocol',
  'Phase 3 • Active Therapy',
  'Phase 4 • Lifetime Health',
];

/**
 * Skiper104: Scroll-Driven Auto-Focus Grid Cards.
 * As the user scrolls down the section, active focus automatically transitions
 * from Phase 1 -> Phase 2 -> Phase 3 -> Phase 4 with glowing aura,
 * animated track fill, and expanded clinical details.
 */
export default function Skiper104({ steps, expandable = true }) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  // Automatically update activeStep as the user scrolls
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const stepCount = steps.length;
    if (stepCount === 0) return;

    // Split scroll interval into step segments
    const stepIndex = Math.min(
      stepCount - 1,
      Math.max(0, Math.floor(latest * stepCount))
    );

    setActiveStep(stepIndex);
  });

  return (
    <div ref={containerRef} className="skiper104-container">
      {/* Dynamic Animated Progress Track */}
      <div className="skiper104-track" aria-hidden="true">
        <div className="skiper104-track-line" />
        <motion.div
          className="skiper104-track-fill"
          style={{
            scaleX: smoothProgress,
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* Grid of 4 Cards */}
      <div className="skiper104-grid">
        {steps.map((step, idx) => {
          const Icon = STEP_ICONS[idx % STEP_ICONS.length];
          const isSelected = activeStep === idx;

          return (
            <motion.div
              key={step.number}
              className={`skiper104-card${isSelected ? ' is-active' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              animate={{
                scale: isSelected ? 1.025 : 1,
                y: isSelected ? -4 : 0,
              }}
              onClick={() => setActiveStep(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx);
              }}
            >
              {/* Card Ambient Glow Top Bar */}
              <div className="skiper104-card-glow" />

              {/* Active Step Pulsing Ring */}
              {isSelected && (
                <motion.div
                  className="skiper104-active-border"
                  layoutId="skiper104-active-border"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}

              {/* Card Top Header */}
              <div className="skiper104-card-top">
                <span className="skiper104-step-pill">{STEP_PHASES[idx]}</span>
                <span className="skiper104-step-num">{step.number}</span>
              </div>

              {/* Icon Container */}
              <div className="skiper104-icon-wrap">
                <Icon />
              </div>

              {/* Title & Summary */}
              <h3 className="skiper104-card-title">{step.title}</h3>
              <p className="skiper104-card-summary">{step.summary}</p>

              {/* Expandable Clinical Details */}
              {expandable && step.details && (
                <div className="skiper104-details-section">
                  <div className="skiper104-divider" />
                  <div className="skiper104-details-header">
                    <span className="skiper104-details-tag">Key Clinical Milestones</span>
                  </div>
                  <ul className="skiper104-details-list">
                    {step.details.slice(0, 3).map((detail, dIdx) => (
                      <li key={dIdx}>
                        <span className="skiper104-check-dot">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {step.details.length > 3 && (
                    <AnimatePresence>
                      {isSelected && (
                        <motion.ul
                          className="skiper104-details-list extra-details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          {step.details.slice(3).map((detail, dIdx) => (
                            <li key={dIdx}>
                              <span className="skiper104-check-dot">✓</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )}

              {/* Card Footer Indicator */}
              <div className="skiper104-card-footer">
                <span className="skiper104-step-status">
                  {isSelected ? (
                    <span className="status-badge-active">
                      <span className="status-live-dot" />
                      In Focus • Step {idx + 1} of 4
                    </span>
                  ) : (
                    'Scroll / Click to View →'
                  )}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
