import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FaqItem from '../components/FaqItem';
import WhatsAppButton from '../components/WhatsAppButton';
import Seo from '../components/Seo';
import { faqs } from '../data/faqs';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about physiotherapy sessions, home visits, treatment duration, and what to expect at Advance Physiotherapy Center, Muzaffarpur."
        path="/faq"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />

      <PageHero
        label="Patient Inquiries"
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you prepare for your visit and understand our protocols."
        bgImage="/images/bg-medical-mesh.webp"
      />

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message="Hello Dr. Shahrukh, I have a question.">
              Ask a Question on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
