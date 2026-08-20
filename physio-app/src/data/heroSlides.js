// Background slide media for the homepage hero carousel.
// Features the high-impact clinic therapy video as the 1st slide,
// followed by responsive high-resolution images with mobile/tablet/desktop focal positioning.

export const heroSlides = [
  {
    type: 'video',
    video: '/videos/hero-physiotherapy-guidance.mp4',
    poster: '/videos/hero-physiotherapy-guidance-poster.jpg',
    duration: 8000,
    mobilePosition: 'center center',
    tabletPosition: 'center center',
    desktopPosition: 'center center',
  },
  {
    type: 'image',
    image: '/images/medical-conference.webp',
    duration: 5000,
    mobilePosition: 'center 20%',
    tabletPosition: 'center 20%',
    desktopPosition: 'center center',
  },
  {
    type: 'image',
    image: '/images/bg-spine-biomech.webp',
    duration: 5000,
    mobilePosition: 'center center',
    tabletPosition: 'center center',
    desktopPosition: 'center center',
  },
  {
    type: 'image',
    image: '/images/treatment-electrotherapy-hero.webp',
    duration: 5000,
    mobilePosition: 'center 22%',
    tabletPosition: '52% 25%',
    desktopPosition: 'center 28%',
  },
];
