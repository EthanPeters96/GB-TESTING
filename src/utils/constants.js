// Application constants
export const APP_CONFIG = {
  PHOTOGRAPHER_NAME: 'ALEX MORGAN',
  TAGLINE: 'Landscape Photographer',
  DESCRIPTION: 'Capturing the soul of the city through light, shadow, and architectural beauty',
  LOCATION: 'New York City, NY',
  EMAIL: 'alex.morgan@photography.com',
  PHONE: '+1 (555) 123-4567',
  EXPERIENCE_YEARS: '10+ Years',
  COMPLETED_PROJECTS: '200+ Completed',
}

// Social media links
export const SOCIAL_LINKS = {
  INSTAGRAM: {
    label: 'Follow on Instagram',
    url: 'https://instagram.com/alexmorgan',
    shortName: 'IG',
  },
  FACEBOOK: {
    label: 'Follow on Facebook',
    url: 'https://facebook.com/alexmorgan',
    shortName: 'FB',
  },
  TWITTER: {
    label: 'Follow on Twitter',
    url: 'https://twitter.com/alexmorgan',
    shortName: 'TW',
  },
}

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// Animation configurations
export const ANIMATIONS = {
  FADE_IN: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  SLIDE_IN_LEFT: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  SLIDE_IN_RIGHT: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  STAGGER_CONTAINER: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  STAGGER_ITEM: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
}

// Form validation rules
export const VALIDATION_RULES = {
  NAME: {
    REQUIRED: 'Name is required',
    MIN_LENGTH: 2,
  },
  EMAIL: {
    REQUIRED: 'Email is required',
    INVALID: 'Please enter a valid email address',
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  MESSAGE: {
    REQUIRED: 'Message is required',
    MIN_LENGTH: 10,
    MIN_LENGTH_ERROR: 'Message must be at least 10 characters long',
  },
}

// API endpoints (for future use)
export const API_ENDPOINTS = {
  CONTACT_FORM: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  GALLERY: '/api/gallery',
}

// Image optimization settings
export const IMAGE_CONFIG = {
  LAZY_LOADING: true,
  QUALITY: 80,
  FORMATS: ['webp', 'jpg'],
  SIZES: {
    THUMBNAIL: 400,
    MEDIUM: 800,
    LARGE: 1200,
    HERO: 2070,
  },
}
