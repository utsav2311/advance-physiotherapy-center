import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo">
              <img src="/images/clinic-logo.webp" alt="Advance Physiotherapy Center" className="brand-logo-img" width="130" height="65" />
              <span className="brand-text">
                <span className="brand-name">Advance Physiotherapy Center</span>
                <span className="brand-sub">Juran Chapra, {SITE.city}</span>
              </span>
            </Link>
            <p className="footer-brand-text">
              Personalized physiotherapy and rehabilitation care in {SITE.city}. Helping you restore natural mobility and live pain-free.
            </p>
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
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact">
              <p>{SITE.addressLine1}, {SITE.addressLine2}</p>
              <p>
                <a href={`tel:${SITE.phonePrimary}`}>{SITE.phonePrimaryDisplay}</a>
                {' / '}
                <a href={`tel:${SITE.phoneSecondary}`}>{SITE.phoneSecondaryDisplay}</a>
              </p>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p>{SITE.hours} • Home Visit Available</p>
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
          <p>&copy; {new Date().getFullYear()} Advance Physiotherapy Center. All Rights Reserved.</p>
          <p className="footer-maker">Website crafted by <strong>Utsav</strong></p>
        </div>
      </div>
    </footer>
  );
}
