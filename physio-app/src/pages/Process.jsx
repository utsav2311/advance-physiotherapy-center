import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ProcessStep from '../components/ProcessStep';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import Seo from '../components/Seo';
import { processSteps } from '../data/process';
import { SITE } from '../data/site';

export default function Process() {
  return (
    <>
      <Seo
        title="Our Treatment Process"
        description={`A systematic, evidence-based 4-step recovery pathway used by ${SITE.doctor} at Advance Physiotherapy Center, Muzaffarpur — from assessment to complete functional independence.`}
        path="/process"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Our Process' }]} />

      <PageHero
        label="Clinical Approach"
        title="Our 4-Step Recovery Pathway"
        subtitle="A systematic, evidence-based approach to help you transition from pain to complete functional independence."
        bgImage="/images/bg-spine-biomech.webp"
      />

      <section className="section">
        <div className="container">
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>

          <Reveal className="detail-cta-card" style={{ marginTop: '3rem' }} index={4}>
            <h3>What to Expect at Your First Visit</h3>
            <p>
              Your first appointment usually runs 45–60 minutes to allow time for a full evaluation
              before treatment begins. Wear comfortable clothing that allows movement of the
              affected joint, and bring any prior scans or prescriptions. If travelling to the
              clinic isn't possible, {SITE.doctor} also offers home visits with the same
              evaluation-first approach.
            </p>
            <div className="detail-cta-actions">
              <WhatsAppButton className="btn btn-primary btn-lg">Start Your Recovery</WhatsAppButton>
              <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg">
                Call {SITE.phonePrimaryDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
