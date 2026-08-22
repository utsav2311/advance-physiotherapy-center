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
  const [activeCervicalPart, setActiveCervicalPart] = useState('c3-c5');
  const [activeSymptomZone, setActiveSymptomZone] = useState('neck-occiput');
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('cervical-neck-care', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment at Advance Physiotherapy Centre for Cervical & Neck Care.`;

  // Cervical Spine Anatomy Segments Data
  const cervicalParts = {
    'c1-c2': {
      name: 'Upper Cervical (C1 Atlas & C2 Axis)',
      code: 'C1 – C2 Vertebrae',
      desc: 'Form the cranial junction, supporting the 5 kg weight of the head and enabling over 50% of rotational neck movement. Strain here can trigger cervicogenic tension headaches at the base of the skull.',
      role: 'Cranial support, rotational pivot, vertebral artery pathway',
    },
    'c3-c5': {
      name: 'Mid-Cervical Spine (C3 – C5)',
      code: 'C3 – C5 Vertebrae',
      desc: 'Provides flexibility for nodding and side-bending. The phrenic nerve originates here, and surrounding paraspinal muscles commonly experience tightness from prolonged forward-head screen postures.',
      role: 'Neck flexion, lateral tilting, deep cervical muscle support',
    },
    'c6-c7': {
      name: 'Lower Cervical & Thoracic Junction (C6 – C7 / T1)',
      code: 'C6 – C7 Vertebrae',
      desc: 'Absorbs heavy mechanical stress at the transition to the upper back. Nerve roots emerging here (C6, C7) form the brachial plexus, innervating the shoulders, arms, forearms, and hands.',
      role: 'Upper torso load transfer, brachial plexus nerve exit, arm movement',
    },
  };

  // Symptom Area Localization Data
  const symptomZones = {
    'neck-occiput': {
      title: 'Neck & Base of Skull (Occipital Region)',
      symptoms: 'Localized stiffness, dull aching behind the neck, and tension headaches that radiate upward from the base of the skull.',
      insight: 'Often related to prolonged sustained screen positions or upper cervical joint stiffness; responds well to gentle mobilization and deep neck flexor retraining.',
    },
    'trapezius-upper': {
      title: 'Trapezius & Upper Back (Scapular Region)',
      symptoms: 'Heavy muscular tightness across the shoulders, burning ache between shoulder blades, and discomfort during long sitting.',
      insight: 'Addressed through thoracic spine mobilization, postural endurance conditioning, and scapular stabilizer muscle strengthening.',
    },
    'shoulder-joint': {
      title: 'Shoulder Junction & Collarbone',
      symptoms: 'Restricted shoulder elevation, aching around the collarbone, or tenderness when turning the head to one side.',
      insight: 'Assessed to distinguish whether symptoms originate primarily from cervical facet joints or intrinsic rotator cuff movement.',
    },
    'brachial-arm': {
      title: 'Radiating Arm & Hand Sensations (Radicular)',
      symptoms: 'Tingling, numbness, or shooting discomfort traveling from the neck down into the shoulder, elbow, forearm, or fingers.',
      insight: 'Requires careful clinical assessment to evaluate cervical nerve root irritation and guide gentle nerve glide and decompression exercises.',
    },
  };

  // 8 Specified Clinical & Local FAQs
  const cervicalFaqs = [
    {
      q: 'What is cervical pain?',
      a: 'Cervical pain generally refers to discomfort, stiffness, or restricted movement around the neck region of the cervical spine (the top 7 vertebrae C1–C7) and the surrounding supporting muscles, ligaments, and nerves.',
    },
    {
      q: 'Can physiotherapy help with neck pain?',
      a: 'Physiotherapy is an evidence-based, non-invasive approach suitable for many types of neck discomfort. Treatment is personalized and may combine gentle joint mobilization, deep neck flexor strengthening, postural ergonomics, and guided mobility exercises based on assessment.',
    },
    {
      q: 'What are common symptoms of cervical problems?',
      a: 'Common symptoms include localized neck aching, morning stiffness, difficulty turning the head while driving or working, muscle spasms around the trapezius, cervicogenic tension headaches, and in some cases, symptoms radiating toward the shoulder or arm.',
    },
    {
      q: 'Can prolonged computer use contribute to neck discomfort?',
      a: 'Yes. Spending long periods in a static position — particularly with a forward-head posture looking down at screens — can increase muscular fatigue in the upper back and neck. Regular movement breaks and an ergonomic workstation setup help manage these physical demands.',
    },
    {
      q: 'Can cervical problems cause arm symptoms?',
      a: 'Some cervical conditions (such as disc irritation or foraminal narrowing) can affect exiting nerve roots, producing sensations such as tingling, numbness, or aching traveling down into the shoulder, forearm, or fingers. A thorough assessment identifies whether nerve pathways are involved.',
    },
    {
      q: 'How long does physiotherapy take?',
      a: "There is no single timeline that applies to everyone. The duration and frequency of sessions depend on whether the problem is acute or long-standing, the individual's recovery goals, and how your body responds to rehabilitation.",
    },
    {
      q: 'When should I seek urgent medical help?',
      a: 'Seek urgent medical evaluation if neck pain is accompanied by sudden significant muscle weakness in an arm or hand, loss of coordination, difficulty walking, new numbness in multiple limbs, high fever with neck stiffness, or if symptoms immediately follow a traumatic head/neck injury.',
    },
    {
      q: 'Can I book a neck pain physiotherapy appointment in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre provides personalized cervical and neck physiotherapy care in Juran Chapra, Muzaffarpur. You can book an appointment directly through WhatsApp or by calling the clinic.',
    },
  ];

  return (
    <article className="spine-service-page cervical-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Cervical & Neck Pain Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Get personalized physiotherapy for cervical and neck pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, exercise-based rehabilitation and mobility-focused care."
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
            'Get personalized physiotherapy for cervical and neck pain in Muzaffarpur. Advance Physiotherapy Centre provides assessment, exercise-based rehabilitation and mobility-focused care.',
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

      {/* 3. PREMIUM HERO SECTION WITH REALISTIC HEALTHCARE VISUAL */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">CERVICAL &amp; NECK CARE · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Cervical &amp; Neck Pain Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and rehabilitation care for neck pain, stiffness, movement difficulties and
                cervical spine-related concerns.
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
                  alt="Professional physiotherapist performing gentle cervical spine and neck movement assessment on patient at Advance Physiotherapy Centre"
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

      {/* 4. SECTION 1 — UNDERSTANDING CERVICAL & NECK PAIN & 3D ANATOMY */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Understanding</span>
              <h2 className="section-title">Understanding Cervical &amp; Neck Pain</h2>
              <div className="spine-prose">
                <p>
                  Neck pain is discomfort or stiffness around the cervical region of the spine and surrounding muscles,
                  ligaments, and joint tissues. It can affect daily activities such as working at a computer, driving,
                  sleeping comfortably, exercising, or turning your head.
                </p>
                <p>
                  Neck symptoms can vary considerably from person to person. Some people experience localized muscular
                  tension or morning stiffness, while others notice symptoms extending toward the shoulder blades,
                  collarbone, or arm.
                </p>
                <p>
                  At Advance Physiotherapy Centre, treatment is customized to your clinical findings, movement
                  limitations, and personal recovery goals.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Consultation on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* EDUCATIONAL 3D CERVICAL ANATOMY CARD */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-anatomy-header">
                <span className="spine-anatomy-tag">Interactive Anatomy Guide</span>
                <h3 className="spine-anatomy-heading">The Cervical Spine (C1 – C7)</h3>
                <p className="spine-anatomy-caption">
                  The cervical spine consists of seven vertebrae supporting the head while protecting vital neural pathways.
                </p>
              </div>

              {/* 3D Anatomical Image Box */}
              <div className="spine-diagram-box">
                <img
                  src="/images/cervical-spine-anatomy-3d-diagram.webp"
                  alt="Medically accurate realistic 3D anatomical visualization of the human cervical spine showing vertebrae C1 through C7"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>

              {/* Anatomy Tabs */}
              <div className="spine-part-tabs" role="tablist" aria-label="Cervical Spine Segments">
                {Object.keys(cervicalParts).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activeCervicalPart === key}
                    className={`spine-tab-btn ${activeCervicalPart === key ? 'is-active' : ''}`}
                    onClick={() => setActiveCervicalPart(key)}
                  >
                    {cervicalParts[key].name.split(' (')[0]}
                  </button>
                ))}
              </div>

              {/* Display Box */}
              <div className="spine-anatomy-display">
                <div className="spine-anatomy-badge-code">{cervicalParts[activeCervicalPart].code}</div>
                <h4 className="spine-anatomy-part-title">{cervicalParts[activeCervicalPart].name}</h4>
                <p className="spine-anatomy-part-desc">{cervicalParts[activeCervicalPart].desc}</p>
                <div className="spine-anatomy-role-box">
                  <strong>Functional Role:</strong> {cervicalParts[activeCervicalPart].role}
                </div>
              </div>

              <p className="spine-disclaimer-note">Illustration and guide for educational purposes only.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. SECTION 2 — WHAT DOES "CERVICAL" MEAN? */}
      <section className="section spine-what-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-centered-card">
            <span className="section-label">Anatomical Meaning</span>
            <h2 className="section-title text-center">What Does &quot;Cervical&quot; Mean?</h2>
            <div className="spine-what-body">
              <p>
                The term <strong>&quot;cervical&quot;</strong> comes from the Latin word for neck (<em>cervix</em>). In
                human anatomy, the cervical spine is the uppermost portion of your vertebral column, located between the
                base of the skull and the upper back (thoracic spine).
              </p>
              <p>
                It consists of <strong>seven vertebrae (C1 to C7)</strong> separated by flexible shock-absorbing discs.
                Because the cervical spine must balance a heavy head while allowing a wide range of motion (turning,
                nodding, tilting), it is naturally susceptible to postural fatigue and muscle strain.
              </p>
            </div>
            <div className="spine-evidence-banner">
              <span className="spine-evidence-icon">ℹ️</span>
              <p>
                <strong>Clinical Guideline Note:</strong> Reputable physical therapy guidelines emphasize that most neck
                pain episodes are mechanical in nature and respond effectively to active movement, postural breaks, and
                guided muscle conditioning rather than total immobilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 3 — COMMON SYMPTOMS & SYMPTOM AREAS VISUALIZER */}
      <section className="section spine-symptoms-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Recognizing Symptoms</span>
            <h2 className="section-title">Common Symptoms of Neck &amp; Cervical Problems</h2>
            <p className="section-subtitle">
              Symptoms can vary depending on whether the issue involves muscles, facet joints, or nerve pathways.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              'Localized neck pain or aching',
              'Neck stiffness, especially in the morning',
              'Reduced range of motion when turning the head',
              'Difficulty checking blind spots while driving',
              'Muscle tightness around the shoulders and upper back',
              'Discomfort between the shoulder blades',
              'Tension headaches starting from the base of the skull',
              'Discomfort radiating toward the shoulder or collarbone',
              'Tingling or altered sensation in an arm or hand',
            ].map((symptom) => (
              <div key={symptom} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">{symptom}</span>
              </div>
            ))}
          </div>

          <p className="spine-symptom-footnote text-center" style={{ marginBottom: '3rem' }}>
            Symptoms can vary depending on the underlying condition. A proper physical assessment helps determine the
            most appropriate rehabilitation plan.
          </p>

          {/* SYMPTOM AREA ANATOMICAL VISUALIZER WITH 3D BRACHIAL PLEXUS */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/cervical-radicular-nerve-pathway-anatomy.webp"
                alt="Medically accurate 3D anatomical visualization showing the cervical spine nerve pathway extending through the shoulder into the arm and hand"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Nerve Pathway Guide</span>
              <h3 className="spine-sciatica-heading">Why Can Neck Issues Affect the Arm &amp; Hand?</h3>
              <p>
                Nerves that control sensation and muscle strength in your shoulders, arms, forearms, and fingers originate
                from the cervical spine (C5 through T1), forming the <strong>brachial plexus</strong> network.
              </p>
              <p>
                When irritation or mechanical pressure occurs near these cervical nerve roots, symptoms such as tingling,
                numbness, or aching can travel down the arm pathway — a presentation known as cervical radiculopathy.
              </p>
              <div className="spine-sciatica-points">
                <div className="spine-sciatica-badge">
                  <span>✓</span> Cervical Nerve Pathway Assessment
                </div>
                <div className="spine-sciatica-badge">
                  <span>✓</span> Gentle Joint &amp; Neural Mobilization
                </div>
                <div className="spine-sciatica-badge">
                  <span>✓</span> Scapular &amp; Neck Muscle Retraining
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SYMPTOM ZONE SELECTOR */}
          <div className="spine-pain-map-container" style={{ marginTop: '3rem' }}>
            <div className="spine-pain-map-header">
              <span className="section-label">Symptom Localization</span>
              <h3 className="spine-pain-map-title">Where Do You Experience Your Symptoms?</h3>
              <p className="spine-pain-map-sub">
                Select a zone below to understand how physical assessment pinpoints targeted recovery strategies.
              </p>
            </div>

            <div className="spine-pain-map-grid">
              <div className="spine-pain-zone-selector">
                {Object.keys(symptomZones).map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`spine-pain-btn ${activeSymptomZone === key ? 'is-active' : ''}`}
                    onClick={() => setActiveSymptomZone(key)}
                  >
                    <span className="spine-pain-indicator" />
                    <span className="spine-pain-label">{symptomZones[key].title}</span>
                  </button>
                ))}
              </div>

              <div className="spine-pain-detail-card">
                <h4>{symptomZones[activeSymptomZone].title}</h4>
                <div className="spine-pain-block">
                  <strong>Common Presentation:</strong>
                  <p>{symptomZones[activeSymptomZone].symptoms}</p>
                </div>
                <div className="spine-pain-block">
                  <strong>Rehabilitation Focus:</strong>
                  <p>{symptomZones[activeSymptomZone].insight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4 — COMMON CERVICAL PROBLEMS & 3D DISC VISUAL */}
      <section className="section spine-problems-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Conditions Assessed</span>
            <h2 className="section-title">Common Cervical &amp; Neck Problems</h2>
            <p className="section-subtitle">
              Individualized physical therapy designed for mechanical, postural, and disc-related presentations.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Mechanical Neck Pain</h3>
              <p className="spine-card-desc">
                Neck discomfort or stiffness associated with movement, physical activity, or everyday physical demands
                without nerve involvement.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Cervical Stiffness</h3>
              <p className="spine-card-desc">
                Reduced comfortable movement of the neck that affects driving, looking upward, or turning the head
                smoothly during the day.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Posture-Related Neck Discomfort</h3>
              <p className="spine-card-desc">
                Neck and upper back fatigue associated with prolonged desk work, laptop screen use, or sustained
                static positions.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Cervical Disc-Related Concerns</h3>
              <p className="spine-card-desc">
                Some cervical disc conditions may be associated with neck pain or symptoms extending toward the arm,
                benefiting from gentle decompression and movement pacing.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">05</div>
              <h3 className="spine-card-title">Cervical Radicular Symptoms</h3>
              <p className="spine-card-desc">
                Discomfort, tingling, or sensory alterations traveling from the neck toward the shoulder or hand,
                requiring specialized neurological assessment.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">06</div>
              <h3 className="spine-card-title">Recurrent Neck Pain</h3>
              <p className="spine-card-desc">
                For people experiencing repeated episodes of neck discomfort, rehabilitation focuses on deep neck
                strengthening, movement variety, and sustainable self-care habits.
              </p>
            </div>
          </div>

          {/* FEATURED CERVICAL DISC & FACET JOINT 3D SHOWCASE */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/cervical-disc-facet-joint-anatomy.webp"
                alt="Realistic 3D medical visualization of cervical vertebrae, intervertebral discs, facet joints, and exiting spinal nerves"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Spinal Joint Anatomy</span>
              <h3 className="spine-rehab-feature-title">Cervical Discs &amp; Facet Joints</h3>
              <p>
                Between each cervical vertebra lies an <strong>intervertebral disc</strong> that acts as a shock absorber,
                and on each side are small <strong>facet joints</strong> that guide smooth gliding movement when you turn
                or nod your head.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>
                  <strong>Age-Related Changes:</strong> Natural disc hydration changes occur with age, but do not
                  automatically dictate pain.
                </li>
                <li>
                  <strong>Facet Joint Gliding:</strong> Gentle manual therapy and mobility drills help restore comfortable
                  joint articulation.
                </li>
                <li>
                  <strong>Individualized Plan:</strong> Therapy focuses on how you move functionally rather than relying
                  on scan findings alone.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 5 — CONTRIBUTING FACTORS & ERGONOMIC VISUALS */}
      <section className="section spine-factors-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Understanding Triggers</span>
            <h2 className="section-title">What Can Contribute to Neck Pain?</h2>
            <p className="section-subtitle">
              Neck symptoms usually develop from a combination of sustained postures, repetitive physical demands, and
              daily lifestyle factors.
            </p>
          </div>

          <div className="spine-factors-grid">
            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Prolonged Screen Use</h3>
              <p>
                Long periods looking down at smartphones, tablets, or unadjusted monitors can place sustained muscular
                demands on the back of the neck.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Desk-Based Work</h3>
              <p>
                Extended hours in static seated positions with minimal movement can lead to trapezius fatigue and upper
                thoracic stiffness.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Driving &amp; Commuting</h3>
              <p>
                Long driving periods involve fixed head positions, road vibration, and limited neck rotation during heavy
                traffic.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Repetitive Head Movements</h3>
              <p>
                Occupational tasks requiring repeated overhead looking, twisting, or awkward bending can overload
                cervical stabilizers.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Reduced Physical Activity</h3>
              <p>
                Low general physical activity may decrease overall upper-body muscle endurance, making the neck more
                sensitive to fatigue.
              </p>
            </div>

            <div className="spine-factor-card">
              <h3 className="spine-factor-title">Sleep &amp; Pillow Support</h3>
              <p>
                Sleeping on unsupportive pillows or awkward sleep angles can contribute to waking up with acute neck
                spasms or stiffness.
              </p>
            </div>
          </div>

          {/* 3 DAILY ACTIVITY ERGONOMIC VISUAL CARDS */}
          <div className="spine-activities-box">
            <h3 className="spine-activities-heading text-center">Daily Movement &amp; Ergonomics</h3>
            <p className="spine-activities-sub text-center">
              Comfortable movement and varied positions can help you manage everyday physical demands.
            </p>

            <div className="spine-activities-grid cervical-activities-grid">
              <div className="spine-activity-card">
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '0.85rem' }}>
                  <img
                    src="/images/cervical-ergonomics-workstation.webp"
                    alt="Ergonomic computer workstation setup with monitor at eye level for comfortable neck posture"
                    style={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
                <h4>Computer Workstation</h4>
                <p>Position your monitor at eye level, keep elbows supported, and take short 1-minute movement breaks.</p>
              </div>

              <div className="spine-activity-card">
                <span className="spine-act-icon">📱</span>
                <h4>Smartphone &amp; Tablet Use</h4>
                <p>Raise your phone closer to eye level rather than bending your neck down for extended scrolling sessions.</p>
              </div>

              <div className="spine-activity-card">
                <span className="spine-act-icon">🚗</span>
                <h4>Driving &amp; Commuting</h4>
                <p>Adjust your headrest so it gently supports the back of your head, keeping your shoulders relaxed on the wheel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 6 — HOW PHYSIOTHERAPY HELPS & 5-STEP PROCESS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Methodology</span>
            <h2 className="section-title">How Physiotherapy Can Help With Neck Pain</h2>
            <p className="section-subtitle">
              Physiotherapy is not simply about massaging a painful spot; it evaluates how your whole cervical and upper
              body system moves.
            </p>
          </div>

          <div className="spine-how-grid">
            <div className="spine-how-card">
              <h3>Comprehensive Clinical Evaluation</h3>
              <p className="spine-how-lead">During your assessment, Dr. Shahrukh evaluates:</p>
              <ul className="spine-how-list">
                <li>Your symptom history, daily work setup, and personal recovery goals</li>
                <li>Cervical range of motion (rotation, flexion, extension, side-bending)</li>
                <li>Shoulder blade alignment, thoracic mobility, and muscle endurance</li>
                <li>Relevant nerve pathways extending into the arms and hands</li>
                <li>Daily movement habits and physical activity levels</li>
              </ul>
            </div>

            <div className="spine-how-card">
              <h3>Individualized Rehabilitation Strategy</h3>
              <p className="spine-how-lead">Based on clinical findings, your care plan aims to:</p>
              <ul className="spine-how-list">
                <li>Alleviate acute muscular tension and localized joint guarding</li>
                <li>Restore comfortable cervical rotation and thoracic flexibility</li>
                <li>Strengthen deep neck flexors and scapular stabilizing muscles</li>
                <li>Provide ergonomic workstation advice and posture pacing tips</li>
                <li>Empower you with a simple home exercise programme</li>
              </ul>
            </div>
          </div>

          {/* 5-Step Process Pipeline */}
          <div className="spine-pipeline-wrapper">
            <h3 className="spine-pipeline-title text-center">Your Rehabilitation Journey</h3>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Listen</div>
                <div className="spine-pipe-desc">Detailed discussion of your symptoms &amp; goals</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Assess</div>
                <div className="spine-pipe-desc">Movement, joint mobility &amp; nerve testing</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Understand</div>
                <div className="spine-pipe-desc">Clear explanation of your clinical findings</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Plan</div>
                <div className="spine-pipe-desc">Targeted exercise &amp; gentle therapy</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">05</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Self-management &amp; lasting comfort</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION 7 — WHAT MAY BE INCLUDED IN YOUR PLAN */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Evidence-Based Modalities</span>
            <h2 className="section-title">What May Be Included in Your Physiotherapy Plan?</h2>
            <p className="section-subtitle">
              Rehabilitation plans are customized based on clinical assessment, symptom tolerance, and personal needs.
            </p>
          </div>

          {/* Featured Exercise Therapy Visual */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/cervical-rehab-exercise-guidance.webp"
                alt="Patient performing gentle guided cervical mobility and neck stabilization exercise with professional physiotherapist"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Supervised Exercise Therapy</span>
              <h3 className="spine-rehab-feature-title">Deep Neck Flexor Retraining &amp; Mobility</h3>
              <p>
                While passive heat or gentle massage can provide temporary comfort, <strong>guided exercise therapy</strong> is essential for rebuilding deep cervical muscle endurance, stabilizing your neck, and preventing symptom recurrence.
              </p>
              <ul className="spine-rehab-feature-list">
                <li><strong>Chin Tucks &amp; Deep Flexor Activation:</strong> Conditions supporting spinal stability muscles.</li>
                <li><strong>Thoracic Mobility Drills:</strong> Relieves compensatory strain on the cervical spine.</li>
                <li><strong>Scapular Muscle Strengthening:</strong> Improves shoulder posture and reduces trapezius fatigue.</li>
              </ul>
            </div>
          </div>

          {/* 6 Modality Cards */}
          <div className="spine-modalities-grid" style={{ marginTop: '2.5rem' }}>
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Mobility Exercises</h3>
              <p>
                Gentle, progressive movement routines to alleviate neck stiffness and restore comfortable range of motion.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Targeted Strengthening</h3>
              <p>
                Specific exercises to condition deep neck flexors, upper back extensors, and scapular stabilizer muscles.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">👐</div>
              <h3>Manual Therapy</h3>
              <p>
                Where clinically appropriate, gentle joint mobilization, soft tissue release, and gentle traction are
                applied safely.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧭</div>
              <h3>Ergonomic Education</h3>
              <p>
                Practical guidance regarding computer setup, phone habits, pillow selection, and pacing during work.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Home Exercise Programme</h3>
              <p>
                Structured, easy-to-follow exercise recommendations you can practice safely at home to maintain progress.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🎯</div>
              <h3>Activity &amp; Recovery Guidance</h3>
              <p>
                Gradual guidance to help you comfortably resume exercise, driving, and work activities with confidence.
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
              <h3>Assessment</h3>
              <p>
                Your physiotherapist discusses your symptoms, medical history, work routine, hobbies, and recovery goals.
              </p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Physical Evaluation</h3>
              <p>
                Neck movement, joint mobility, muscle strength, and nerve sensations are carefully evaluated.
              </p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Personalized Plan</h3>
              <p>
                A tailored rehabilitation approach is selected and explained in clear, patient-friendly terms.
              </p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">04</div>
              <h3>Progress &amp; Guidance</h3>
              <p>
                Your progress is monitored over time, with exercises and daily advice adjusted as your comfort improves.
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

      {/* 12. SECTION 9 — WHEN TO SEEK HELP & URGENT MEDICAL NOTICE */}
      <section className="section spine-safety-section">
        <div className="container">
          <div className="spine-safety-wrapper">
            <div className="spine-when-seek">
              <span className="section-label">When to Consult</span>
              <h2 className="section-title">When Should You Seek Professional Assessment?</h2>
              <p className="spine-when-lead">Consider arranging a professional assessment if your neck pain:</p>
              <ul className="spine-when-list">
                <li>Persists for more than a few days or repeatedly returns</li>
                <li>Limits normal movement such as looking over your shoulder</li>
                <li>Interferes with your daily desk work, driving, or sleep</li>
                <li>Makes exercise or daily household tasks difficult</li>
                <li>Is associated with symptoms extending toward your shoulder or arm</li>
                <li>Is progressively worsening rather than improving with rest</li>
              </ul>
            </div>

            {/* URGENT MEDICAL SAFETY WARNING BOX */}
            <div className="spine-medical-alert-box">
              <div className="spine-alert-badge">
                <span className="spine-alert-icon">⚠️</span>
                <span>Important Medical Notice</span>
              </div>
              <h3 className="spine-alert-heading">When Neck Symptoms Need Urgent Medical Attention</h3>
              <p>
                Seek urgent medical assessment if neck symptoms are accompanied by concerning features such as:{' '}
                <strong>new or significant muscle weakness in an arm or leg</strong>,{' '}
                <strong>new numbness or loss of sensation</strong>,{' '}
                <strong>new difficulty walking or coordinating movements</strong>,{' '}
                <strong>significant loss of hand dexterity</strong>,{' '}
                <strong>symptoms following a major trauma/injury</strong>, or{' '}
                <strong>fever and severe systemic illness</strong>.
              </p>
              <p className="spine-alert-footnote">
                If you are concerned about your symptoms or they are rapidly worsening, seek appropriate medical care
                rather than relying on information from this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SECTION 10 — NECK PAIN & EVERYDAY LIFE */}
      <section className="section spine-everyday-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Active Living</span>
            <h2 className="section-title">Neck Pain &amp; Everyday Life</h2>
            <p className="section-subtitle">
              Managing neck pain involves learning comfortable movement strategies across all your daily activities.
            </p>
          </div>

          <div className="spine-activity-scenarios">
            <div className="spine-scenario-item">
              <h4>Computer &amp; Laptop Work</h4>
              <p>Keep your screen at eye level, support forearms on your desk, and change postures every 30-45 minutes.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Mobile Phone Use</h4>
              <p>Hold your phone slightly higher to avoid dropping your chin to your chest for extended periods.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Driving &amp; Commuting</h4>
              <p>Adjust the rear-view mirrors while sitting tall so they remind you if your posture begins to slouch.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Sleeping &amp; Pillow Height</h4>
              <p>Use a pillow that keeps your neck neutral with your spine, whether you sleep on your back or side.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Studying &amp; Reading</h4>
              <p>Use a book stand or laptop riser to angle reading material upward instead of hunching over a flat table.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Exercise &amp; Fitness</h4>
              <p>Incorporate regular upper-body mobility drills and moderate cardiovascular activity to keep muscles energized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. SECTION 11 — WHY CHOOSE US */}
      <section className="section spine-why-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Patient Commitment</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Dedicated to honest, evidence-based orthopedic and cervical physical therapy in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid">
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Attention</h3>
              <p>
                Care is planned according to your individual symptoms, movement findings, and daily routine.
              </p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Patient-Centered Approach</h3>
              <p>
                The focus is on understanding your specific functional needs rather than a rigid template.
              </p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Movement &amp; Exercise Focus</h3>
              <p>
                Active movement, postural retraining, and guided strengthening are prioritized for sustainable recovery.
              </p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">4</div>
              <h3>Convenient Central Location</h3>
              <p>
                Situated in Zila Parishad Market, Juran Chapra Road, Muzaffarpur with clean consultation facilities.
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
                At Advance Physiotherapy Centre, he conducts thorough cervical assessments, provides gentle manual
                techniques, and creates customized strengthening programmes to help patients recover comfortable neck
                movement.
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
              <h2 className="section-title">Cervical &amp; Neck Pain Physiotherapy in Juran Chapra, Muzaffarpur</h2>
              <p>
                Advance Physiotherapy Centre provides personalized physiotherapy and rehabilitation care for patients
                experiencing neck pain, cervical discomfort, stiffness, and movement-related concerns in Juran Chapra,
                Muzaffarpur.
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
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how physical therapy supports neck and cervical recovery.
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

      {/* 18. SECTION 15 — FINAL CONVERSION CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Take the Next Step Toward Comfortable Movement</h2>
            <p className="spine-final-sub">
              If neck pain, stiffness or movement difficulties are affecting your daily life, a professional assessment
              can help you understand your options and start an individualized rehabilitation plan.
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
