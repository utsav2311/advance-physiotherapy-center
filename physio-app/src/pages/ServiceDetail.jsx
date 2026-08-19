import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { WarnIcon, CheckIcon } from '../components/Icons';
import { getServiceBySlug, getRelatedServices } from '../data/services';
import { SITE } from '../data/site';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = getRelatedServices(slug, 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment for ${service.title}.`;

  return (
    <>
      <Breadcrumb
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.shortTitle },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <div>
              <span className="section-label">{service.label}</span>
              <h1 className="section-title">{service.title}</h1>
              <p className="detail-lead">{service.lead}</p>

              <div className="detail-block">
                <h3>{service.slug === 'pediatric-icu-care' ? 'Areas of Care' : 'Common Symptoms We Treat'}</h3>
                <ul className="detail-checklist">
                  {service.symptoms.map((symptom) => (
                    <li key={symptom}>
                      <span className="detail-icon icon-warn"><WarnIcon /></span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-block">
                <h3>Our Clinical Treatment Approach</h3>
                <ul className="detail-checklist">
                  {service.treatments.map((treatment) => (
                    <li key={treatment}>
                      <span className="detail-icon icon-check"><CheckIcon /></span>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Reveal className="detail-cta-card">
                <h3>Ready to Start Your Recovery?</h3>
                <p>
                  Schedule a 1-on-1 consultation with {SITE.doctor}, in-clinic or as a home visit
                  in {SITE.city}.
                </p>
                <div className="detail-cta-actions">
                  <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
                    Book on WhatsApp
                  </WhatsAppButton>
                  <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg">
                    Call {SITE.phonePrimaryDisplay}
                  </a>
                </div>
              </Reveal>
            </div>

            <aside className="detail-sidebar">
              <Reveal className="sidebar-card" index={1}>
                <div className="sidebar-image">
                  <img src={service.image} alt={service.shortTitle} width="600" height="400" loading="eager" />
                </div>
                <div className="sidebar-body">
                  <h4>Clinic Highlights</h4>
                  <ul className="sidebar-facts">
                    <li><strong>Doctor</strong>{SITE.doctor} ({SITE.credentials})</li>
                    {service.duration && <li><strong>Duration</strong>{service.duration}</li>}
                    <li><strong>Care Mode</strong>{service.careMode || '1-on-1 supervised therapy or home visit'}</li>
                    <li><strong>Location</strong>Near Apollo Dental Hospital, Juran Chapra</li>
                  </ul>
                  <WhatsAppButton className="btn btn-primary btn-block" message={bookingMessage}>
                    Book Appointment
                  </WhatsAppButton>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Explore More</span>
            <h2 className="section-title">Other Specialized Services</h2>
          </div>
          <div className="services-grid">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-secondary">View All Services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
