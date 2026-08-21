import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import { SITE } from '../data/site';
import { PhoneIcon } from './Icons';

export default function MobileDrawer({ open, onClose, navLinks }) {
  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="mobile-drawer-portal">
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="drawer-header">
              <NavLink to="/" className="brand-logo" onClick={onClose} aria-label="Advance Physiotherapy Centre Home">
                <img src="/images/clinic-logo.webp" alt="Logo" className="brand-logo-img" width="100" height="50" />
                <span className="brand-text">
                  <span className="brand-name">Advance Physiotherapy</span>
                  <span className="brand-sub">Juran Chapra, Muzaffarpur</span>
                </span>
              </NavLink>
              <button
                type="button"
                className="close-drawer-btn"
                aria-label="Close navigation menu"
                onClick={onClose}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="drawer-nav" aria-label="Mobile Menu Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) => `drawer-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="drawer-footer">
              <div className="drawer-footer-actions">
                <a
                  href={`tel:${SITE.phonePrimary}`}
                  className="btn btn-secondary btn-block drawer-call-btn"
                  aria-label={`Call clinic at ${SITE.phonePrimaryDisplay}`}
                >
                  <PhoneIcon />
                  <span>Call {SITE.phonePrimaryDisplay}</span>
                </a>
                <WhatsAppButton className="btn btn-primary btn-block drawer-wa-btn" />
              </div>
              <div className="drawer-contact-info">
                <p><strong>Hours:</strong> {SITE.hours}</p>
                <p><strong>Location:</strong> {SITE.addressLine1}, {SITE.city}</p>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
