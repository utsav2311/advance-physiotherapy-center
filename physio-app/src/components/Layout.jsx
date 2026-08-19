import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileStickyBar from './MobileStickyBar';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change (SPA navigation doesn't reset scroll by default)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
