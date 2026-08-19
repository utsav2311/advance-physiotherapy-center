import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import Seo from '../components/Seo';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Consultation', 'Treatment', 'Awards', 'Clinic'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter || (filter === 'Awards' && item.category === 'Conferences'));

  return (
    <>
      <Seo
        title="Clinic Gallery"
        description="Authentic photographs of Advance Physiotherapy Center consultation chamber, therapy equipment, and professional honors in Muzaffarpur."
        path="/gallery"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />

      <PageHero
        label="Inside Our Clinic"
        title="Clinic Gallery"
        subtitle="Real photographs of our consultation chamber, treatment sessions, equipment, and professional awards."
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
                onClick={() => setFilter(cat)}
              >
                {cat === 'All' ? `All Photos (${galleryItems.length})` : cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, i) => (
              <Reveal
                key={item.image}
                index={i}
                delayStep={0.06}
                className={`gallery-item item-${item.size}`}
              >
                <img src={item.image} alt={item.alt} loading={i < 2 ? 'eager' : 'lazy'} />
                <div className="gallery-caption"><span>{item.caption}</span></div>
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg">Book Your Visit</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}

