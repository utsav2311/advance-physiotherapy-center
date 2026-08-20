import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { useClinicStatus } from '../hooks/useClinicStatus';
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon, InstagramIcon, FacebookIcon } from '../components/Icons';
import { SITE } from '../data/site';
import { contactFaqs } from '../data/faqs';

const visitTips = [
  {
    title: 'Finding Us',
    text: `The clinic is inside Zila Parishad Market, right next to Apollo Dental Hospital on Juran Chapra Road — look for the Advance Physiotherapy Centre signboard. Ground-level parking is available near the market entrance.`,
  },
  {
    title: 'What to Bring',
    text: 'Carry any previous prescriptions, X-rays, MRI/CT scans, or hospital discharge summaries. Wear or bring comfortable, loose-fitting clothing that allows easy movement of the joint or area being treated.',
  },
  {
    title: 'Requesting a Home Visit',
    text: 'Message us on WhatsApp with the patient\'s condition, address, and preferred time. Dr. Shahrukh will confirm availability — home visits are especially arranged for post-surgical, elderly, or bedridden patients.',
  },
];

export default function Contact() {
  const status = useClinicStatus();

  return (
    <>
      <Seo
        title="Contact & Location"
        description={`Visit Advance Physiotherapy Centre at ${SITE.addressLine1}, ${SITE.addressLine2}. Call ${SITE.phonePrimaryDisplay} or book on WhatsApp. Home visits available.`}
        path="/contact"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <PageHero
        label="Get In Touch"
        title="Visit Advance Physiotherapy Centre"
        subtitle={`Located in the medical centre of Juran Chapra, ${SITE.city}. Direct appointments and easy directions.`}
        bgImage="/images/bg-spine-biomech.webp"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <span className="section-label">Clinic Details</span>
              <h2 className="section-title">Connect With Us</h2>
              <p className="section-subtitle">
                Book your appointment with {SITE.doctor} or visit during clinic hours.
              </p>

              <div className="home-visit-badge" style={{ margin: '1rem 0' }}>
                <span className="status-dot" style={{ background: 'var(--success)' }} />
                <span>{status}</span>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon"><LocationIcon /></div>
                  <div>
                    <h5>Address</h5>
                    <p>{SITE.addressLine1}, {SITE.addressLine2}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><PhoneIcon /></div>
                  <div>
                    <h5>Phone</h5>
                    <p>
                      <a href={`tel:${SITE.phonePrimary}`}>{SITE.phonePrimaryDisplay}</a>
                      {' / '}
                      <a href={`tel:${SITE.phoneSecondary}`}>{SITE.phoneSecondaryDisplay}</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><EmailIcon /></div>
                  <div>
                    <h5>Email</h5>
                    <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><InstagramIcon /></div>
                  <div>
                    <h5>Instagram</h5>
                    <p>
                      <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
                        {SITE.instagramHandle}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><FacebookIcon /></div>
                  <div>
                    <h5>Facebook</h5>
                    <p>
                      <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">
                        {SITE.facebookHandle}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><ClockIcon /></div>
                  <div>
                    <h5>Hours</h5>
                    <p><strong>{SITE.hours}</strong><br />{SITE.hoursSunday} • Home visits by request</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <WhatsAppButton className="btn btn-primary btn-lg">Book on WhatsApp</WhatsAppButton>
                <a href={SITE.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal className="contact-map" index={1}>
              <iframe
                title="Clinic Location"
                src={SITE.mapsEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISIT PLANNING TIPS */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Planning Your Visit</span>
            <h2 className="section-title">Everything You Need to Know Before You Arrive</h2>
            <p className="section-subtitle">
              A few practical details to make your first visit — or your home visit request — go smoothly.
            </p>
          </div>
          <div className="visit-tips-grid">
            {visitTips.map((tip, i) => (
              <Reveal key={tip.title} index={i} delayStep={0.1} className="visit-tip-card">
                <h5>{tip.title}</h5>
                <p>{tip.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={contactFaqs}
        title="Location, Timings & Booking FAQs"
        subtitle="Common questions about finding the clinic, appointment booking, payments, and home visits."
      />
    </>
  );
}
