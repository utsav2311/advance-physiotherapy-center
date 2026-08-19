import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import Seo from '../components/Seo';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  return (
    <>
      <Seo
        title="Clinic Gallery"
        description="Photographs of the Advance Physiotherapy Center consultation chamber, therapy equipment, and professional honors in Muzaffarpur."
        path="/gallery"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />

      <PageHero
        label="Inside Our Clinic"
        title="Clinic Gallery"
        subtitle="Real photographs of our consultation chamber, therapy equipment, and professional honors."
        bgImage="/images/bg-medical-mesh.webp"
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <Reveal
                key={item.caption}
                index={i}
                delayStep={0.08}
                className={`gallery-item item-${item.size}`}
              >
                <img src={item.image} alt={item.alt} loading={i === 0 ? 'eager' : 'lazy'} />
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
