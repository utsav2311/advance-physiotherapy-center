import { motion } from 'framer-motion';

/**
 * Wraps children in a fade+rise reveal animation that triggers once when
 * scrolled into view. Pre-buffers 50px so elements are smoothly prepared
 * and rendered before entering view, preventing flicker or stutter on scroll.
 */
export default function Reveal({
  children,
  index = 0,
  delayStep = 0.06,
  y = 16,
  className,
  as = 'div',
  ...rest
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '60px 0px -20px 0px', amount: 0.05 }}
      transition={{ duration: 0.45, delay: Math.min(index * delayStep, 0.3), ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
