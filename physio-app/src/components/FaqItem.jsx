import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { ChevronDownIcon } from './Icons';

export default function FaqItem({ item, isOpen, onToggle, index = 0 }) {
  return (
    <Reveal index={index} delayStep={0.04} className={`faq-item${isOpen ? ' active' : ''}`}>
      <button type="button" className="faq-question" aria-expanded={isOpen} onClick={onToggle}>
        <span>{item.q}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDownIcon />
        </motion.span>
      </button>
      <motion.div
        className="faq-answer-inner"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p>{item.a}</p>
      </motion.div>
    </Reveal>
  );
}
