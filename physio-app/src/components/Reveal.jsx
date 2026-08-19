import { motion } from 'framer-motion';

/**
 * Wraps children in a fade+rise reveal animation that triggers once when
 * scrolled into view. Replaces the old IntersectionObserver + .reveal-init/.revealed
 * CSS class approach with Motion's whileInView.
 *
 * `index` enables a staggered delay for items inside a grid/list.
 */
export default function Reveal({
  children,
  index = 0,
  delayStep = 0.08,
  y = 20,
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
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, delay: index * delayStep, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
