import { motion } from 'framer-motion';

/**
 * Shared hero banner for sub-pages (About, Services, Gallery, Reviews, FAQ, Contact, Process).
 * bgImage: url passed as inline style so it works with Vite's /public path resolution.
 */
export default function PageHero({ label, title, subtitle, bgImage }) {
  const style = bgImage ? { backgroundImage: `url(${bgImage})` } : undefined;

  return (
    <section className="page-hero-section" style={style}>
      <div className="container">
        <motion.div
          className="page-hero-content text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">{label}</span>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-subtitle">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
