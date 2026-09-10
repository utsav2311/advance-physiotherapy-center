import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon } from './Icons';

const STEP_ICONS = [ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon];

/**
 * Skiper104: Pinned On-Scroll Reveal Grid Cards.
 * Pins the 4-step recovery pathway cleanly on screen while the user scrolls,
 * smoothly shifting active focus through Phase 1 -> Phase 2 -> Phase 3 -> Phase 4
 * with a dynamic progress fill, active glowing accents, and seamless click-to-jump.
 */
export default function Skiper104({
  steps,
  label,
  title,
  subtitle,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0.12);
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef(null);
  const rafIdRef = useRef(null);

  const updateScroll = useCallback(() => {
    if (isClickingRef.current) return;
    if (!wrapperRef.current) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Mobile scroll-spy: activate the card closest to viewport center
      const cardEls = wrapperRef.current.querySelectorAll('.skiper104-card');
      if (!cardEls || cardEls.length === 0) return;

      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardEls.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveStep(closestIdx);
      setScrollProgress((closestIdx + 1) / steps.length);
      return;
    }

    // Desktop: calculate progress based on pinned scroll distance
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const stickyTop = 80; // px below fixed navbar
    const totalDist = wrapperRect.height - window.innerHeight;

    if (totalDist <= 0) return;

    // Distance scrolled past the sticky start point
    const scrolled = stickyTop - wrapperRect.top;
    const rawProgress = scrolled / totalDist;
    const progress = Math.min(1, Math.max(0, rawProgress));

    setScrollProgress(progress);

    const count = steps.length;
    if (count > 0) {
      const stepIdx = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
      setActiveStep(stepIdx);
    }
  }, [steps.length]);

  useEffect(() => {
    const onScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [updateScroll]);

  const handleStepClick = (idx) => {
    setActiveStep(idx);
    isClickingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 850);

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      const cardEls = wrapperRef.current?.querySelectorAll('.skiper104-card');
      if (cardEls && cardEls[idx]) {
        cardEls[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setScrollProgress((idx + 1) / steps.length);
    } else {
      if (!wrapperRef.current) return;
      const count = steps.length;
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      const totalDist = wrapperRef.current.offsetHeight - window.innerHeight;
      const targetProgress = (idx + 0.5) / count;
      const targetScrollY = wrapperTop - 80 + targetProgress * totalDist;

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: 'smooth',
      });
      setScrollProgress(targetProgress);
    }
  };

  return (
    <div ref={wrapperRef} className="skiper104-scroll-wrapper">
      <div ref={stickyRef} className="skiper104-sticky-box">
        {/* Pinned Section Header */}
        {title && (
          <div className="skiper104-header text-center">
            {label && <span className="section-label">{label}</span>}
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* Progress Connector Track */}
        <div className="skiper104-track-container" aria-hidden="true">
          <div className="skiper104-track-bar">
            <div
              className="skiper104-track-fill"
              style={{
                width: `${Math.min(100, Math.max(8, scrollProgress * 100))}%`,
              }}
            />
          </div>
          <div className="skiper104-phase-indicators">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                className={`skiper104-phase-dot-btn${activeStep === idx ? ' is-active' : ''}`}
                onClick={() => handleStepClick(idx)}
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
                  scale: isSelected ? 1.025 : 0.98,
                  y: isSelected ? -4 : 0,
                  opacity: isSelected ? 1 : 0.72,
                }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                onClick={() => handleStepClick(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleStepClick(idx);
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
