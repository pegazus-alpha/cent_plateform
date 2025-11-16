// Language configurations
export const LANGUAGES = {
  FR: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  EN: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  }
};

// Local Storage Keys
export const STORAGE_KEYS = {
  LANGUAGE: 'app_language',
  USER: 'user_data',
  THEME: 'app_theme',
  TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token'
};

// API Base URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// API Endpoints
export const API_ENDPOINTS = {
  BASE_URL: API_BASE_URL,
  
  // Stats endpoints
  STATS: '/api/stats',
  
  // Blog endpoints
  BLOG: {
    LIST: '/api/blog/articles',
    DETAIL: (id) => `/api/blog/articles/${id}`,
    CATEGORIES: '/api/blog/categories',
    FEATURED: '/api/blog/featured',
    SEARCH: '/api/blog/search',
    COMMENTS: (id) => `/api/blog/articles/${id}/comments`,
    LIKE: (id) => `/api/blog/articles/${id}/like`
  },
  
  // Services endpoints
  SERVICES: {
    LIST: '/api/services',
    DETAIL: (id) => `/api/services/${id}`,
    CATEGORIES: '/api/services/categories'
  },
  
  // Community endpoints
  COMMUNITY: {
    FEATURES: '/api/community/features',
    CHALLENGES: '/api/community/challenges',
    LEADERBOARD: '/api/community/leaderboard'
  },
  
  // User endpoints
  USER: {
    PROFILE: '/api/user/profile',
    PROGRESS: '/api/user/progress',
    ACHIEVEMENTS: '/api/user/achievements'
  },
  
  // Other endpoints
  TESTIMONIALS: '/api/testimonials',
  NEWSLETTER: '/api/newsletter/subscribe',
  CONTACT: '/api/contact',
  SEARCH: '/api/search'
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: '100% ACADEMY',
  VERSION: '1.0.0',
  DEFAULT_LANGUAGE: LANGUAGES.FR.code,
  ITEMS_PER_PAGE: 12,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp']
};

// Pagination Configuration
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
  BLOG_PAGE_SIZE: 10,
  COMMENTS_PAGE_SIZE: 20,
  SEARCH_PAGE_SIZE: 15,
  RELATED_ARTICLES_COUNT: 4,
  FEATURED_ARTICLES_COUNT: 3,
  RECENT_ARTICLES_COUNT: 5,
  POPULAR_ARTICLES_COUNT: 5
};

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/100academy',
  TWITTER: 'https://twitter.com/100academy',
  LINKEDIN: 'https://linkedin.com/company/100academy',
  INSTAGRAM: 'https://instagram.com/100academy',
  YOUTUBE: 'https://youtube.com/100academy',
  WHATSAPP: 'https://wa.me/237XXXXXXXXX'
};

// Contact Information
export const CONTACT = {
  EMAIL: 'contact@100academy.com',
  PHONE: '+237 6XX XXX XXX',
  ADDRESS: 'Douala, Cameroun',
  SUPPORT_EMAIL: 'support@100academy.com',
  BUSINESS_EMAIL: 'business@100academy.com',
  HOURS: {
    WEEKDAYS: '8h00 - 18h00',
    SATURDAY: '9h00 - 15h00',
    SUNDAY: 'Fermé'
  }
};

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[1-9][\d\s\-\(\)]{7,15}$/,
  PASSWORD: {
    MIN_LENGTH: 8,
    REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
  }
};

// Animation Durations (in ms)
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 800
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE_DESKTOP: '1440px'
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: 'Erreur de réseau. Veuillez vérifier votre connexion.',
  NETWORK_ERROR: 'Erreur de réseau. Veuillez vérifier votre connexion.',
  GENERIC: 'Une erreur est survenue. Veuillez réessayer.',
  UNAUTHORIZED: 'Vous n\'êtes pas autorisé à accéder à cette ressource.',
  NOT_FOUND: 'Ressource non trouvée.',
  VALIDATION: 'Données invalides. Veuillez vérifier vos informations.',
  VALIDATION_ERROR: 'Données invalides. Veuillez vérifier vos informations.',
  SERVER_ERROR: 'Erreur serveur. Veuillez réessayer plus tard.',
  AUTHENTICATION_FAILED: 'Échec de l\'authentification. Veuillez vous reconnecter.',
  TOKEN_EXPIRED: 'Votre session a expiré. Veuillez vous reconnecter.'
};