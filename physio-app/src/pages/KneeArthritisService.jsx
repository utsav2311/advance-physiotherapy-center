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

export default function KneeArthritisService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('knee-joint-arthritis', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to book an appointment for knee pain/arthritis at Advance Physiotherapy Centre. Please let me know the available time.`;

  // Exactly 5 Focused Clinical & Local FAQs
  const kneeFaqs = [
    {
      q: 'Can physiotherapy help with knee arthritis?',
      a: 'Physiotherapy may help many people with knee osteoarthritis by supporting strength, movement, physical function and activity according to individual needs, without relying solely on medications.',
    },
    {
      q: 'Can exercise help knee pain?',
      a: 'Appropriate exercise can be an important part of rehabilitation for many knee conditions. The type and intensity should be selected according to the individual’s condition and functional abilities.',
    },
    {
      q: 'Does knee arthritis always require surgery?',
      a: 'Not necessarily. Management depends on the severity of symptoms, functional limitations, individual circumstances and response to non-surgical physical rehabilitation approaches.',
    },
    {
      q: 'Should I avoid walking or exercise if my knee hurts?',
      a: 'Not necessarily. The appropriate level and type of activity depends on the individual’s symptoms and condition. A physiotherapist can help determine suitable activity, pacing and progressive loading.',
    },
    {
      q: 'Can I book knee physiotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. Patients can contact the clinic through WhatsApp or call to schedule an assessment.',
    },
  ];

  return (
    <article className="spine-service-page knee-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Knee Pain & Arthritis Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Personalized physiotherapy for knee pain and arthritis in Muzaffarpur. Advance Physiotherapy Centre provides assessment, exercise-based rehabilitation and mobility-focused care."
        path="/services/knee-joint-arthritis"
        image="/images/knee-pain-physiotherapy-hero.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Knee Pain & Arthritis Physiotherapy in Muzaffarpur',
          description:
            'Personalized physiotherapy for knee pain and arthritis in Muzaffarpur. Advance Physiotherapy Centre provides assessment, exercise-based rehabilitation and mobility-focused care.',
          url: `${SITE.url}/services/knee-joint-arthritis`,
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
              name: 'Knee & Joint Arthritis',
              item: `${SITE.url}/services/knee-joint-arthritis`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: kneeFaqs.map((faq) => ({
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
          { label: 'Knee & Joint Arthritis' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">KNEE &amp; JOINT CARE · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Knee Pain &amp; Arthritis Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and rehabilitation care for knee pain, stiffness, reduced mobility and
                arthritis-related movement difficulties.
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
                  src="/images/knee-pain-physiotherapy-hero.webp"
                  alt="Professional physiotherapist gently assessing knee joint movement of an adult patient in a modern physiotherapy clinic in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Knee Joint Movement Assessment</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Care by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — UNDERSTANDING KNEE PAIN & ARTHRITIS */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">Understanding Knee Pain &amp; Arthritis</h2>
              <div className="spine-prose">
                <p>
                  Knee pain can affect walking, climbing stairs, sitting, standing, exercising and other everyday
                  activities.
                </p>
                <p>
                  Arthritis is one possible cause of ongoing knee pain and stiffness. Osteoarthritis, for example,
                  involves changes within the joint cartilage and surrounding tissues that can be associated with pain,
                  stiffness and reduced function.
                </p>
                <p>
                  Symptoms and their impact can vary from person to person. A physiotherapy assessment helps understand
                  movement limitations, muscular strength, activity levels and individual goals.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Appointment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* AI IMAGE #2 — KNEE ANATOMY EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/knee-joint-anatomy-3d-diagram.webp"
                  alt="Educational 3D anatomical visualization of the human knee joint showing femur, tibia, patella, cartilage, and meniscus"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Knee Joint Anatomy</h4>
                <p className="spine-anatomy-part-desc">
                  The knee is a complex hinge joint supported by strong ligaments, shock-absorbing menisci, and protective articular cartilage.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Femur</span>
                  <span className="spine-doc-point">Tibia</span>
                  <span className="spine-doc-point">Patella</span>
                  <span className="spine-doc-point">Cartilage</span>
                  <span className="spine-doc-point">Meniscus</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Illustration for educational purposes only.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMMON SYMPTOMS OF KNEE PROBLEMS */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Recognizing Symptoms</span>
            <h2 className="section-title">Common Symptoms of Knee Problems</h2>
            <p className="section-subtitle">
              Knee discomfort can present in various ways depending on joint demands and muscle strength.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Knee Pain', desc: 'Discomfort that may increase during walking or standing.' },
              { title: 'Joint Stiffness', desc: 'Reduced ease of movement, especially after periods of rest.' },
              { title: 'Joint Swelling', desc: 'Mild puffiness or tightness around the knee joint.' },
              { title: 'Difficulty Walking', desc: 'Changes in walking pace or stride comfort.' },
              { title: 'Pain on Stairs', desc: 'Discomfort when stepping up or descending staircases.' },
              { title: 'Standing from a Chair', desc: 'Stiffness when rising from seated positions.' },
              { title: 'Reduced Knee Movement', desc: 'Limitation when fully bending or straightening the leg.' },
              { title: 'Difficulty Staying Active', desc: 'Hesitation during regular exercise or hobbies.' },
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

          {/* AI IMAGE #3 — KNEE PAIN AREAS VISUAL */}
          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/knee-pain-symptom-areas.webp"
                alt="Medical educational visualization of the human leg showing common knee pain locations"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Symptom Localization</span>
              <h3 className="spine-sciatica-heading">Where Knee Symptoms Are Commonly Experienced</h3>
              <p>
                Knee discomfort may be felt at the front around the kneecap, along the inner joint line, or across the
                supporting quadriceps and hamstring muscles.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Kneecap (Patella)</span>
                <span className="spine-doc-point">📍 Inner Joint Line</span>
                <span className="spine-doc-point">📍 Outer Knee</span>
                <span className="spine-doc-point">📍 Thigh &amp; Calf</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                Targeted physical rehabilitation helps address surrounding muscle weakness and restore joint support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMMON KNEE PROBLEMS */}
      <section className="section spine-problems-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Care</span>
            <h2 className="section-title">Common Knee Problems We May Help With</h2>
            <p className="section-subtitle">
              Tailored physiotherapy support for mechanical, degenerative, and mobility-related knee presentations.
            </p>
          </div>

          {/* 4 Concise Cards */}
          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Knee Osteoarthritis</h3>
              <p className="spine-card-desc">
                A common joint condition that can be associated with knee pain, stiffness and difficulty with movement,
                where guided strengthening may help manage symptoms and improve function.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Knee Stiffness</h3>
              <p className="spine-card-desc">
                Reduced comfortable movement of the knee that may affect walking speed, squatting, and daily activities.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Knee Pain During Activity</h3>
              <p className="spine-card-desc">
                Pain that may occur during walking, stairs, squatting, exercise or other daily physical tasks.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Reduced Strength &amp; Mobility</h3>
              <p className="spine-card-desc">
                Reduced muscle strength, joint movement or physical activity may contribute to difficulty performing
                everyday tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW PHYSIOTHERAPY CAN HELP */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How Physiotherapy Can Help With Knee Pain</h2>
            <p className="section-subtitle">
              Physiotherapy focuses on improving movement, strength and confidence with everyday activities while
              helping you manage symptoms according to your individual needs.
            </p>
          </div>

          {/* 4-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assessment</div>
                <div className="spine-pipe-desc">Understanding symptoms, medical history, movement and activity goals.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Movement &amp; Strength</div>
                <div className="spine-pipe-desc">Looking at knee movement, strength, balance and functional tasks.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Rehabilitation</div>
                <div className="spine-pipe-desc">Selecting appropriate exercises, activity guidance and techniques.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Monitoring progress and adjusting the programme when needed.</div>
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
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Exercise Therapy</h3>
              <p>Appropriate exercises may help improve knee strength, mobility, balance and physical function.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Mobility Exercises</h3>
              <p>Movement exercises may help maintain or improve comfortable joint movement and flexion.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🦵</div>
              <h3>Strengthening</h3>
              <p>Progressive strengthening may support the quadriceps and calf muscles involved in walking and stairs.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Activity &amp; Home Guidance</h3>
              <p>Patients may receive guidance on appropriate activity, exercises and ways to gradually build physical capacity.</p>
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
              Rehabilitation aims to help you move more comfortably and confidently within your individual abilities.
            </p>
          </div>

          <div className="spine-activity-scenarios">
            <div className="spine-scenario-item">
              <h4>Walking with Comfort</h4>
              <p>Gradual walking pacing strategies and cadence guidance to minimize knee strain during daily walks.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Climbing Stairs</h4>
              <p>Strengthening thigh and hip stabilizers to build confidence when going up and down steps.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Sitting &amp; Standing</h4>
              <p>Techniques and muscle activation drills to make getting up from chairs and sofas smoother.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Squatting &amp; Bending</h4>
              <p>Safe knee alignment and hip-hinge mechanics for household tasks and gardening.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Exercise &amp; Fitness</h4>
              <p>Low-impact conditioning (such as cycling or walking) tailored to your knee joint tolerance.</p>
            </div>
            <div className="spine-scenario-item">
              <h4>Household Activities</h4>
              <p>Practical pacing tips to carry out daily domestic chores without fatigue flare-ups.</p>
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
              <p>Your symptoms, concerns, daily activities and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Relevant knee movement, strength, balance and function may be evaluated.</p>
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
              <h3>Exercise &amp; Movement Focus</h3>
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
                {SITE.doctor} provides thorough joint assessments and functional mobility evaluations at Advance
                Physiotherapy Centre, creating tailored strengthening and mobility programmes to help patients regain
                knee confidence.
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
              Knee pain can have different causes. <strong>Severe pain</strong>, <strong>significant rapid swelling</strong>,{' '}
              <strong>inability to bear weight on the leg</strong>, <strong>symptoms following a serious traumatic injury</strong>,{' '}
              <strong>fever with a hot or severely swollen joint</strong>, or rapidly worsening symptoms may require
              appropriate medical assessment.
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
              Clear answers to help you understand how physical therapy supports knee and joint recovery.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {kneeFaqs.map((faq, index) => {
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
              If knee pain or stiffness is affecting your daily activities, speak with our physiotherapy team about an
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
