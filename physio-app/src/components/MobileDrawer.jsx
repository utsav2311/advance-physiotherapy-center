import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import { useClinicStatus } from '../hooks/useClinicStatus';
import { SITE } from '../data/site';

const NAV_ICONS = {
  '/': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  '/services': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  '/process': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  '/about': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  '/gallery': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  '/reviews': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  '/faq': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  '/contact': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function MobileDrawer({ open, onClose, navLinks }) {
  const statusText = useClinicStatus();

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Frosted Backdrop */}
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={onClose}
          />

          {/* Luxury Slide-in Drawer */}
          <motion.div
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            aria-hidden={!open}
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header */}
            <div className="drawer-header">
              <NavLink to="/" className="drawer-brand" onClick={onClose}>
                <img
                  src="/images/clinic-logo.webp"
                  alt="Logo"
                  className="drawer-brand-logo"
                  width="90"
                  height="45"
                />
                <div className="drawer-brand-text">
                  <span className="drawer-brand-name">Advance Physiotherapy</span>
                  <span className="drawer-brand-sub">{SITE.doctor}</span>
                </div>
              </NavLink>
              <button
                type="button"
                className="close-drawer-btn"
                aria-label="Close menu"
                onClick={onClose}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Clinic Live Status Pill Bar */}
            <div className="drawer-status-bar">
              <div className="drawer-status-pill">
                <span className="drawer-status-dot" />
                <span className="drawer-status-text">{statusText}</span>
              </div>
              <span className="drawer-home-badge">Home Visit Available</span>
            </div>

            {/* Navigation Links List */}
            <div className="drawer-nav">
              <span className="drawer-section-label">Navigation</span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx + 0.08, duration: 0.25 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) => `drawer-link${isActive ? ' active' : ''}`}
                  >
                    <span className="drawer-link-icon">{NAV_ICONS[link.to]}</span>
                    <span className="drawer-link-label">{link.label}</span>
                    <span className="drawer-link-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Drawer Footer & Quick Contact Card */}
            <div className="drawer-footer">
              <WhatsAppButton className="btn btn-primary btn-block drawer-cta-btn" />

              <a href={`tel:${SITE.phonePrimary}`} className="drawer-call-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Call: {SITE.phonePrimaryDisplay}</span>
              </a>

              <div className="drawer-contact-info">
                <div className="drawer-info-row">
                  <span className="drawer-info-icon">📍</span>
                  <span>Near Apollo Dental Hospital, Juran Chapra, {SITE.city}</span>
                </div>
                <div className="drawer-rating-row">
                  <span className="drawer-rating-stars">★★★★★</span>
                  <span>5.0 Google Rating • 1000+ Patients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
