import { Link } from 'react-router-dom';
import { ServiceIcon } from './Icons';
import Reveal from './Reveal';

/**
 * Compact service card used in the full services grid.
 */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal index={index} delayStep={0.05} className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.shortTitle} width="400" height="260" loading="lazy" />
      </div>
      <div className="service-card-body">
        <div className="service-card-icon">
          <ServiceIcon name={service.icon} />
        </div>
        <h4>{service.title}</h4>
        <p>{service.cardDescription}</p>
        <Link to={`/services/${service.slug}`} className="service-card-link">Details →</Link>
      </div>
    </Reveal>
  );
}

/**
 * Larger "featured" card used for the homepage's 3-up spotlight grid.
 */
export function FeaturedServiceCard({ service, index = 0 }) {
  return (
    <Reveal index={index} delayStep={0.12} className="featured-card">
      <div className="featured-card-image">
        <img src={service.image} alt={service.shortTitle} width="680" height="420" loading="lazy" />
      </div>
      <div className="featured-card-body">
        <h3>{service.title}</h3>
        <p>{service.lead.slice(0, 120)}…</p>
        <Link to={`/services/${service.slug}`} className="service-card-link">View Treatment Guide →</Link>
      </div>
    </Reveal>
  );
}
