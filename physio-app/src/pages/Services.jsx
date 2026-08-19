import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/services';
import { SITE } from '../data/site';

export default function Services() {
  return (
    <>
      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <PageHero
        label="Evidence-Based Care"
        title="Our Physiotherapy Services"
        subtitle={`Comprehensive musculoskeletal and neuromuscular rehabilitation supervised by ${SITE.doctor}.`}
        bgImage="/images/bg-medical-mesh.webp"
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
    </>
  );
}
