// Comprehensive master FAQ list covering clinical, consultation, booking,
// home visit, and treatment queries.

export const allFaqs = [
  {
    id: 'referral',
    q: "Do I need a doctor's referral to consult Dr. Shahrukh?",
    a: 'No referral is required. You can directly consult Dr. Shahrukh Firoz for a primary assessment, spinal evaluation, and personalized therapy program.',
  },
  {
    id: 'first-visit-prep',
    q: 'What should I bring for my first appointment?',
    a: 'Bring any previous prescriptions, X-rays, MRI scans, or discharge summaries. Wear comfortable, loose clothing that allows easy movement of the affected area.',
  },
  {
    id: 'sessions-count',
    q: 'How many sessions will I need?',
    a: 'Most acute conditions show relief within 3 to 5 sessions. For chronic or post-operative rehabilitation, Dr. Shahrukh will outline an honest recovery timeline during your initial assessment, and the plan is adjusted as you progress.',
  },
  {
    id: 'location',
    q: 'Where is the clinic located?',
    a: 'We are at Zila Parishad Market, Near Apollo Dental Hospital, Juran Chapra Road, Brahmapura, Muzaffarpur, Bihar – 842001, with easy ground parking.',
  },
  {
    id: 'booking',
    q: 'How can I book an appointment?',
    a: 'Click any "Book Appointment" button to message on WhatsApp at +91 83402 76169 / 91554 86434, or call 08340 276169. We confirm your slot the same day in most cases.',
  },
  {
    id: 'pain',
    q: 'Is physiotherapy painful?',
    a: 'Most treatments are gentle and pain-free. Some mobilization techniques or dry needling may cause brief mild discomfort, but Dr. Shahrukh continuously monitors your pain threshold and adjusts intensity throughout every session.',
  },
  {
    id: 'massage-difference',
    q: 'How is physiotherapy different from a massage?',
    a: "Massage focuses on relaxing muscles temporarily. Physiotherapy starts with a clinical diagnosis, then uses targeted manual therapy, electrotherapy, and corrective exercise to treat the actual cause of pain — restoring long-term function, not just short-term relief.",
  },
  {
    id: 'age-groups',
    q: 'Do you treat children and elderly patients?',
    a: "Yes. We treat patients of all ages — from pediatric developmental concerns and cerebral palsy to geriatric joint stiffness, Parkinson's, and balance disorders — with age-appropriate techniques and pacing.",
  },
  {
    id: 'home-visit',
    q: 'Can I request a home visit instead of coming to the clinic?',
    a: 'Yes, home visits are available for patients who are bedridden, post-surgical, elderly, or otherwise unable to travel. Message us on WhatsApp with your address and condition, and we will confirm availability and timing.',
  },
  {
    id: 'conditions-treated',
    q: 'What conditions do you treat besides back and neck pain?',
    a: "We treat a wide range of conditions including frozen shoulder, tennis elbow, knee and joint arthritis, sports injuries, post-fracture recovery, stroke and neurological rehabilitation, women's health (pelvic floor, pregnancy, post-natal), and pediatric or ICU/IPD bedside care.",
  },
  {
    id: 'home-exercise',
    q: 'Will I need to continue exercises at home?',
    a: 'Yes — a home exercise program is a standard part of every treatment plan. It reinforces the progress made in-clinic and is essential for preventing the pain from returning once your sessions taper off.',
  },
];

// Alias for backwards compatibility
export const faqs = allFaqs;

// Contextual / Related FAQ Subsets for specific pages
export const servicesFaqs = [
  allFaqs.find((f) => f.id === 'conditions-treated'),
  allFaqs.find((f) => f.id === 'massage-difference'),
  allFaqs.find((f) => f.id === 'sessions-count'),
  allFaqs.find((f) => f.id === 'home-exercise'),
].filter(Boolean);

export const serviceDetailFaqs = [
  allFaqs.find((f) => f.id === 'sessions-count'),
  allFaqs.find((f) => f.id === 'pain'),
  allFaqs.find((f) => f.id === 'referral'),
  allFaqs.find((f) => f.id === 'home-exercise'),
].filter(Boolean);

export const aboutFaqs = [
  allFaqs.find((f) => f.id === 'referral'),
  allFaqs.find((f) => f.id === 'age-groups'),
  allFaqs.find((f) => f.id === 'conditions-treated'),
  allFaqs.find((f) => f.id === 'home-visit'),
].filter(Boolean);

export const processFaqs = [
  allFaqs.find((f) => f.id === 'first-visit-prep'),
  allFaqs.find((f) => f.id === 'sessions-count'),
  allFaqs.find((f) => f.id === 'pain'),
  allFaqs.find((f) => f.id === 'home-exercise'),
].filter(Boolean);

export const galleryFaqs = [
  allFaqs.find((f) => f.id === 'location'),
  allFaqs.find((f) => f.id === 'conditions-treated'),
  allFaqs.find((f) => f.id === 'home-visit'),
].filter(Boolean);

export const reviewsFaqs = [
  allFaqs.find((f) => f.id === 'sessions-count'),
  allFaqs.find((f) => f.id === 'pain'),
  allFaqs.find((f) => f.id === 'conditions-treated'),
  allFaqs.find((f) => f.id === 'age-groups'),
].filter(Boolean);

export const contactFaqs = [
  allFaqs.find((f) => f.id === 'location'),
  allFaqs.find((f) => f.id === 'booking'),
  allFaqs.find((f) => f.id === 'home-visit'),
  allFaqs.find((f) => f.id === 'first-visit-prep'),
].filter(Boolean);
