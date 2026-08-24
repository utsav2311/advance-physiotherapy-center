import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Process from './pages/Process';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CrmLayout from './crm/components/CrmLayout';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Isolated CRM Portal for Dr. Shahrukh & Clinic Staff */}
      <Route path="crm/*" element={<CrmLayout />} />

      {/* Public Facing Website (100% locked and untouched) */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="process" element={<Process />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
