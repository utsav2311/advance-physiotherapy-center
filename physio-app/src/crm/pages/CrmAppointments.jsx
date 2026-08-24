import { useState } from 'react';
import { useCrm } from '../context/CrmContext';
import CrmBadge from '../components/CrmBadge';

export default function CrmAppointments({ onOpenBookAptModal }) {
  const { appointments, updateAppointmentStatus, deleteAppointment, setSelectedPatientId, setActiveTab } = useCrm();
  const [filterType, setFilterType] = useState('ALL');
  const [filterDate, setFilterDate] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const filteredAppointments = appointments.filter((apt) => {
    const matchesType = filterType === 'ALL' || apt.type === filterType;
    const matchesDate = !filterDate || apt.date === filterDate;
    return matchesType && matchesDate;
  });

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setActiveTab('patient_detail');
  };

  return (
    <div className="crm-appointments">
      <div className="crm-card">
        <div className="crm-card-header">
          <div>
            <h3 className="crm-card-title">📅 Appointment & Home Visit Scheduling</h3>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px' }}>
              Manage clinic chamber time slots & personalized home visits in Muzaffarpur
            </div>
          </div>
          <button className="crm-btn crm-btn-primary" onClick={onOpenBookAptModal}>
            + Schedule Appointment
          </button>
        </div>

        <div className="crm-card-body" style={{ background: '#f8fafc', padding: '1rem 1.4rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <div>
              <input
                type="date"
                className="crm-input"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>

            <div>
              <select
                className="crm-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="ALL">All Appointment Types</option>
                <option value="In-Clinic">In-Clinic (Juran Chapra)</option>
                <option value="Home Visit">Home Care (Muzaffarpur)</option>
              </select>
            </div>

            {filterDate && (
              <button
                className="crm-btn crm-btn-secondary crm-btn-sm"
                onClick={() => setFilterDate('')}
              >
                Show All Dates
              </button>
            )}

            <button
              className="crm-btn crm-btn-secondary crm-btn-sm"
              onClick={() => setFilterDate(todayStr)}
            >
              📅 Jump to Today ({todayStr})
            </button>
          </div>
        </div>

        <div className="crm-card-body" style={{ padding: 0 }}>
          {filteredAppointments.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              No appointments found for the selected criteria.
            </div>
          ) : (
            <div className="crm-table-wrap">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Date & Time</th>
                    <th>Patient Name</th>
                    <th>Type & Location</th>
                    <th>Diagnosis / Condition</th>
                    <th>Cycle Progress</th>
                    <th>Status</th>
                    <th>Workflow Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id}>
                      <td>
                        <strong style={{ color: '#0284c7', background: '#e0f2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          {apt.queueToken}
                        </strong>
                      </td>
                      <td>
                        <strong>{apt.date}</strong>
                        <div style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: '700' }}>⏰ {apt.time}</div>
                      </td>
                      <td>
                        <button
                          style={{ background: 'none', border: 'none', padding: 0, color: '#1e293b', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', textAlign: 'left' }}
                          onClick={() => handlePatientClick(apt.patientId)}
                        >
                          {apt.patientName}
                        </button>
                        <div style={{ fontSize: '0.76rem', color: '#64748b' }}>📱 +91 {apt.phone}</div>
                      </td>
                      <td>
                        <CrmBadge status={apt.type}>{apt.type}</CrmBadge>
                        {apt.location && <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>📍 {apt.location}</div>}
                      </td>
                      <td style={{ maxWidth: '200px' }}>
                        <span style={{ fontWeight: '600' }}>{apt.diagnosis}</span>
                      </td>
                      <td>
                        <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>
                          {apt.sessionNumber || 'Single Visit'}
                        </span>
                      </td>
                      <td>
                        <CrmBadge status={apt.status}>{apt.status}</CrmBadge>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                          <select
                            style={{ padding: '0.3rem 0.5rem', fontSize: '0.78rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            value={apt.status}
                            onChange={(e) => updateAppointmentStatus(apt.id, e.target.value)}
                          >
                            <option value="Scheduled">Scheduled</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>

                          <a
                            href={`https://wa.me/91${apt.phone}?text=Hello%20${encodeURIComponent(apt.patientName)}%2C%20this%20is%20a%20reminder%20for%20your%20physiotherapy%20session%20with%20Dr.%20Sayed%20Shahrukh%20Firoz%20on%20${apt.date}%20at%20${apt.time}.%20Advance%20Physiotherapy%20Centre%2C%20Juran%20Chapra.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            title="Send WhatsApp Reminder"
                          >
                            💬
                          </a>

                          <button
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            style={{ color: '#ef4444' }}
                            onClick={() => {
                              if (confirm('Delete this appointment record?')) deleteAppointment(apt.id);
                            }}
                            title="Delete slot"
                          >
                            🗑️
                          </button>
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
