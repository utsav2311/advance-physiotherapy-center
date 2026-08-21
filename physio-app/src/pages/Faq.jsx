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
        description="Answers to common questions about physiotherapy sessions, home visits, treatment duration, and what to expect at Advance Physiotherapy Centre, Muzaffarpur."
        path="/faq"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />

      <PageHero
        label="Patient Inquiries"
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you prepare for your visit and understand our protocols."
        bgImage="/images/bg-hero-faq.webp"
      />

      <FaqSection items={faqs} showHeader={false} />
    </>
  );
}
