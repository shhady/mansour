/**
 * Utility functions for the Mansour Medical website
 */

/**
 * Formats a date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

/**
 * Truncates a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - The maximum length
 * @returns {string} - The truncated string
 */
export function truncateText(str, length = 100) {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}

/**
 * Generates a slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The slug
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Combines class names conditionally
 * @param  {...any} classes - Class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Checks if a string is a valid email
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a valid phone number (Israeli format)
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export function isValidPhone(phone) {
  const phoneRegex = /^((\+972|0)([23489]|5[02468]|77)[1-9]\d{6})$/;
  return phoneRegex.test(phone);
}

/**
 * Formats a phone number to a readable format
 * @param {string} phone - The phone number to format
 * @returns {string} - The formatted phone number
 */
export function formatPhone(phone) {
  if (!phone) return '';
  
  // Remove non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format based on Israeli phone number patterns
  if (digits.startsWith('0')) {
    // Format as 0XX-XXX-XXXX
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else if (digits.startsWith('972')) {
    // Format as +972-XX-XXX-XXXX
    return `+${digits.replace(/^972/, '972-').replace(/(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3')}`;
  }
  
  return phone;
}

/**
 * Detects if the user prefers reduced motion
 * @returns {boolean} - Whether reduced motion is preferred
 */
export function prefersReducedMotion() {
  return typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
}

/**
 * Generates random ID
 * @returns {string} - Random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce wait time in milliseconds
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} 