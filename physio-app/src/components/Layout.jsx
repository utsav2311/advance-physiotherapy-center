import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import MobileStickyBar from './MobileStickyBar';
import ScrollProgress from './ScrollProgress';
import PageTransition from './PageTransition';

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;

  // Scroll to top on route change (SPA navigation doesn't reset scroll by default)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
