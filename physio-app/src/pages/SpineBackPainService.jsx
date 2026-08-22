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

export default function SpineBackPainService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('spine-back-pain', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment for back pain at Advance Physiotherapy Centre. Please let me know the available time.`;

  // Exactly 5 Focused Clinical & Local FAQs
  const spineFaqs = [
    {
      q: 'Can physiotherapy help with back pain?',
      a: 'Physiotherapy may be appropriate for many forms of back pain. The approach depends on the individual’s symptoms, assessment findings and functional goals, combining gentle mobility, strengthening, and movement guidance.',
    },
    {
      q: 'What are common symptoms of back pain?',
      a: 'Common symptoms can include localized lower back discomfort, stiffness after sitting or sleeping, difficulty bending, and in some cases, symptoms extending toward the buttock or leg.',
    },
    {
      q: 'Can I exercise if I have back pain?',
      a: 'The appropriate type and amount of activity depends on the person’s symptoms and condition. A physiotherapist can help determine a safe, gradual exercise approach that supports comfortable recovery without aggravating your back.',
    },
    {
      q: 'Does back pain always require an MRI or X-ray?',
      a: 'Not necessarily. Clinical guidelines suggest that routine imaging is not needed for most mechanical back pain episodes unless specific red-flag signs or severe neurological symptoms are present.',
    },
    {
      q: 'Can I book back pain physiotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. Patients can contact the clinic through WhatsApp or call to arrange a consultation.',
    },
  ];

  return (
    <article className="spine-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Back Pain Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Personalized physiotherapy for back and spine pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, rehabilitation and movement-focused care."
        path="/services/spine-back-pain"
        image="/images/spine-back-pain-physiotherapy-hero.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Spine & Back Pain Physiotherapy in Muzaffarpur',
          description:
            'Personalized physiotherapy for back and spine pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, rehabilitation and movement-focused care.',
          url: `${SITE.url}/services/spine-back-pain`,
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
              name: 'Spine & Back Pain',
              item: `${SITE.url}/services/spine-back-pain`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: spineFaqs.map((faq) => ({
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
          { label: 'Spine & Back Pain' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">SPINE &amp; BACK PAIN CARE · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Spine &amp; Back Pain Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and rehabilitation care for back pain, spine-related movement problems and
                mobility difficulties.
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
                  src="/images/spine-back-pain-physiotherapy-hero.webp"
                  alt="Professional physiotherapist assessing lower back movement of an adult patient in a modern physiotherapy clinic in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Lumbar Movement &amp; Posture Assessment</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Care by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — UNDERSTANDING BACK & SPINE PAIN */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">Understanding Back &amp; Spine Pain</h2>
              <div className="spine-prose">
                <p>
                  Back pain can affect the lower or upper back and may make everyday activities such as sitting,
                  standing, walking, working, exercising or sleeping more difficult.
                </p>
                <p>
                  Low back pain can be short-term, recurrent or persistent. Some cases have a specific underlying cause,
                  while many cases are described as non-specific low back pain. A proper assessment helps understand the
                  person&apos;s symptoms, movement limitations and functional needs.
                </p>
                <p>
                  Rehabilitation guidelines from the World Health Organization (WHO) emphasize that structured physical
                  interventions and movement guidance help individuals regain mobility and return to meaningful daily
                  activities.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Appointment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* AI IMAGE #2 — SPINE ANATOMY EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/spine-anatomy-educational-diagram.webp"
                  alt="Educational 3D anatomical visualization of the human spine showing cervical, thoracic, lumbar, and sacrum regions"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Vertebral Column &amp; Lumbar Spine</h4>
                <p className="spine-anatomy-part-desc">
                  The spine consists of interconnected vertebrae designed for weight bearing, flexibility, and neural
                  protection.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Cervical</span>
                  <span className="spine-doc-point">Thoracic</span>
                  <span className="spine-doc-point">Lumbar</span>
                  <span className="spine-doc-point">Sacrum</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Illustration for educational purposes only.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON SYMPTOMS OF BACK PAIN */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Recognizing Symptoms</span>
            <h2 className="section-title">Common Symptoms of Back Pain</h2>
            <p className="section-subtitle">
              Back discomfort can present in various ways depending on movement demands and spinal structures.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Lower Back Pain', desc: 'Discomfort around the lower back that may affect movement.' },
              { title: 'Back Stiffness', desc: 'Feeling restricted when bending, standing or changing position.' },
              { title: 'Muscle Tightness', desc: 'Sensation of muscular fatigue or guarding along the spine.' },
              { title: 'Difficulty Bending or Straightening', desc: 'Stiffness when picking up objects or standing up.' },
              { title: 'Pain After Prolonged Sitting or Standing', desc: 'Aching after long desk work or travel.' },
              { title: 'Difficulty with Everyday Movement', desc: 'Discomfort during household tasks or walking.' },
              { title: 'Pain Extending Toward Buttock or Leg', desc: 'Radiating sensations traveling below the waist.' },
              { title: 'Reduced Mobility', desc: 'General limitation in spinal flexibility and movement comfort.' },
            ].map((item) => (
              <div key={item.title} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>

          <p className="spine-symptom-footnote text-center" style={{ marginBottom: '3rem' }}>
            Symptoms can vary depending on the underlying condition. A professional assessment helps determine the most
            appropriate approach.
          </p>

          {/* AI IMAGE #3 — BACK PAIN AREAS VISUAL */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/sciatica-nerve-pathway-anatomy.webp"
                alt="Medical educational visualization of human body showing common regions associated with back pain and sciatic nerve pathway"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Symptom Distribution</span>
              <h3 className="spine-sciatica-heading">Where Back Symptoms May Be Felt</h3>
              <p>
                Discomfort originating in the lumbar spine can sometimes travel into the pelvis, buttock, or down the
                leg along the sciatic nerve pathway.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Upper Back</span>
                <span className="spine-doc-point">📍 Lower Back</span>
                <span className="spine-doc-point">📍 Lumbar Region</span>
                <span className="spine-doc-point">📍 Buttock / Leg</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                Some back-related conditions can be associated with symptoms extending toward the buttock or leg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMMON BACK & SPINE PROBLEMS */}
      <section className="section spine-problems-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Care</span>
            <h2 className="section-title">Common Back &amp; Spine Problems</h2>
            <p className="section-subtitle">
              Tailored physiotherapy support for mechanical, muscular, and nerve-related lower back presentations.
            </p>
          </div>

          {/* 4 Concise Cards */}
          <div className="spine-cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Lower Back Pain</h3>
              <p className="spine-card-desc">
                Pain or stiffness around the lower back that may interfere with normal daily activities, walking, or
                sitting.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Mechanical Back Pain</h3>
              <p className="spine-card-desc">
                Back discomfort associated with movement, physical activity, lifting, or everyday physical demands.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Sciatica / Leg Symptoms</h3>
              <p className="spine-card-desc">
                Some back-related conditions may cause symptoms that extend toward the buttock or leg and require
                appropriate assessment.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Disc-Related Problems</h3>
              <p className="spine-card-desc">
                Some disc-related conditions may be associated with back pain or symptoms extending toward the leg,
                benefiting from gentle movement pacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW PHYSIOTHERAPY HELPS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How Physiotherapy Can Help With Back Pain</h2>
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
                <div className="spine-pipe-desc">Understanding symptoms, history, activities and goals.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Movement Evaluation</div>
                <div className="spine-pipe-desc">Looking at relevant movement, mobility, strength and function.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Personalized Plan</div>
                <div className="spine-pipe-desc">Selecting appropriate rehabilitation strategies based on assessment.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Reviewing your response and adjusting the programme when appropriate.</div>
              </div>
            </div>
          </div>

          {/* AI IMAGE #4 — PHYSIOTHERAPY ASSESSMENT & REHABILITATION */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/spine-rehab-exercise-therapy.webp"
                alt="Patient performing guided core stabilization and lumbar mobility rehabilitation exercise with physiotherapist"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Supervised Rehabilitation</span>
              <h3 className="spine-rehab-feature-title">Active Movement &amp; Core Conditioning</h3>
              <p>
                WHO guidelines support person-centred care, education and appropriate physical interventions such as
                structured exercise as part of care for primary low back pain.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Safe, progressive exercises tailored to your comfort level</li>
                <li>Core and spinal endurance training to support daily tasks</li>
                <li>Practical movement strategies for work, sitting, and lifting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT MAY BE INCLUDED IN YOUR PLAN */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Treatment Modalities</span>
            <h2 className="section-title">What May Be Included in Your Physiotherapy Plan?</h2>
            <p className="section-subtitle">
              Rehabilitation plans are customized based on clinical assessment, symptom tolerance, and individual goals.
            </p>
          </div>

          {/* 4 Concise Cards */}
          <div className="spine-modalities-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Exercise Therapy</h3>
              <p>Appropriate exercises may help improve strength, mobility, endurance and function.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Mobility &amp; Flexibility</h3>
              <p>Movement exercises may be used to address stiffness and improve comfortable movement.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">👐</div>
              <h3>Manual Therapy</h3>
              <p>Where appropriate, hands-on techniques may be incorporated as part of a broader rehabilitation plan.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Education &amp; Home Programme</h3>
              <p>Patients may receive guidance about activity, movement and appropriate exercises to continue at home.</p>
            </div>
          </div>

          <div className="spine-guidance-disclaimer text-center" style={{ marginTop: '2rem' }}>
            <p>
              WHO guidance emphasizes individualized, person-centred care rather than relying on a single intervention
              for chronic primary low back pain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">A clear, patient-friendly 3-step walkthrough of your initial appointment.</p>
          </div>

          <div className="spine-first-visit-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Your symptoms, concerns, activities and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Relevant movement, mobility, strength and function may be evaluated.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>An individualized rehabilitation approach can be discussed and initiated.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Appointment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section">
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
              <p>Care based on individual symptoms and goals.</p>
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
                {SITE.doctor} provides thorough spinal assessments and movement evaluations at Advance Physiotherapy
                Centre, creating customized exercise and mobility programmes to help patients regain comfort in their
                daily lives.
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
      <section className="section spine-safety-section" style={{ background: '#f8fafc', paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="spine-medical-alert-box" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="spine-alert-badge">
              <span className="spine-alert-icon">⚠️</span>
              <span>Important Medical Notice</span>
            </div>
            <h3 className="spine-alert-heading">When Urgent Medical Evaluation Is Needed</h3>
            <p>
              Back pain is not always caused by a simple muscle or movement problem. Seek appropriate medical assessment
              if symptoms are severe, rapidly worsening, follow a serious injury, or are accompanied by concerning
              neurological symptoms such as: <strong>new loss of bladder or bowel control</strong>,{' '}
              <strong>numbness around the groin/inner-thigh area (saddle numbness)</strong>,{' '}
              <strong>significant new weakness</strong>, or{' '}
              <strong>symptoms following a major traumatic injury</strong>.
            </p>
            <p className="spine-alert-footnote">
              This website provides general information and is not a diagnosis. If you are concerned about your
              symptoms, seek appropriate medical care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ (5 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how physical therapy supports back and spine recovery.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {spineFaqs.map((faq, index) => {
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

      {/* SECTION 10 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Ready to Take the Next Step?</h2>
            <p className="spine-final-sub">
              If back pain or movement difficulties are affecting your daily life, speak with our physiotherapy team
              about an appropriate assessment.
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
