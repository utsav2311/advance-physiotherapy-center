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
  const [activeSpinePart, setActiveSpinePart] = useState('lumbar');
  const [activePainZone, setActivePainZone] = useState('lower-back');
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('spine-back-pain', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment at Advance Physiotherapy Centre for Spine & Back Pain physiotherapy.`;

  // Spine Anatomy Data
  const spineParts = {
    cervical: {
      name: 'Cervical Spine (Neck)',
      code: 'C1 – C7',
      desc: 'Supports head weight (approx. 5 kg) and enables natural rotation. Poor desk posture or awkward sleeping positions commonly cause muscular tightness and nerve impingement here.',
      role: 'Head rotation, neck mobility, shoulder & arm nerve pathways',
    },
    thoracic: {
      name: 'Thoracic Spine (Mid Back)',
      code: 'T1 – T12',
      desc: 'Connects with the rib cage to provide torso stability and protect thoracic organs. Prolonged slouching over screens leads to mid-back stiffness and restricted chest expansion.',
      role: 'Upper body stability, rotational posture, rib cage support',
    },
    lumbar: {
      name: 'Lumbar Spine (Lower Back)',
      code: 'L1 – L5',
      desc: 'Carries the highest mechanical load of the upper body. Intervertebral discs (L4-L5, L5-S1) absorb force during bending and lifting, making this the most common site for strain.',
      role: 'Weight distribution, shock absorption, core force transfer',
    },
    sacrum: {
      name: 'Sacrum & Coccyx (Base)',
      code: 'S1 – S5 & Tailbone',
      desc: 'Triangular bone connecting the spine to the pelvis via sacroiliac (SI) joints. Transmits movement loads between the torso and legs during walking and stair climbing.',
      role: 'Pelvic junction, sitting support, SI joint force transmission',
    },
  };

  // Pain Area Silhouette Data
  const painZones = {
    'lower-back': {
      title: 'Lower Back (Lumbar Region)',
      symptoms: 'Aching, stiffness, muscle spasms, or dull tension around the waistline that worsens after prolonged sitting or bending.',
      insight: 'Most common mechanical presentation, responding effectively to active core retraining and guided mobility exercises.',
    },
    'neck-upper': {
      title: 'Neck & Upper Back Region',
      symptoms: 'Tightness across the shoulder blades, neck stiffness, and tension headaches from prolonged forward-head screen postures.',
      insight: 'Addressed through ergonomic workstation adjustments, thoracic mobilization, and neck muscle conditioning.',
    },
    sciatica: {
      title: 'Radiating Leg Symptoms (Sciatica)',
      symptoms: 'Discomfort, tingling, or shooting sensation traveling from the lower back through the buttock down into the thigh or calf.',
      insight: 'Requires thorough clinical assessment to identify whether nerve root irritation is present before guiding movement.',
    },
    sacroiliac: {
      title: 'Sacroiliac (SI) & Pelvic Junction',
      symptoms: 'One-sided lower back or buttock ache when transitioning from sitting to standing, climbing stairs, or walking long distances.',
      insight: 'Supported by pelvic stabilization, hip mobility drills, and targeted manual therapy techniques.',
    },
  };

  // 7 Specified Clinical FAQs
  const spineFaqs = [
    {
      q: 'Can physiotherapy help with back pain?',
      a: 'Physiotherapy can be appropriate for many types of back pain. The treatment approach depends on the underlying condition, symptoms, physical findings, and individual recovery goals. By assessing spinal mobility, muscle balance, and daily movement patterns, a physiotherapist develops a targeted rehabilitation plan.',
    },
    {
      q: 'How do I know if I need physiotherapy for back pain?',
      a: 'If back pain is affecting your movement, work, exercise, sleep, or everyday activities — or if discomfort keeps recurring — a professional clinical assessment can help determine an appropriate, personalized course of care.',
    },
    {
      q: 'Can I exercise when I have back pain?',
      a: 'The appropriate type and amount of activity depends on your specific symptoms and condition. Complete bed rest is rarely recommended for non-specific back pain. A physiotherapist can help you select safe, comfortable exercises and progress them gradually.',
    },
    {
      q: 'Does back pain always require an MRI or X-ray?',
      a: 'Not necessarily. Imaging is not routinely required for many cases of non-specific lower back pain. Whether imaging is appropriate depends on your clinical history, physical examination findings, and whether there are signs suggesting an underlying structural issue.',
    },
    {
      q: 'How long does physiotherapy for back pain take?',
      a: "There is no single treatment duration that applies to everyone. The number and frequency of sessions depend on the individual's condition, how long symptoms have persisted, functional goals, and how your body responds to rehabilitation.",
    },
    {
      q: 'Can physiotherapy help with sciatica?',
      a: 'Some people with sciatica benefit significantly from physiotherapy. Because sciatica symptoms (radiating leg pain, tingling, or numbness) can stem from different underlying causes and vary in severity, a proper initial assessment is essential.',
    },
    {
      q: 'Can I get physiotherapy for back pain in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre provides specialized physiotherapy and spinal rehabilitation care at Juran Chapra, Muzaffarpur. You can easily contact the clinic via WhatsApp or phone to discuss your symptoms and schedule a consultation.',
    },
  ];

  return (
    <article className="spine-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Back Pain Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Get personalized physiotherapy for back and spine pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, exercise-based rehabilitation and mobility-focused care."
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
            'Get personalized physiotherapy for back and spine pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, exercise-based rehabilitation and mobility-focused care.',
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

      {/* 3. PREMIUM HERO SECTION WITH AI REALISTIC CLINICAL VISUAL */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">SPINE &amp; BACK PAIN PHYSIOTHERAPY · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Spine &amp; Back Pain Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and rehabilitation care for back pain, spine-related problems and movement
                difficulties.
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
                  alt="Physiotherapy assessment and spine biomechanics evaluation for lower back pain at Advance Physiotherapy Centre"
                  className="spine-hero-img"
                  width="600"
                  height="450"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Spine Biomechanics &amp; Assessment</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Evaluation by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4. SECTION 1 — INTRODUCTION & EDUCATIONAL SPINE ANATOMY */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Personalized Care</span>
              <h2 className="section-title">
                Personalized Care for Back Pain, Spine Problems &amp; Movement Difficulties
              </h2>
              <div className="spine-prose">
                <p>
                  Back pain can affect much more than your physical comfort. It can make sitting, standing, walking,
                  working, exercising and even sleeping difficult.
                </p>
                <p>
                  At Advance Physiotherapy Centre in Muzaffarpur, physiotherapy for back and spine-related problems
                  focuses on understanding your symptoms, movement limitations and daily activities before developing an
                  individualized rehabilitation approach.
                </p>
                <p>
                  Our goal is to help you improve movement and function, manage symptoms and gradually return to the
                  activities that are important to you.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Appointment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* EDUCATIONAL SPINE ANATOMY VISUAL WITH 3D DIAGRAM */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-anatomy-header">
                <span className="spine-anatomy-tag">Interactive Anatomy Guide</span>
                <h3 className="spine-anatomy-heading">Regions of the Human Spine</h3>
                <p className="spine-anatomy-caption">
                  Explore each spinal segment below to understand its anatomical role in posture and movement.
                </p>
              </div>

              {/* Visual 3D Spine Illustration */}
              <div className="spine-diagram-box">
                <img
                  src="/images/spine-anatomy-educational-diagram.webp"
                  alt="Educational 3D Diagram of the human spine showing Cervical, Thoracic, Lumbar, and Sacrum vertebrae"
                  className="spine-diagram-img"
                  width="500"
                  height="375"
                  loading="lazy"
                />
              </div>

              {/* Anatomy Tabs */}
              <div className="spine-part-tabs" role="tablist" aria-label="Spinal Anatomy Segments">
                {Object.keys(spineParts).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activeSpinePart === key}
                    className={`spine-tab-btn ${activeSpinePart === key ? 'is-active' : ''}`}
                    onClick={() => setActiveSpinePart(key)}
                  >
                    {spineParts[key].name.split(' (')[0]}
                  </button>
                ))}
              </div>

              {/* Anatomy Visual Display */}
              <div className="spine-anatomy-display">
                <div className="spine-anatomy-badge-code">{spineParts[activeSpinePart].code}</div>
                <h4 className="spine-anatomy-part-title">{spineParts[activeSpinePart].name}</h4>
                <p className="spine-anatomy-part-desc">{spineParts[activeSpinePart].desc}</p>
                <div className="spine-anatomy-role-box">
                  <strong>Primary Function:</strong> {spineParts[activeSpinePart].role}
                </div>
              </div>

              <p className="spine-disclaimer-note">Illustration and guide for educational purposes only.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. SECTION 2 — WHAT IS BACK PAIN? */}
      <section className="section spine-what-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-centered-card">
            <span className="section-label">Clinical Understanding</span>
            <h2 className="section-title text-center">What Is Back Pain?</h2>
            <div className="spine-what-body">
              <p>
                Back pain refers to discomfort felt anywhere from the upper back to the lower back. Lower back pain is
                particularly common and can occur with stiffness, muscle discomfort, restricted movement or pain that
                travels toward the buttocks or legs.
              </p>
              <p>
                Back pain can be short-term, recurrent or persistent. In many cases, the exact cause is not always
                obvious, and treatment should be based on the individual&apos;s symptoms, physical findings, functional
                limitations and goals.
              </p>
            </div>
            <div className="spine-evidence-banner">
              <span className="spine-evidence-icon">ℹ️</span>
              <p>
                <strong>Clinical Guideline Note:</strong> Reputable physical medicine guidelines emphasize active
                rehabilitation, patient education, and movement restoration rather than prolonged bed rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 3 — COMMON PROBLEMS WE MAY HELP WITH, SCIATICA VISUAL & PAIN MAP */}
      <section className="section spine-problems-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Conditions Assessed</span>
            <h2 className="section-title">Common Back &amp; Spine Problems We May Help With</h2>
            <p className="section-subtitle">
              Evidence-based physiotherapy tailored to specific mechanical, muscular, and disc-related presentations.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Lower Back Pain</h3>
              <p className="spine-card-desc">
                Pain, stiffness or difficulty moving around the lower back that may interfere with everyday activities
                like standing, bending, or sitting for long periods.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Neck &amp; Upper Back Pain</h3>
              <p className="spine-card-desc">
                Discomfort and movement restrictions around the neck and upper back that may be associated with
                posture, prolonged screen work, or other musculoskeletal factors.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Sciatica &amp; Nerve Irritation</h3>
              <p className="spine-card-desc">
                Pain or other symptoms that may travel from the lower back toward the buttock or leg. Symptoms vary from
                person to person and require appropriate clinical assessment.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Disc-Related Problems</h3>
              <p className="spine-card-desc">
                Some people experience back pain or leg symptoms associated with disc-related conditions. Physiotherapy
                is tailored to individual tolerance and functional movement limitations.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">05</div>
              <h3 className="spine-card-title">Muscle Strain &amp; Mechanical Back Pain</h3>
              <p className="spine-card-desc">
                Back discomfort associated with physical activity, sudden heavy lifting, repetitive movements or
                temporary changes in posture and movement patterns.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">06</div>
              <h3 className="spine-card-title">Recurrent Back Pain</h3>
              <p className="spine-card-desc">
                For people who experience repeated episodes of back pain, rehabilitation focuses on improving strength,
                movement confidence, physical activity, and long-term self-management.
              </p>
            </div>
          </div>

          <div className="spine-note-box text-center">
            <p>
              Not every type of back pain should be treated in the same way. A proper assessment is important before
              deciding on an appropriate rehabilitation plan.
            </p>
          </div>

          {/* EDUCATIONAL SCIATICA PATHWAY VISUAL SHOWCASE */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/sciatica-nerve-pathway-anatomy.webp"
                alt="Medical 3D illustration showing how the sciatic nerve extends from the L4, L5, and S1 lumbar spine vertebrae down through the hip and posterior leg"
                className="spine-sciatica-img"
                width="600"
                height="450"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Nerve Path Visualizer</span>
              <h3 className="spine-sciatica-heading">Understanding Sciatica &amp; Radiating Symptoms</h3>
              <p>
                The <strong>sciatic nerve</strong> is the longest nerve in the human body, originating from nerve roots
                in the lower lumbar spine (L4, L5) and sacrum (S1, S2, S3).
              </p>
              <p>
                When irritation, mechanical pressure, or muscle tension occurs near these nerve roots or around the deep
                pelvic muscles (such as the piriformis), symptoms can travel down the buttock into the back of the thigh,
                calf, or foot.
              </p>
              <div className="spine-sciatica-points">
                <div className="spine-sciatica-badge">
                  <span>✓</span> Lumbar Disc Pressure Assessment
                </div>
                <div className="spine-sciatica-badge">
                  <span>✓</span> Nerve Mobilization &amp; Decompression
                </div>
                <div className="spine-sciatica-badge">
                  <span>✓</span> Targeted Hip &amp; Core Conditioning
                </div>
              </div>
            </div>
          </div>

          {/* PAIN AREA SILHOUETTE INTERACTIVE VISUAL */}
          <div className="spine-pain-map-container" style={{ marginTop: '3.5rem' }}>
            <div className="spine-pain-map-header">
              <span className="section-label">Symptom Localization</span>
              <h3 className="spine-pain-map-title">Where Do You Feel Your Discomfort?</h3>
              <p className="spine-pain-map-sub">
                Explore common symptom areas to understand how movement assessment helps pinpoint recovery strategies.
              </p>
            </div>

            <div className="spine-pain-map-grid">
              <div className="spine-pain-zone-selector">
                {Object.keys(painZones).map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`spine-pain-btn ${activePainZone === key ? 'is-active' : ''}`}
                    onClick={() => setActivePainZone(key)}
                  >
                    <span className="spine-pain-indicator" />
                    <span className="spine-pain-label">{painZones[key].title}</span>
                  </button>
                ))}
              </div>

              <div className="spine-pain-detail-card">
                <h4>{painZones[activePainZone].title}</h4>
                <div className="spine-pain-block">
                  <strong>Common Presentation:</strong>
                  <p>{painZones[activePainZone].symptoms}</p>
                </div>
                <div className="spine-pain-block">
                  <strong>Rehabilitation Focus:</strong>
                  <p>{painZones[activePainZone].insight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4 — SYMPTOMS THAT MAY ACCOMPANY BACK PAIN */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Recognizing Symptoms</span>
            <h2 className="section-title">Symptoms That May Accompany Back Pain</h2>
            <p className="section-subtitle">
              The presence, severity, and pattern of symptoms provide valuable clinical clues during your evaluation.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              'Dull or aching pain across the back',
              'Sharp or localized pain during specific movements',
              'Back stiffness, especially in the morning',
              'Muscle tightness or localized spasms',
              'Difficulty bending forward or straightening up',
              'Discomfort after prolonged sitting or standing',
              'Difficulty with everyday household or work tasks',
              'Pain extending toward the buttocks, thighs, or legs',
              'Reduced mobility or hesitance during movement',
            ].map((symptom) => (
              <div key={symptom} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">{symptom}</span>
              </div>
            ))}
          </div>

          <p className="spine-symptom-footnote text-center">
            The presence, severity and pattern of symptoms can help a physiotherapist understand how the problem is
            affecting your movement and daily activities.
          </p>
        </div>
      </section>

      {/* 8. SECTION 5 — CONTRIBUTING FACTORS & ERGONOMIC VISUALS */}
      <section className="section spine-factors-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Understanding Triggers</span>
            <h2 className="section-title">What Can Contribute to Back Pain?</h2>
            <p className="section-subtitle">
              Back pain rarely has a single isolated cause; it often involves a combination of physical demands and
              lifestyle habits.
            </p>
          </div>

          <div className="spine-factors-grid">
            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Prolonged Sitting</h3>
              <p>
                Long periods of sitting, particularly when combined with low physical activity, may contribute to
                stiffness, muscle fatigue, and reduced spinal movement.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Repetitive Movements</h3>
              <p>
                Repeated bending, lifting, twisting or physically demanding activities without adequate conditioning can
                place repetitive mechanical stress on the back.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Reduced Strength &amp; Conditioning</h3>
              <p>
                Reduced muscle strength, endurance, or overall physical activity may affect how comfortably the body
                handles everyday physical demands.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Previous Injury</h3>
              <p>
                A previous back strain or joint injury can sometimes contribute to altered movement habits or recurring
                sensitivities if not fully rehabilitated.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Work &amp; Lifestyle Demands</h3>
              <p>
                Manual labor, prolonged desk work, long driving commutes, stress, and irregular sleep can all influence
                pain perception and muscle tension.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Age-Related Changes</h3>
              <p>
                Changes in the spine occur naturally with age, but imaging findings alone do not always dictate pain.
                Assessment must consider the whole clinical picture.
              </p>
            </div>
          </div>

          {/* EDUCATIONAL DAILY ACTIVITY BLOCKS */}
          <div className="spine-activities-box">
            <h3 className="spine-activities-heading text-center">Everyday Movement Principles</h3>
            <p className="spine-activities-sub text-center">
              Comfortable movement and varied positions can help you manage everyday physical demands.
            </p>

            <div className="spine-activities-grid">
              <div className="spine-activity-card">
                <span className="spine-act-icon">🪑</span>
                <h4>Sitting Positions</h4>
                <p>Change postures periodically, use lumbar support when comfortable, and take short standing breaks.</p>
              </div>
              <div className="spine-activity-card">
                <span className="spine-act-icon">📦</span>
                <h4>Lifting &amp; Carrying</h4>
                <p>Keep objects close to your body, bend through your hips and knees, and avoid abrupt twisting motions.</p>
              </div>
              <div className="spine-activity-card">
                <span className="spine-act-icon">🧍</span>
                <h4>Standing &amp; Walking</h4>
                <p>Wear supportive footwear, distribute weight evenly, and incorporate gentle walks into your routine.</p>
              </div>
              <div className="spine-activity-card">
                <span className="spine-act-icon">💻</span>
                <h4>Desk &amp; Work Setup</h4>
                <p>Position your screen at eye level, keep elbows supported, and vary your working positions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 6 — HOW PHYSIOTHERAPY HELPS & PIPELINE */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Methodology</span>
            <h2 className="section-title">How Physiotherapy Can Help With Back Pain</h2>
            <p className="section-subtitle">
              Physiotherapy is not simply about addressing the painful area; it evaluates how your whole body moves.
            </p>
          </div>

          {/* Assessment List Overview */}
          <div className="spine-how-grid">
            <div className="spine-how-card">
              <h3>Comprehensive Clinical Evaluation</h3>
              <p className="spine-how-lead">During your assessment, Dr. Shahrukh evaluates:</p>
              <ul className="spine-how-list">
                <li>Your symptom history, daily routine, and recovery goals</li>
                <li>How pain behaves during different postures and movements</li>
                <li>Spinal joint mobility, flexibility, and muscle endurance</li>
                <li>Functional movement patterns during walking, bending, and lifting</li>
                <li>Work, sports, or physical activity requirements</li>
              </ul>
            </div>

            <div className="spine-how-card">
              <h3>Individualized Rehabilitation Strategy</h3>
              <p className="spine-how-lead">Based on clinical findings, your care plan aims to:</p>
              <ul className="spine-how-list">
                <li>Alleviate acute mechanical discomfort and muscle guarding</li>
                <li>Restore spinal mobility and joint flexibility gradually</li>
                <li>Rebuild core stability and postural muscular endurance</li>
                <li>Provide self-management strategies for long-term spinal health</li>
                <li>Guide a safe return to work, exercise, and hobbies</li>
              </ul>
            </div>
          </div>

          {/* 5-Step Process Pipeline */}
          <div className="spine-pipeline-wrapper">
            <h3 className="spine-pipeline-title text-center">Your Rehabilitation Journey</h3>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assessment</div>
                <div className="spine-pipe-desc">History, symptoms, and functional goals</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Movement Evaluation</div>
                <div className="spine-pipe-desc">Spine mobility, nerve sensitivity, and posture</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Personalized Plan</div>
                <div className="spine-pipe-desc">Targeted exercises and manual therapy</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Rehabilitation</div>
                <div className="spine-pipe-desc">Guided progression and core strengthening</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">05</div>
                <div className="spine-pipe-name">Progress &amp; Health</div>
                <div className="spine-pipe-desc">Self-management and comfortable movement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION 7 — WHAT MAY BE INCLUDED IN YOUR PLAN WITH REHAB VISUAL */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Evidence-Based Modalities</span>
            <h2 className="section-title">What May Be Included in Your Physiotherapy Plan?</h2>
            <p className="section-subtitle">
              Treatment plans are customized based on clinical assessment, symptom tolerance, and personal goals.
            </p>
          </div>

          {/* Featured Visual Exercise Rehabilitation Showcase */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/spine-rehab-exercise-therapy.webp"
                alt="Patient performing guided lumbar core stability and spinal mobility exercise under physiotherapist supervision"
                className="spine-rehab-feature-img"
                width="600"
                height="450"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Supervised Exercise Therapy</span>
              <h3 className="spine-rehab-feature-title">Active Movement &amp; Core Muscle Stabilization</h3>
              <p>
                Passive treatments (such as heat or massage) can provide temporary comfort, but <strong>progressive exercise therapy</strong> is the gold standard for restoring long-term spinal strength, muscle coordination, and movement confidence.
              </p>
              <ul className="spine-rehab-feature-list">
                <li><strong>Deep Lumbar Core Retraining:</strong> Activates supporting abdominal and multifidus muscles.</li>
                <li><strong>Controlled Range-of-Motion:</strong> Restores comfortable spinal flexion and extension.</li>
                <li><strong>Postural Endurance Conditioning:</strong> Builds stamina for prolonged sitting and standing.</li>
              </ul>
            </div>
          </div>

          {/* 6 Modality Cards */}
          <div className="spine-modalities-grid" style={{ marginTop: '2.5rem' }}>
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Exercise Therapy</h3>
              <p>
                Specific progressive exercises prescribed to improve spinal stability, core strength, muscular
                endurance, and functional movement capacity.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Mobility &amp; Flexibility</h3>
              <p>
                Appropriate gentle movement routines designed to address stiffness, improve comfortable spinal flexion
                and extension, and restore range of motion.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">👐</div>
              <h3>Manual Therapy</h3>
              <p>
                Where clinically appropriate, hands-on joint mobilization, soft tissue release, and gentle traction are
                incorporated into broader rehabilitation.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧭</div>
              <h3>Movement &amp; Posture Guidance</h3>
              <p>
                Practical education on lifting mechanics, sitting ergonomics, workstation setup, and pacing strategies
                for everyday physical demands.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Home Exercise Programme</h3>
              <p>
                Structured, easy-to-follow exercise recommendations that you can perform safely at home to maintain and
                compound clinical progress.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🎯</div>
              <h3>Activity &amp; Recovery Guidance</h3>
              <p>
                Gradual, structured pacing to help patients comfortably return to work, recreational sports, and daily
                activities with confidence.
              </p>
            </div>
          </div>

          <div className="spine-guidance-disclaimer text-center">
            <p>Exercises should be selected and progressed according to individual assessment.</p>
          </div>
        </div>
      </section>

      {/* 11. SECTION 8 — YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Patient Experience</span>
            <h2 className="section-title">Your First Visit</h2>
            <p className="section-subtitle">
              What to expect when you consult with Dr. Shahrukh Firoz at Advance Physiotherapy Centre.
            </p>
          </div>

          <div className="spine-first-visit-grid">
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Clinical Assessment</h3>
              <p>
                Your physiotherapist discusses your symptoms, medical history, daily routines, previous treatments, and
                recovery goals.
              </p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Physical Evaluation</h3>
              <p>
                Spinal movement, mobility, muscular strength, nerve sensitivity, and functional limitations are assessed
                with care.
              </p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Personalized Plan</h3>
              <p>
                A tailored rehabilitation approach is selected and explained clearly, addressing your specific mechanical
                needs.
              </p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">04</div>
              <h3>Progress &amp; Guidance</h3>
              <p>
                Your progress is monitored over time, with exercises, manual therapy, and daily advice updated as your
                comfort improves.
              </p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Your First Consultation on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 12. SECTION 9 — WHEN TO SEEK HELP & MEDICAL SAFETY NOTICE */}
      <section className="section spine-safety-section">
        <div className="container">
          <div className="spine-safety-wrapper">
            <div className="spine-when-seek">
              <span className="section-label">When to Consult</span>
              <h2 className="section-title">When Should You Seek Professional Assessment?</h2>
              <p className="spine-when-lead">Consider arranging a professional assessment if your back pain:</p>
              <ul className="spine-when-list">
                <li>Continues for more than a few days or repeatedly returns</li>
                <li>Is interfering with your work, sleep, or daily family life</li>
                <li>Significantly limits your bending, walking, or sitting movement</li>
                <li>Makes exercise or normal physical activities difficult</li>
                <li>Is accompanied by symptoms extending or radiating down into a leg</li>
                <li>Is getting progressively worse rather than improving with rest</li>
              </ul>
            </div>

            {/* CALM MEDICAL SAFETY WARNING BOX */}
            <div className="spine-medical-alert-box">
              <div className="spine-alert-badge">
                <span className="spine-alert-icon">⚠️</span>
                <span>Important Medical Notice</span>
              </div>
              <h3 className="spine-alert-heading">When Urgent Medical Evaluation is Needed</h3>
              <p>
                Back pain accompanied by symptoms such as <strong>new loss of bladder or bowel control</strong>,{' '}
                <strong>numbness around the groin or inner-thigh area (saddle numbness)</strong>, or{' '}
                <strong>significant sudden weakness in the legs or feet</strong> can indicate a serious neurological
                condition (such as cauda equina syndrome) and requires <strong>urgent emergency medical assessment</strong>.
              </p>
              <p className="spine-alert-footnote">
                Do not rely on this website for diagnosis. If you are concerned about your symptoms, seek appropriate
                medical evaluation immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SECTION 10 — BACK PAIN & EVERYDAY ACTIVITIES */}
      <section className="section spine-everyday-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Active Living</span>
            <h2 className="section-title">Back Pain &amp; Everyday Activities</h2>
            <p className="section-subtitle">
              Managing back pain does not mean avoiding all movement. For many forms of non-specific back pain, remaining
              appropriately active promotes recovery.
            </p>
          </div>

          <div className="spine-activity-scenarios">
            <div className="spine-scenario-item">
              <h4>Sitting for Long Periods</h4>
              <p>Break up prolonged sitting every 30-45 minutes. Gentle pelvic tilts and standing walks reduce stiffness.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Lifting &amp; Carrying</h4>
              <p>Hold loads close to your chest, engage your legs, and avoid lifting heavy loads while twisting your torso.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Bending &amp; Reaching</h4>
              <p>Hinge at the hips rather than rounding the lower back excessively when reaching for low items.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Work &amp; Screen Setup</h4>
              <p>Adjust chair height so knees are slightly below hips and arms rest comfortably without shoulder shrugging.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Exercise &amp; Fitness</h4>
              <p>Low-impact walking, swimming, and guided core stability exercises help maintain general cardiovascular fitness.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Sleeping Positions</h4>
              <p>Side sleeping with a pillow between knees or back sleeping with a pillow under knees can support spinal neutrality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. SECTION 11 — WHY CHOOSE ADVANCE PHYSIOTHERAPY CENTRE */}
      <section className="section spine-why-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Patient Commitment</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Focused on delivering honest, evidence-based physical rehabilitation in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid">
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Attention</h3>
              <p>
                Your symptoms, daily activities, and rehabilitation goals are thoroughly considered before planning care.
              </p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Patient-Centered Approach</h3>
              <p>
                Treatment is focused on individual needs rather than applying a rigid, one-size-fits-all programme.
              </p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Exercise &amp; Movement Focus</h3>
              <p>
                Active movement and structured physical rehabilitation are prioritized to support sustainable functional
                recovery.
              </p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">4</div>
              <h3>Convenient Central Location</h3>
              <p>
                Easily accessible in Zila Parishad Market, Juran Chapra Road, Muzaffarpur with clean consultation
                facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. SECTION 12 — MEET YOUR PHYSIOTHERAPIST */}
      <section className="section spine-doctor-section" style={{ background: '#f8fafc' }}>
        <div className="container">
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
              <h2 className="spine-doctor-name">{SITE.doctor}</h2>
              <p className="spine-doctor-creds">
                {SITE.credentials} • {SITE.regNo}
              </p>
              <p className="spine-doctor-bio">
                {SITE.doctor} is a qualified physiotherapist with advanced specialization in orthopedic physical medicine.
                At Advance Physiotherapy Centre, he conducts hands-on spinal assessments, develops structured exercise
                programmes, and guides patients through evidence-based recovery for acute and chronic back conditions.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Personalized Assessment</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>One-to-One Clinical Attention</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Patient-Centered Care</span>
                </div>
              </div>

              <div className="spine-doctor-action">
                <Link to="/about" className="btn btn-secondary">
                  View Doctor Profile &amp; Qualifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. SECTION 13 — LOCAL MUZAFFARPUR CLINIC INFORMATION */}
      <section className="section spine-local-section">
        <div className="container">
          <div className="spine-local-card">
            <div className="spine-local-text">
              <span className="section-label">Local Healthcare Access</span>
              <h2 className="section-title">Spine &amp; Back Pain Physiotherapy in Juran Chapra, Muzaffarpur</h2>
              <p>
                If you are looking for dedicated physiotherapy for back pain or spine-related movement problems in
                Muzaffarpur, Advance Physiotherapy Centre provides individualized physical therapy and rehabilitation care.
              </p>
              <div className="spine-local-details">
                <p>
                  <LocationIcon />
                  <span>
                    <strong>Location:</strong> {SITE.addressLine1}, {SITE.addressLine2}
                  </span>
                </p>
                <p>
                  <ClockIcon />
                  <span>
                    <strong>Consultation Hours:</strong> {SITE.hours}
                  </span>
                </p>
                <p>
                  <PhoneIcon />
                  <span>
                    <strong>Direct Contact:</strong> <a href={`tel:${SITE.phonePrimary}`}>{SITE.phonePrimaryDisplay}</a> /{' '}
                    <a href={`tel:${SITE.phoneSecondary}`}>{SITE.phoneSecondaryDisplay}</a>
                  </span>
                </p>
              </div>
              <div className="spine-local-actions">
                <a
                  href={SITE.mapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Get Directions on Google Maps ↗
                </a>
              </div>
            </div>

            <div className="spine-local-map">
              <iframe
                title="Advance Physiotherapy Centre Location Map"
                src={SITE.mapsEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 17. SECTION 14 — FAQ ACCORDION */}
      <section className="section spine-faq-section" style={{ background: '#f8fafc' }} id="faq">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions About Back Pain Physiotherapy</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how physical rehabilitation works for spinal conditions.
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

      {/* 18. SECTION 15 — FINAL CONVERSION CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Take the Next Step Toward Comfortable Movement</h2>
            <p className="spine-final-sub">
              Back pain should not automatically mean stopping everything you enjoy. If pain or movement difficulties are
              affecting your daily life, an appropriate professional assessment can help you understand your options.
            </p>

            <div className="spine-final-actions">
              <WhatsAppButton className="btn btn-primary btn-lg spine-final-wa-btn" message={bookingMessage}>
                <WhatsAppIcon />
                <span>Book Appointment on WhatsApp</span>
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

      {/* 19. RELATED SPECIALIZED SERVICES */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Explore More</span>
            <h2 className="section-title">Other Specialized Rehabilitation Services</h2>
            <p className="section-subtitle">
              Comprehensive physical therapy care available at our Muzaffarpur clinic.
            </p>
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
