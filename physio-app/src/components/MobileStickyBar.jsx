import WhatsAppButton from './WhatsAppButton';
import { SITE } from '../data/site';
import { PhoneIcon } from './Icons';

export default function MobileStickyBar() {
  return (
    <aside className="mobile-sticky-bar" aria-label="Quick Contact & Booking">
      <div className="mobile-sticky-inner">
        <a
          href={`tel:${SITE.phonePrimary}`}
          className="btn btn-secondary mobile-sticky-call-btn"
          aria-label={`Call ${SITE.phonePrimaryDisplay}`}
        >
          <PhoneIcon />
          <span>Call</span>
        </a>
        <WhatsAppButton className="btn btn-primary mobile-sticky-wa-btn" showIcon={true}>
          Book Appointment
        </WhatsAppButton>
      </div>
    </aside>
  );
}
