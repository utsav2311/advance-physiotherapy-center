import { useState } from 'react';
import { useCrm } from '../context/CrmContext';
import CrmBadge from '../components/CrmBadge';

export default function CrmPatientDetail({ onBack, onLogSession, onNewRx, onNewInvoice }) {
  const { selectedPatientId, patients, sessions, prescriptions, invoices, addPatientDoc, updatePatient } = useCrm();
  const [activeTab, setActiveTab] = useState('overview'); // overview, sessions, scans, rx, billing
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notesText, setNotesText] = useState('');
  const [newDocName, setNewDocName] = useState('');
  const [newDocType, setNewDocType] = useState('MRI Scan');

  const patient = patients.find((p) => p.id === selectedPatientId);

  if (!patient) {
    return (
      <div className="crm-card" style={{ padding: '3rem', textAlign: 'center' }}>
        <h3>Patient record not found.</h3>
        <button className="crm-btn crm-btn-primary" onClick={onBack}>
          ← Back to Patients Directory
        </button>
      </div>
    );
  }

  const patientSessions = sessions.filter((s) => s.patientId === patient.id);
  const patientRx = prescriptions.filter((rx) => rx.patientId === patient.id);
  const patientInvoices = invoices.filter((inv) => inv.patientId === patient.id);

  const handleSaveNotes = () => {
    updatePatient(patient.id, { notes: notesText });
    setIsEditingNotes(false);
  };

  const handleAddDocument = (e) => {
    e.preventDefault();
    if (!newDocName) return;
    addPatientDoc(patient.id, {
      name: newDocName,
      type: newDocType,
      size: `${(Math.random() * 3 + 1).toFixed(1)} MB`,
    });
    setNewDocName('');
  };

  return (
    <div className="crm-patient-detail">
      {/* TOP ACTION BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button className="crm-btn crm-btn-secondary crm-btn-sm" onClick={onBack}>
          ← Back to Patient List
        </button>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="crm-btn crm-btn-secondary crm-btn-sm" onClick={() => onNewRx(patient)}>
            + Add Exercise Rx
          </button>
          <button className="crm-btn crm-btn-secondary crm-btn-sm" onClick={() => onNewInvoice(patient)}>
            + Create Bill / Invoice
          </button>
          <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={() => onLogSession(patient)}>
            ⚡ Log Treatment Session
          </button>
        </div>
      </div>

      {/* PATIENT BANNER CARD */}
      <div className="crm-card">
        <div className="crm-card-body" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#0284c7', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '800' }}>
              {patient.name.charAt(0)}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>{patient.name}</h2>
                <CrmBadge status={patient.status}>{patient.status}</CrmBadge>
                <CrmBadge status={patient.visitType}>{patient.visitType}</CrmBadge>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                <strong>ID:</strong> {patient.id} • <strong>Age:</strong> {patient.age} yrs ({patient.gender}) • <strong>Reg:</strong> {patient.registeredDate}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#1e293b', marginTop: '3px' }}>
                📱 +91 {patient.phone} • 📍 {patient.address}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', background: '#f8fafc', padding: '0.85rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Therapy Progress</div>
              <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0284c7' }}>
                {patient.completedSessions || 0} / {patient.totalPackageSessions || 1}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Sessions Done</div>
            </div>
            <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>VAS Pain Score</div>
              <div style={{ fontSize: '1.15rem', fontWeight: '800', color: patient.currentPainScore <= 3 ? '#059669' : '#d97706' }}>
                {patient.currentPainScore}/10
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Started at {patient.initialPainScore}/10</div>
            </div>
          </div>
        </div>

        {/* SUB TABS */}
        <div style={{ display: 'flex', borderTop: '1px solid #e2e8f0', background: '#f8fafc', padding: '0 1rem' }}>
          {[
            { id: 'overview', label: '📋 Clinical Overview' },
            { id: 'sessions', label: `⚡ Treatment Sessions (${patientSessions.length})` },
            { id: 'scans', label: `📁 Scan Vault & Docs (${patient.docs?.length || 0})` },
            { id: 'rx', label: `🏋️ Home Exercise Rx (${patientRx.length})` },
            { id: 'billing', label: `🧾 Invoices & Bills (${patientInvoices.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              style={{
                padding: '0.85rem 1.15rem',
                fontSize: '0.86rem',
                fontWeight: '700',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #0284c7' : '2px solid transparent',
                color: activeTab === tab.id ? '#0284c7' : '#64748b',
                background: 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT: 1. OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <div className="crm-card">
            <div className="crm-card-header">
              <h3 className="crm-card-title">🩺 Diagnosis & Clinical Findings</h3>
            </div>
            <div className="crm-card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <span className="crm-label">Primary Diagnosis:</span>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#0369a1', marginTop: '2px' }}>
                  {patient.diagnosis}
                </div>
              </div>
              <div>
                <span className="crm-label">Chief Complaint:</span>
                <p style={{ margin: '2px 0 0', color: '#334155', fontSize: '0.9rem' }}>{patient.chiefComplaint}</p>
              </div>
              <div>
                <span className="crm-label">Medical History & Scans:</span>
                <p style={{ margin: '2px 0 0', color: '#334155', fontSize: '0.9rem' }}>{patient.medicalHistory || 'No systemic comorbidities.'}</p>
              </div>
              <div>
                <span className="crm-label">Occupation / Ergonomics:</span>
                <p style={{ margin: '2px 0 0', color: '#334155', fontSize: '0.9rem' }}>{patient.occupation || 'Not specified'}</p>
              </div>
              <div>
                <span className="crm-label">Emergency Contact:</span>
                <p style={{ margin: '2px 0 0', color: '#334155', fontSize: '0.9rem' }}>{patient.emergencyContact || 'None'}</p>
              </div>
            </div>
          </div>

          <div className="crm-card">
            <div className="crm-card-header">
              <h3 className="crm-card-title">📝 Doctor’s Clinical Observations & Notes</h3>
              {!isEditingNotes && (
                <button
                  className="crm-btn crm-btn-secondary crm-btn-sm"
                  onClick={() => {
                    setNotesText(patient.notes || '');
                    setIsEditingNotes(true);
                  }}
                >
                  Edit Notes
                </button>
              )}
            </div>
            <div className="crm-card-body">
              {isEditingNotes ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <textarea
                    className="crm-textarea"
                    rows="6"
                    value={notesText}
                    onChange={(e) => setNotesText(e.target.value)}
                    placeholder="Enter clinical assessment notes, ROM tests, patient feedback..."
                  />
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button className="crm-btn crm-btn-secondary crm-btn-sm" onClick={() => setIsEditingNotes(false)}>
                      Cancel
                    </button>
                    <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={handleSaveNotes}>
                      Save Notes
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '120px', whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: '#334155' }}>
                  {patient.notes || 'No clinical notes recorded yet. Click "Edit Notes" to write clinical findings.'}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 2. SESSIONS */}
      {activeTab === 'sessions' && (
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">⚡ Session-by-Session Clinical Timeline</h3>
            <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={() => onLogSession(patient)}>
              + Log New Session
            </button>
          </div>
          <div className="crm-card-body" style={{ padding: 0 }}>
            {patientSessions.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                No sessions logged yet for this patient. Click "Log New Session" to record therapy modalities and VAS scores.
              </div>
            ) : (
              <div className="crm-table-wrap">
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Session #</th>
                      <th>Date</th>
                      <th>Pre → Post Pain VAS</th>
                      <th>Modalities & Techniques Used</th>
                      <th>Observations & Notes</th>
                      <th>Therapist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientSessions.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <strong>Session {s.sessionNumber}</strong>
                        </td>
                        <td>{s.date}</td>
                        <td>
                          <span style={{ fontWeight: '800', color: s.postPainScore <= 3 ? '#059669' : '#d97706' }}>
                            {s.prePainScore}/10 → {s.postPainScore}/10
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                            {s.modalities?.map((m) => (
                              <span key={m} style={{ fontSize: '0.72rem', background: '#e0f2fe', color: '#0369a1', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: '600' }}>
                                {m}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td style={{ maxWidth: '280px', fontSize: '0.85rem' }}>{s.notes}</td>
                        <td style={{ fontSize: '0.8rem', color: '#64748b' }}>{s.therapist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 3. SCAN VAULT & DOCS */}
      {activeTab === 'scans' && (
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">📁 Diagnostic Scans, Reports & Prescriptions</h3>
          </div>
          <div className="crm-card-body">
            {/* Upload Mock Box */}
            <form onSubmit={handleAddDocument} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px dashed #cbd5e1', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                className="crm-input"
                style={{ flex: 1, minWidth: '200px' }}
                placeholder="Document name (e.g. Lumbar Spine MRI Report)..."
                value={newDocName}
                onChange={(e) => setNewDocName(e.target.value)}
              />
              <select
                className="crm-select"
                style={{ width: '180px' }}
                value={newDocType}
                onChange={(e) => setNewDocType(e.target.value)}
              >
                <option value="MRI Scan">MRI Scan</option>
                <option value="X-Ray">X-Ray Report</option>
                <option value="CT Scan">CT Scan</option>
                <option value="Doctor Referral">Doctor Referral / Rx</option>
                <option value="Blood Test">Blood Report</option>
              </select>
              <button type="submit" className="crm-btn crm-btn-primary crm-btn-sm">
                + Add to Vault
              </button>
            </form>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
              {patient.docs?.map((doc, idx) => (
                <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>📄</span>
                    <strong style={{ fontSize: '0.88rem', wordBreak: 'break-all' }}>{doc.name}</strong>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    🏷️ {doc.type} • 📅 {doc.date} ({doc.size})
                  </div>
                  <button
                    className="crm-btn crm-btn-secondary crm-btn-sm"
                    style={{ marginTop: 'auto' }}
                    onClick={() => alert(`Opening diagnostic file: ${doc.name}`)}
                  >
                    👁️ View Scan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 4. EXERCISE RX */}
      {activeTab === 'rx' && (
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">🏋️ Assigned Home Exercise Prescriptions</h3>
            <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={() => onNewRx(patient)}>
              + Generate New Rx
            </button>
          </div>
          <div className="crm-card-body">
            {patientRx.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                No custom exercise prescription created yet. Click "Generate New Rx" to assign targeted home exercises.
              </div>
            ) : (
              patientRx.map((rx) => (
                <div key={rx.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem', background: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.65rem', marginBottom: '0.75rem' }}>
                    <div>
                      <strong>Prescription #{rx.id}</strong> • <span style={{ color: '#64748b' }}>Date: {rx.date}</span>
                    </div>
                    <a
                      href={`https://wa.me/91${patient.phone}?text=${encodeURIComponent(`Hello ${patient.name},\nHere is your Home Exercise Plan from Advance Physiotherapy Centre:\n\n` + rx.exercises.map((e, i) => `${i + 1}. ${e.name} (${e.sets}, ${e.reps}, ${e.hold})`).join('\n') + `\n\nPrecautions: ${rx.precautions || 'Perform pain-free'}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crm-btn crm-btn-secondary crm-btn-sm"
                    >
                      💬 Send to WhatsApp
                    </a>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                    {rx.exercises?.map((e, idx) => (
                      <div key={idx} style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: '700', color: '#0369a1', fontSize: '0.88rem' }}>{idx + 1}. {e.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#334155', marginTop: '3px' }}>
                          ⚡ {e.sets} • {e.reps} • {e.hold}
                        </div>
                        {e.notes && <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>💡 {e.notes}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 5. BILLING */}
      {activeTab === 'billing' && (
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">🧾 Billing, Packages & Payment Receipts</h3>
            <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={() => onNewInvoice(patient)}>
              + Create New Invoice
            </button>
          </div>
          <div className="crm-card-body" style={{ padding: 0 }}>
            {patientInvoices.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                No invoices found for this patient.
              </div>
            ) : (
              <div className="crm-table-wrap">
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Invoice No</th>
                      <th>Date</th>
                      <th>Particulars / Package</th>
                      <th>Total (₹)</th>
                      <th>Paid (₹)</th>
                      <th>Balance (₹)</th>
                      <th>Status</th>
                      <th>Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientInvoices.map((inv) => (
                      <tr key={inv.id}>
                        <td>
                          <strong>{inv.invoiceNo}</strong>
                        </td>
                        <td>{inv.date}</td>
                        <td>{inv.items?.map((it) => it.name).join(', ')}</td>
                        <td>
                          <strong>₹{inv.total?.toLocaleString('en-IN')}</strong>
                        </td>
                        <td style={{ color: '#059669', fontWeight: '700' }}>₹{inv.amountPaid?.toLocaleString('en-IN')}</td>
                        <td style={{ color: inv.balance > 0 ? '#ef4444' : '#64748b', fontWeight: '700' }}>
                          ₹{inv.balance?.toLocaleString('en-IN')}
                        </td>
                        <td>
                          <CrmBadge status={inv.status}>{inv.status}</CrmBadge>
                        </td>
                        <td style={{ fontSize: '0.8rem', color: '#64748b' }}>{inv.paymentMode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
