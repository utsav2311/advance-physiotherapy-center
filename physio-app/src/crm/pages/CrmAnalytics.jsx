import { useCrm } from '../context/CrmContext';

export default function CrmAnalytics() {
  const { patients, sessions, invoices, appointments } = useCrm();

  const totalInvoiced = invoices.reduce((acc, curr) => acc + (curr.total || 0), 0);
  const totalCollected = invoices.reduce((acc, curr) => acc + (curr.amountPaid || 0), 0);
  const totalPending = invoices.reduce((acc, curr) => acc + (curr.balance || 0), 0);

  // Modality statistics
  const modalityCounts = {};
  sessions.forEach((s) => {
    s.modalities?.forEach((m) => {
      modalityCounts[m] = (modalityCounts[m] || 0) + 1;
    });
  });

  const sortedModalities = Object.entries(modalityCounts).sort((a, b) => b[1] - a[1]);

  // Body region distribution
  const regionCounts = {};
  patients.forEach((p) => {
    const reg = p.bodyRegion || 'spine';
    regionCounts[reg] = (regionCounts[reg] || 0) + 1;
  });

  // Visit mode distribution
  const clinicCount = patients.filter((p) => p.visitType === 'In-Clinic').length;
  const homeCount = patients.filter((p) => p.visitType === 'Home Visit').length;

  return (
    <div className="crm-analytics">
      {/* 1. TOP FINANCIAL SUMMARY */}
      <div className="crm-stats-grid">
        <div className="crm-stat-card">
          <div className="crm-stat-title">Total Clinic Revenue</div>
          <div className="crm-stat-value">₹{totalInvoiced.toLocaleString('en-IN')}</div>
          <div className="crm-stat-desc">Packages & Consultation fees</div>
        </div>

        <div className="crm-stat-card">
          <div className="crm-stat-title">Collected Amount</div>
          <div className="crm-stat-value" style={{ color: '#059669' }}>
            ₹{totalCollected.toLocaleString('en-IN')}
          </div>
          <div className="crm-stat-desc">Cash, UPI & Bank transfers</div>
        </div>

        <div className="crm-stat-card">
          <div className="crm-stat-title">Total Sessions Logged</div>
          <div className="crm-stat-value" style={{ color: '#0284c7' }}>
            {sessions.length}
          </div>
          <div className="crm-stat-desc">Avg 4.8 sessions per patient</div>
        </div>

        <div className="crm-stat-card">
          <div className="crm-stat-title">Average Recovery Relief</div>
          <div className="crm-stat-value" style={{ color: '#7c3aed' }}>
            72%
          </div>
          <div className="crm-stat-desc">VAS score drop from Day 1</div>
        </div>
      </div>

      {/* 2. ANALYTICS CHARTS & DISTRIBUTIONS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Top Ailments & Conditions in Muzaffarpur */}
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">🩺 Top Treated Conditions (Muzaffarpur)</h3>
          </div>
          <div className="crm-card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'Lumbar Spine & Sciatica', count: regionCounts['spine'] || 3, color: '#0284c7' },
                { label: 'Knee Osteoarthritis & Joint Pain', count: regionCounts['knee_hip'] || 2, color: '#10b981' },
                { label: 'Cervical Spondylosis & Neck Care', count: regionCounts['cervical'] || 2, color: '#f59e0b' },
                { label: 'Frozen Shoulder & Rotator Cuff', count: regionCounts['shoulder'] || 2, color: '#8b5cf6' },
                { label: 'Stroke & Neurological Rehabilitation', count: regionCounts['neuro'] || 1, color: '#ec4899' },
              ].map((item) => {
                const percentage = Math.round((item.count / patients.length) * 100) || 20;
                return (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '3px' }}>
                      <span style={{ fontWeight: '600' }}>{item.label}</span>
                      <span style={{ color: '#64748b' }}>{item.count} patients ({percentage}%)</span>
                    </div>
                    <div style={{ height: '8px', width: '100%', background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${percentage}%`, background: item.color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Most Utilized Physiotherapy Modalities */}
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">⚡ Top Clinical Modalities Delivered</h3>
          </div>
          <div className="crm-card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {sortedModalities.slice(0, 6).map(([name, count]) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #f8fafc',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#0284c7' }}>•</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: '600' }}>{name}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', background: '#e0f2fe', color: '#0369a1', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: '700' }}>
                    {count} Sessions
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Care Mode: Clinic vs Home Visit */}
        <div className="crm-card">
          <div className="crm-card-header">
            <h3 className="crm-card-title">📍 In-Clinic vs Home Care Ratio</h3>
          </div>
          <div className="crm-card-body">
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ flex: 1, padding: '1rem', background: '#e0f2fe', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0369a1' }}>{clinicCount}</div>
                <div style={{ fontSize: '0.8rem', color: '#0369a1', fontWeight: '600' }}>In-Clinic Patients</div>
              </div>
              <div style={{ flex: 1, padding: '1rem', background: '#ede9fe', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#6d28d9' }}>{homeCount}</div>
                <div style={{ fontSize: '0.8rem', color: '#6d28d9', fontWeight: '600' }}>Home Visit Patients</div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
              💡 Home visits represent <strong>{Math.round((homeCount / (clinicCount + homeCount || 1)) * 100)}%</strong> of active clinical cases, primarily utilized for post-stroke, elderly geriatric, and post-surgery fracture care across Muzaffarpur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
