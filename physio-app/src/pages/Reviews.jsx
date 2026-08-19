import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { GoogleIcon } from '../components/Icons';
import { reviews, ratingSummary } from '../data/reviews';
import { SITE } from '../data/site';

export default function Reviews() {
  return (
    <>
      <Seo
        title="Patient Reviews"
        description={`Rated ${ratingSummary.score}/5 on Google — real patient reviews and experiences from Advance Physiotherapy Center, Muzaffarpur.`}
        path="/reviews"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />

      <PageHero
        label="Verified Feedback"
        title="Patient Reviews"
        subtitle={`Real experiences from patients treated at Advance Physiotherapy Center across our full range of services.`}
        bgImage="/images/bg-spine-biomech.webp"
      />

      <section className="section reviews-section">
        <div className="container">
          <Reveal className="reviews-summary">
            <div className="google-badge">
              <GoogleIcon />
              Verified Google Business
            </div>
            <div className="score">{ratingSummary.score}</div>
            <div className="stars">★★★★★</div>
            <div className="count">Based on <strong>{ratingSummary.reviewCountLabel}</strong></div>
            <a href={SITE.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="view-link">
              View on Google Maps ↗
            </a>
          </Reveal>

          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <Reveal key={r.name} index={i} delayStep={0.06} className="review-card" as="article">
                <div className="stars">★★★★★</div>
                <p className="text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.initials}</div>
                  <div className="review-author-meta">
                    <span className="name">{r.name}</span>
                    <span className="label">{r.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg">Book Your Consultation</WhatsAppButton>
          </div>
        </div>
      </section>

      <FaqSection
        title="Patient Care & Treatment FAQs"
        subtitle="Common questions about patient recovery outcomes, treatment duration, and therapy experience."
      />
    </>
  );
}
