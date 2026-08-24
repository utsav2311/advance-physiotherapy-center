import { useState } from 'react';
import { useCrm } from '../context/CrmContext';

const BODY_REGIONS = [
  { id: 'cervical', name: 'Cervical / Neck', icon: '🧣', desc: 'Neck stiffness, radiculopathy, trapezius spasm' },
  { id: 'spine', name: 'Lumbar Spine / Back', icon: '🦴', desc: 'L4-L5 disc bulge, sciatica, lumbago, SI joint' },
  { id: 'shoulder', name: 'Shoulder & Upper Limb', icon: '💪', desc: 'Frozen shoulder, rotator cuff, impingement' },
  { id: 'knee_hip', name: 'Knee & Hip Joints', icon: '🦵', desc: 'Osteoarthritis, ACL/meniscus, patellar tracking' },
  { id: 'ankle', name: 'Ankle & Plantar Foot', icon: '🦶', desc: 'Sprain, plantar fasciitis, Achilles tendinopathy' },
  { id: 'neuro', name: 'Neuro / Post-Stroke', icon: '🧠', desc: 'Hemiplegia, gait training, balance, facial palsy' },
];

const MODALITY_OPTIONS = [
  'Dry Cupping',
  'Wet Cupping (Hijama)',
  'Fire Cupping',
  'Dry Needling (Trigger Points)',
  'Spinal Mobilization / Chiropractic',
  'Kinesiology Taping (K-Tape)',
  'Interferential Therapy (IFT)',
  'TENS Stimulation',
  'Therapeutic Ultrasound (1/3 MHz)',
  'Lumbar Mechanical Traction',
  'Cervical Mechanical Traction',
  'Active-Assisted ROM Exercises',
  'Manual Myofascial Release',
  'Theraband Resistance Training',
  'Wobble Board Balance Retraining',
];

export default function CrmRehabTracker({ onLogSession }) {
  const { patients, sessions, setSelectedPatientId, setActiveTab } = useCrm();
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  const filteredSessions = sessions.filter((s) => {
    if (selectedRegion === 'ALL') return true;
    const pt = patients.find((p) => p.id === s.patientId);
    return pt?.bodyRegion === selectedRegion;
  });

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setActiveTab('patient_detail');
  };

  return (
    <div className="crm-rehab-tracker">
      {/* 1. INTERACTIVE BODY PAIN REGION MAP */}
      <div className="crm-card">
        <div className="crm-card-header">
          <div>
            <h3 className="crm-card-title">⚡ Interactive Body Pain Map & Clinical Modalities</h3>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px' }}>
              Filter treatment sessions and protocols by anatomical region
            </div>
          </div>
          <button className="crm-btn crm-btn-primary" onClick={() => onLogSession(null)}>
            + Log New Treatment Session
          </button>
        </div>

        <div className="crm-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
            <button
              style={{
                padding: '1rem',
                borderRadius: '12px',
                border: selectedRegion === 'ALL' ? '2px solid #0284c7' : '1px solid #e2e8f0',
                background: selectedRegion === 'ALL' ? '#e0f2fe' : '#ffffff',
                color: selectedRegion === 'ALL' ? '#0369a1' : '#1e293b',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setSelectedRegion('ALL')}
            >
              <span style={{ fontSize: '1.4rem' }}>🏥</span>
              <strong style={{ fontSize: '0.92rem' }}>All Body Regions</strong>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{sessions.length} Total Sessions</span>
            </button>

            {BODY_REGIONS.map((reg) => {
              const regCount = sessions.filter((s) => {
                const pt = patients.find((p) => p.id === s.patientId);
                return pt?.bodyRegion === reg.id;
              }).length;

              return (
                <button
                  key={reg.id}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: selectedRegion === reg.id ? '2px solid #0284c7' : '1px solid #e2e8f0',
                    background: selectedRegion === reg.id ? '#e0f2fe' : '#ffffff',
                    color: selectedRegion === reg.id ? '#0369a1' : '#1e293b',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => setSelectedRegion(reg.id)}
                >
                  <span style={{ fontSize: '1.4rem' }}>{reg.icon}</span>
                  <strong style={{ fontSize: '0.92rem' }}>{reg.name}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{regCount} Sessions Logged</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. CHRONOLOGICAL LOG OF SESSIONS */}
      <div className="crm-card">
        <div className="crm-card-header">
          <h3 className="crm-card-title">📋 Clinical Session Logs & VAS Pain Scores</h3>
        </div>

        <div className="crm-card-body" style={{ padding: 0 }}>
          {filteredSessions.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              No treatment sessions logged for this category. Click "+ Log New Treatment Session" to start.
            </div>
          ) : (
            <div className="crm-table-wrap">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Patient Name</th>
                    <th>Session #</th>
                    <th>Pre → Post Pain VAS</th>
                    <th>Applied Modalities</th>
                    <th>Clinical Observation & Progress Notes</th>
                    <th>Therapist</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.map((s) => {
                    const pt = patients.find((p) => p.id === s.patientId);
                    return (
                      <tr key={s.id}>
                        <td>
                          <strong>{s.date}</strong>
                        </td>
                        <td>
                          <button
                            style={{ background: 'none', border: 'none', padding: 0, color: '#0284c7', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                            onClick={() => handlePatientClick(s.patientId)}
                          >
                            {s.patientName}
                          </button>
                          {pt && <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{pt.diagnosis}</div>}
                        </td>
                        <td>
                          <span style={{ background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '700' }}>
                            #{s.sessionNumber}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ color: '#ef4444', fontWeight: '800' }}>{s.prePainScore}/10</span>
                            <span>→</span>
                            <span style={{ color: s.postPainScore <= 3 ? '#059669' : '#d97706', fontWeight: '800' }}>
                              {s.postPainScore}/10
                            </span>
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: '600' }}>
                            (-{s.prePainScore - s.postPainScore} pts relief)
                          </div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', maxWidth: '300px' }}>
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
