/**
 * Utility functions for the photography portfolio application
 */

/**
 * Smoothly scrolls to a target element
 * @param {string} selector - CSS selector for the target element
 * @param {Object} options - Scroll behavior options
 */
export const scrollToElement = (selector, options = { behavior: 'smooth' }) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView(options)
  }
}

/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * Sanitizes user input by removing potentially harmful characters
 * @param {string} input - Input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''

  return input
    .trim()
    .replace(/[<>'"]/g, '') // Remove basic HTML/script injection characters
    .slice(0, 1000) // Limit length
}

/**
 * Formats a phone number for display
 * @param {string} phone - Phone number to format
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`
  }

  return phone
}

/**
 * Generates a safe filename from a title
 * @param {string} title - Original title
 * @returns {string} - Safe filename
 */
export const generateSafeFilename = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Debounces a function call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Checks if the device supports touch events
 * @returns {boolean} - True if touch is supported
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Gets the user's preferred color scheme
 * @returns {string} - 'dark' or 'light'
 */
export const getPreferredColorScheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

/**
 * Checks if the user prefers reduced motion
 * @returns {boolean} - True if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Safely executes a function and logs errors
 * @param {Function} func - Function to execute
 * @param {any} fallback - Fallback value if function fails
 * @returns {any} - Function result or fallback
 */
export const safeExecute = (func, fallback = null) => {
  try {
    return func()
  } catch (error) {
    console.error('Safe execution failed:', error)
    return fallback
  }
}

/**
 * Creates a delay promise for async operations
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after delay
 */
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Copies text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}
