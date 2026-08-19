import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import { SITE } from '../data/site';

export default function MobileDrawer({ open, onClose, navLinks }) {
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
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 32 }}
            aria-hidden={!open}
          >
            <div className="drawer-header">
              <NavLink to="/" className="brand-logo" onClick={onClose}>
                <img src="/images/clinic-logo.webp" alt="Logo" className="brand-logo-img" width="100" height="50" />
                <span className="brand-text">
                  <span className="brand-name">Advance Physiotherapy</span>
                  <span className="brand-sub">Center • Muzaffarpur</span>
                </span>
              </NavLink>
              <button type="button" className="close-drawer-btn" aria-label="Close menu" onClick={onClose}>
                &times;
              </button>
            </div>

            <div className="drawer-nav">
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
            </div>

            <div className="drawer-footer">
              <WhatsAppButton className="btn btn-primary btn-block" />
              <div className="drawer-contact-info">
                <p><strong>Call:</strong> <a href={`tel:${SITE.phonePrimary}`}>{SITE.phonePrimaryDisplay}</a></p>
                <p><strong>Location:</strong> Juran Chapra, {SITE.city}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
