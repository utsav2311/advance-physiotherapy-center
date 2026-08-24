import { useState } from 'react';
import { useCrm } from '../context/CrmContext';
import { EXERCISE_LIBRARY, EXERCISE_CATEGORIES } from '../data/exerciseLibrary';

export default function CrmPrescriptions({ onNewRxModal }) {
  const { prescriptions, patients, deletePrescription, setSelectedPatientId, setActiveTab } = useCrm();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [exerciseSearch, setExerciseSearch] = useState('');
  const [previewRx, setPreviewRx] = useState(null);

  const filteredExercises = EXERCISE_LIBRARY.filter((ex) => {
    const matchesCat = selectedCategory === 'ALL' || ex.category === selectedCategory;
    const matchesSearch =
      !exerciseSearch ||
      ex.name.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
      ex.target.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
      ex.hindiName.includes(exerciseSearch);
    return matchesCat && matchesSearch;
  });

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setActiveTab('patient_detail');
  };

  return (
    <div className="crm-prescriptions">
      {/* TOP HEADER */}
      <div className="crm-card crm-no-print">
        <div className="crm-card-header">
          <div>
            <h3 className="crm-card-title">🏋️ Digital Exercise Prescription (Rx) & Protocol Builder</h3>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px' }}>
              Assign targeted physical therapy home exercise programs with WhatsApp delivery & PDF print
            </div>
          </div>
          <button className="crm-btn crm-btn-primary" onClick={() => onNewRxModal(null)}>
            + Create New Prescription
          </button>
        </div>
      </div>

      {/* RECENT ISSUED PRESCRIPTIONS */}
      <div className="crm-card crm-no-print">
        <div className="crm-card-header">
          <h3 className="crm-card-title">📋 Recently Issued Prescriptions ({prescriptions.length})</h3>
        </div>
        <div className="crm-card-body" style={{ padding: 0 }}>
          {prescriptions.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
              No prescriptions generated yet. Click "+ Create New Prescription" to issue one.
            </div>
          ) : (
            <div className="crm-table-wrap">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Rx ID</th>
                    <th>Date</th>
                    <th>Patient Name</th>
                    <th>Condition / Diagnosis</th>
                    <th>Prescribed Exercises</th>
                    <th>Next Follow-up</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptions.map((rx) => {
                    const pt = patients.find((p) => p.id === rx.patientId);
                    return (
                      <tr key={rx.id}>
                        <td>
                          <strong>{rx.id}</strong>
                        </td>
                        <td>{rx.date}</td>
                        <td>
                          <button
                            style={{ background: 'none', border: 'none', padding: 0, color: '#0284c7', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                            onClick={() => handlePatientClick(rx.patientId)}
                          >
                            {rx.patientName}
                          </button>
                          {pt && <div style={{ fontSize: '0.75rem', color: '#64748b' }}>📱 +91 {pt.phone}</div>}
                        </td>
                        <td style={{ maxWidth: '220px', fontWeight: '600' }}>{rx.diagnosis}</td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                            {rx.exercises?.map((e, idx) => (
                              <span key={idx} style={{ fontSize: '0.78rem', color: '#334155' }}>
                                • <strong>{e.name}</strong> ({e.sets}, {e.reps})
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span style={{ fontSize: '0.8rem', color: '#0369a1', fontWeight: '700' }}>
                            📅 {rx.nextFollowUp || 'After 7 days'}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.3rem' }}>
                            <button
                              className="crm-btn crm-btn-secondary crm-btn-sm"
                              onClick={() => setPreviewRx(rx)}
                              title="Preview Printable Letterhead"
                            >
                              🖨️ Print / PDF
                            </button>
                            {pt && (
                              <a
                                href={`https://wa.me/91${pt.phone}?text=${encodeURIComponent(`*ADVANCE PHYSIOTHERAPY CENTRE*\n_Dr. Sayed Shahrukh Firoz (B.P.T., M.P.T. Ortho)_\n\nHello ${rx.patientName},\nHere is your custom Home Exercise Plan for *${rx.diagnosis}*:\n\n` + rx.exercises.map((e, i) => `${i + 1}. *${e.name}*\n   - ${e.sets} | ${e.reps} | ${e.hold || 'Pain-free'}\n   - Note: ${e.notes || 'Follow proper posture'}`).join('\n\n') + `\n\n⚠️ *Precautions*: ${rx.precautions || 'Stop if sharp pain occurs'}\n📅 *Next Review Session*: ${rx.nextFollowUp || '7 days'}\n\nClinic: Zila Parishad Market, Juran Chapra, Muzaffarpur`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="crm-btn crm-btn-secondary crm-btn-sm"
                                title="Send Rx on WhatsApp"
                              >
                                💬 WhatsApp
                              </a>
                            )}
                            <button
                              className="crm-btn crm-btn-secondary crm-btn-sm"
                              style={{ color: '#ef4444' }}
                              onClick={() => {
                                if (confirm('Delete this prescription?')) deletePrescription(rx.id);
                              }}
                              title="Delete Rx"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* BUILT-IN PHYSIOTHERAPY EXERCISE PROTOCOLS CATALOG */}
      <div className="crm-card crm-no-print">
        <div className="crm-card-header">
          <h3 className="crm-card-title">📚 Clinical Exercise Protocol Library ({EXERCISE_LIBRARY.length} Exercises)</h3>
        </div>

        <div className="crm-card-body" style={{ background: '#f8fafc', padding: '1rem 1.4rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '220px' }}>
              <input
                type="text"
                className="crm-input"
                placeholder="Search exercise by name, Hindi name, or target condition..."
                value={exerciseSearch}
                onChange={(e) => setExerciseSearch(e.target.value)}
              />
            </div>
            <div>
              <select
                className="crm-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="ALL">All Categories</option>
                {EXERCISE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="crm-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {filteredExercises.map((ex) => (
              <div
                key={ex.id}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <strong style={{ fontSize: '1rem', color: '#0369a1' }}>{ex.name}</strong>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{ex.hindiName}</div>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#065f46', background: '#d1fae5', padding: '0.2rem 0.5rem', borderRadius: '4px', alignSelf: 'flex-start', fontWeight: '600' }}>
                  🎯 {ex.target}
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.5, margin: '4px 0' }}>
                  {ex.instructions}
                </p>
                <div style={{ fontSize: '0.78rem', color: '#64748b', background: '#f8fafc', padding: '0.5rem', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                  ⚡ <strong>Standard Dosage:</strong> {ex.defaultSets} • {ex.defaultReps} • {ex.holdTime}
                </div>
                {ex.precautions && (
                  <div style={{ fontSize: '0.74rem', color: '#991b1b', marginTop: 'auto' }}>
                    ⚠️ <strong>Precautions:</strong> {ex.precautions}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRINTABLE RX PREVIEW MODAL */}
      {previewRx && (
        <div className="crm-modal-backdrop" onClick={() => setPreviewRx(null)}>
          <div className="crm-modal crm-printable-area" style={{ maxWidth: '700px' }} onClick={(e) => e.stopPropagation()}>
            <div className="crm-modal-header crm-no-print">
              <h3 className="crm-modal-title">Official Medical Prescription (Rx) Preview</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={() => window.print()}>
                  🖨️ Print / Save PDF
                </button>
                <button className="crm-modal-close" onClick={() => setPreviewRx(null)}>
                  &times;
                </button>
              </div>
            </div>

            {/* LETTERHEAD CONTENT */}
            <div style={{ padding: '2rem', background: '#ffffff', color: '#1e293b', fontFamily: 'Arial, sans-serif' }}>
              {/* Doctor Letterhead Header */}
              <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ margin: 0, color: '#0369a1', fontSize: '1.4rem', fontWeight: '800' }}>ADVANCE PHYSIOTHERAPY CENTRE</h2>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#1e293b', marginTop: '3px' }}>
                    Dr. Sayed Shahrukh Firoz
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    B.P.T., M.P.T. (Ortho) • Reg No: L-53874 (MIAP)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Senior Consultant Physiotherapist & Rehabilitation Specialist
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.78rem', color: '#64748b' }}>
                  <div>Zila Parishad Market, Juran Chapra</div>
                  <div>Muzaffarpur, Bihar – 842001</div>
                  <div>📱 +91 83402 76169 / 91554 86434</div>
                  <div>🌐 advancephysiotherapycentre.in</div>
                </div>
              </div>

              {/* Patient details line */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 0', borderBottom: '1px solid #e2e8f0', fontSize: '0.86rem' }}>
                <div><strong>Patient:</strong> {previewRx.patientName}</div>
                <div><strong>Date:</strong> {previewRx.date}</div>
                <div><strong>Rx No:</strong> {previewRx.id}</div>
              </div>

              <div style={{ margin: '1rem 0' }}>
                <strong>Diagnosis:</strong> <span style={{ color: '#0369a1', fontWeight: '700' }}>{previewRx.diagnosis}</span>
              </div>

              <div style={{ margin: '1.25rem 0' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', borderBottom: '1px solid #0284c7', paddingBottom: '4px', marginBottom: '0.75rem' }}>
                  ℞ Prescribed Rehabilitation Exercises
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {previewRx.exercises?.map((e, idx) => (
                    <div key={idx} style={{ padding: '0.5rem', background: '#f8fafc', borderRadius: '6px' }}>
                      <strong style={{ color: '#0f172a' }}>{idx + 1}. {e.name}</strong>
                      <div style={{ fontSize: '0.84rem', color: '#334155', marginTop: '2px' }}>
                        Dosage: <strong>{e.sets}</strong> • <strong>{e.reps}</strong> • <strong>{e.hold || 'Pain-free'}</strong>
                      </div>
                      {e.notes && <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Note: {e.notes}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {previewRx.precautions && (
                <div style={{ marginTop: '1rem', background: '#fef2f2', padding: '0.75rem', borderRadius: '6px', border: '1px solid #fee2e2', fontSize: '0.84rem', color: '#991b1b' }}>
                  <strong>⚠️ Postural Precautions & Advice:</strong> {previewRx.precautions}
                </div>
              )}

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Next Follow-up Review: <strong>{previewRx.nextFollowUp || 'After 7 Days'}</strong>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>Dr. Sayed Shahrukh Firoz</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Consultant Physiotherapist (MIAP)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
