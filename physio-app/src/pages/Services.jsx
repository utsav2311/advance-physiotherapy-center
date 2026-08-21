import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { services } from '../data/services';
import { servicesFaqs } from '../data/faqs';
import { SITE } from '../data/site';

export default function Services() {
  return (
    <>
      <Seo
        title="Physiotherapy Services"
        description={`Explore all physiotherapy services at Advance Physiotherapy Centre, Muzaffarpur — spine, cervical, knee, shoulder, sports, neuro, and more, supervised by ${SITE.doctor}.`}
        path="/services"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <PageHero
        label="Evidence-Based Care"
        title="Our Physiotherapy Services"
        subtitle={`Comprehensive musculoskeletal and neuromuscular rehabilitation supervised by ${SITE.doctor}.`}
        bgImage="/images/bg-hero-services.webp"
      />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg">
              Book Appointment for Your Condition
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FaqSection
        items={servicesFaqs}
        title="Physiotherapy & Treatment FAQs"
        subtitle="Frequently asked questions about our specialized therapies, rehabilitation protocols, and recovery timelines."
      />
    </>
  );
}
