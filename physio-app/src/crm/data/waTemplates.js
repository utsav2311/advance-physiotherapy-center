// WhatsApp Automation & Message Templates for Advance Physiotherapy Centre

export const WA_TEMPLATES = [
  {
    id: 'apt_confirm',
    name: 'Appointment Confirmation',
    category: 'Appointments',
    description: 'Sent immediately when an appointment or home visit is scheduled.',
    template: `Hello {patientName}, your physiotherapy consultation with {doctor} is confirmed!

📅 Date: {date}
⏰ Time: {time}
📍 Type: {visitType}
🏥 Location: Advance Physiotherapy Centre, Zila Parishad Market, Juran Chapra, Muzaffarpur
🗺️ Google Maps: {mapsUrl}

Please bring any previous X-rays, MRI scans, or doctor prescriptions with you. For queries, call +91 83402 76169.`,
  },
  {
    id: 'apt_reminder_2hr',
    name: 'Pre-Visit Reminder (2 Hours Prior)',
    category: 'Appointments',
    description: 'Sent 2 hours before the appointment slot.',
    template: `Gentle Reminder, {patientName}!

Your physiotherapy session with {doctor} is scheduled today at {time}.
🏥 Advance Physiotherapy Centre, Juran Chapra, Muzaffarpur.

Please wear comfortable, loose-fitting clothing for your assessment and therapy. We look forward to helping you!`,
  },
  {
    id: 'home_visit_arrival',
    name: 'Home Visit Doctor En-Route',
    category: 'Home Care',
    description: 'Sent when the physiotherapist leaves for the patient’s home.',
    template: `Hello {patientName}, Dr. Sayed Shahrukh Firoz is on the way for your home physiotherapy visit in {location}. Expected arrival in approximately 20-30 minutes. Please keep a quiet, comfortable space ready.`,
  },
  {
    id: 'aftercare_cupping_needling',
    name: 'Aftercare (Cupping / Dry Needling)',
    category: 'Clinical Care',
    description: 'Sent after an intensive manual therapy or cupping/needling session.',
    template: `Dear {patientName},

Following your {modality} session today at Advance Physiotherapy Centre:
1. Drink plenty of warm water to flush metabolic waste.
2. Avoid cold drafts, heavy weight-lifting, or hot saunas for 12 hours.
3. Mild tenderness or temporary circular marks are completely normal and will fade in 3-5 days.
4. Perform your prescribed gentle mobility stretches as advised.

Feel free to message us if you have any questions!`,
  },
  {
    id: 'exercise_prescription',
    name: 'Home Exercise Prescription',
    category: 'Prescriptions',
    description: 'Sent along with the generated home exercise plan.',
    template: `Hello {patientName},

Here is your customized Physiotherapy Home Exercise Plan from Dr. Sayed Shahrukh Firoz:

📋 Diagnosis: {diagnosis}
🏋️ Prescribed Exercises:
{exercisesList}

📌 Tips: Perform exercises gently in a pain-free range. Do not hold your breath.
Next Review Session: {nextSessionDate}`,
  },
  {
    id: 'session_dropout_checkin',
    name: 'Missed Session / Dropout Check-in',
    category: 'Retention',
    description: 'Sent to re-engage patients who missed an upcoming session.',
    template: `Hello {patientName}, we noticed you missed your scheduled physiotherapy session on {date} for {diagnosis}.

Continuous rehabilitation is critical to prevent pain relapse and ensure long-term joint recovery. How is your pain level right now? Please reply to reschedule your next slot at your convenience.`,
  },
  {
    id: 'receipt_invoice',
    name: 'Payment Receipt & Package Update',
    category: 'Billing',
    description: 'Sent after fee payment or package advance.',
    template: `Dear {patientName},

Payment Receipt from Advance Physiotherapy Centre:
🧾 Invoice No: {invoiceNo}
💵 Amount Paid: ₹{amountPaid}
💳 Payment Mode: {paymentMode}
📦 Package: {packageName} ({completedSessions}/{totalSessions} Sessions Done)
⚖️ Balance Due: ₹{balanceDue}

Thank you for choosing Advance Physiotherapy Centre!`,
  },
];

export function fillWaTemplate(templateStr, params = {}) {
  let result = templateStr;
  for (const [key, value] of Object.entries(params)) {
    const placeholder = new RegExp(`\\{${key}\\}`, 'g');
    result = result.replace(placeholder, value || '');
  }
  return result;
}
