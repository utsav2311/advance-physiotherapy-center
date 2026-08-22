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

export default function ElectrotherapyService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('electrotherapy', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to enquire about electrotherapy physiotherapy at Advance Physiotherapy Centre. Please let me know the available appointment time.`;

  // Exactly 6 Focused Clinical & Local FAQs
  const electroFaqs = [
    {
      q: 'What is electrotherapy in physiotherapy?',
      a: 'Electrotherapy refers to a group of physiotherapy modalities that use controlled electrical or physical energy (such as mild currents or therapeutic sound waves) through specialized clinical equipment for therapeutic purposes.',
    },
    {
      q: 'Does electrotherapy hurt?',
      a: 'Many electrotherapy modalities are designed to provide a comfortable tingling or soothing sensation. The experience varies depending on the modality, settings, and individual sensitivity, and your physiotherapist adjusts the intensity to your comfort.',
    },
    {
      q: 'Can electrotherapy permanently cure pain?',
      a: 'Electrotherapy should not be presented as a standalone guaranteed cure. It is most effective when used as one helpful component of an individualized physiotherapy programme alongside exercise and mobility training.',
    },
    {
      q: 'Is electrotherapy suitable for everyone?',
      a: 'No. Suitability depends on your medical history, condition, treatment area, and the specific modality being considered. Your physiotherapist will review precautions before selecting a modality.',
    },
    {
      q: 'Can electrotherapy be combined with exercise?',
      a: 'Yes. Depending on the condition and treatment goals, electrotherapy is frequently used alongside exercise, movement training, and other active rehabilitation strategies for optimal recovery.',
    },
    {
      q: 'Can I book electrotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. You can contact the clinic through WhatsApp or call to enquire about an assessment.',
    },
  ];

  return (
    <article className="spine-service-page electro-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Electrotherapy in Muzaffarpur | Physiotherapy Treatment | Advance Physiotherapy Centre"
        description="Explore electrotherapy as part of personalized physiotherapy care in Muzaffarpur. Learn about TENS, electrical stimulation and other modalities used according to individual needs."
        path="/services/electrotherapy"
        image="/images/electrotherapy-physiotherapy-muzaffarpur.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Electrotherapy in Muzaffarpur for Pain & Rehabilitation',
          description:
            'Explore electrotherapy as part of personalized physiotherapy care in Muzaffarpur. Learn about TENS, electrical stimulation and other modalities used according to individual needs.',
          url: `${SITE.url}/services/electrotherapy`,
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
              name: 'Electrotherapy',
              item: `${SITE.url}/services/electrotherapy`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: electroFaqs.map((faq) => ({
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
          { label: 'Electrotherapy' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">ELECTROTHERAPY · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Electrotherapy in Muzaffarpur for Pain &amp; Rehabilitation</h1>
              <p className="spine-hero-subtitle">
                Electrotherapy may be used as part of a personalized physiotherapy plan to support pain management,
                muscle activation and rehabilitation when clinically appropriate.
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
                  src="/images/electrotherapy-physiotherapy-muzaffarpur.webp"
                  alt="Professional physiotherapist setting up safe electrotherapy treatment for patient in modern clinic in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Controlled Therapeutic Modalities</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Care by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — WHAT IS ELECTROTHERAPY? */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Concept</span>
              <h2 className="section-title">What Is Electrotherapy?</h2>
              <div className="spine-prose">
                <p>
                  Electrotherapy is a broad term used for physiotherapy techniques that apply controlled electrical or
                  physical energy through specialized equipment for therapeutic purposes.
                </p>
                <p>
                  Depending on the patient&apos;s condition and treatment goals, certain modalities may be used to support
                  pain management, muscle activation or rehabilitation.
                </p>
                <p>
                  Electrotherapy is generally considered as one component of a wider physiotherapy plan rather than a
                  standalone solution.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/electrotherapy-clinic-setup-ai.webp"
                  alt="Modern electrotherapy clinic setup with digital modalities and treatment bay in a clean physiotherapy environment"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Therapeutic Modalities in Physiotherapy</h4>
                <p className="spine-anatomy-part-desc">
                  Controlled physical energy modalities used safely alongside active movement and exercise.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">TENS</span>
                  <span className="spine-doc-point">IFT (Interferential)</span>
                  <span className="spine-doc-point">Muscle Stimulation</span>
                  <span className="spine-doc-point">Ultrasound</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Equipment selection depends on individual clinical assessment.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON ELECTROTHERAPY MODALITIES */}
      <section className="section spine-problems-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Available Modalities</span>
            <h2 className="section-title">Common Electrotherapy Modalities</h2>
            <p className="section-subtitle">
              Evidence-informed therapeutic tools selected according to your specific assessment findings.
            </p>
          </div>

          <div className="spine-cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">TENS (Transcutaneous Electrical Nerve Stimulation)</h3>
              <p className="spine-card-desc">
                Uses mild electrical stimulation through surface electrodes and may be used as part of short-term
                pain-management strategies to help you move more comfortably.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Interferential Current (IFT)</h3>
              <p className="spine-card-desc">
                Uses crossing medium-frequency electrical currents delivered through surface pads and may be used in
                physiotherapy for localized symptom management and muscle relaxation.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Electrical Muscle Stimulation (EMS)</h3>
              <p className="spine-card-desc">
                Controlled electrical impulses used in selected situations to assist in activating and re-educating
                muscles during rehabilitation following injury or disuse.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Therapeutic Ultrasound</h3>
              <p className="spine-card-desc">
                Uses gentle high-frequency sound waves rather than electrical currents to deliver acoustic energy to
                deep tissues in specific musculoskeletal conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT MAY ELECTROTHERAPY HELP WITH? */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Applications</span>
            <h2 className="section-title">What May Electrotherapy Be Used For?</h2>
            <p className="section-subtitle">
              Electrotherapy is applied thoughtfully to support overall rehabilitation goals.
            </p>
          </div>

          <div className="spine-modalities-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-modality-card">
              <div className="spine-mod-icon">⚡</div>
              <h3>Pain Management</h3>
              <p>Certain modalities may be used as part of a broader approach to managing localized discomfort.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">💪</div>
              <h3>Muscle Activation</h3>
              <p>Electrical stimulation may be used in selected situations to help activate muscles during recovery.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧭</div>
              <h3>Rehabilitation Support</h3>
              <p>Electrotherapy may sometimes complement exercise and movement-based physical rehabilitation.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🩹</div>
              <h3>Recovery After Injury</h3>
              <p>Depending on the condition, certain modalities may be incorporated into early tissue recovery.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🤝</div>
              <h3>Support During Therapy</h3>
              <p>A physiotherapist may use electrotherapy alongside manual therapy and guided exercise when appropriate.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Movement Preparation</h3>
              <p>Helps reduce muscle guarding so you can perform active mobility exercises with greater ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW AN ELECTROTHERAPY SESSION WORKS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Session Workflow</span>
            <h2 className="section-title">What Happens During an Electrotherapy Session?</h2>
            <p className="section-subtitle">
              Sessions are designed to feel safe, controlled, and comfortable from start to finish.
            </p>
          </div>

          {/* 4-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assessment</div>
                <div className="spine-pipe-desc">Your therapist reviews your symptoms, condition and goals.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Select Modality</div>
                <div className="spine-pipe-desc">The appropriate modality and gentle settings are chosen.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Application</div>
                <div className="spine-pipe-desc">Electrodes are applied safely and monitored continuously.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Review</div>
                <div className="spine-pipe-desc">Your comfort and response are evaluated for future sessions.</div>
              </div>
            </div>
          </div>

          {/* CLINICAL APPLICATION FEATURE BOX */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/tens-physiotherapy-treatment.webp"
                alt="Physiotherapist monitoring therapeutic ultrasound and electrotherapy application"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Supervised Care</span>
              <h3 className="spine-rehab-feature-title">Controlled, Monitored Application</h3>
              <p>
                At Advance Physiotherapy Centre, every electrotherapy session is monitored by Dr. Shahrukh Firoz. Settings are adjusted to ensure a comfortable, safe therapeutic experience tailored to your sensitivity.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Professional evaluation of skin condition and sensation beforehand</li>
                <li>Gentle, gradual calibration of intensity to your comfort level</li>
                <li>Integrated with active movement and home exercise guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ELECTROTHERAPY + EXERCISE (COMBINATION FORMULA) */}
      <section className="section spine-everyday-section">
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Integrated Care</span>
            <h2 className="section-title">Electrotherapy Works Best as Part of a Broader Plan</h2>
            <div className="spine-what-body">
              <p>
                Depending on the condition, electrotherapy is most effective when combined with active exercise
                therapy, mobility work, strengthening, education and other physiotherapy techniques.
              </p>
            </div>

            {/* Formula Block */}
            <div
              style={{
                background: '#f1f5f9',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                margin: '1.5rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--primary-800)',
              }}
            >
              <span>Electrotherapy</span>
              <span>+</span>
              <span>Exercise Therapy</span>
              <span>+</span>
              <span>Movement</span>
              <span>+</span>
              <span>Education</span>
              <span>=</span>
              <span style={{ color: 'var(--accent-600)' }}>Individualized Rehabilitation</span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>
              The machine is a tool — the treatment plan is personalized to your movement needs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CONDITIONS WHERE IT MAY BE CONSIDERED */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Suitability</span>
            <h2 className="section-title">Conditions Where Electrotherapy May Be Considered</h2>
            <p className="section-subtitle">
              Suitability depends on your condition, physical assessment findings and individual treatment goals.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Neck Pain & Stiffness', desc: 'May assist in easing muscular guarding and tension.' },
              { title: 'Lower Back Pain', desc: 'May be used as part of a multi-modal lumbar rehabilitation plan.' },
              { title: 'Knee & Joint Discomfort', desc: 'Can help manage symptoms to facilitate gentle joint mobility.' },
              { title: 'Muscle Spasms & Tightness', desc: 'May promote localized muscle relaxation and blood flow.' },
              { title: 'Sports Injuries', desc: 'Can be incorporated into early structured sports recovery.' },
              { title: 'Post-Trauma Rehabilitation', desc: 'May assist in muscle re-education following prolonged rest.' },
            ].map((item) => (
              <div key={item.title} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — SAFETY & PRECAUTIONS */}
      <section className="section spine-safety-section">
        <div className="container">
          <div className="spine-safety-wrapper">
            <div className="spine-when-seek">
              <span className="section-label">Safety First</span>
              <h2 className="section-title">Is Electrotherapy Safe?</h2>
              <p className="spine-when-lead">
                Electrotherapy is generally applied using controlled settings by a qualified professional, but it is
                not appropriate for everyone. Inform your physiotherapist if you have:
              </p>
              <ul className="spine-when-list">
                <li>Implanted electronic devices such as cardiac pacemakers</li>
                <li>Certain heart rhythm conditions or cardiac history</li>
                <li>Pregnancy, depending on the treatment area and specific modality</li>
                <li>Reduced or altered sensation in the treatment area</li>
                <li>Broken or irritated skin where electrodes would be positioned</li>
                <li>Any condition where your physician has advised against electrical stimulation</li>
              </ul>
            </div>

            {/* SAFETY REASSURANCE CARD */}
            <div className="spine-medical-alert-box" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
              <div className="spine-alert-badge" style={{ background: '#dcfce7', color: '#166534' }}>
                <span>✓ Reassuring Safety Protocol</span>
              </div>
              <h3 className="spine-alert-heading" style={{ color: '#166534' }}>
                Professional Clinical Standards
              </h3>
              <p style={{ color: '#15803d' }}>
                Your physiotherapist will thoroughly review your medical history and examine the treatment area before
                deciding whether electrotherapy is clinically suitable for you.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: 0 }}>
                <span className="spine-doc-point">✓ Professional assessment</span>
                <span className="spine-doc-point">✓ Appropriate settings</span>
                <span className="spine-doc-point">✓ Patient monitoring</span>
                <span className="spine-doc-point">✓ Individualized care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
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
              <p>Your symptoms, medical history, concerns and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Your condition, movement and relevant physical factors are evaluated.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>Your physiotherapist decides whether electrotherapy or another approach is appropriate.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Appointment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHY CHOOSE US & DOCTOR PROFILE */}
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
              <p>Treatment decisions based on individual symptoms and goals.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Professional Assessment</h3>
              <p>Treatment begins with understanding your condition and functional needs.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Modern Approach</h3>
              <p>Appropriate rehabilitation techniques used according to individual requirements.</p>
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
                {SITE.doctor} ensures that all electrotherapy modalities at Advance Physiotherapy Centre are applied
                safely, thoughtfully, and as part of an evidence-informed physical rehabilitation plan tailored to your
                needs.
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

      {/* SECTION 11 — FAQ (6 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how electrotherapy fits into physiotherapy care.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {electroFaqs.map((faq, index) => {
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

      {/* SECTION 12 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Need Physiotherapy Guidance?</h2>
            <p className="spine-final-sub">
              If you are unsure whether electrotherapy is appropriate for your condition, speak with our physiotherapy
              team about an assessment.
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
