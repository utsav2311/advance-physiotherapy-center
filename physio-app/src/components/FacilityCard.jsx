import Reveal from './Reveal';
import { FacilityIcon, HomeVisitIcon } from './Icons';

export default function FacilityCard({ name, icon, index = 0, isHomeVisit = false }) {
  return (
    <Reveal index={index} delayStep={0.05} className="facility-card">
      <div className="facility-card-icon">
        {isHomeVisit ? <HomeVisitIcon /> : <FacilityIcon name={icon} />}
      </div>
      <span>{name}</span>
    </Reveal>
  );
}
