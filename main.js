/**
 * Advance Physiotherapy Center - Main Interactive JavaScript
 * Doctor: Dr. Shahrukh • Location: Muzaffarpur, Bihar
 * Phone: 08340 276169 / +918340276169
 */

document.addEventListener('DOMContentLoaded', () => {
  initClinicStatus();
  initHeaderScroll();
  initNavigation();
  initHeroBackgroundSlider();
  initScrollReveal();
  initFaqAccordion();
  initAppointmentModal();
  initBookingForms();
  initCopyrightYear();
});

/**
 * 1. Dynamic Open/Closed Status Calculator based on Current Local Time
 */
function initClinicStatus() {
  const statusBadge = document.getElementById('dynamic-status-badge');
  const statusText = document.getElementById('status-text');
  const hoursLiveTag = document.getElementById('hours-live-tag');
  
  if (!statusBadge || !statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Clinic schedule: Mon-Sat (1-6) 9:00 AM (9.0) to 6:00 PM (18.0)
  const isWeekdayOrSat = day >= 1 && day <= 6;
  const isOpenHours = currentTime >= 9.0 && currentTime < 18.0;

  // Highlight current day in the hours table
  const currentDayRow = document.querySelector(`.hours-row[data-day="${day}"]`);
  if (currentDayRow) {
    currentDayRow.classList.add('today');
  }

  if (isWeekdayOrSat && isOpenHours) {
    statusText.textContent = 'Open today · Closes 6 PM';
    if (hoursLiveTag) {
      hoursLiveTag.textContent = 'Open Now';
      hoursLiveTag.style.backgroundColor = 'var(--success-bg)';
      hoursLiveTag.style.color = 'var(--success)';
    }
  } else if (isWeekdayOrSat && currentTime < 9.0) {
    statusText.textContent = 'Closed now · Opens today at 9 AM';
    if (hoursLiveTag) {
      hoursLiveTag.textContent = 'Opens 9 AM';
      hoursLiveTag.style.backgroundColor = '#fef3c7';
      hoursLiveTag.style.color = '#92400e';
    }
  } else if (isWeekdayOrSat && currentTime >= 18.0) {
    const nextDayText = day === 6 ? 'Monday at 9 AM' : 'tomorrow at 9 AM';
    statusText.textContent = `Closed now · Opens ${nextDayText}`;
    if (hoursLiveTag) {
      hoursLiveTag.textContent = 'Closed for Today';
      hoursLiveTag.style.backgroundColor = 'var(--slate-100)';
      hoursLiveTag.style.color = 'var(--slate-600)';
    }
  } else {
    // Sunday
    statusText.textContent = 'Sunday · Prior Appointment Only';
    if (hoursLiveTag) {
      hoursLiveTag.textContent = 'Appointments Only';
      hoursLiveTag.style.backgroundColor = '#e0f2fe';
      hoursLiveTag.style.color = '#0369a1';
    }
  }
}

/**
 * 2. Sticky Header Styling on Scroll
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * 3. Navigation, Mobile Drawer & Active Link Spy
 */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Smooth scroll offset handling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ScrollSpy for Desktop Nav
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * 4. FAQ Accordion Interaction
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherIcon) otherIcon.innerHTML = '+';
        }
      });

      // Toggle current item
      const icon = item.querySelector('.faq-icon');
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        if (icon) icon.innerHTML = '+';
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (icon) icon.innerHTML = '&minus;';
      }
    });
  });
}

/**
 * 5. Appointment Quick Modal
 */
function initAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const serviceSelect = document.getElementById('m-service');

  if (!modal) return;

  const openModal = (serviceName = null) => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (serviceName && serviceSelect) {
      // Find matching option
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase()) ||
            serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    // Set default date to today or tomorrow
    const dateInput = document.getElementById('m-date');
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-service');
      openModal(service);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * 6. Form Submission, Validation & WhatsApp Deep Links
 */
