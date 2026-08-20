import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import ReviewCard from '../components/ReviewCard';
import MarqueeCard from '@/components/ui/marquee-card';
import { GoogleIcon } from '../components/Icons';
import { reviews, ratingSummary } from '../data/reviews';
import { reviewsFaqs } from '../data/faqs';
import { SITE } from '../data/site';

export default function Reviews() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Spine & Back', 'Cervical Care', 'Frozen Shoulder & Knee', 'Sports & Rehab', 'Home Visits'];

  const filteredReviews = filter === 'All'
    ? reviews
    : reviews.filter((r) => r.category === filter);

  return (
    <>
      <Seo
        title={`Patient Reviews & Testimonials (${ratingSummary.reviewCountDisplay})`}
        description={`Rated ${ratingSummary.score}/5 on Google based on ${ratingSummary.reviewCountDisplay} — authentic patient reviews, recovery outcomes, and experiences from Advance Physiotherapy Centre, Muzaffarpur.`}
        path="/reviews"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />

      <PageHero
        label="Verified Patient Feedback"
        title="Patient Reviews &amp; Success Stories"
        subtitle={`Real recovery experiences from 30+ patients treated at Advance Physiotherapy Centre across back pain, neck stiffness, joint mobility, and rehabilitation.`}
        bgImage="/images/bg-spine-biomech.webp"
      />

      <section className="section reviews-section">
        <div className="container">
          {/* GOOGLE REVIEWS OVERVIEW SCORECARD */}
          <Reveal className="reviews-summary">
            <div className="google-badge">
              <GoogleIcon />
              <span>Verified Google Business Profile</span>
            </div>

            <div className="score-stars-row">
              <div className="score">{ratingSummary.score}</div>
              <div className="stars-wrapper">
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="count">100% 5.0 Star Rating ({ratingSummary.reviewCountDisplay})</div>
              </div>
            </div>

            <div className="reviews-trust-pills">
              <span className="reviews-trust-pill">✓ {ratingSummary.reviewCountDisplay}</span>
              <span className="reviews-trust-pill">✓ Direct Treatment by {SITE.doctor}</span>
              <span className="reviews-trust-pill">✓ 100% Evidence-Based Recovery</span>
            </div>

            <div className="reviews-summary-actions">
              <a
                href={SITE.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GoogleIcon style={{ width: 15, height: 15 }} />
                <span>View on Google Maps ↗</span>
              </a>
              <WhatsAppButton
                className="btn btn-primary btn-sm"
                message="Hello Dr. Shahrukh, I would like to book a physiotherapy consultation."
              >
                Book Consultation
              </WhatsAppButton>
            </div>
          </Reveal>

          {/* RECOVERY HIGHLIGHTS MARQUEE REEL */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="text-center" style={{ marginBottom: '1rem' }}>
              <span className="section-label" style={{ fontSize: '0.75rem' }}>Live Patient Recovery Stream</span>
            </div>
            <MarqueeCard speed="normal" pauseOnHover={true} />
          </div>

          {/* FILTER PILLS */}
          <div className="filter-pills" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'All' ? `All Reviews (${reviews.length})` : `${cat} (${reviews.filter(r => r.category === cat).length})`}
              </button>
            ))}
          </div>

          {/* REVIEWS GRID */}
          <div className="reviews-grid">
            {filteredReviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg">
              Start Your Recovery Today
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FaqSection
        items={reviewsFaqs}
        title="Patient Care &amp; Treatment FAQs"
        subtitle="Common questions about patient recovery outcomes, treatment duration, and therapy experience."
      />
    </>
  );
}
