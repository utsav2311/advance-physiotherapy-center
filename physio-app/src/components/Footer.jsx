import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { InstagramIcon, FacebookIcon } from './Icons';
import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo">
              <img src="/images/clinic-logo.webp" alt="Advance Physiotherapy Centre" className="brand-logo-img" width="130" height="65" />
              <span className="brand-text">
                <span className="brand-name">Advance Physiotherapy Centre</span>
                <span className="brand-sub">Juran Chapra &amp; Zero Mile, {SITE.city}</span>
              </span>
            </Link>
            <p className="footer-brand-text">
              Personalized physiotherapy and rehabilitation care across 2 clinic locations in {SITE.city}. Helping you restore natural mobility and live pain-free.
            </p>
            <div className="footer-social-wrap" style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-instagram-btn"
                aria-label="Follow Advance Physiotherapy Centre on Instagram"
              >
                <InstagramIcon className="footer-social-icon" />
                <span>Instagram</span>
              </a>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-facebook-btn"
                aria-label="Follow Advance Physiotherapy Centre on Facebook"
              >
                <FacebookIcon className="footer-social-icon" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/about">About Doctor</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Our Clinics</h4>
            <div className="footer-contact">
              <div className="footer-branch-card" style={{ marginBottom: '0.85rem' }}>
                <p style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.86rem', marginBottom: '0.2rem' }}>
                  🏥 Main Clinic · Juran Chapra
                </p>
                <p style={{ fontSize: '0.80rem', lineHeight: '1.45', marginBottom: '0.25rem' }}>
                  <a href={SITE.branches[0].mapsShareUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gray-300)' }}>
                    {SITE.branches[0].addressLine1}, {SITE.branches[0].addressLine2}
                  </a>
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary-300)' }}>
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
              </div>

              <div className="footer-branch-card" style={{ marginBottom: '0.85rem' }}>
                <p style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.86rem', marginBottom: '0.2rem' }}>
                  ✨ Branch 2 · New Zero Mile
                </p>
                <p style={{ fontSize: '0.80rem', lineHeight: '1.45', marginBottom: '0.25rem' }}>
                  <a href={SITE.branches[1].mapsShareUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gray-300)' }}>
                    {SITE.branches[1].addressLine1}, {SITE.branches[1].addressLine2}
                  </a>
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--accent-300, #38bdf8)' }}>
                  Mon – Sun: 8:00 AM – 8:00 PM (All 7 Days)
                </p>
              </div>

              <p style={{ marginTop: '0.5rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a href={`tel:${SITE.phonePrimary}`}>{SITE.phonePrimaryDisplay}</a>
                {' / '}
                <a href={`tel:${SITE.phoneSecondary}`}>{SITE.phoneSecondaryDisplay}</a>
              </p>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p style={{ fontSize: '0.78rem', color: 'var(--gray-400)' }}>Home Visits Available across Muzaffarpur</p>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Book Now</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--gray-400)', marginBottom: '1rem' }}>
              Connect on WhatsApp to book your appointment.
            </p>
            <WhatsAppButton className="btn btn-primary btn-block" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Advance Physiotherapy Centre. All Rights Reserved.</p>
          <p className="footer-maker">
            Website crafted by{' '}
            <a
              href="https://www.instagram.com/ut.savk/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-maker-link"
              title="Utsav on Instagram (@ut.savk)"
            >
              <strong>Utsav</strong> ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
