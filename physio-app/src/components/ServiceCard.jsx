import { Link } from 'react-router-dom';
import { ServiceIcon } from './Icons';
import Reveal from './Reveal';

/**
 * Compact service card used in the full services grid and related services.
 * The entire card is fully clickable.
 */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal index={index} delayStep={0.04} className="service-card-reveal">
      <Link
        to={`/services/${service.slug}`}
        className="service-card"
        style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', cursor: 'pointer' }}
      >
        <div className="service-card-image">
          <img
            src={service.image}
            alt={service.shortTitle}
            width="400"
            height="260"
            loading={index < 4 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <div className="service-card-body">
          <div className="service-card-icon">
            <ServiceIcon name={service.icon} />
          </div>
          <h4>{service.title}</h4>
          <p>{service.cardDescription}</p>
          <span className="service-card-link">Details →</span>
        </div>
      </Link>
    </Reveal>
  );
}

/**
 * Larger "featured" card used for the homepage's 3-up spotlight grid.
 * The entire card is fully clickable.
 */
export function FeaturedServiceCard({ service, index = 0 }) {
  return (
    <Reveal index={index} delayStep={0.06} className="featured-card-reveal">
      <Link
        to={`/services/${service.slug}`}
        className="featured-card"
        style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      >
        <div className="featured-card-image">
          <img
            src={service.image}
            alt={service.shortTitle}
            width="680"
            height="420"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="featured-card-body">
          <h3>{service.title}</h3>
          <p>{service.lead.slice(0, 120)}…</p>
          <span className="service-card-link">View Treatment Guide →</span>
        </div>
      </Link>
    </Reveal>
  );
}
