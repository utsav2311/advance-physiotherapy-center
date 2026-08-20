import { motion } from 'framer-motion';

export default function ReviewCard({ review, index = 0 }) {
  const {
    name,
    initials,
    label,
    text,
    rating = 5,
    highlight,
    avatarGradient = 'linear-gradient(135deg, #0284c7, #0369a1)',
  } = review;

  return (
    <motion.article
      className="review-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="review-card-header">
        <div className="review-card-rating">
          <div className="review-stars-row" aria-label={`${rating} out of 5 stars`}>
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="review-score-text">5.0</span>
        </div>

        {label && <span className="review-condition-tag">{label}</span>}
      </div>

      {highlight && (
        <div className="review-highlight-badge">
          <span className="review-highlight-dot"></span>
          <span>{highlight}</span>
        </div>
      )}

      <p className="review-body-text">"{text}"</p>

      <div className="review-card-footer">
        <div className="review-avatar" style={{ background: avatarGradient }}>
          {initials}
        </div>
        <div className="review-author-info">
          <h4 className="review-author-name">{name}</h4>
          <div className="review-verified-badge">
            <svg className="verified-check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified Patient • Google Review</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
