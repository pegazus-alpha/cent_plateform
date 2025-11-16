/**
 * Format a date to a readable string
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'fr-FR')
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, locale = 'fr-FR', options = {}) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) return '';

  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
};

/**
 * Format a date to a relative time string (e.g., "il y a 2 jours")
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'fr')
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (date, locale = 'fr') => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now - dateObj) / 1000);

  const intervals = {
    année: 31536000,
    mois: 2628000,
    semaine: 604800,
    jour: 86400,
    heure: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `il y a ${interval} ${unit}${interval > 1 ? 's' : ''}`;
    }
  }

  return 'à l\'instant';
};

/**
 * Format a number with locale-specific formatting
 * @param {number} number - Number to format
 * @param {string} locale - Locale for formatting (default: 'fr-FR')
 * @param {object} options - Intl.NumberFormat options
 * @returns {string} Formatted number string
 */
export const formatNumber = (number, locale = 'fr-FR', options = {}) => {
  if (typeof number !== 'number' || isNaN(number)) return '0';
  
  return new Intl.NumberFormat(locale, options).format(number);
};

/**
 * Format a number as currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'EUR')
 * @param {string} locale - Locale for formatting (default: 'fr-FR')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'EUR', locale = 'fr-FR') => {
  return formatNumber(amount, locale, {
    style: 'currency',
    currency,
  });
};

/**
 * Format a number with compact notation (e.g., 1.2k, 3.4M)
 * @param {number} number - Number to format
 * @param {string} locale - Locale for formatting (default: 'fr-FR')
 * @returns {string} Formatted compact number string
 */
export const formatCompactNumber = (number, locale = 'fr-FR') => {
  return formatNumber(number, locale, {
    notation: 'compact',
    compactDisplay: 'short',
  });
};

/**
 * Capitalize first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length (default: 100)
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100, suffix = '...') => {
  if (!text || typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength - suffix.length).trim() + suffix;
};

/**
 * Generate a slug from a string
 * @param {string} str - String to convert to slug
 * @returns {string} Slug string
 */
export const slugify = (str) => {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Debounce a function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle a function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Scroll to top of page smoothly
 * @param {number} duration - Animation duration in milliseconds (default: 500)
 */
export const scrollToTop = (duration = 500) => {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = documentHeight - windowHeight < start ? documentHeight - windowHeight : 0;

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffset);
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = 1 - Math.pow(1 - time, 3); // easeOutCubic
    window.scroll(0, Math.ceil((timeFunction * (destinationOffset - start)) + start));

    if (window.pageYOffset === destinationOffset) {
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};

/**
 * Scroll to an element smoothly
 * @param {string|Element} target - Element or selector to scroll to
 * @param {number} offset - Offset from target (default: 0)
 */
export const scrollToElement = (target, offset = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Check if user is on mobile device
 * @returns {boolean} True if on mobile device
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Get reading time estimate for text
 * @param {string} text - Text content
 * @param {number} wpm - Words per minute (default: 200)
 * @returns {number} Reading time in minutes
 */
export const getReadingTime = (text, wpm = 200) => {
  if (!text || typeof text !== 'string') return 0;
  
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

/**
 * Calculate reading time estimate for text (alias for getReadingTime)
 * @param {string} text - Text content
 * @param {number} wpm - Words per minute (default: 200)
 * @returns {number} Reading time in minutes
 */
export const calculateReadingTime = getReadingTime;

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'absolute';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (error) {
    console.error('Failed to copy text to clipboard:', error);
    return false;
  }
};

/**
 * Generate a random ID
 * @param {number} length - Length of ID (default: 8)
 * @returns {string} Random ID string
 */
export const generateId = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generate social media share URL
 * @param {string} platform - Social media platform
 * @param {Object} options - Share options (url, title, text)
 * @returns {string} Share URL
 */
export const getShareUrl = (platform, options = {}) => {
  const { url = window.location.href, title = '', text = '' } = options;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%20${encodedUrl}`,
    copy: url // For copy to clipboard functionality
  };

  return shareUrls[platform.toLowerCase()] || url;
};

/**
 * Share content using Web Share API (if available) or fallback to custom share
 * @param {Object} shareData - Share data object
 * @returns {Promise<boolean>} Success status
 */
export const shareContent = async (shareData = {}) => {
  const { title, text, url = window.location.href } = shareData;

  // Check if Web Share API is available
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return true;
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
      return false;
    }
  }

  // Fallback: Copy to clipboard
  try {
    const shareText = `${title ? title + '\n' : ''}${text ? text + '\n' : ''}${url}`;
    await copyToClipboard(shareText);
    return true;
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return false;
  }
};

/**
 * Open share dialog for specific platform
 * @param {string} platform - Social media platform
 * @param {Object} options - Share options
 * @param {Object} windowOptions - Window options for popup
 */
export const openShareDialog = (platform, options = {}, windowOptions = {}) => {
  const shareUrl = getShareUrl(platform, options);
  
  if (platform.toLowerCase() === 'copy') {
    copyToClipboard(options.url || window.location.href);
    return;
  }

  if (platform.toLowerCase() === 'email') {
    window.location.href = shareUrl;
    return;
  }

  const defaultWindowOptions = {
    width: 600,
    height: 400,
    left: (window.innerWidth - 600) / 2,
    top: (window.innerHeight - 400) / 2,
    scrollbars: 'yes',
    resizable: 'yes',
    ...windowOptions
  };

  const windowFeatures = Object.entries(defaultWindowOptions)
    .map(([key, value]) => `${key}=${value}`)
    .join(',');

  window.open(shareUrl, `share-${platform}`, windowFeatures);
};

/**
 * Get share count for a URL (requires external API)
 * @param {string} url - URL to get share count for
 * @param {string} platform - Platform to get count for
 * @returns {Promise<number>} Share count
 */
export const getShareCount = async (url, platform) => {
  // Note: Most social platforms have deprecated their share count APIs
  // This is a placeholder implementation
  try {
    // Example for Facebook (requires API key)
    if (platform === 'facebook') {
      const response = await fetch(
        `https://graph.facebook.com/?id=${encodeURIComponent(url)}&fields=engagement&access_token=YOUR_ACCESS_TOKEN`
      );
      const data = await response.json();
      return data.engagement?.share_count || 0;
    }
    
    return 0;
  } catch (error) {
    console.error('Error fetching share count:', error);
    return 0;
  }
};

