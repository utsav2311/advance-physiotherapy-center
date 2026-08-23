import Reveal from './Reveal';
import { FacilityIcon, HomeVisitIcon } from './Icons';

export default function FacilityCard({
  name,
  icon,
  image,
  desc,
  tag,
  index = 0,
  isHomeVisit = false,
}) {
  return (
    <Reveal index={index} delayStep={0.06} variant="scale-in" className="facility-card">
      {image && (
        <div className="facility-img-wrap">
          <img src={image} alt={name} loading="lazy" decoding="async" />
          {tag && <span className="facility-tag">{tag}</span>}
        </div>
      )}
      <div className="facility-card-content">
        <div className="facility-header-row">
          <div className="facility-card-icon">
            {isHomeVisit ? <HomeVisitIcon /> : <FacilityIcon name={icon} />}
          </div>
          <h3 className="facility-card-title">{name}</h3>
        </div>
        {desc && <p className="facility-card-desc">{desc}</p>}
      </div>
    </Reveal>
  );
}
