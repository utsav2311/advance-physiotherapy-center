export default function CrmStatCard({ title, value, desc, icon, trend, color = 'primary' }) {
  return (
    <div className="crm-stat-card">
      <div className="crm-stat-header">
        <span className="crm-stat-title">{title}</span>
        <div className="crm-stat-icon" style={color === 'success' ? { background: '#d1fae5', color: '#059669' } : color === 'warning' ? { background: '#fef3c7', color: '#d97706' } : {}}>
          {icon}
        </div>
      </div>
      <div className="crm-stat-value">{value}</div>
      {desc && <div className="crm-stat-desc">{desc}</div>}
    </div>
  );
}
