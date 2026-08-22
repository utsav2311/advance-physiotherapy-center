import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { PhoneIcon, ClockIcon, LocationIcon, WhatsAppIcon } from '../components/Icons';
import { getRelatedServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { SITE } from '../data/site';

export default function SportsRehabService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('sports-rehabilitation', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to enquire about sports injury rehabilitation at Advance Physiotherapy Centre. Please let me know the available appointment time.`;

  // Exactly 6 Focused Clinical & Local FAQs
  const sportsFaqs = [
    {
      q: 'What is sports rehabilitation?',
      a: 'Sports rehabilitation is a structured process designed to help restore movement, strength, functional capacity and athletic confidence following an injury or period of reduced activity.',
    },
    {
      q: 'Can physiotherapy help with sports injuries?',
      a: 'Physiotherapy may help with many sports-related injuries by addressing joint movement, muscle strength, neuromuscular control, and guiding a progressive return to training depending on individual assessment.',
    },
    {
      q: 'How long does sports rehabilitation take?',
      a: 'Recovery time varies depending on the type and severity of injury, tissue healing stages, individual goals, and response to progressive rehabilitation. There is no single timeline for everyone.',
    },
    {
      q: 'Can I return to the gym after an injury?',
      a: 'The appropriate timing and exercise selection depends on your injury stage and functional readiness. A physiotherapist can help design modified loading strategies and progressive gym exercises.',
    },
    {
      q: 'Should I continue playing if I have pain?',
      a: 'It depends on the nature and severity of symptoms. Pushing through acute or worsening pain can increase the risk of worsening tissue damage. Professional assessment helps determine safe training boundaries.',
    },
    {
      q: 'Can I book sports rehabilitation in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. You can contact the clinic through WhatsApp or call to schedule an assessment.',
    },
  ];

  return (
    <article className="spine-service-page sports-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Sports Injury & Rehabilitation Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Personalized sports injury physiotherapy and rehabilitation in Muzaffarpur. Get assessment, exercise-based rehabilitation and return-to-activity guidance at Advance Physiotherapy Centre."
        path="/services/sports-rehabilitation"
        image="/images/sports-rehabilitation-muzaffarpur.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Sports Injury & Rehabilitation Physiotherapy in Muzaffarpur',
          description:
            'Personalized sports injury physiotherapy and rehabilitation in Muzaffarpur. Get assessment, exercise-based rehabilitation and return-to-activity guidance at Advance Physiotherapy Centre.',
          url: `${SITE.url}/services/sports-rehabilitation`,
          provider: {
            '@type': 'Physiotherapy',
            name: SITE.name,
            url: SITE.url,
            telephone: SITE.phonePrimary,
            address: {
              '@type': 'PostalAddress',
              streetAddress: SITE.addressLine1,
              addressLocality: SITE.city,
              addressRegion: 'Bihar',
              postalCode: '842001',
              addressCountry: 'IN',
            },
          },
        }}
      />

      {/* Schema.org Breadcrumb */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Sports Rehabilitation',
              item: `${SITE.url}/services/sports-rehabilitation`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: sportsFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        }}
      />

      {/* 2. BREADCRUMBS */}
      <Breadcrumb
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Sports Rehabilitation' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">SPORTS REHABILITATION · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Sports Injury &amp; Rehabilitation Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized rehabilitation for sports injuries, movement limitations, strength deficits and a safe
                return to activity.
              </p>

              <div className="spine-hero-cta-group">
                <WhatsAppButton className="btn btn-primary btn-lg spine-primary-btn" message={bookingMessage}>
                  Book Appointment
                </WhatsAppButton>
                <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg spine-call-btn">
                  <PhoneIcon />
                  <span>Call Clinic • {SITE.phonePrimaryDisplay}</span>
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="spine-hero-trust-bar">
                <div className="spine-trust-pill">
                  <span className="spine-trust-star">★★★★★</span>
                  <span className="spine-trust-text">5.0 Google Rating</span>
                </div>
                <div className="spine-trust-pill">
                  <span className="spine-trust-check">✓</span>
                  <span className="spine-trust-text">1-on-1 Athletic Assessment</span>
                </div>
                <div className="spine-trust-pill">
                  <span className="spine-trust-dot">•</span>
                  <span className="spine-trust-text">Juran Chapra, Muzaffarpur</span>
                </div>
              </div>
            </div>

            <div className="spine-hero-visual">
              <div className="spine-hero-frame">
                <img
                  src="/images/sports-rehabilitation-muzaffarpur.webp"
                  alt="Dr. Shahrukh Firoz providing sports physiotherapy assessment and taping in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Sports Injury &amp; Return-to-Play Care</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Guidance by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — WHAT IS SPORTS REHABILITATION? */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">What Is Sports Rehabilitation?</h2>
              <div className="spine-prose">
                <p>
                  Sports rehabilitation is a structured process designed to help athletes, gym-goers, and active
                  individuals recover movement, strength, confidence, and physical function after an injury or period of
                  reduced activity.
                </p>
                <p>
                  Rehabilitation is tailored to the individual&apos;s specific injury, physical demands, sports goals, and
                  baseline fitness level.
                </p>
                <p>
                  It involves progressive mobility work, targeted strengthening, balance, neuromuscular coordination,
                  and structured return-to-activity pacing.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Assessment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* REHABILITATION VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/sports-rehabilitation-exercise.webp"
                  alt="Modern sports physiotherapy gym exercise station for functional rehabilitation"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Functional Sports Rehabilitation</h4>
                <p className="spine-anatomy-part-desc">
                  Rebuilding dynamic joint stability, kinetic chain strength, and sport-specific movement patterns.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Mobility</span>
                  <span className="spine-doc-point">Strengthening</span>
                  <span className="spine-doc-point">Neuromuscular Control</span>
                  <span className="spine-doc-point">Sport Pacing</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Rehabilitation programmes are customized to your specific sport.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON SPORTS INJURIES WE MAY HELP WITH */}
      <section className="section spine-problems-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Injury Care</span>
            <h2 className="section-title">Common Sports Injuries We May Help With</h2>
            <p className="section-subtitle">
              Structured rehabilitation for acute sports injuries, recurring sprains, and chronic overuse conditions.
            </p>
          </div>

          <div className="spine-cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Muscle Strains</h3>
              <p className="spine-card-desc">
                Overstretching or micro-tearing in hamstring, quadriceps, or calf muscles that affect sprint speed,
                acceleration, and kicking mechanics.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Ligament Injuries</h3>
              <p className="spine-card-desc">
                Knee (ACL/MCL) or ankle ligament sprains that require structured progressive loading and stability
                training depending on severity.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Ankle Sprains</h3>
              <p className="spine-card-desc">
                Inversion sprains affecting ankle stability, balance, push-off power, and directional cutting
                confidence.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Knee Injuries</h3>
              <p className="spine-card-desc">
                Patellofemoral pain, runner&apos;s knee, and meniscus-related symptoms that require quad and hip
                strengthening.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">05</div>
              <h3 className="spine-card-title">Shoulder Injuries</h3>
              <p className="spine-card-desc">
                Rotator cuff strains and throwing/overhead impingement common in cricket bowling, badminton, and gym
                pressing movements.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">06</div>
              <h3 className="spine-card-title">Overuse Injuries</h3>
              <p className="spine-card-desc">
                Tendinopathies, shin splints, and repetitive strain problems caused by rapid increases in training
                volume or running mileage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — REHABILITATION FOR DIFFERENT ACTIVITIES */}
      <section className="section spine-everyday-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Activity Demands</span>
            <h2 className="section-title">Rehabilitation for Different Activities</h2>
            <p className="section-subtitle">
              Rehabilitation can be adapted to match the movement and physical demands of your preferred sport.
            </p>
          </div>

          <div className="spine-symptoms-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { icon: '🏃', title: 'Running & Jogging', desc: 'Gait pacing, cadence management, and single-leg stability.' },
              { icon: '🏏', title: 'Cricket', desc: 'Bowling shoulder control, batting agility, and throwing drills.' },
              { icon: '⚽', title: 'Football', desc: 'Deceleration mechanics, change-of-direction cutting, and kicking power.' },
              { icon: '🏋️', title: 'Gym & Weight Training', desc: 'Form correction, progressive loading, and joint offloading.' },
              { icon: '🏸', title: 'Badminton & Racket Sports', desc: 'Overhead smash mobility, lunging balance, and wrist control.' },
              { icon: '🚴', title: 'Cycling & Fitness', desc: 'Pedaling biomechanics, hip-flexor release, and endurance building.' },
            ].map((item) => (
              <div key={item.title} className="spine-symptom-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <span className="spine-symptom-text">
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW SPORTS REHABILITATION WORKS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">5-Step Pathway</span>
            <h2 className="section-title">How Sports Rehabilitation Works</h2>
            <p className="section-subtitle">
              A structured progression from early symptom management to full sport-specific readiness.
            </p>
          </div>

          {/* 5-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assess</div>
                <div className="spine-pipe-desc">Understand the injury, symptoms, movement, and physical demands.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Restore Movement</div>
                <div className="spine-pipe-desc">Work on appropriate joint mobility and movement limitations.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Build Strength</div>
                <div className="spine-pipe-desc">Progressively improve muscular strength and tissue capacity.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Retrain Movement</div>
                <div className="spine-pipe-desc">Develop balance, agility, coordination, and functional control.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">05</div>
                <div className="spine-pipe-name">Return to Activity</div>
                <div className="spine-pipe-desc">Gradually return to training and sport based on individual readiness.</div>
              </div>
            </div>
          </div>

          {/* FUNCTIONAL REHABILITATION FEATURE BOX */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/return-to-sport-rehabilitation.webp"
                alt="Sports physiotherapy rehabilitation equipment and functional exercise zone"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Progressive Loading</span>
              <h3 className="spine-rehab-feature-title">Structured Return-to-Play Criteria</h3>
              <p>
                Returning to sport is not just waiting for pain to vanish. At Advance Physiotherapy Centre, we evaluate
                objective strength symmetries, balance control, and sport-specific movement tolerance so you can return
                with confidence.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Objective limb symmetry evaluation before high-velocity training</li>
                <li>Sport-specific drills (cutting, deceleration, overhead throwing)</li>
                <li>Personalized warm-up, mobility, and recovery strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUILDING STRENGTH, CONTROL & CONFIDENCE */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Core Pillars</span>
            <h2 className="section-title">Building Strength, Control &amp; Confidence</h2>
            <p className="section-subtitle">
              Four fundamental pillars that form every comprehensive sports rehabilitation plan.
            </p>
          </div>

          <div className="spine-modalities-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Targeted Strength</h3>
              <p>Progressive strengthening tailored to surrounding stabilizers and primary moving muscles.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">⚖️</div>
              <h3>Balance &amp; Proprioception</h3>
              <p>Improving joint position sense and dynamic balance to reduce recurrence risk during fast play.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Dynamic Mobility</h3>
              <p>Restoring functional range of motion and tissue flexibility required for sport movements.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏃‍♂️</div>
              <h3>Functional Training</h3>
              <p>Practising movements that directly mirror your everyday sports demands and athletic goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — RETURNING TO SPORT OR ACTIVITY (PROGRESSION ROADMAP) */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Return to Play</span>
            <h2 className="section-title">Returning to Sport or Exercise</h2>
            <div className="spine-what-body">
              <p>
                Returning to sport is not simply about waiting for pain to disappear. Rehabilitation focuses on
                restoring movement, strength, control, confidence and the ability to tolerate the real-world demands of
                your activity.
              </p>
            </div>

            {/* Visual Roadmap Progression */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                margin: '1.5rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--primary-800)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Recovery</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Strength</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Control</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Sport-Specific Drills</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#dcfce7', color: '#166534', borderRadius: '6px' }}>
                Return to Activity
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>
              Progress is determined by functional readiness, objective movement tests, and tissue recovery stages.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">A clear, athlete-friendly 3-step walkthrough of your initial appointment.</p>
          </div>

          <div className="spine-first-visit-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Your injury history, symptoms, sport demands, training schedule, and return-to-play goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Movement quality, joint range, strength symmetry, balance, and relevant athletic factors are evaluated.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>A personalized, milestone-driven rehabilitation programme is discussed and initiated.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Assessment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Dedicated sports rehabilitation and active recovery care in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Rehabilitation</h3>
              <p>Programmes adapted to your specific sport, symptoms, and functional goals.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Progressive Loading</h3>
              <p>Care advances systematically as movement, strength, and confidence improve.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Active Movement Focus</h3>
              <p>Emphasis on exercise-based rehabilitation and functional movement retraining.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">4</div>
              <h3>Convenient Location</h3>
              <p>Juran Chapra, Muzaffarpur.</p>
            </div>
          </div>

          {/* COMPACT DOCTOR PROFILE */}
          <div className="spine-doctor-card">
            <div className="spine-doctor-photo">
              <img
                src="/images/dr-shahrukh-portrait.webp"
                alt="Dr. Sayed Shahrukh Firoz Lead Physiotherapist at Advance Physiotherapy Centre Muzaffarpur"
                width="400"
                height="480"
                loading="lazy"
              />
            </div>
            <div className="spine-doctor-info">
              <span className="section-label">Meet Your Physiotherapist</span>
              <h3 className="spine-doctor-name">{SITE.doctor}</h3>
              <p className="spine-doctor-creds">
                {SITE.credentials} • {SITE.regNo}
              </p>
              <p className="spine-doctor-bio">
                {SITE.doctor} has extensive practical experience in sports injury management, athletic event coverage,
                and advanced sports kinesio taping (IGIMS Certified). He guides recreational players and athletes
                through structured, evidence-informed rehabilitation programmes.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Sports Injury Assessment</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Certified Sports Taping</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Return-to-Play Guidance</span>
                </div>
              </div>

              <div className="spine-doctor-action">
                <Link to="/about" className="btn btn-secondary">
                  View Qualifications &amp; Bio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL SAFETY NOTICE */}
      <section className="section spine-safety-section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="spine-medical-alert-box" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="spine-alert-badge">
              <span className="spine-alert-icon">⚠️</span>
              <span>Important Sports Medical Notice</span>
            </div>
            <h3 className="spine-alert-heading">When Should a Sports Injury Be Promptly Assessed?</h3>
            <p>
              Professional medical assessment may be needed when: <strong>pain is severe</strong>,{' '}
              <strong>there is rapid, significant swelling</strong>, <strong>you cannot bear weight normally on the limb</strong>,{' '}
              <strong>movement is severely blocked</strong>, <strong>there is an obvious bone or joint deformity</strong>,{' '}
              <strong>symptoms follow high-velocity trauma</strong>, or <strong>numbness or weakness develops</strong>.
            </p>
            <p className="spine-alert-footnote">
              Some sports injuries require clinical medical assessment or imaging before active physical rehabilitation
              begins. This website provides general information and is not a formal diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ (6 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how sports injury physiotherapy supports recovery.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {sportsFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`spine-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="spine-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="spine-faq-toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="spine-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Ready to Get Back to Activity?</h2>
            <p className="spine-final-sub">
              If an injury is affecting your movement, exercise or sport, speak with our physiotherapy team about an
              appropriate assessment.
            </p>

            <div className="spine-final-actions">
              <WhatsAppButton className="btn btn-primary btn-lg spine-final-wa-btn" message={bookingMessage}>
                <WhatsAppIcon />
                <span>Book Appointment</span>
              </WhatsAppButton>
              <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg spine-final-call-btn">
                <PhoneIcon />
                <span>Call Clinic • {SITE.phonePrimaryDisplay}</span>
              </a>
            </div>

            <p className="spine-final-location">
              Advance Physiotherapy Centre • Juran Chapra, Muzaffarpur, Bihar
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SPECIALIZED SERVICES */}
      <section className="section" style={{ background: '#f8fafc' }}>
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
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-secondary">
              View All 10 Specialized Services →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
