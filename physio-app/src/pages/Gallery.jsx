import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { galleryItems } from '../data/gallery';
import { galleryFaqs } from '../data/faqs';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const categories = ['All', 'Videos', 'Treatment', 'Consultation', 'Awards', 'Clinic'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : filter === 'Videos'
    ? galleryItems.filter((item) => item.type === 'video')
    : galleryItems.filter((item) => item.category === filter);

  const videoCount = galleryItems.filter((item) => item.type === 'video').length;

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
  };

  return (
    <>
      <Seo
        title="Clinic Gallery"
        description="Authentic photographs and HD treatment video clips of Advance Physiotherapy Center consultation chamber, therapy equipment, and patient recovery in Muzaffarpur."
        path="/gallery"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />

      <PageHero
        label="Inside Our Clinic"
        title="Clinic Gallery &amp; Video Tour"
        subtitle="Watch authentic therapy clips and browse high-resolution photographs of our clinical facilities."
        bgImage="/images/bg-medical-mesh.webp"
      />

      <section className="section">
        <div className="container">
          <div className="filter-pills" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
              >
                {cat === 'All'
                  ? `All Media (${galleryItems.length})`
                  : cat === 'Videos'
                  ? `🎥 Videos (${videoCount})`
                  : cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, i) => (
              <Reveal
                key={item.video || item.image}
                index={i}
                delayStep={0.04}
                className={`gallery-item item-${item.size || 'medium'} ${item.type === 'video' ? 'item-video' : ''}`}
                onClick={() => handleOpenLightbox(i)}
                tabIndex={0}
                role="button"
                aria-label={`Open full view: ${item.caption || item.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(i);
                  }
                }}
              >
                {item.type === 'video' ? (
                  <div className="gallery-video-container">
                    <video
                      src={item.video}
                      poster={item.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="gallery-video"
                    />
                    <div className="gallery-video-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>HD Video</span>
                    </div>
                  </div>
                ) : (
                  <img src={item.image} alt={item.alt} loading={i < 4 ? 'eager' : 'lazy'} />
                )}
                <div className="gallery-caption"><span>{item.caption}</span></div>
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg">Book Your Visit</WhatsAppButton>
          </div>
        </div>
      </section>

      <FaqSection
        items={galleryFaqs}
        title="Clinic & Facility FAQs"
        subtitle="Questions regarding clinic cleanliness, parking, appointment timings, and rehabilitation equipment."
      />

      {/* Full View Lightbox Modal */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}


