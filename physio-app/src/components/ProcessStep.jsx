import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon } from './Icons';

const STEP_ICONS = [ClipboardIcon, SpineIcon, ClockIcon, ShieldIcon];

/**
 * Expandable process step card. Shows a summary by default; clicking
 * "See what's included" reveals the detailed bullet list with a Motion
 * height animation.
 */
export default function ProcessStep({ step, index = 0, expandable = true }) {
  const [open, setOpen] = useState(false);
  const Icon = STEP_ICONS[index % STEP_ICONS.length];

  return (
    <Reveal index={index} className="process-card">
      <span className="process-card-number">{step.number}</span>
      <div className="process-card-icon">
        <Icon />
      </div>
      <h4>{step.title}</h4>
      <p>{step.summary}</p>

      {expandable && step.details && (
        <>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            style={{
              marginTop: '0.85rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--primary-700)',
            }}
          >
            {open ? 'Hide details −' : "See what's included →"}
          </button>
          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <ul className="process-detail-list">
              {step.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </Reveal>
  );
}
