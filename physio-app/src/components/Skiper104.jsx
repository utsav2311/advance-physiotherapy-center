import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon } from './Icons';

const STEP_ICONS = [ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon];

const STEP_PHASES = [
  'Phase 1 • Root Cause',
  'Phase 2 • Care Protocol',
  'Phase 3 • Active Therapy',
  'Phase 4 • Lifetime Health',
];

/**
 * Skiper104: Scroll Reveal Grid Cards for Process Pathway.
 * Inspired by @skiper-ui/skiper104 component pattern.
 * Features scroll-triggered reveal, glowing gradient borders,
 * interactive step selection, expandable clinical details, and smooth Framer Motion springs.
 */
export default function Skiper104({ steps, expandable = true }) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.7]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="skiper104-container"
    >
      {/* Progress Connector Track */}
      <div className="skiper104-track" aria-hidden="true">
        <div className="skiper104-track-line" />
        <div
          className="skiper104-track-fill"
          style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
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
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveStep(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx);
              }}
            >
              {/* Card Ambient Glow */}
              <div className="skiper104-card-glow" />

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
                      <motion.li
                        key={dIdx}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: dIdx * 0.05 }}
                      >
                        <span className="skiper104-check-dot">✓</span>
                        <span>{detail}</span>
                      </motion.li>
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
                          transition={{ duration: 0.3 }}
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
                  {isSelected ? '● Active Step View' : 'Click to Focus →'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
