// Central site constants — single source of truth for contact/clinic facts
export const SITE = {
  name: 'Advance Physiotherapy Centre',
  url: 'https://www.advancephysiotherapycentre.in',
  doctor: 'Dr. Shahrukh Firoz',
  credentials: 'B.P.T., M.P.T., Ortho (Jaipur)',
  regNo: 'IAP No. 63969',
  city: 'Muzaffarpur',
  addressLine1: 'Zila Parishad Market, Near Apollo Dental Hospital',
  addressLine2: 'Juran Chapra Road, Brahmapura, Muzaffarpur, Bihar – 842001',
  phonePrimary: '+918340276169',
  phonePrimaryDisplay: '+91 83402 76169',
  phoneSecondary: '+919155486434',
  phoneSecondaryDisplay: '+91 91554 86434',
  email: 'shahrukhfiroz308@gmail.com',
  instagramUrl: 'https://www.instagram.com/advancephysiotherapycenter1/',
  instagramHandle: '@advancephysiotherapycenter1',
  facebookUrl: 'https://www.facebook.com/share/1B6hxuVi9W/?mibextid=wwXIfr',
  facebookHandle: 'Advance Physiotherapy Centre',
  hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
  hoursSunday: 'Sunday: Prior Appointment Only',
  mapsShareUrl:
    'https://www.google.com/maps/place/Advance+physiotherapy+Centre/@26.1268321,85.3772257,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed10c2000f7221:0x3fc200c770000000!8m2!3d26.1268321!4d85.3772257!16s%2Fg%2F11s0fhy227!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Advance+physiotherapy+Center,+Zila+parishad+market,+Juran+Chapra,+Brahmapura,+Muzaffarpur,+Bihar+842001&t=&z=17&ie=UTF8&iwloc=&output=embed',
};

export function waLink(message = DEFAULT_WA_MESSAGE) {
  const text = encodeURIComponent(message);
  // Clean phone to digits-only for wa.me URL (918340276169)
  const cleanDigits = SITE.phonePrimary.replace(/\D/g, '').replace(/^0+/, '');
  const waPhone = cleanDigits.startsWith('91') ? cleanDigits : `91${cleanDigits}`;
  return `https://wa.me/${waPhone}?text=${text}`;
}

export const DEFAULT_WA_MESSAGE =
  'Hello Dr. Shahrukh, I would like to book an appointment at Advance Physiotherapy Centre. Please let me know the available time.';

export const hospitals = [
  'Prasad Hospital',
  'Mediwell Hospital',
  'Mother Teresa Hospital',
  'Galaxy Hospital',
  'Medanta Hospital',
  'Minakshi Hospital',
  'Maa Janki Hospital',
];

export const facilities = [
  {
    name: 'Dry Cupping',
    icon: 'cupping',
    image: '/images/facility-dry-cupping.webp',
    desc: 'Targeted myofascial decompression and blood circulation enhancement for muscle tightness.',
    tag: 'Myofascial Release',
  },
  {
    name: 'Wet Cupping (Hijama)',
    icon: 'cupping',
    image: '/images/facility-wet-cupping-hijama.webp',
    desc: 'Sterile clinical Hijama therapy to relieve chronic muscle tension and promote recovery.',
    tag: 'Detox & Circulation',
  },
  {
    name: 'Fire Cupping',
    icon: 'fire',
    image: '/images/facility-fire-cupping.webp',
    desc: 'Traditional heated glass vacuum cups for deep tissue muscle relaxation and chronic spasm relief.',
    tag: 'Deep Relaxation',
  },
  {
    name: 'Dry Needling',
    icon: 'needle',
    image: '/images/facility-dry-needling.webp',
    desc: 'Precision trigger point therapy using sterile filiform needles to deactivate muscular knots.',
    tag: 'Trigger Point Therapy',
  },
  {
    name: 'Chiropractic & Osteopathy',
    icon: 'spine',
    image: '/images/facility-chiropractic-osteopathy.webp',
    desc: 'Gentle spinal mobilization, joint realignment, and manual decompression techniques.',
    tag: 'Spinal Alignment',
  },
  {
    name: 'All Taping (Kinesio)',
    icon: 'tape',
    image: '/images/facility-kinesio-taping.webp',
    desc: 'Neuromuscular elastic kinesiology taping for joint stability, pain modulation, and sports rehab.',
    tag: 'Joint Stabilization',
  },
  {
    name: 'Electrotherapy Modalities',
    icon: 'bolt',
    image: '/images/facility-electrotherapy.webp',
    desc: 'Clinical TENS, IFT, and Therapeutic Ultrasound for acute pain relief and deep healing.',
    tag: 'Pain Modulation',
  },
  {
    name: 'Home Visit Service',
    icon: 'home',
    image: '/images/facility-home-visit-service.webp',
    desc: 'Personalized bedside physiotherapy and post-surgery rehabilitation at your home in Muzaffarpur.',
    tag: 'Home Care Available',
    isHomeVisit: true,
  },
];
