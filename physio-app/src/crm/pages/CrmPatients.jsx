import { useState } from 'react';
import { useCrm } from '../context/CrmContext';
import CrmBadge from '../components/CrmBadge';

export default function CrmPatients({ onOpenAddPatientModal }) {
  const { patients, searchTerm, setSearchTerm, setSelectedPatientId, setActiveTab } = useCrm();
  const [filterVisitType, setFilterVisitType] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [filterBodyRegion, setFilterBodyRegion] = useState('ALL');

  const filteredPatients = patients.filter((p) => {
    const matchesSearch =
      searchTerm === '' ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.phone.includes(searchTerm) ||
      p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesVisit = filterVisitType === 'ALL' || p.visitType === filterVisitType;
    const matchesStatus = filterStatus === 'ALL' || p.status === filterStatus;
    const matchesRegion = filterBodyRegion === 'ALL' || p.bodyRegion === filterBodyRegion;

    return matchesSearch && matchesVisit && matchesStatus && matchesRegion;
  });

  const handlePatientSelect = (id) => {
    setSelectedPatientId(id);
    setActiveTab('patient_detail');
  };

  return (
    <div className="crm-patients">
      {/* HEADER & FILTERS */}
      <div className="crm-card">
        <div className="crm-card-header">
          <div>
            <h3 className="crm-card-title">👥 Patient Directory & Digital EMR</h3>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px' }}>
              Total {patients.length} Registered Patients • {patients.filter((p) => p.status === 'Active').length} Active Therapy Plans
            </div>
          </div>
          <button className="crm-btn crm-btn-primary" onClick={onOpenAddPatientModal}>
            + Register New Patient
          </button>
        </div>

        <div className="crm-card-body" style={{ background: '#f8fafc', padding: '1rem 1.4rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '220px' }}>
              <input
                type="text"
                className="crm-input"
                placeholder="Search by name, phone, diagnosis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div style={{ minWidth: '150px' }}>
              <select
                className="crm-select"
                value={filterVisitType}
                onChange={(e) => setFilterVisitType(e.target.value)}
              >
                <option value="ALL">All Care Types</option>
                <option value="In-Clinic">In-Clinic (Chamber)</option>
                <option value="Home Visit">Home Visit</option>
              </select>
            </div>

            <div style={{ minWidth: '150px' }}>
              <select
                className="crm-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="ALL">All Statuses</option>
                <option value="Active">Active Plans</option>
                <option value="Completed">Completed / Discharged</option>
              </select>
            </div>

            <div style={{ minWidth: '160px' }}>
              <select
                className="crm-select"
                value={filterBodyRegion}
                onChange={(e) => setFilterBodyRegion(e.target.value)}
              >
                <option value="ALL">All Body Regions</option>
                <option value="spine">Spine & Lumbar</option>
                <option value="cervical">Cervical & Neck</option>
                <option value="knee_hip">Knee & Hip</option>
                <option value="shoulder">Shoulder & Upper Limb</option>
                <option value="neuro">Neurological / Stroke</option>
              </select>
            </div>
          </div>
        </div>

        <div className="crm-card-body" style={{ padding: 0 }}>
          {filteredPatients.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              No patients found matching your search filters.
            </div>
          ) : (
            <div className="crm-table-wrap">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Patient ID</th>
                    <th>Name & Contact</th>
                    <th>Age / Gender</th>
                    <th>Diagnosis</th>
                    <th>Visit Mode</th>
                    <th>Progress / Sessions</th>
                    <th>Pain VAS</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <strong style={{ color: '#0284c7' }}>{p.id}</strong>
                      </td>
                      <td>
                        <button
                          style={{ background: 'none', border: 'none', padding: 0, color: '#1e293b', fontWeight: '700', fontSize: '0.92rem', cursor: 'pointer', textAlign: 'left' }}
                          onClick={() => handlePatientSelect(p.id)}
                        >
                          {p.name}
                        </button>
                        <div style={{ fontSize: '0.76rem', color: '#64748b' }}>📱 +91 {p.phone}</div>
                        <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>📍 {p.address}</div>
                      </td>
                      <td>
                        {p.age} yrs • {p.gender}
                      </td>
                      <td style={{ maxWidth: '240px' }}>
                        <span style={{ fontWeight: '600' }}>{p.diagnosis}</span>
                        {p.occupation && (
                          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>💼 {p.occupation}</div>
                        )}
                      </td>
                      <td>
                        <CrmBadge status={p.visitType}>{p.visitType}</CrmBadge>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <div style={{ flex: 1, height: '6px', width: '60px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                            <div
                              style={{
                                height: '100%',
                                width: `${Math.min(100, ((p.completedSessions || 0) / (p.totalPackageSessions || 1)) * 100)}%`,
                                background: '#0284c7',
                              }}
                            />
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: '700' }}>
                            {p.completedSessions || 0}/{p.totalPackageSessions || 1}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontWeight: '800', color: p.currentPainScore <= 3 ? '#059669' : '#d97706' }}>
                          {p.currentPainScore}/10
                        </span>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>was {p.initialPainScore}/10</div>
                      </td>
                      <td>
                        <CrmBadge status={p.status}>{p.status}</CrmBadge>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            onClick={() => handlePatientSelect(p.id)}
                            title="Open patient EMR file"
                          >
                            Open EMR →
                          </button>
                          <a
                            href={`https://wa.me/91${p.phone}?text=Hello%20${encodeURIComponent(p.name)}%2C%20this%20is%20Dr.%20Sayed%20Shahrukh%20Firoz%20from%20Advance%20Physiotherapy%20Centre.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            title="Chat on WhatsApp"
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
    </div>
  );
}
