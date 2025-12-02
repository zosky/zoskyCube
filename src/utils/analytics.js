/**
 * Google Analytics 4 Integration for Timeline App
 * Tracks auth flow, VOD engagement, and public website interactions
 */

/**
 * Initialize GA4 tracking
 * Call this once when the app loads
 */
export function initializeGA() {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID
  
  if (!measurementId) {
    console.warn('GA4 Measurement ID not configured')
    return
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  // Configure GA4
  gtag('js', new Date())
  gtag('config', measurementId, {
    send_page_view: false, // Manual page view tracking via router
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  })

  console.log('GA4 initialized:', measurementId)
}

/**
 * Track a custom event
 * @param {string} eventName - Event name (snake_case)
 * @param {object} params - Event parameters
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === 'undefined') {
    return
  }

  try {
    window.gtag('event', eventName, params)
  } catch (error) {
    console.error('GA4 tracking error:', error)
    // Don't throw - analytics failures shouldn't break app
  }
}

/**
 * Track a page view (call from Vue Router)
 * @param {string} path - Page path (e.g., '/auth')
 * @param {string} title - Page title
 */
export function trackPageView(path, title) {
  trackEvent('page_view', {
    page_path: path,
    page_title: title || document.title
  })
}
