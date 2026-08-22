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

export default function WomensHealthService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('womens-health', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to enquire about women's health physiotherapy at Advance Physiotherapy Centre. Please let me know the available appointment time.`;

  // Exactly 6 Focused Clinical & Local FAQs
  const womensFaqs = [
    {
      q: 'What is women’s health physiotherapy?',
      a: 'Women’s health physiotherapy focuses on physical, postural and functional concerns that may occur during pregnancy, after childbirth, and across different stages of a woman’s life.',
    },
    {
      q: 'Can physiotherapy help during pregnancy?',
      a: 'Depending on the individual’s condition, physiotherapy may provide appropriate exercise, gentle movement, posture guidance, and musculoskeletal support during pregnancy.',
    },
    {
      q: 'Can physiotherapy help after childbirth?',
      a: 'Postpartum physiotherapy can support the gradual recovery of physical strength, abdominal and pelvic stability, posture, and confidence with daily activities based on your recovery stage.',
    },
    {
      q: 'What is pelvic floor physiotherapy?',
      a: 'Pelvic floor physiotherapy focuses on education, postural assessment, breathing mechanics, and individualized muscle retraining to support pelvic stability where clinically appropriate.',
    },
    {
      q: 'Is pelvic floor physiotherapy suitable for everyone?',
      a: 'No. Pelvic health symptoms can have different causes. An individual professional assessment is essential before deciding whether specific exercises or strategies are appropriate.',
    },
    {
      q: 'Can I book women’s health physiotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. You can contact the clinic through WhatsApp or call to enquire about an assessment.',
    },
  ];

  return (
    <article className="spine-service-page womens-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Women's Health Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Personalized women's health physiotherapy in Muzaffarpur for pregnancy, postpartum recovery, pelvic floor function and movement-related concerns, based on individual assessment."
        path="/services/womens-health"
        image="/images/womens-health-physiotherapy-muzaffarpur.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: "Women's Health Physiotherapy in Muzaffarpur",
          description:
            "Personalized women's health physiotherapy in Muzaffarpur for pregnancy, postpartum recovery, pelvic floor function and movement-related concerns, based on individual assessment.",
          url: `${SITE.url}/services/womens-health`,
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
              name: "Women's Health",
              item: `${SITE.url}/services/womens-health`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: womensFaqs.map((faq) => ({
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
          { label: "Women's Health" },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">WOMEN&apos;S HEALTH PHYSIOTHERAPY · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Women&apos;s Health Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy support for women&apos;s health, pregnancy-related movement concerns,
                postpartum recovery and pelvic health, based on individual assessment.
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
                  <span className="spine-trust-text">1-on-1 Private Assessment</span>
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
                  src="/images/womens-health-physiotherapy-muzaffarpur.webp"
                  alt="Supervised gentle women's health physiotherapy rehabilitation session in private clinic"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Respectful &amp; Dignified Care</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Guidance by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — WHAT IS WOMEN'S HEALTH PHYSIOTHERAPY? */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">What Is Women&apos;s Health Physiotherapy?</h2>
              <div className="spine-prose">
                <p>
                  Women&apos;s health physiotherapy focuses on physical and functional concerns that can occur during
                  different stages of a woman&apos;s life, including pregnancy, the postpartum period, and beyond.
                </p>
                <p>
                  Depending on individual needs, physiotherapy focuses on gentle movement, muscle strength, posture,
                  pelvic floor support, core rehabilitation and a comfortable return to daily activities.
                </p>
                <p>
                  Your physiotherapy programme is customized to your individual assessment, symptoms, lifestyle and
                  recovery goals.
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
                  src="/images/womens-health-physiotherapy-consultation.webp"
                  alt="Private women's health physiotherapy consultation and assessment discussion in Muzaffarpur clinic"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Comfortable Clinical Consultation</h4>
                <p className="spine-anatomy-part-desc">
                  Confidential, patient-centered discussions to understand your movement history and physical goals.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Pregnancy Support</span>
                  <span className="spine-doc-point">Postpartum Recovery</span>
                  <span className="spine-doc-point">Pelvic Floor Guidance</span>
                  <span className="spine-doc-point">Core Rehabilitation</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Rehabilitation plans are individualized with patient consent.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WOMEN'S HEALTH CONCERNS WE MAY HELP WITH */}
      <section className="section spine-problems-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Care Scope</span>
            <h2 className="section-title">Women&apos;s Health Concerns We May Help With</h2>
            <p className="section-subtitle">
              Targeted physical therapy support tailored to women&apos;s musculoskeletal and functional needs.
            </p>
          </div>

          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Pregnancy-Related Back &amp; Pelvic Discomfort</h3>
              <p className="spine-card-desc">
                Appropriate movement, posture, and gentle exercise guidance for musculoskeletal changes during
                pregnancy.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Postpartum Recovery</h3>
              <p className="spine-card-desc">
                Rehabilitation to support a gradual, safe return to strength, movement, and everyday physical
                activities after childbirth.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Pelvic Floor Rehabilitation</h3>
              <p className="spine-card-desc">
                Non-invasive education, breathing mechanics, and targeted exercise guidance where clinically
                appropriate.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Core &amp; Abdominal Rehabilitation</h3>
              <p className="spine-card-desc">
                Progressive, safe exercises to help rebuild abdominal stability and functional control after pregnancy.
              </p>
            </div>

            <div className="spine-card" style={{ gridColumn: 'span 2' }}>
              <div className="spine-card-num">05</div>
              <h3 className="spine-card-title">Posture &amp; Everyday Movement Changes</h3>
              <p className="spine-card-desc">
                Guidance on comfortable feeding postures, baby-lifting mechanics, and daily movement pacing to avoid
                undue muscle fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PHYSIOTHERAPY DURING PREGNANCY & AFTER DELIVERY */}
      <section className="section spine-symptoms-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Care Stages</span>
            <h2 className="section-title">Physiotherapy During Pregnancy &amp; After Delivery</h2>
            <p className="section-subtitle">
              Supporting physical comfort and safe movement through each milestone of motherhood.
            </p>
          </div>

          <div className="spine-cards-grid">
            <div className="spine-card" style={{ borderLeft: '4px solid var(--primary-600)' }}>
              <span className="section-label" style={{ marginBottom: '0.5rem' }}>Stage 1</span>
              <h3 className="spine-card-title">During Pregnancy</h3>
              <p className="spine-card-desc">
                Physiotherapy provides safe, gentle exercise and posture strategies to support pelvic girdle stability,
                manage lower-back fatigue, and maintain active mobility.
              </p>
            </div>

            <div className="spine-card" style={{ borderLeft: '4px solid var(--accent-600)' }}>
              <span className="section-label" style={{ marginBottom: '0.5rem' }}>Stage 2</span>
              <h3 className="spine-card-title">After Delivery</h3>
              <p className="spine-card-desc">
                Postpartum recovery focuses on rebuilding core stability, pelvic support, spinal alignment, and
                gradually returning to regular physical tasks with confidence.
              </p>
            </div>
          </div>

          {/* PRENATAL SHOWCASE */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/prenatal-physiotherapy-muzaffarpur.webp"
                alt="Gentle supervised prenatal physiotherapy mobility exercise guidance in clinic"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Gentle Guided Movement</span>
              <h3 className="spine-sciatica-heading">Safe, Supervised Prenatal Exercise</h3>
              <p>
                Controlled, low-impact movements supervised by a physiotherapist can help relieve muscular tightness,
                improve pelvic stability, and promote comfort throughout your pregnancy.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Gentle Spinal Mobility</span>
                <span className="spine-doc-point">📍 Pelvic Support Drills</span>
                <span className="spine-doc-point">📍 Safe Breathing Mechanics</span>
                <span className="spine-doc-point">📍 Postural Alignment</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                All exercises are carefully chosen based on medical clearance and individual physical comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PELVIC FLOOR PHYSIOTHERAPY (EDUCATIONAL FOCUS) */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-intro-grid">
            <div className="spine-anatomy-card">
              <div className="spine-diagram-box">
                <img
                  src="/images/pelvic-floor-physiotherapy-consultation.webp"
                  alt="Educational discussion on pelvic floor health and posture in private clinical room"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Pelvic Floor &amp; Core Education</h4>
                <p className="spine-anatomy-part-desc">
                  Clear, respectful explanations of pelvic support muscles, breathing synchronization, and functional
                  exercises.
                </p>
              </div>
            </div>

            <div className="spine-intro-text">
              <span className="section-label">Pelvic Health</span>
              <h2 className="section-title">Pelvic Floor Physiotherapy</h2>
              <div className="spine-prose">
                <p>
                  The pelvic floor is a sling of muscles supporting the pelvic organs and contributing to bladder,
                  bowel, and core stability.
                </p>
                <p>
                  Pelvic floor physiotherapy involves patient education, posture assessment, breathing coordination,
                  and individualized exercise programmes tailored to your specific needs.
                </p>
                <p>
                  Rehabilitation is structured progressively, ensuring you understand how to activate, relax, and
                  coordinate these muscles during everyday tasks.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Consult with Dr. Shahrukh
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW WOMEN'S HEALTH PHYSIOTHERAPY CAN HELP */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Core Pillars</span>
            <h2 className="section-title">How Women&apos;s Health Physiotherapy Can Help</h2>
            <p className="section-subtitle">
              Key rehabilitation components selected based on individual functional assessment findings.
            </p>
          </div>

          <div className="spine-modalities-grid">
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🚶‍♀️</div>
              <h3>Movement &amp; Mobility</h3>
              <p>Support comfortable spinal and pelvic movement during pregnancy or postpartum recovery.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">💪</div>
              <h3>Strength &amp; Core Rehabilitation</h3>
              <p>Progressive exercises to help restore abdominal strength and functional core control.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🌸</div>
              <h3>Pelvic Floor Guidance</h3>
              <p>Individualized education, muscle retraining, and breathing synchronization where appropriate.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🛋️</div>
              <h3>Posture &amp; Daily Activity</h3>
              <p>Practical advice on feeding positions, carrying mechanics, and comfortable daily movement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — YOUR PHYSIOTHERAPY PLAN IS INDIVIDUALIZED */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">5-Step Pathway</span>
            <h2 className="section-title">Your Physiotherapy Plan Is Individualized</h2>
            <p className="section-subtitle">
              A gentle, step-by-step approach adapted to your physical comfort, recovery stage, and personal goals.
            </p>
          </div>

          {/* 5-Step Animated Process */}
          <div className="spine-pipeline-wrapper">
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assess</div>
                <div className="spine-pipe-desc">Understand medical history, current stage, and movement limitations.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Set Goals</div>
                <div className="spine-pipe-desc">Identify meaningful goals like walking, lifting or core comfort.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Exercises</div>
                <div className="spine-pipe-desc">Select safe, gentle, and appropriate rehabilitation drills.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Advance strength and stability gradually as comfort improves.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">05</div>
                <div className="spine-pipe-name">Review</div>
                <div className="spine-pipe-desc">Review your progress and provide sustainable home guidance.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — GETTING BACK TO EVERYDAY ACTIVITIES */}
      <section className="section spine-everyday-section">
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Daily Independence</span>
            <h2 className="section-title">Getting Back to Everyday Activities</h2>
            <div className="spine-what-body">
              <p>
                Rehabilitation focuses on helping you gradually return to comfortable and confident everyday movement.
              </p>
            </div>

            {/* Visual Movement Sequence */}
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
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Walking</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Lifting</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Sitting</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Bending</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Caring for Baby</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#dcfce7', color: '#166534', borderRadius: '6px' }}>
                Daily Confidence
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>
              Practical physical retraining to support comfort in every routine mothering task.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHO MAY BENEFIT? */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Who It Helps</span>
            <h2 className="section-title">Who May Benefit From Women&apos;s Health Physiotherapy?</h2>
            <p className="section-subtitle">
              Compassionate physical rehabilitation tailored to women at varying life stages.
            </p>
          </div>

          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">During Pregnancy</h3>
              <p className="spine-card-desc">
                Women experiencing back discomfort, pelvic girdle stiffness, or posture changes during pregnancy.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">After Childbirth</h3>
              <p className="spine-card-desc">
                Women looking to rebuild abdominal strength, pelvic stability, and mobility after delivery.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Pelvic Health Concerns</h3>
              <p className="spine-card-desc">
                Women who may benefit from professional education, breathing drills, and pelvic floor exercise.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Everyday Movement Concerns</h3>
              <p className="spine-card-desc">
                Women experiencing musculoskeletal stiffness or joint fatigue associated with routine daily work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">
              A private, respectful 3-step walkthrough designed to ensure your comfort and trust.
            </p>
          </div>

          <div className="spine-first-visit-grid">
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Your symptoms, medical history, pregnancy/postpartum stage, concerns and physical goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Relevant movement, posture, spinal mobility, and functional factors are evaluated respectfully.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>A personalized physiotherapy and exercise guidance plan is discussed and initiated with consent.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Assessment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 11 — PRIVACY & COMFORT */}
      <section className="section spine-plan-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Trust &amp; Privacy</span>
            <h2 className="section-title">Your Comfort &amp; Privacy Matter</h2>
            <div className="spine-what-body">
              <p>
                Women&apos;s health concerns can be deeply personal. Our clinical approach is built on respect, clear
                communication, patient dignity, and full consent before every assessment.
              </p>
              <div className="spine-first-visit-grid" style={{ marginTop: '1.5rem', textAlign: 'left' }}>
                <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                  <strong>🔒 Respectful Communication</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: '0.5rem 0 0' }}>
                    Open, patient-centered discussions in a calm and confidential environment.
                  </p>
                </div>
                <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                  <strong>📋 Clear Explanations</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: '0.5rem 0 0' }}>
                    Every movement and exercise is explained thoroughly before you begin.
                  </p>
                </div>
                <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                  <strong>🤝 Consent &amp; Dignity</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', margin: '0.5rem 0 0' }}>
                    Care is provided strictly within professional boundaries and your personal comfort level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Professional, personalized women&apos;s physical rehabilitation in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Care</h3>
              <p>Rehabilitation plans based on your individual symptoms and functional needs.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Patient-Centered Approach</h3>
              <p>Your comfort, recovery pace, and personal goals are respected at all times.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Movement-Focused Care</h3>
              <p>Gentle exercises and functional strategies selected according to clinical assessment.</p>
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
                {SITE.doctor} provides clinical movement assessments and progressive rehabilitation at Advance
                Physiotherapy Centre, guiding women through evidence-informed prenatal mobility, postpartum recovery,
                and musculoskeletal conditioning with dignity and professional care.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>1-on-1 Clinical Assessment</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Gentle &amp; Modest Guidance</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Evidence-Informed Rehabilitation</span>
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
              <span>When to Seek Medical Advice</span>
            </div>
            <h3 className="spine-alert-heading">Important Clinical &amp; Obstetric Notice</h3>
            <p>
              Certain symptoms require immediate medical or obstetric assessment rather than routine physiotherapy.
              Seek prompt medical care if experiencing: <strong>severe or rapidly worsening abdominal or pelvic pain</strong>,{' '}
              <strong>heavy vaginal bleeding during pregnancy or postpartum</strong>, <strong>fever or signs of infection</strong>,{' '}
              <strong>sudden dizziness, shortness of breath, or chest pain</strong>, or{' '}
              <strong>any acute pregnancy-related emergency</strong>.
            </p>
            <p className="spine-alert-footnote">
              Physiotherapy complements, but does not replace, regular obstetric or medical care. This website provides
              general information and is not a clinical diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ (6 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear, transparent answers to help you understand women&apos;s health physical therapy care.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {womensFaqs.map((faq, index) => {
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

      {/* SECTION 14 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Take the Next Step Toward Better Movement</h2>
            <p className="spine-final-sub">
              If a women&apos;s health concern is affecting your comfort, movement or daily activities, speak with our
              physiotherapy team about an appropriate assessment.
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
