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

export default function CervicalNeckService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('cervical-neck-care', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment for neck/cervical pain at Advance Physiotherapy Centre. Please let me know the available time.`;

  // Exactly 5 Focused Clinical FAQs
  const cervicalFaqs = [
    {
      q: 'What is cervical pain?',
      a: 'Cervical pain generally refers to pain or discomfort around the neck region of the cervical spine. Symptoms can vary depending on the underlying cause, ranging from local muscular stiffness to joint fatigue.',
    },
    {
      q: 'Can physiotherapy help with neck pain?',
      a: 'Physiotherapy may be appropriate for many neck pain conditions. The approach depends on symptoms, assessment findings and individual goals, combining gentle mobility, strengthening, and posture guidance.',
    },
    {
      q: 'What are common symptoms of cervical problems?',
      a: 'Symptoms can include neck pain, stiffness, reduced movement, difficulty turning the head, and sometimes discomfort extending toward the shoulder or arm.',
    },
    {
      q: 'Can prolonged computer use contribute to neck discomfort?',
      a: 'Spending long periods in one position may contribute to neck discomfort or stiffness. Regular movement breaks and an appropriate workstation setup can help manage physical demands.',
    },
    {
      q: 'When should I seek medical assessment?',
      a: 'New significant weakness, numbness, coordination or walking difficulties, symptoms following a serious injury, or rapidly worsening symptoms require appropriate urgent medical assessment.',
    },
  ];

  return (
    <article className="spine-service-page cervical-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Cervical & Neck Pain Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Personalized physiotherapy for cervical and neck pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, rehabilitation and movement-focused care."
        path="/services/cervical-neck-care"
        image="/images/cervical-neck-pain-physiotherapy-hero.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Cervical & Neck Pain Physiotherapy in Muzaffarpur',
          description:
            'Personalized physiotherapy for cervical and neck pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, rehabilitation and movement-focused care.',
          url: `${SITE.url}/services/cervical-neck-care`,
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
              name: 'Cervical & Neck Care',
              item: `${SITE.url}/services/cervical-neck-care`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: cervicalFaqs.map((faq) => ({
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
          { label: 'Cervical & Neck Care' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">CERVICAL &amp; NECK CARE · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Cervical &amp; Neck Pain Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and rehabilitation care for neck pain, stiffness and cervical-related
                movement problems.
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
                  <span className="spine-trust-text">1-on-1 Clinical Assessment</span>
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
                  src="/images/cervical-neck-pain-physiotherapy-hero.webp"
                  alt="Professional physiotherapist gently assessing neck movement of an adult patient in a modern physiotherapy clinic in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Gentle Cervical Movement Assessment</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Care by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — UNDERSTANDING CERVICAL & NECK PAIN */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">Understanding Cervical &amp; Neck Pain</h2>
              <div className="spine-prose">
                <p>
                  Neck pain can involve discomfort, stiffness or restricted movement around the cervical region of the
                  spine and surrounding tissues. It may affect everyday activities such as working, driving, sleeping,
                  exercising or turning the head.
                </p>
                <p>
                  Symptoms can vary from person to person. Some people experience mainly neck stiffness or localized
                  discomfort, while others may experience symptoms extending toward the shoulder or arm.
                </p>
                <p>
                  A professional assessment helps understand the individual&apos;s symptoms, movement limitations and
                  functional needs.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Appointment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* AI IMAGE #2 — CERVICAL SPINE EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/cervical-spine-anatomy-3d-diagram.webp"
                  alt="Educational 3D anatomical visualization of the human cervical spine showing vertebrae C1 to C7 and neck structures"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Cervical Spine Anatomy (C1 – C7)</h4>
                <p className="spine-anatomy-part-desc">
                  The cervical spine consists of seven vertebrae supporting the head and protecting neural pathways.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Cervical Spine</span>
                  <span className="spine-doc-point">Neck Muscles</span>
                  <span className="spine-doc-point">Upper Back</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Illustration for educational purposes only.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON SYMPTOMS */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Recognizing Symptoms</span>
            <h2 className="section-title">Common Symptoms</h2>
            <p className="section-subtitle">
              Neck discomfort can present in various ways depending on the affected structures.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              'Neck pain',
              'Neck stiffness',
              'Reduced neck movement',
              'Difficulty turning the head',
              'Muscle tightness',
              'Upper-back discomfort',
              'Shoulder-area discomfort',
              'Symptoms that may extend toward the arm',
            ].map((symptom) => (
              <div key={symptom} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">{symptom}</span>
              </div>
            ))}
          </div>

          <p className="spine-symptom-footnote text-center" style={{ marginBottom: '3rem' }}>
            Symptoms can vary depending on the underlying condition. A professional assessment can help determine the
            most appropriate approach.
          </p>

          {/* AI IMAGE #3 — SYMPTOM VISUAL WITH LABELS */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/cervical-radicular-nerve-pathway-anatomy.webp"
                alt="Medical educational visualization of upper body showing common regions where cervical and neck symptoms occur"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Symptom Distribution</span>
              <h3 className="spine-sciatica-heading">Where Neck Symptoms May Be Felt</h3>
              <p>
                Discomfort originating in the cervical spine can sometimes radiate to surrounding upper body areas via
                shared nerve pathways and muscular connections.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Neck</span>
                <span className="spine-doc-point">📍 Upper Back</span>
                <span className="spine-doc-point">📍 Shoulder</span>
                <span className="spine-doc-point">📍 Arm &amp; Hand</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                Understanding your specific symptom pattern helps guide targeted, comfortable physical rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONDITIONS WE MAY HELP WITH */}
      <section className="section spine-problems-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Care</span>
            <h2 className="section-title">Conditions We May Help With</h2>
            <p className="section-subtitle">
              Tailored physiotherapy support for mechanical, muscular, and disc-related neck concerns.
            </p>
          </div>

          {/* 4 Concise Cards */}
          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Cervical Stiffness</h3>
              <p className="spine-card-desc">
                Reduced comfortable neck movement that can interfere with daily activities like driving or turning your
                head.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Mechanical Neck Pain</h3>
              <p className="spine-card-desc">
                Neck discomfort associated with movement, physical activity or everyday physical demands.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Disc-Related Neck Problems</h3>
              <p className="spine-card-desc">
                Some cervical disc conditions may be associated with neck or arm symptoms and require appropriate
                assessment.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Neck &amp; Shoulder Discomfort</h3>
              <p className="spine-card-desc">
                Muscle tightness and movement-related discomfort affecting the neck and upper shoulder region.
              </p>
            </div>
          </div>

          {/* OPTIONAL COMPACT CERVICAL DISC VISUAL */}
          <div className="spine-rehab-feature-box" style={{ marginTop: '2.5rem' }}>
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/cervical-disc-facet-joint-anatomy.webp"
                alt="Realistic 3D educational visualization of the cervical spine showing vertebrae, discs, and nerve structures"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Cervical Anatomy</span>
              <h3 className="spine-rehab-feature-title">Understanding Cervical Discs &amp; Joints</h3>
              <p>
                Intervertebral discs act as shock absorbers between vertebrae. Disc hydration naturally changes with age;
                therapy focuses on comfortable function, active mobility, and muscle support.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Non-invasive assessment of movement limitations</li>
                <li>Gentle mobility drills to support joint function</li>
                <li>Personalized exercises tailored to your tolerance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW PHYSIOTHERAPY HELPS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How Physiotherapy Can Help</h2>
            <p className="section-subtitle">
              Physiotherapy focuses on understanding how your symptoms affect movement and daily activities, then
              developing an approach based on your individual needs.
            </p>
          </div>

          {/* 4-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assessment</div>
                <div className="spine-pipe-desc">Understanding your symptoms, history and goals.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Movement Evaluation</div>
                <div className="spine-pipe-desc">Looking at relevant movement, mobility and strength.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Personalized Plan</div>
                <div className="spine-pipe-desc">
                  Selecting appropriate exercises, education or hands-on techniques where suitable.
                </div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Reviewing your response and adjusting the programme when needed.</div>
              </div>
            </div>
          </div>

          {/* AI IMAGE #4 — PHYSIOTHERAPY ASSESSMENT & REHABILITATION */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/cervical-rehab-exercise-guidance.webp"
                alt="Qualified physiotherapist gently assessing adult patient neck and shoulder movement in modern clean clinic in Muzaffarpur"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Supervised Rehabilitation</span>
              <h3 className="spine-rehab-feature-title">Guided Movement &amp; Deep Neck Conditioning</h3>
              <p>
                Gentle, supervised exercises help build muscular endurance in deep neck flexors and shoulder stabilizers,
                helping you return to comfortable daily activities.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Safe, progressive movement guided by a qualified physiotherapist</li>
                <li>Practical advice on desk setup and daily movement breaks</li>
                <li>Customized home exercise programme to maintain progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">A clear, patient-friendly 3-step walkthrough of your initial appointment.</p>
          </div>

          <div className="spine-first-visit-grid">
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Your symptoms, concerns, daily activities and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Relevant movement, mobility and strength may be evaluated.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>A personalized rehabilitation approach can be discussed and started.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Appointment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Focused on delivering honest, personalized physical rehabilitation in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Attention</h3>
              <p>Care based on your individual needs and goals.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Patient-Centered Approach</h3>
              <p>Focus on understanding your concerns and functional needs.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Movement &amp; Exercise Focus</h3>
              <p>Appropriate rehabilitation strategies based on assessment.</p>
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
                {SITE.doctor} provides thorough cervical and musculoskeletal assessments at Advance Physiotherapy Centre,
                designing tailored exercise and mobility programmes to help patients regain comfortable neck movement.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Personalized Assessment</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>One-to-One Attention</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Patient-Centered Care</span>
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
      <section className="section spine-safety-section" style={{ paddingBottom: '1.5rem' }}>
        <div className="container">
          <div className="spine-medical-alert-box" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="spine-alert-badge">
              <span className="spine-alert-icon">⚠️</span>
              <span>Important Medical Notice</span>
            </div>
            <h3 className="spine-alert-heading">When Urgent Medical Evaluation Is Needed</h3>
            <p>
              Neck pain accompanied by <strong>new significant weakness</strong>, <strong>numbness</strong>,{' '}
              <strong>coordination or walking difficulties</strong>, or{' '}
              <strong>symptoms following a serious injury</strong> may require urgent medical assessment.
            </p>
            <p className="spine-alert-footnote">
              This website provides general information and is not a diagnosis. If you are concerned about your
              symptoms, seek appropriate medical care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ (5 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers about cervical and neck physiotherapy care.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {cervicalFaqs.map((faq, index) => {
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

      {/* SECTION 9 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Ready to Take the Next Step?</h2>
            <p className="spine-final-sub">
              If neck pain or stiffness is affecting your daily life, speak with our physiotherapy team about an
              appropriate assessment.
            </p>

            <div className="spine-final-actions">
              <WhatsAppButton className="btn btn-primary btn-lg spine-final-wa-btn" message={bookingMessage}>Book Appointment</WhatsAppButton>
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
