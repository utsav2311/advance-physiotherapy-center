import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useScrolled } from '../hooks/useScrollPosition';
import WhatsAppButton from './WhatsAppButton';
import MobileDrawer from './MobileDrawer';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const scrolled = useScrolled(20);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <NavLink to="/" className="brand-logo" aria-label="Advance Physiotherapy Center Home">
            <img src="/images/clinic-logo.webp" alt="Advance Physiotherapy Center Logo" className="brand-logo-img" width="120" height="60" />
            <span className="brand-text">
              <span className="brand-name">Advance Physiotherapy</span>
              <span className="brand-sub">Center • Muzaffarpur</span>
            </span>
          </NavLink>

          <nav className="nav-menu" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <WhatsAppButton className="btn btn-primary btn-header-cta" />
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} navLinks={NAV_LINKS} />
    </>
  );
}
