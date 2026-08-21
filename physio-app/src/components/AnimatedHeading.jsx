import { motion } from 'framer-motion';

/**
 * Splits text into words and applies a smooth, staggered upward slide reveal.
 * Preserves exact text content and HTML hierarchy.
 */
export default function AnimatedHeading({
  text,
  className = 'section-title',
  as = 'h2',
  delay = 0,
}) {
  const Component = motion[as] || motion.h2;

  if (!text || typeof text !== 'string') {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (custom = 0) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: custom,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 240,
      },
    },
  };

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px 0px', amount: 0.2 }}
      custom={delay}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
