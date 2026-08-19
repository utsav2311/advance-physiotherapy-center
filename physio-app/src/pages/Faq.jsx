import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { faqs } from '../data/faqs';

export default function Faq() {
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

      <FaqSection items={faqs} />
    </>
  );
}
