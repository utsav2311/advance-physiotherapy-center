import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqItem from '../components/FaqItem';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { PhoneIcon, LocationIcon, ClockIcon } from '../components/Icons';
import { SITE } from '../data/site';

export default function Process() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const bookingMessage =
    'Hello Dr. Shahrukh, I would like to enquire about a physiotherapy appointment at Advance Physiotherapy Centre. Please let me know the available appointment time.';

  const journeySteps = [
    { num: '01', title: 'Book', desc: 'Connect via WhatsApp or phone' },
    { num: '02', title: 'Consult', desc: 'Discuss your symptoms & history' },
    { num: '03', title: 'Assess', desc: 'Evaluate movement & physical function' },
    { num: '04', title: 'Plan', desc: 'Formulate tailored recovery plan' },
    { num: '05', title: 'Rehabilitate', desc: 'Guided exercise & clinical therapy' },
    { num: '06', title: 'Review', desc: 'Ongoing check on functional progress' },
    { num: '07', title: 'Progress', desc: 'Rebuild long-term mobility confidence' },
  ];

  const faqs = [
    {
      q: 'What happens during my first physiotherapy visit?',
      a: 'Your physiotherapist will discuss your concerns and relevant history, perform an appropriate movement assessment, and explain possible treatment options tailored to your specific condition.',
    },
    {
      q: 'Do I need to bring my medical reports?',
      a: 'If you have previous reports, scans (X-ray, MRI), prescriptions, or prior treatment records relevant to your concern, bringing them helps provide valuable clinical background information.',
    },
    {
      q: 'Will I receive exercises to do at home?',
      a: 'Depending on your condition, your physiotherapist may provide tailored exercises, ergonomic tips, or activity modification guidance to practice safely between appointments.',
    },
    {
      q: 'How long will physiotherapy treatment take?',
      a: 'Treatment duration varies depending on your individual condition, recovery goals, and response to rehabilitation. Your physiotherapist can discuss an estimated roadmap after your initial assessment.',
    },
    {
      q: 'How can I book an appointment?',
      a: 'You can use the WhatsApp "Book Appointment" button to message us directly or call the clinic at +91 83402 76169 during working hours (Mon–Sat, 9:00 AM – 6:00 PM).',
    },
  ];

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: SITE.name,
      url: `${SITE.url}/process`,
      logo: `${SITE.url}/images/clinic-logo.webp`,
      image: `${SITE.url}/images/physiotherapy-consultation-muzaffarpur.webp`,
      description:
        'Step-by-step patient journey at Advance Physiotherapy Centre in Muzaffarpur — initial consultation, physical movement assessment, individualized rehabilitation plan, and functional progress review.',
      telephone: SITE.phonePrimary,
      medicalSpecialty: 'Physiotherapy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zila Parishad Market, Juran Chapra Road, Brahmapura',
        addressLocality: 'Muzaffarpur',
        addressRegion: 'Bihar',
        postalCode: '842001',
        addressCountry: 'IN',
      },
      physician: {
        '@type': 'Person',
        name: SITE.doctor,
        jobTitle: 'Chief Physiotherapist',
        description: SITE.credentials,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Process',
          item: `${SITE.url}/process`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <div className="process-page">
      <Seo
        title="Physiotherapy Treatment Process in Muzaffarpur | Advance Physiotherapy Centre"
        description="Understand what to expect at Advance Physiotherapy Centre in Muzaffarpur, from your first consultation and assessment to personalized rehabilitation and progress review."
        path="/process"
        image="/images/physiotherapy-consultation-muzaffarpur.webp"
      />

      <JsonLd data={schemaData} />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Process' }]} />

      {/* SECTION 1 — HERO */}
      <section className="process-hero-section">
        <div className="container">
          <div className="process-hero-grid">
            <Reveal variant="fade-right" className="process-hero-content">
              <div className="process-hero-badge">YOUR PHYSIOTHERAPY JOURNEY</div>
              <h1 className="process-hero-title">Your Physiotherapy Journey, Step by Step</h1>
              <p className="process-hero-sub">
                From your first conversation to your rehabilitation plan, we focus on understanding your concerns,
                setting practical goals, and guiding you through your recovery.
              </p>

              <div className="process-hero-ctas">
                <WhatsAppButton
                  className="btn btn-primary btn-lg"
                  message={bookingMessage}
                >
                  Book Appointment
                </WhatsAppButton>
                <a
                  href={`tel:${SITE.phonePrimary}`}
                  className="btn btn-secondary btn-lg"
                >
                  <PhoneIcon />
                  <span>Call Clinic</span>
                </a>
              </div>

              <div className="process-location-tag">
                <LocationIcon />
                <span>Juran Chapra · Muzaffarpur</span>
              </div>
            </Reveal>

            <Reveal variant="scale-in" delayStep={0.15} className="process-hero-img-wrap">
              <img
                src="/images/physiotherapy-consultation-muzaffarpur.webp"
                alt="Physiotherapist discussing a patient's rehabilitation plan"
                className="process-hero-img"
                width="1600"
                height="900"
                loading="eager"
                decoding="async"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — JOURNEY OVERVIEW */}
      <section className="process-overview-section">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="section-badge">OVERVIEW</span>
            <h2 className="section-title">Your Journey With Us</h2>
            <p className="section-subtitle">
              A transparent, patient-first roadmap from initial inquiry to long-term mobility independence.
            </p>
          </Reveal>

          <div className="process-timeline-nav">
            {journeySteps.map((step, idx) => (
              <Reveal index={idx} delayStep={0.06} variant="scale-in" key={step.num}>
                <div className="process-nav-step">
                  <span className="process-nav-num">{step.num}</span>
                  <div className="process-nav-title">{step.title}</div>
                  <div className="process-nav-desc">{step.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — STEP 01: BOOK */}
      <section className="process-step-section" id="step-01">
        <div className="container">
          <div className="process-step-split">
            <Reveal variant="fade-right" className="process-step-content">
              <span className="process-step-badge">STEP 01</span>
              <h2 className="process-step-heading">01 — Book Your Appointment</h2>
              <div className="process-step-sub">Start With a Conversation</div>
              <p className="process-step-body">
                Contact Advance Physiotherapy Centre through WhatsApp or phone and briefly tell us about your concern.
                Our clinical team will help schedule a convenient consultation time.
              </p>

              <p style={{ fontWeight: 600, color: 'var(--gray-800)', marginBottom: '0.5rem', fontSize: '0.92rem' }}>
                You can mention:
              </p>
              <ul className="process-check-list">
                <li>Where you&apos;re experiencing discomfort or restricted mobility</li>
                <li>How long you&apos;ve had the problem</li>
                <li>Whether it followed an injury, surgery, or prolonged posture strain</li>
                <li>Whether you have previous scan reports or doctor prescriptions</li>
              </ul>

              <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                Book Appointment → WhatsApp
              </WhatsAppButton>
            </Reveal>

            <Reveal variant="fade-left" delayStep={0.1}>
              <div className="process-checklist-card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--gray-900)' }}>
                  Fast Booking Assistance
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  We assist patients from across Muzaffarpur, Brahmapura, Mithanpura, and nearby North Bihar districts.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="process-check-item">
                    <ClockIcon />
                    <span className="process-check-text"><strong>Clinic Hours:</strong> Mon – Sat: 9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="process-check-item">
                    <LocationIcon />
                    <span className="process-check-text"><strong>Location:</strong> Zila Parishad Market, Juran Chapra Road</span>
                  </div>
                  <div className="process-check-item">
                    <PhoneIcon />
                    <span className="process-check-text"><strong>Direct Call:</strong> +91 83402 76169 / +91 91554 86434</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STEP 02: CONSULTATION */}
      <section className="process-step-section" id="step-02">
        <div className="container">
          <div className="process-step-split">
            <Reveal variant="fade-right">
              <div className="process-checklist-card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.75rem' }}>
                  Discussion Areas in Detail
                </h3>
                <ul className="process-check-list" style={{ marginBottom: 0 }}>
                  <li><strong>Main Concern:</strong> Location, intensity, and aggravating activities</li>
                  <li><strong>Medical History:</strong> Past health conditions, general wellness, and lifestyle</li>
                  <li><strong>Prior Surgery or Injury:</strong> Orthopedic, spine, sports, or neurological history</li>
                  <li><strong>Daily Activities:</strong> Desk work, standing hours, driving, or household demands</li>
                  <li><strong>Work or Sports Requirements:</strong> Specific physical demands you wish to resume</li>
                  <li><strong>Your Personal Goals:</strong> Pain-free walking, returning to work, or playing sports</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delayStep={0.1} className="process-step-content">
              <span className="process-step-badge">STEP 02</span>
              <h2 className="process-step-heading">02 — Initial Consultation</h2>
              <div className="process-step-sub">We Listen Before We Treat</div>
              <p className="process-step-body">
                Your first visit starts by understanding your concerns, medical history, daily activities, and
                rehabilitation goals. We believe effective physiotherapy begins with attentive listening.
              </p>
              <div className="process-note-box">
                No two patients are identical. Your consultation is a dedicated 1-on-1 discussion tailored to your
                unique situation rather than a rushed standard checklist.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — STEP 03: PHYSICAL ASSESSMENT */}
      <section className="process-step-section" id="step-03">
        <div className="container">
          <div className="process-step-split">
            <Reveal variant="fade-right" className="process-step-content">
              <span className="process-step-badge">STEP 03</span>
              <h2 className="process-step-heading">03 — Physical Assessment</h2>
              <div className="process-step-sub">Understand How Your Body Is Moving</div>
              <p className="process-step-body">
                Depending on your condition, the physiotherapist may assess relevant aspects of movement and physical
                function using gentle, hands-on clinical evaluation techniques.
              </p>

              <div className="process-assess-grid">
                {[
                  { icon: '📐', title: 'Range of Motion', text: 'Measuring joint angles and movement flexibility.' },
                  { icon: '💪', title: 'Strength', text: 'Evaluating muscular stability and power balance.' },
                  { icon: '⚖️', title: 'Balance & Coordination', text: 'Testing functional stability and neurological control.' },
                  { icon: '🧍', title: 'Posture & Movement', text: 'Analyzing spinal alignment and gait mechanics.' },
                  { icon: '🔍', title: 'Pain & Limitations', text: 'Identifying specific movement triggers safely.' },
                ].map((item, idx) => (
                  <Reveal index={idx} delayStep={0.05} variant="scale-in" key={item.title}>
                    <div className="process-assess-item">
                      <span className="process-assess-icon">{item.icon}</span>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="process-note-box">
                The assessment is tailored to your condition rather than using the same approach for everyone.
              </div>
            </Reveal>

            <Reveal variant="fade-left" delayStep={0.15} className="process-img-box">
              <img
                src="/images/physiotherapy-assessment-muzaffarpur.webp"
                alt="Physiotherapist performing a movement assessment"
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 — STEP 04: PERSONALIZED PLAN */}
      <section className="process-step-section" id="step-04">
        <div className="container">
          <div className="process-step-split">
            <Reveal variant="fade-right">
              <div className="process-checklist-card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.75rem' }}>
                  Possible Clinical Elements in Your Plan
                </h3>
                <ul className="process-check-list" style={{ marginBottom: 0 }}>
                  <li><strong>Therapeutic Exercise:</strong> Targeted activation for vulnerable muscles</li>
                  <li><strong>Mobility &amp; Strengthening:</strong> Progressive exercises for joint health</li>
                  <li><strong>Manual Therapy:</strong> Gentle joint mobilization and myofascial release where appropriate</li>
                  <li><strong>Electrotherapy Modalities:</strong> TENS, Ultrasound, or IFT when clinically indicated</li>
                  <li><strong>Posture &amp; Ergonomics:</strong> Desk setup and spinal alignment guidance</li>
                  <li><strong>Functional Rehabilitation:</strong> Task-specific gait and movement retraining</li>
                  <li><strong>Home Exercise Guidance:</strong> Simple routines to sustain gains at home</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delayStep={0.1} className="process-step-content">
              <span className="process-step-badge">STEP 04</span>
              <h2 className="process-step-heading">04 — Personalized Treatment Plan</h2>
              <div className="process-step-sub">Your Treatment Is Based on Your Assessment</div>
              <p className="process-step-body">
                Once the relevant findings are understood, your physiotherapist can discuss an appropriate treatment
                and rehabilitation approach designed around your pace and comfort.
              </p>
              <div className="process-note-box">
                The treatment approach is selected according to your condition, goals, and response to rehabilitation.
                We never apply generic, one-size-fits-all protocols.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 7 — STEP 05: GUIDED REHABILITATION */}
      <section className="process-step-section" id="step-05">
        <div className="container">
          <div className="process-step-split">
            <Reveal variant="fade-right" className="process-step-content">
              <span className="process-step-badge">STEP 05</span>
              <h2 className="process-step-heading">05 — Guided Rehabilitation</h2>
              <div className="process-step-sub">Progress One Step at a Time</div>
              <p className="process-step-body">
                Rehabilitation focuses on gradual progress according to your condition, goals, and response to
                treatment. Every session is supervised to ensure proper technique and safety.
              </p>

              <div className="process-progression-track">
                <div className="process-prog-item">
                  <div className="process-prog-num">Phase 1</div>
                  <div className="process-prog-text">Reduce Limitations</div>
                </div>
                <span className="process-prog-arrow">→</span>
                <div className="process-prog-item">
                  <div className="process-prog-num">Phase 2</div>
                  <div className="process-prog-text">Improve Movement</div>
                </div>
                <span className="process-prog-arrow">→</span>
                <div className="process-prog-item">
                  <div className="process-prog-num">Phase 3</div>
                  <div className="process-prog-text">Build Strength</div>
                </div>
                <span className="process-prog-arrow">→</span>
                <div className="process-prog-item">
                  <div className="process-prog-num">Phase 4</div>
                  <div className="process-prog-text">Restore Function</div>
                </div>
                <span className="process-prog-arrow">→</span>
                <div className="process-prog-item">
                  <div className="process-prog-num">Phase 5</div>
                  <div className="process-prog-text">Return to Activity</div>
                </div>
              </div>

              <div className="process-note-box">
                Sessions are paced comfortably without aggressive or painful manipulation.
              </div>
            </Reveal>

            <Reveal variant="fade-left" delayStep={0.15} className="process-img-box">
              <img
                src="/images/physiotherapy-rehabilitation-exercise.webp"
                alt="Patient performing supervised physiotherapy rehabilitation exercise"
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 8 — STEP 06: HOME GUIDANCE */}
      <section className="process-step-section" id="step-06">
        <div className="container">
          <div className="process-step-split">
            <Reveal variant="fade-right">
              <div className="process-checklist-card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.75rem' }}>
                  Practical Home Strategies
                </h3>
                <ul className="process-check-list" style={{ marginBottom: 0 }}>
                  <li><strong>Home Exercises:</strong> Safe, easy-to-follow stretches and activation drills</li>
                  <li><strong>Activity Modification:</strong> Adjusting daily tasks to prevent joint overload</li>
                  <li><strong>Posture Habits:</strong> Sitting, standing, and sleeping position corrections</li>
                  <li><strong>Workplace Ergonomics:</strong> Screen height, chair support, and regular break habits</li>
                  <li><strong>Safe Progression:</strong> Clear guidelines on when to increase physical activity</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delayStep={0.1} className="process-step-content">
              <span className="process-step-badge">STEP 06</span>
              <h2 className="process-step-heading">06 — Home Guidance</h2>
              <div className="process-step-sub">Your Recovery Doesn&apos;t Stop at the Clinic</div>
              <p className="process-step-body">
                Depending on your condition, your physiotherapist may provide guidance for activities between sessions.
                Empowering you with daily habits helps protect long-term recovery gains.
              </p>
              <div className="process-note-box">
                Follow the guidance provided for your individual condition and communicate with your physiotherapist
                if your symptoms change or worsen.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 9 — STEP 07: REVIEW & PROGRESS */}
      <section className="process-step-section" id="step-07">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="process-step-badge">STEP 07</span>
            <h2 className="process-step-heading">07 — Review &amp; Progress</h2>
            <div className="process-step-sub">We Review How You&apos;re Doing</div>
            <p className="section-subtitle" style={{ maxWidth: 750, margin: '0.5rem auto 1.5rem' }}>
              Your progress is reviewed throughout rehabilitation. Depending on your condition, the treatment plan
              is dynamically adjusted as your movement, strength, symptoms, and functional goals change.
            </p>
          </Reveal>

          <Reveal variant="scale-in" delayStep={0.1}>
            <div className="process-review-loop">
              <span className="process-review-node">ASSESS</span>
              <span className="process-review-arrow">→</span>
              <span className="process-review-node">TREAT</span>
              <span className="process-review-arrow">→</span>
              <span className="process-review-node">REASSESS</span>
              <span className="process-review-arrow">→</span>
              <span className="process-review-node">PROGRESS</span>
            </div>
          </Reveal>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--gray-500)', marginTop: '1.25rem', fontStyle: 'italic' }}>
            *Recovery timelines vary by individual condition, severity, tissue healing rates, and consistency with home guidance.
          </p>
        </div>
      </section>

      {/* SECTION 10 — WHAT SHOULD YOU BRING? */}
      <section className="process-step-section" id="what-to-bring">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="section-badge">CHECKLIST</span>
            <h2 className="section-title">What Should You Bring to Your Appointment?</h2>
            <p className="section-subtitle">
              Having relevant health information helps us perform an accurate initial evaluation.
            </p>
          </Reveal>

          <Reveal variant="scale-in" delayStep={0.1}>
            <div className="process-checklist-card" style={{ maxWidth: 900, margin: '0 auto' }}>
              <div className="process-checklist-grid">
                <div className="process-check-item">
                  <span className="process-check-icon">✓</span>
                  <span className="process-check-text"><strong>Previous Medical Reports:</strong> Past hospital discharge summaries or diagnosis notes</span>
                </div>
                <div className="process-check-item">
                  <span className="process-check-icon">✓</span>
                  <span className="process-check-text"><strong>Imaging &amp; Scans:</strong> X-rays, MRI, CT scans, or ultrasound reports if available</span>
                </div>
                <div className="process-check-item">
                  <span className="process-check-icon">✓</span>
                  <span className="process-check-text"><strong>Relevant Prescriptions:</strong> Current medications and physician recommendations</span>
                </div>
                <div className="process-check-item">
                  <span className="process-check-icon">✓</span>
                  <span className="process-check-text"><strong>Previous Treatment Records:</strong> Records of prior physiotherapy, injections, or surgery</span>
                </div>
                <div className="process-check-item">
                  <span className="process-check-icon">✓</span>
                  <span className="process-check-text"><strong>List of Medications:</strong> Details of pain medications or anti-inflammatory drugs</span>
                </div>
                <div className="process-check-item">
                  <span className="process-check-icon">✓</span>
                  <span className="process-check-text"><strong>Comfortable Clothing:</strong> Loose apparel suitable for joint and movement assessment</span>
                </div>
              </div>

              <div className="process-note-box" style={{ textAlign: 'center', borderLeft: 'none', borderTop: '2px solid var(--primary-400)' }}>
                Don&apos;t have all your reports? That&apos;s okay. Contact the clinic if you&apos;re unsure what to bring.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11 — RETURN TO EVERYDAY LIFE */}
      <section className="process-step-section" id="better-function">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="section-badge">FUNCTIONAL GOALS</span>
            <h2 className="section-title">The Goal Is Better Function</h2>
            <p className="section-subtitle">
              Physiotherapy aims to help you regain comfort and confidence in everyday living.
            </p>
          </Reveal>

          <div className="process-function-grid">
            {[
              { icon: '🏡', title: 'Daily Activities', text: 'Work comfortably toward everyday household tasks, bending, lifting, and walking.' },
              { icon: '💼', title: 'Work & Desk Life', text: 'Progress toward appropriate occupational activities with ergonomic resilience.' },
              { icon: '🏃', title: 'Sport & Exercise', text: 'Gradually return to recreational physical activity, jogging, or sports where appropriate.' },
              { icon: '✨', title: 'Independence', text: 'Build long-term confidence in your movement, joint stability, and posture habits.' },
            ].map((card, idx) => (
              <Reveal index={idx} delayStep={0.06} variant="scale-in" key={card.title}>
                <div className="process-func-card">
                  <span className="process-func-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — PATIENT-CENTERED CARE */}
      <section className="process-step-section" id="goals-matter">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="section-badge">OUR PHILOSOPHY</span>
            <h2 className="section-title">Your Goals Matter</h2>
            <p className="section-subtitle" style={{ maxWidth: 720, margin: '0.5rem auto 1.5rem' }}>
              Every patient comes with different symptoms, routines, and goals. Your physiotherapy approach should
              be adapted to your individual needs rather than following a one-size-fits-all plan.
            </p>
          </Reveal>

          <Reveal variant="scale-in" delayStep={0.1}>
            <div className="process-goals-strip">
              <div className="process-goal-pill">LISTEN</div>
              <span style={{ color: 'var(--primary-600)', fontWeight: 900 }}>→</span>
              <div className="process-goal-pill">ASSESS</div>
              <span style={{ color: 'var(--primary-600)', fontWeight: 900 }}>→</span>
              <div className="process-goal-pill">PLAN</div>
              <span style={{ color: 'var(--primary-600)', fontWeight: 900 }}>→</span>
              <div className="process-goal-pill">GUIDE</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 13 — WHY ADVANCE PHYSIOTHERAPY CENTRE & DOCTOR PROFILE */}
      <section className="process-step-section" id="why-choose-us">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="section-badge">WHY CHOOSE US</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Evidence-based, compassionate physiotherapy care in Juran Chapra, Muzaffarpur.
            </p>
          </Reveal>

          <div className="process-why-grid">
            {[
              { title: 'Personalized Care', desc: 'Treatment and rehabilitation guidance based on individual clinical needs and recovery goals.' },
              { title: '1-on-1 Assessment', desc: 'Focused, private assessment of relevant movement, joint mechanics, and functional concerns.' },
              { title: 'Patient-Centered Approach', desc: 'Clear, transparent communication about your condition, treatment steps, and expected roadmap.' },
              { title: 'Convenient Location', desc: 'Centrally located in Zila Parishad Market, Juran Chapra Road, Brahmapura, Muzaffarpur.' },
            ].map((card, idx) => (
              <Reveal index={idx} delayStep={0.06} variant="scale-in" key={card.title}>
                <div className="process-why-card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* COMPACT DOCTOR PROFILE */}
          <Reveal variant="scale-in" delayStep={0.15}>
            <div className="process-doctor-card">
              <div className="process-doc-avatar-wrap">
                <img
                  src="/images/dr-shahrukh-portrait.webp"
                  alt={SITE.doctor}
                  className="process-doc-avatar"
                  width="90"
                  height="90"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="process-doc-info">
                <h3>{SITE.doctor}</h3>
                <div className="process-doc-creds">
                  {SITE.credentials} • {SITE.regNo}
                </div>
                <p className="process-doc-desc">
                  Consultant Physiotherapist with specialized experience in orthopedic rehabilitation, spine and joint
                  care, electrotherapy, and posture correction. Committed to evidence-informed care and patient empowerment.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 14 — FAQ (EXACTLY 5 FAQS) */}
      <section className="process-step-section" id="process-faq">
        <div className="container">
          <Reveal variant="fade-up" className="section-header text-center">
            <span className="section-badge">FAQS</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Helpful answers regarding your visit, assessment, and treatment at our Muzaffarpur clinic.
            </p>
          </Reveal>

          <div className="faq-list" style={{ maxWidth: 850, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => (
              <FaqItem
                key={faq.q}
                item={faq}
                isOpen={openFaq === idx}
                onToggle={() => toggleFaq(idx)}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL SERVICES EXPLORATION STRIP */}
      <section className="section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <Reveal variant="fade-up">
            <div className="process-services-strip">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--gray-900)' }}>
                Explore Our Specialized Physiotherapy Services
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginTop: '0.4rem' }}>
                Learn more about how our structured process applies to specific conditions:
              </p>
              <div className="process-services-pills">
                <Link to="/services/spine-back-pain" className="process-service-link">
                  Spine &amp; Back Pain
                </Link>
                <Link to="/services/cervical-neck-care" className="process-service-link">
                  Cervical &amp; Neck Care
                </Link>
                <Link to="/services/knee-joint-arthritis" className="process-service-link">
                  Knee &amp; Arthritis
                </Link>
                <Link to="/services/frozen-shoulder" className="process-service-link">
                  Frozen Shoulder
                </Link>
                <Link to="/services/electrotherapy" className="process-service-link">
                  Electrotherapy
                </Link>
                <Link to="/services/sports-rehabilitation" className="process-service-link">
                  Sports Rehabilitation
                </Link>
                <Link to="/services/neurological-rehabilitation" className="process-service-link">
                  Neurological Rehab
                </Link>
                <Link to="/services/posture-ergonomics" className="process-service-link">
                  Posture &amp; Ergonomics
                </Link>
                <Link to="/services/womens-health" className="process-service-link">
                  Women&apos;s Health
                </Link>
                <Link to="/services/pediatric-icu-care" className="process-service-link">
                  Pediatric &amp; Critical Care
                </Link>
              </div>
            </div>
          </Reveal>

          {/* FINAL CTA SECTION */}
          <Reveal variant="scale-in" delayStep={0.15}>
            <div className="process-final-cta-card">
              <h2 className="process-final-title">Ready to Start Your Physiotherapy Journey?</h2>
              <p className="process-final-sub">
                Speak with Advance Physiotherapy Centre about your concern and take the first step toward an
                individualized rehabilitation plan.
              </p>

              <div className="process-final-actions">
                <WhatsAppButton
                  className="btn btn-primary btn-lg process-final-wa-btn"
                  message={bookingMessage}
                >
                  Book Appointment
                </WhatsAppButton>
                <a
                  href={`tel:${SITE.phonePrimary}`}
                  className="btn btn-secondary btn-lg process-final-call-btn"
                >
                  <PhoneIcon />
                  <span>Call Clinic • {SITE.phonePrimaryDisplay}</span>
                </a>
              </div>

              <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '1rem' }}>
                Advance Physiotherapy Centre • Juran Chapra, Muzaffarpur, Bihar
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
