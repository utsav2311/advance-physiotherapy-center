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

export default function FrozenShoulderService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('frozen-shoulder', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment for frozen shoulder at Advance Physiotherapy Centre. Please let me know the available time.`;

  // Exactly 5 Focused Clinical & Local FAQs
  const shoulderFaqs = [
    {
      q: 'What is frozen shoulder?',
      a: 'Frozen shoulder, also called adhesive capsulitis, is a condition involving shoulder pain and significant stiffness that can restrict normal arm movement as the surrounding connective tissue capsule thickens and tightens.',
    },
    {
      q: 'What are the common symptoms of frozen shoulder?',
      a: 'Common symptoms include persistent shoulder aching (often worse at night), stiffness, and noticeable difficulty with movements such as reaching overhead, reaching behind the back, or fastening clothes.',
    },
    {
      q: 'Can physiotherapy help with frozen shoulder?',
      a: 'Physiotherapy may help improve shoulder mobility, strength and function and can be an important part of rehabilitation depending on the individual’s stage of condition, using gentle joint mobilization, active-assisted stretching, and progressive exercise.',
    },
    {
      q: 'How long does frozen shoulder take to improve?',
      a: 'Recovery can vary considerably between individuals. The course depends on the person’s symptoms, the stage of the condition, and response to guided rehabilitation and daily home exercises.',
    },
    {
      q: 'Can I book frozen shoulder physiotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. Patients can contact the clinic through WhatsApp or call to schedule an assessment.',
    },
  ];

  return (
    <article className="spine-service-page shoulder-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Frozen Shoulder Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Get personalized physiotherapy for frozen shoulder and shoulder stiffness in Muzaffarpur. Advance Physiotherapy Centre provides assessment, mobility-focused rehabilitation and exercise-based care."
        path="/services/frozen-shoulder"
        image="/images/frozen-shoulder-physiotherapy-hero.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Frozen Shoulder Physiotherapy in Muzaffarpur',
          description:
            'Get personalized physiotherapy for frozen shoulder and shoulder stiffness in Muzaffarpur. Advance Physiotherapy Centre provides assessment, mobility-focused rehabilitation and exercise-based care.',
          url: `${SITE.url}/services/frozen-shoulder`,
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
              name: 'Frozen Shoulder',
              item: `${SITE.url}/services/frozen-shoulder`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: shoulderFaqs.map((faq) => ({
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
          { label: 'Frozen Shoulder' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">FROZEN SHOULDER CARE · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Frozen Shoulder Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and rehabilitation for shoulder pain, stiffness and difficulty moving the
                arm.
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
                  src="/images/frozen-shoulder-physiotherapy-hero.webp"
                  alt="Professional physiotherapist gently assessing shoulder movement and stiffness of a patient in clinic in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Shoulder Mobility &amp; Capsule Assessment</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Care by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — UNDERSTANDING FROZEN SHOULDER */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">Understanding Frozen Shoulder</h2>
              <div className="spine-prose">
                <p>
                  Frozen shoulder, also known as adhesive capsulitis, is a condition characterized by pain and
                  significant stiffness of the shoulder joint.
                </p>
                <p>
                  People may find it increasingly difficult to move the arm, particularly during activities such as
                  reaching overhead, reaching behind the back or putting on clothes.
                </p>
                <p>
                  Symptoms and recovery can vary from person to person. A professional assessment can help understand the
                  pattern of pain, stiffness, movement restriction and how the condition is affecting everyday
                  activities.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Appointment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* AI IMAGE #2 — SHOULDER ANATOMY EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/shoulder-joint-anatomy.webp"
                  alt="Educational 3D anatomical visualization of the human shoulder joint showing humerus, glenoid socket, scapula, and capsule"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Shoulder Joint Anatomy</h4>
                <p className="spine-anatomy-part-desc">
                  The shoulder is a ball-and-socket joint encased in a flexible connective tissue capsule that allows
                  wide multi-directional arm motion.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Humerus</span>
                  <span className="spine-doc-point">Glenoid Socket</span>
                  <span className="spine-doc-point">Scapula</span>
                  <span className="spine-doc-point">Clavicle</span>
                  <span className="spine-doc-point">Joint Capsule</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Illustration for educational purposes only.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON SYMPTOMS OF FROZEN SHOULDER */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Recognizing Symptoms</span>
            <h2 className="section-title">Common Symptoms of Frozen Shoulder</h2>
            <p className="section-subtitle">
              Adhesive capsulitis typically presents with both persistent pain and marked range-of-motion limitations.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Shoulder Pain', desc: 'Dull or aching pain, frequently worse at night or when lying on the side.' },
              { title: 'Shoulder Stiffness', desc: 'Progressive tightening and restricted movement of the shoulder joint.' },
              { title: 'Difficulty Raising Arm', desc: 'Inability to comfortably elevate the arm forward or to the side.' },
              { title: 'Reaching Overhead', desc: 'Difficulty accessing overhead shelves, cupboards, or washing hair.' },
              { title: 'Reaching Behind Back', desc: 'Marked restriction when fastening garments, belts, or tucking in shirts.' },
              { title: 'Dressing & Daily Tasks', desc: 'Struggles with jackets, pullovers, and routine household movements.' },
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
            Symptoms can vary depending on the stage of the condition. A professional assessment helps determine the most
            appropriate approach.
          </p>

          {/* MOVEMENT RESTRICTION VISUAL */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/frozen-shoulder-movement-restriction.webp"
                alt="Educational visualization demonstrating shoulder movement limitations and capsule tightness"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Movement Restriction</span>
              <h3 className="spine-sciatica-heading">Understanding Capsular Tightness</h3>
              <p>
                In frozen shoulder, the flexible tissue capsule surrounding the shoulder joint becomes inflamed, thick,
                and tight. This mechanically restricts the ball from gliding freely within the socket.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Forward Elevation</span>
                <span className="spine-doc-point">📍 External Rotation</span>
                <span className="spine-doc-point">📍 Internal Rotation</span>
                <span className="spine-doc-point">📍 Joint Capsule</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                Targeted physical therapy focuses on gentle joint mobilization and progressive stretching to help restore
                comfortable glide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT MAKES FROZEN SHOULDER DIFFERENT? */}
      <section className="section spine-problems-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Differentiation</span>
            <h2 className="section-title">What Makes Frozen Shoulder Different?</h2>
            <p className="section-subtitle">
              Frozen shoulder is characterized by both pain and significant restriction of active and passive shoulder
              movement.
            </p>
          </div>

          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Reaching Overhead &amp; Shelves</h3>
              <p className="spine-card-desc">
                Elevating the arm straight up becomes physically blocked, requiring compensation by tilting the torso.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Reaching Behind the Back</h3>
              <p className="spine-card-desc">
                Internal rotation is commonly the most restricted plane, making fastening clothing or reaching a back
                pocket difficult.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Dressing &amp; Grooming</h3>
              <p className="spine-card-desc">
                Putting on shirts, jackets, or combing hair requires awkward arm positions that can trigger sharp
                twinges.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Night-Time Sleep Comfort</h3>
              <p className="spine-card-desc">
                Lying on the affected shoulder can cause throbbing aches that disrupt restful sleep cycles.
              </p>
            </div>
          </div>

          <div className="spine-guidance-disclaimer text-center" style={{ marginTop: '2.5rem' }}>
            <p>
              Not every painful or stiff shoulder is frozen shoulder. A proper clinical assessment is important to
              distinguish between rotator cuff issues, bursitis, and true capsular stiffness.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW PHYSIOTHERAPY CAN HELP */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How Physiotherapy Can Help With Frozen Shoulder</h2>
            <p className="section-subtitle">
              Physiotherapy focuses on understanding your pain and movement limitations, then developing an appropriate
              rehabilitation approach based on your symptoms and goals.
            </p>
          </div>

          {/* 4-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assessment</div>
                <div className="spine-pipe-desc">Understanding pain, stiffness, movement and daily limitations.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Movement Evaluation</div>
                <div className="spine-pipe-desc">Assessing shoulder mobility, strength and functional limits.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Rehabilitation</div>
                <div className="spine-pipe-desc">
                  Using appropriate mobility exercises, strengthening and gentle techniques.
                </div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Monitoring changes and gradually adjusting the programme.</div>
              </div>
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
          <div className="spine-modalities-grid">
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Mobility Exercises</h3>
              <p>Appropriate exercises may help improve comfortable shoulder movement and gradual range of motion.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Strengthening</h3>
              <p>Progressive strengthening may support shoulder and upper-body function where appropriate.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧭</div>
              <h3>Pain &amp; Activity Management</h3>
              <p>Guidance may help patients manage daily activities while gradually improving comfortable movement.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Home Exercise Programme</h3>
              <p>Patients may receive appropriate exercises and activity guidance to continue progress at home.</p>
            </div>
          </div>

          <div className="spine-guidance-disclaimer text-center" style={{ marginTop: '2rem' }}>
            <p>
              Where appropriate, gentle manual therapy may be incorporated as part of a broader rehabilitation plan.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — GETTING BACK TO EVERYDAY ACTIVITIES */}
      <section className="section spine-everyday-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Daily Function</span>
            <h2 className="section-title">Getting Back to Everyday Activities</h2>
            <p className="section-subtitle">
              Rehabilitation aims to help you gradually regain comfortable movement and confidence with everyday
              activities.
            </p>
          </div>

          <div className="spine-activity-scenarios">
            <div className="spine-scenario-item">
              <h4>Dressing Comfortably</h4>
              <p>Tips on sleeve order and garment selection to reduce uncomfortable shoulder twisting.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Reaching Overhead</h4>
              <p>Gradual progressive elevation drills to make reaching for household items smoother.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Reaching Behind the Back</h4>
              <p>Towel and wand stretches to steadily recover comfortable internal rotation.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Personal Grooming</h4>
              <p>Adaptive arm positioning strategies for washing, combing, and hair care.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Sleeping Positions</h4>
              <p>Pillow support techniques to offload pressure from the affected shoulder during sleep.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Gradual Exercise</h4>
              <p>Gentle low-impact physical conditioning to keep upper body muscles active without overload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
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
              <p>Your pain, stiffness, concerns, activities and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Shoulder movement, mobility, strength and relevant functional limitations may be evaluated.</p>
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

      {/* SECTION 9 — WHY CHOOSE US & DOCTOR PROFILE */}
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
              <p>Rehabilitation strategies based on individual assessment.</p>
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
                {SITE.doctor} provides thorough shoulder mobility evaluations at Advance Physiotherapy Centre, creating
                tailored mobilization and exercise programmes to help patients regain arm movement and functional
                comfort.
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
      <section className="section spine-safety-section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="spine-medical-alert-box" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="spine-alert-badge">
              <span className="spine-alert-icon">⚠️</span>
              <span>Important Medical Notice</span>
            </div>
            <h3 className="spine-alert-heading">When Urgent Medical Assessment Is Needed</h3>
            <p>
              Shoulder pain and stiffness can have different causes. <strong>Severe pain after a significant injury</strong>,{' '}
              <strong>a visibly deformed shoulder joint</strong>, <strong>inability to use or move the arm after an injury</strong>,{' '}
              <strong>rapidly increasing swelling</strong>, <strong>fever with a hot or severely swollen joint</strong>, or rapidly
              worsening symptoms may require appropriate urgent medical assessment.
            </p>
            <p className="spine-alert-footnote">
              This website provides general information and is not a diagnosis. If you are concerned about your
              symptoms, seek appropriate medical care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ (5 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how physical therapy supports frozen shoulder recovery.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {shoulderFaqs.map((faq, index) => {
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
            <h2 className="spine-final-title">Ready to Take the Next Step?</h2>
            <p className="spine-final-sub">
              If shoulder pain or stiffness is affecting your daily activities, speak with our physiotherapy team about
              an appropriate assessment.
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
