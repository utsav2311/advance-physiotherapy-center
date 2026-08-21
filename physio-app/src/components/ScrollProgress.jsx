import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Ultra-minimal, high-performance scroll progress indicator at the top of the viewport.
 * Uses hardware-accelerated spring physics for smooth, 60fps progress tracking.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </div>
  );
}