/**
 * Generate meta tags for social sharing
 * @param {Object} options - Meta tag options
 * @returns {Object} Meta tags object
 */
export const generateSocialMetaTags = (options = {}) => {
  const {
    title,
    description,
    image,
    url = window.location.href,
    siteName = '100% ACADEMY',
    type = 'article',
    author,
    publishedTime,
    twitterCard = 'summary_large_image',
    twitterSite = '@100academy'
  } = options;

  return {
    // Open Graph tags
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:site_name': siteName,
    'og:type': type,
    
    // Twitter Card tags
    'twitter:card': twitterCard,
    'twitter:site': twitterSite,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    
    // Article-specific tags
    ...(author && { 'article:author': author }),
    ...(publishedTime && { 'article:published_time': publishedTime })
  };
};

/**
 * Get initials from a name
 * @param {string} name - Full name
 * @param {number} maxInitials - Maximum number of initials (default: 2)
 * @returns {string} Initials string
 */
export const getInitials = (name, maxInitials = 2) => {
  if (!name || typeof name !== 'string') return '';
  
  return name
    .split(' ')
    .filter(part => part.length > 0)
    .slice(0, maxInitials)
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};

/**
 * Generate a random avatar color based on name
 * @param {string} name - Name to generate color for
 * @returns {string} Hex color code
 */
export const getAvatarColor = (name) => {
  if (!name || typeof name !== 'string') return '#6B7280';
  
  const colors = [
    '#EF4444', '#F97316', '#F59E0B', '#EAB308',
    '#84CC16', '#22C55E', '#10B981', '#14B8A6',
    '#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1',
    '#8B5CF6', '#A855F7', '#D946EF', '#EC4899',
    '#F43F5E'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

/**
 * Generate avatar URL from initials and color
 * @param {string} name - Name to generate avatar for
 * @param {number} size - Avatar size in pixels (default: 40)
 * @param {string} backgroundColor - Background color (optional)
 * @param {string} textColor - Text color (default: white)
 * @returns {string} Data URL for avatar image
 */
export const generateAvatar = (name, size = 40, backgroundColor = null, textColor = 'white') => {
  const initials = getInitials(name);
  const bgColor = backgroundColor || getAvatarColor(name);
  
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  canvas.width = size;
  canvas.height = size;
  
  // Draw background circle
  context.fillStyle = bgColor;
  context.beginPath();
  context.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
  context.fill();
  
  // Draw initials
  context.fillStyle = textColor;
  context.font = `bold ${size * 0.4}px Arial, sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(initials, size / 2, size / 2);
  
  return canvas.toDataURL();
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim().toLowerCase());
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if URL is valid
 */
export const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Sanitize HTML content (basic sanitization)
 * @param {string} html - HTML content to sanitize
 * @returns {string} Sanitized HTML
 */
export const sanitizeHtml = (html) => {
  if (!html || typeof html !== 'string') return '';
  
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Extract plain text from HTML
 * @param {string} html - HTML content
 * @returns {string} Plain text content
 */
export const stripHtml = (html) => {
  if (!html || typeof html !== 'string') return '';
  
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

/**
 * Format file size in human readable format
 * @param {number} bytes - File size in bytes
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Generate a random hex color
 * @returns {string} Random hex color
 */
export const randomHexColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color code
 * @returns {Object} RGB color object
 */
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Convert RGB to hex color
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} Hex color code
 */
export const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};