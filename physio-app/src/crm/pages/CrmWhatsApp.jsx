import { useState } from 'react';
import { useCrm } from '../context/CrmContext';
import { WA_TEMPLATES, fillWaTemplate } from '../data/waTemplates';
import { SITE } from '../../data/site';

export default function CrmWhatsApp() {
  const { patients } = useCrm();
  const [selectedPatientId, setSelectedPatientId] = useState(patients[0]?.id || '');
  const [selectedTemplateId, setSelectedTemplateId] = useState(WA_TEMPLATES[0].id);
  const [customParams, setCustomParams] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    visitType: 'In-Clinic (Juran Chapra Chamber)',
    modality: 'Dry Cupping & Spinal Decompression',
    location: 'Brahmapura, Muzaffarpur',
    exercisesList: '1. McKenzie Extensions (3 sets of 10 reps)\n2. Bridging (2 sets of 12 reps)\n3. Cat-Camel Mobility',
    nextSessionDate: 'Within 48 hours',
    invoiceNo: 'APC/2026/08/101',
    amountPaid: '2400',
    paymentMode: 'UPI (PhonePe)',
    packageName: '7-Day Spine Care',
    completedSessions: '4',
    totalSessions: '7',
    balanceDue: '0',
  });

  const selectedPatient = patients.find((p) => p.id === selectedPatientId) || patients[0];
  const selectedTemplate = WA_TEMPLATES.find((t) => t.id === selectedTemplateId) || WA_TEMPLATES[0];

  const generatedMessage = fillWaTemplate(selectedTemplate.template, {
    patientName: selectedPatient?.name || 'Patient',
    doctor: 'Dr. Sayed Shahrukh Firoz',
    diagnosis: selectedPatient?.diagnosis || 'Physiotherapy Care',
    mapsUrl: SITE.mapsShareUrl,
    ...customParams,
  });

  const handleLaunchWhatsApp = () => {
    if (!selectedPatient?.phone) {
      alert('Please select a patient with a valid phone number.');
      return;
    }
    const url = `https://wa.me/91${selectedPatient.phone}?text=${encodeURIComponent(generatedMessage)}`;
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    alert('WhatsApp message copied to clipboard!');
  };

  return (
    <div className="crm-whatsapp">
      <div className="crm-card">
        <div className="crm-card-header">
          <div>
            <h3 className="crm-card-title">💬 WhatsApp Communication & Automated Patient Broadcast</h3>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px' }}>
              Send pre-formatted appointment confirmations, 2-hr reminders, aftercare instructions, and exercise sheets
            </div>
          </div>
        </div>

        <div className="crm-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* LEFT COLUMN: CONTROLS & TEMPLATE SELECTOR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="crm-form-group">
                <label className="crm-label">1. Select Target Patient:</label>
                <select
                  className="crm-select"
                  value={selectedPatientId}
                  onChange={(e) => setSelectedPatientId(e.target.value)}
                >
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} (📱 +91 {p.phone}) - {p.diagnosis}
                    </option>
                  ))}
                </select>
              </div>

              <div className="crm-form-group">
                <label className="crm-label">2. Select Message Template:</label>
                <select
                  className="crm-select"
                  value={selectedTemplateId}
                  onChange={(e) => setSelectedTemplateId(e.target.value)}
                >
                  {WA_TEMPLATES.map((t) => (
                    <option key={t.id} value={t.id}>
                      [{t.category}] {t.name}
                    </option>
                  ))}
                </select>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '3px' }}>
                  💡 {selectedTemplate.description}
                </div>
              </div>

              {/* Dynamic Param Editors */}
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>Template Parameters:</strong>

                <div className="crm-form-row">
                  <div className="crm-form-group">
                    <label className="crm-label">Slot Time:</label>
                    <input
                      type="text"
                      className="crm-input"
                      value={customParams.time}
                      onChange={(e) => setCustomParams({ ...customParams, time: e.target.value })}
                    />
                  </div>

                  <div className="crm-form-group">
                    <label className="crm-label">Date:</label>
                    <input
                      type="date"
                      className="crm-input"
                      value={customParams.date}
                      onChange={(e) => setCustomParams({ ...customParams, date: e.target.value })}
                    />
                  </div>
                </div>

                {selectedTemplate.id === 'aftercare_cupping_needling' && (
                  <div className="crm-form-group">
                    <label className="crm-label">Modality Delivered:</label>
                    <input
                      type="text"
                      className="crm-input"
                      value={customParams.modality}
                      onChange={(e) => setCustomParams({ ...customParams, modality: e.target.value })}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: REAL-TIME WHATSAPP PREVIEW & SEND */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>
                📱 Live WhatsApp Chat Preview (To: +91 {selectedPatient?.phone}):
              </strong>

              <div
                style={{
                  background: '#efeae2',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  border: '1px solid #d1d5db',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    padding: '1rem 1.15rem',
                    borderRadius: '12px',
                    borderTopLeftRadius: '2px',
                    maxWidth: '90%',
                    whiteSpace: 'pre-wrap',
                    fontSize: '0.88rem',
                    lineHeight: '1.55',
                    color: '#111827',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  {generatedMessage}
                  <div style={{ textAlign: 'right', fontSize: '0.7rem', color: '#9ca3af', marginTop: '4px' }}>
                    10:30 AM ✓✓
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                  <button className="crm-btn crm-btn-secondary" style={{ flex: 1 }} onClick={handleCopyMessage}>
                    📋 Copy Text
                  </button>
                  <button
                    className="crm-btn crm-btn-primary"
                    style={{ flex: 2, background: '#25D366', borderColor: '#25D366' }}
                    onClick={handleLaunchWhatsApp}
                  >
                    💬 Launch WhatsApp & Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