function initBookingForms() {
  const clinicPhone = '918340276169'; // WhatsApp formatted
  const today = new Date().toISOString().split('T')[0];

  // Set min date on main form
  const mainDateInput = document.getElementById('preferred-date');
  if (mainDateInput) {
    mainDateInput.min = today;
    mainDateInput.value = today;
  }

  // Handle Main Booking Form
  const mainForm = document.getElementById('appointment-form');
  const mainFeedback = document.getElementById('form-feedback');

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(mainForm);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const service = formData.get('service');
      const date = formData.get('date');

      showToast(`Appointment requested for ${name}! Dr. Shahrukh's clinic will call ${phone} to confirm.`, 'success');

      if (mainFeedback) {
        mainFeedback.className = 'form-feedback success';
        mainFeedback.innerHTML = `<strong>Appointment Request Received!</strong><br>Thank you, ${escapeHtml(name)}. We have received your booking for <em>${escapeHtml(service)}</em> on ${escapeHtml(date)}. Our team will call ${escapeHtml(phone)} shortly to confirm your time slot.`;
        mainFeedback.classList.remove('hidden');
      }

      mainForm.reset();
    });
  }

  // Handle Main WhatsApp Instant Booking Button
  const mainWhatsAppBtn = document.getElementById('whatsapp-booking-btn');
  if (mainWhatsAppBtn && mainForm) {
    mainWhatsAppBtn.addEventListener('click', () => {
      const name = document.getElementById('patient-name').value.trim() || 'Patient';
      const phone = document.getElementById('patient-phone').value.trim() || '';
      const service = document.getElementById('treatment-type').value;
      const date = document.getElementById('preferred-date').value || today;
      const msg = document.getElementById('patient-message').value.trim();

      const text = `Hello Dr. Shahrukh / Advance Physiotherapy Center,\n\nI would like to book a physiotherapy appointment:\n- Name: ${name}\n- Phone: ${phone}\n- Service Needed: ${service}\n- Preferred Date: ${date}${msg ? `\n- Symptoms: ${msg}` : ''}\n\nPlease let me know available slots. Thank you!`;

      const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Handle Modal Booking Form
  const modalForm = document.getElementById('modal-booking-form');
  const modalFeedback = document.getElementById('modal-feedback');

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(modalForm);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const service = formData.get('service');
      const date = formData.get('date');

      showToast(`Request sent for ${name}! We will contact you soon.`, 'success');

      if (modalFeedback) {
        modalFeedback.className = 'form-feedback success';
        modalFeedback.innerHTML = `<strong>Success!</strong> Request confirmed for ${escapeHtml(name)} (${escapeHtml(service)}).`;
        modalFeedback.classList.remove('hidden');
      }

      setTimeout(() => {
        const modal = document.getElementById('appointment-modal');
        if (modal) modal.classList.remove('open');
        modalForm.reset();
        if (modalFeedback) modalFeedback.classList.add('hidden');
        document.body.style.overflow = '';
      }, 2000);
    });
  }

  // Handle Modal WhatsApp Button
  const modalWhatsAppBtn = document.getElementById('m-whatsapp-btn');
  if (modalWhatsAppBtn) {
    modalWhatsAppBtn.addEventListener('click', () => {
      const name = document.getElementById('m-name').value.trim() || 'Patient';
      const phone = document.getElementById('m-phone').value.trim() || '';
      const service = document.getElementById('m-service').value;
      const date = document.getElementById('m-date').value || today;
      const notes = document.getElementById('m-notes').value.trim();

      const text = `Hello Dr. Shahrukh / Advance Physiotherapy Center,\n\nI would like to book a consultation:\n- Patient: ${name}\n- Contact: ${phone}\n- Service: ${service}\n- Preferred Date: ${date}${notes ? `\n- Note: ${notes}` : ''}`;

      const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

/**
 * 7. Toast Notification Utility
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * 8. Dynamic Copyright Year
 */
function initCopyrightYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Helper: Simple HTML sanitizer
 */
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/**
 * 9. Automatic Hero Background Multi-Image Slider
 */
function initHeroBackgroundSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const captionEl = document.getElementById('hero-slide-caption');
  const heroSection = document.getElementById('home');

  if (!slides || slides.length === 0) return;

  const captions = [
    'Consultation Chamber & Certified Clinic Setup',
    'Advanced Electrotherapy & Cervical Traction in Clinic',
    'Official Clinic Entrance & Signboard at Juran Chapra',
    'World Physiotherapy Day Recognition & Award',
    'Medical Conference & Physiotherapy Summit Honors'
  ];

  let currentSlide = 0;
  let slideTimer = null;

  const mobileSlides = document.querySelectorAll('.mobile-showcase-slide');

  function goToSlide(index) {
    slides[currentSlide]?.classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    if (mobileSlides[currentSlide]) mobileSlides[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide]?.classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    if (mobileSlides[currentSlide]) mobileSlides[currentSlide].classList.add('active');

    if (captionEl && captions[currentSlide]) {
      captionEl.style.opacity = '0';
      captionEl.style.transition = 'opacity 0.2s ease';
      setTimeout(() => {
        captionEl.textContent = captions[currentSlide];
        captionEl.style.opacity = '1';
      }, 200);
    }
  }

  function startSlider() {
    stopSlider();
    slideTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 2500); // 2.5 seconds per slide for faster, dynamic movement
  }

  function stopSlider() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startSlider();
    });
  });

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlider);
    heroSection.addEventListener('mouseleave', startSlider);
  }

  startSlider();
}

/**
 * 9. Scroll Reveal Animations (Smooth Staggered Glides)
 */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const revealTargets = document.querySelectorAll(`
    .section-header,
    .service-card,
    .doctor-showcase-card,
    .about-text-col,
    .value-card,
    .why-card,
    .evidence-card,
    .review-card,
    .faq-item,
    .contact-card,
    .map-wrapper,
    .quick-booking-panel
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
    rootMargin: '0px 0px -30px 0px'
  });

  revealTargets.forEach(el => observer.observe(el));
}
