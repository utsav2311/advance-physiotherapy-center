import { useCrm } from '../context/CrmContext';
import CrmStatCard from '../components/CrmStatCard';
import CrmBadge from '../components/CrmBadge';

export default function CrmDashboard({ onOpenAddPatientModal, onOpenBookAptModal }) {
  const { patients, appointments, sessions, invoices, updateAppointmentStatus, setActiveTab, setSelectedPatientId } = useCrm();

  const todayStr = new Date().toISOString().split('T')[0];
  const todayApts = appointments.filter((a) => a.date === todayStr);

  const activePatients = patients.filter((p) => p.status === 'Active');
  const homeVisitsToday = todayApts.filter((a) => a.type === 'Home Visit');
  const clinicVisitsToday = todayApts.filter((a) => a.type === 'In-Clinic');

  // Today's total collections
  const todayInvoices = invoices.filter((i) => i.date === todayStr);
  const todayCollected = todayInvoices.reduce((acc, curr) => acc + (curr.amountPaid || 0), 0);

  // Total pending receivables
  const totalPendingBalance = invoices.reduce((acc, curr) => acc + (curr.balance || 0), 0);

  // Drop-out / missed session alert: active patients who have not completed package and have no future appointment
  const dropOutRiskPatients = activePatients.filter((p) => {
    const hasUpcoming = appointments.some((a) => a.patientId === p.id && a.date >= todayStr && a.status !== 'Cancelled');
    return !hasUpcoming && (p.completedSessions || 0) < (p.totalPackageSessions || 1);
  });

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setActiveTab('patient_detail');
  };

  return (
    <div className="crm-dashboard">
      {/* 1. TOP METRIC STATS */}
      <div className="crm-stats-grid">
        <CrmStatCard
          title="Today's Appointments"
          value={todayApts.length}
          desc={`${clinicVisitsToday.length} In-Clinic • ${homeVisitsToday.length} Home Visits`}
          icon={(
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          )}
        />

        <CrmStatCard
          title="Active Rehab Patients"
          value={activePatients.length}
          desc="Currently ongoing therapy cycles"
          color="success"
          icon={(
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          )}
        />

        <CrmStatCard
          title="Today's Collection"
          value={`₹${todayCollected.toLocaleString('en-IN')}`}
          desc="Cash & UPI collected today"
          icon={(
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          )}
        />

        <CrmStatCard
          title="Pending Receivables"
          value={`₹${totalPendingBalance.toLocaleString('en-IN')}`}
          desc="Package balance dues"
          color="warning"
          icon={(
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )}
        />
      </div>

      {/* 2. RECEPTION / TREATMENT QUEUE */}
      <div className="crm-card">
        <div className="crm-card-header">
          <h3 className="crm-card-title">
            <span style={{ fontSize: '1.2rem' }}>🏥</span>
            <span>Today’s Clinic Chamber & Home Visit Queue ({todayStr})</span>
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={onOpenBookAptModal}>
              + Add to Queue
            </button>
          </div>
        </div>

        <div className="crm-card-body" style={{ padding: 0 }}>
          {todayApts.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
              No appointments scheduled for today yet.
            </div>
          ) : (
            <div className="crm-table-wrap">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Patient Name</th>
                    <th>Type</th>
                    <th>Diagnosis / Chief Complaint</th>
                    <th>Time Slot</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todayApts.map((apt) => (
                    <tr key={apt.id}>
                      <td>
                        <strong style={{ color: '#0284c7', background: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          {apt.queueToken}
                        </strong>
                      </td>
                      <td>
                        <button
                          style={{ background: 'none', border: 'none', padding: 0, color: '#0284c7', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                          onClick={() => handlePatientClick(apt.patientId)}
                        >
                          {apt.patientName}
                        </button>
                        <div style={{ fontSize: '0.76rem', color: '#64748b' }}>📱 {apt.phone}</div>
                      </td>
                      <td>
                        <CrmBadge status={apt.type}>{apt.type}</CrmBadge>
                        {apt.location && <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>📍 {apt.location}</div>}
                      </td>
                      <td style={{ maxWidth: '220px' }}>
                        <span style={{ fontWeight: '600' }}>{apt.diagnosis}</span>
                      </td>
                      <td>
                        <span style={{ fontWeight: '700' }}>{apt.time}</span>
                      </td>
                      <td>
                        <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>
                          {apt.sessionNumber || '1 of 1'}
                        </span>
                      </td>
                      <td>
                        <CrmBadge status={apt.status}>{apt.status}</CrmBadge>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          {apt.status !== 'In-Progress' && apt.status !== 'Completed' && (
                            <button
                              className="crm-btn crm-btn-secondary crm-btn-sm"
                              onClick={() => updateAppointmentStatus(apt.id, 'In-Progress')}
                              title="Move patient into therapy bay"
                            >
                              ▶ Start
                            </button>
                          )}
                          {apt.status === 'In-Progress' && (
                            <button
                              className="crm-btn crm-btn-success crm-btn-sm"
                              onClick={() => updateAppointmentStatus(apt.id, 'Completed')}
                              title="Mark session as completed"
                            >
                              ✓ Finish
                            </button>
                          )}
                          <a
                            href={`https://wa.me/91${apt.phone}?text=Hello%20${encodeURIComponent(apt.patientName)}%2C%20Dr.%20Sayed%20Shahrukh%20Firoz%20is%20ready%20for%20your%20physiotherapy%20session%20at%20Advance%20Physiotherapy%20Centre.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            title="Send WhatsApp Ping"
                          >
                            💬
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* 3. TWO COLUMN BOTTOM ROW: RECENT SESSIONS & DROP-OUT PREVENTION ALERTS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Recent Session Logs */}
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">⚡ Recent Clinical Sessions Logged</h3>
            <button className="crm-btn crm-btn-secondary crm-btn-sm" onClick={() => setActiveTab('rehab')}>
              Log Session
            </button>
          </div>
          <div className="crm-card-body" style={{ padding: '0.5rem 1.25rem' }}>
            {sessions.slice(0, 4).map((s) => (
              <div
                key={s.id}
                style={{
                  padding: '0.85rem 0',
                  borderBottom: '1px solid #f1f5f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <strong style={{ color: '#1e293b' }}>{s.patientName}</strong>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                    📅 {s.date} • Session #{s.sessionNumber}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '4px' }}>
                    {s.modalities?.map((m) => (
                      <span key={m} style={{ fontSize: '0.7rem', background: '#e0f2fe', color: '#0369a1', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: '600' }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>VAS Pain Score</div>
                  <div style={{ fontWeight: '800', color: s.postPainScore <= 3 ? '#059669' : '#d97706' }}>
                    {s.prePainScore}/10 → {s.postPainScore}/10
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drop-out / Missed Session Prevention */}
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">⚠️ Patient Retention & Follow-up Alerts</h3>
            <span className="crm-badge crm-badge-warning">{dropOutRiskPatients.length} Needs Follow-up</span>
          </div>
          <div className="crm-card-body" style={{ padding: '0.75rem 1.25rem' }}>
            {dropOutRiskPatients.length === 0 ? (
              <div style={{ color: '#059669', fontSize: '0.88rem', padding: '1rem 0' }}>
                🎉 Great job! All active patients have upcoming scheduled sessions.
              </div>
            ) : (
              dropOutRiskPatients.map((p) => (
                <div
                  key={p.id}
                  style={{
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <strong>{p.name}</strong> ({p.completedSessions}/{p.totalPackageSessions} sessions completed)
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{p.diagnosis}</div>
                  </div>
                  <a
                    href={`https://wa.me/91${p.phone}?text=Hello%20${encodeURIComponent(p.name)}%2C%20this%20is%20Dr.%20Sayed%20Shahrukh%20Firoz%20from%20Advance%20Physiotherapy%20Centre.%20Checking%20in%20on%20your%20recovery%20progress%20for%20${encodeURIComponent(p.diagnosis)}.%20Please%20let%20us%20know%20when%20you%20would%20like%20to%20schedule%20your%20next%20session.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crm-btn crm-btn-secondary crm-btn-sm"
                    style={{ background: '#fef3c7', borderColor: '#fde68a', color: '#92400e' }}
                  >
                    💬 WhatsApp Check-in
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
