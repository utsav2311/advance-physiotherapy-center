import { useState } from 'react';
import FaqItem from './FaqItem';
import WhatsAppButton from './WhatsAppButton';
import { faqs as defaultFaqs } from '../data/faqs';
import { SITE } from '../data/site';

/**
 * Universal FAQ Section component.
 * Displays all clinic FAQs with interactive accordion expansion,
 * structured question indexing, and immediate WhatsApp/Call assistance.
 */
export default function FaqSection({
  items = defaultFaqs,
  title = 'Frequently Asked Questions',
  subtitle = `Everything you need to know about physiotherapy consultations, treatment plans, home visits, and clinic timings with ${SITE.doctor}.`,
  label = 'Patient Inquiries',
  className = '',
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((curr) => (curr === idx ? -1 : idx));
  };

  return (
    <section className={`section faq-section-wrapper ${className}`} id="faqs">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="faq-grid-layout">
          <div className="faq-accordion-list">
            {items.map((item, idx) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => toggleFaq(idx)}
                index={idx}
              />
            ))}
          </div>

          <div className="faq-help-card">
            <div className="faq-help-badge">Still Have Questions?</div>
            <h3>We're Here to Help</h3>
            <p>
              Have a specific condition, recent surgery, or need a home visit in {SITE.city}?
              Message Dr. Shahrukh Firoz directly for quick clinical guidance.
            </p>
            <div className="faq-help-actions">
              <WhatsAppButton className="btn btn-primary btn-block" message="Hello Dr. Shahrukh, I have a question about physiotherapy treatment at Advance Physiotherapy Centre." />
              <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-block">
                Call {SITE.phonePrimaryDisplay}
              </a>
            </div>
            <div className="faq-help-timing">
              <span>🕒 Mon–Sat: 9:00 AM – 6:00 PM</span>
              <span>📍 Juran Chapra, {SITE.city}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
