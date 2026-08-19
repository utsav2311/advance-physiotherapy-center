import { Link } from 'react-router-dom';

export default function Breadcrumb({ trail }) {
  // trail: array of { label, to? } — last item has no `to` (current page)
  return (
    <nav className="breadcrumb-bar" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {trail.map((item, i) => (
            <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {item.to ? <Link to={item.to}>{item.label}</Link> : <span className="breadcrumb-current">{item.label}</span>}
              {i < trail.length - 1 && <span className="breadcrumb-sep">/</span>}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
