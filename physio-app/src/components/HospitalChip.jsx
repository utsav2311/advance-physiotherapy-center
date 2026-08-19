import Reveal from './Reveal';
import { HospitalIcon, HomeVisitIcon } from './Icons';

export default function HospitalChip({ name, index = 0, isHomeVisit = false }) {
  return (
    <Reveal index={index} delayStep={0.06} className="hospital-chip">
      <div className="hospital-chip-icon">
        {isHomeVisit ? <HomeVisitIcon /> : <HospitalIcon />}
      </div>
      <span>{name}</span>
    </Reveal>
  );
}
