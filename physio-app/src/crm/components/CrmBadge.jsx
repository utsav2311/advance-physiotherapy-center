export default function CrmBadge({ status, type = 'status', children }) {
  const getBadgeVariant = () => {
    switch (status?.toLowerCase()) {
      case 'active':
      case 'paid':
      case 'completed':
      case 'confirmed':
        return 'crm-badge-success';
      case 'in-progress':
      case 'partial':
      case 'home visit':
        return 'crm-badge-primary';
      case 'scheduled':
      case 'waiting':
        return 'crm-badge-warning';
      case 'cancelled':
      case 'unpaid':
      case 'high':
        return 'crm-badge-danger';
      default:
        return 'crm-badge-neutral';
    }
  };

  return <span className={`crm-badge ${getBadgeVariant()}`}>{children || status}</span>;
}
