/**
 * Advance Physiotherapy Center - Modern Main JavaScript
 * Doctor: Dr. Shahrukh Firoz (B.P.T., M.P.T.) • Location: Muzaffarpur, Bihar
 * WhatsApp Booking: +91 83402 76169 (08340 276169)
 */

document.addEventListener('DOMContentLoaded', () => {
  initClinicStatus();
  initHeaderScroll();
  initNavigation();
  initScrollReveal();
});

/**
 * 1. Dynamic Open/Closed Status Calculator based on Current Local Time
 */
function initClinicStatus() {
  const heroStatusEl = document.getElementById('hero-live-status');
  if (!heroStatusEl) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Clinic Hours: Mon-Sat (1 to 6) 9:00 AM (9.0) to 6:00 PM (18.0)
  const isWeekdayOrSat = day >= 1 && day <= 6;
  const isOpenHours = currentTime >= 9.0 && currentTime < 18.0;

  if (isWeekdayOrSat && isOpenHours) {
    heroStatusEl.textContent = 'Open Today · Closes 6 PM';
  } else if (isWeekdayOrSat && currentTime < 9.0) {
    heroStatusEl.textContent = 'Closed Now · Opens Today at 9 AM';
  } else if (isWeekdayOrSat && currentTime >= 18.0) {
    const nextDayText = day === 6 ? 'Monday at 9 AM' : 'Tomorrow at 9 AM';
    heroStatusEl.textContent = `Closed for Today · Opens ${nextDayText}`;
  } else {
    // Sunday
    heroStatusEl.textContent = 'Sunday · Prior Appointment Only';
  }
}

/**
 * 2. Sticky Header Styling on Scroll
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Mobile Navigation Drawer & Active Link Spy
 */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.nav-link');

  function openDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Active Link Spy on Scroll
  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          drawerLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }
}

/**
 * 4. Silky Scroll Reveal System
 */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const revealTargets = document.querySelectorAll(`
    .section-header,
    .featured-block-card,
    .service-clean-card,
    .about-visual,
    .about-content,
    .why-clean-card,
    .gallery-item,
    .reviews-header-block,
    .review-clean-card,
    .contact-info-block,
    .contact-map-block
  `);

  revealTargets.forEach(el => {
    el.classList.add('reveal-init');
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(el => observer.observe(el));
}
