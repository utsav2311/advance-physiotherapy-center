import { Link } from 'react-router-dom';
import { useCrm } from '../context/CrmContext';

export default function CrmSidebar() {
  const { activeTab, setActiveTab, appointments, patients, invoices } = useCrm();

  const todayStr = new Date().toISOString().split('T')[0];
  const todayAptsCount = appointments.filter((a) => a.date === todayStr && a.status !== 'Cancelled').length;
  const activePatientsCount = patients.filter((p) => p.status === 'Active').length;
  const pendingInvoicesCount = invoices.filter((i) => i.status !== 'Paid').length;

  const NAV_ITEMS = [
    {
      id: 'dashboard',
      label: 'Command Center',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      id: 'patients',
      label: 'Patients & EMR',
      count: activePatientsCount,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'appointments',
      label: 'Appointments & Home Visit',
      count: todayAptsCount,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: 'rehab',
      label: 'Rehab & Pain Tracker',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      id: 'prescriptions',
      label: 'Exercise Rx Builder',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      id: 'billing',
      label: 'Billing & Receipts',
      count: pendingInvoicesCount > 0 ? pendingInvoicesCount : null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp Automations',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      id: 'analytics',
      label: 'Clinic Analytics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="crm-sidebar crm-no-print">
      <div className="crm-sidebar-brand">
        <div className="crm-sidebar-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <div className="crm-sidebar-title">Advance Physio</div>
          <div className="crm-sidebar-subtitle">Clinic CRM Portal</div>
        </div>
      </div>

      <div className="crm-sidebar-doctor">
        <div className="crm-doctor-avatar">DS</div>
        <div className="crm-doctor-info">
          <div className="crm-doctor-name">Dr. Sayed Shahrukh Firoz</div>
          <div className="crm-doctor-role">B.P.T., M.P.T. (Ortho)</div>
        </div>
      </div>

      <ul className="crm-nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              className={`crm-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="crm-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.count != null && <span className="crm-nav-badge">{item.count}</span>}
            </button>
          </li>
        ))}
      </ul>

      <div className="crm-sidebar-footer">
        <Link to="/" className="crm-footer-link" title="Open public clinic website">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span>View Public Website</span>
        </Link>
      </div>
    </aside>
  );
}
