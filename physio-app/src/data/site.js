// Central site constants — single source of truth for contact/clinic facts
export const SITE = {
  name: 'Advance Physiotherapy Centre',
  url: 'https://www.advancephysiotherapycentre.in',
  doctor: 'Dr. Shahrukh Firoz',
  credentials: 'B.P.T., M.P.T., Ortho (Jaipur), M.G.A.P.T., M.R.A.P.T.',
  regNo: 'G00525',
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
  facebookUrl: 'https://www.facebook.com/share/1Epac1Hpwb/',
  facebookHandle: 'Advance Physiotherapy Centre',
  hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
  hoursSunday: 'Sunday: Prior Appointment Only',
  mapsShareUrl: 'https://maps.app.goo.gl/3Yd35TDforCQFABZA',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Advance+physiotherapy+Centre,+Juran+Chapra,+Muzaffarpur,+Bihar&ll=26.1271542,85.3757161&z=17&output=embed',
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
  { name: 'Dry Cupping', icon: 'cupping' },
  { name: 'Wet Cupping (Hijama)', icon: 'cupping' },
  { name: 'Fire Cupping', icon: 'fire' },
  { name: 'Dry Needling', icon: 'needle' },
  { name: 'Chiropractic & Osteopathy', icon: 'spine' },
  { name: 'All Taping (Kinesio)', icon: 'tape' },
  { name: 'Electrotherapy Modalities', icon: 'bolt' },
];
