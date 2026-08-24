import { useCrm } from '../context/CrmContext';

export default function CrmMobileNav() {
  const { activeTab, setActiveTab } = useCrm();

  const TABS = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'patients', label: 'Patients', icon: '👥' },
    { id: 'appointments', label: 'Calendar', icon: '📅' },
    { id: 'rehab', label: 'Rehab', icon: '⚡' },
    { id: 'billing', label: 'Billing', icon: '🧾' },
  ];

  return (
    <nav className="crm-mobile-nav crm-no-print" aria-label="Mobile CRM Navigation">
      <div className="crm-mobile-nav-inner">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`crm-mobile-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
