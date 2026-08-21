import { motion } from 'framer-motion';

const variantsMap = {
  'fade-up': (y = 20) => ({
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  }),
  'fade-down': (y = 20) => ({
    hidden: { opacity: 0, y: -y },
    visible: { opacity: 1, y: 0 },
  }),
  'fade-left': (x = 24) => ({
    hidden: { opacity: 0, x: -x },
    visible: { opacity: 1, x: 0 },
  }),
  'fade-right': (x = 24) => ({
    hidden: { opacity: 0, x },
    visible: { opacity: 1, x: 0 },
  }),
  'scale-in': () => ({
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  }),
  'blur-sharp': () => ({
    hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  }),
};

/**
 * Universal scroll-triggered reveal wrapper with multi-variant animation support.
 * Pre-buffers 50px so elements are smoothly prepared and rendered before entering view.
 */
export default function Reveal({
  children,
  index = 0,
  delayStep = 0.06,
  y = 20,
  x = 24,
  variant = 'fade-up',
  duration = 0.48,
  className,
  as = 'div',
  threshold = 0.08,
  style,
  ...rest
}) {
  const Component = motion[as] || motion.div;
  const getVariant = variantsMap[variant] || variantsMap['fade-up'];
  const variants = getVariant(variant === 'fade-left' || variant === 'fade-right' ? x : y);

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '60px 0px -20px 0px', amount: threshold }}
      variants={variants}
      transition={{
        duration,
        delay: Math.min(index * delayStep, 0.4),
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
