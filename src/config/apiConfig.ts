
/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

export const apiConfig = {
  // Base URLs for different environments
  baseUrls: {
    development: 'https://localhost:8000/api',
    staging: 'https://staging-api.howaiconnects.com/api',
    production: 'https://api.howaiconnects.com/api',
  },

  // API endpoints
  endpoints: {
    contact: '/contact',
    bookings: '/bookings',
    newsletter: '/newsletter/subscribe',
    health: '/health',
  },

  // Request timeouts (in milliseconds)
  timeouts: {
    default: 10000, // 10 seconds
    upload: 30000,  // 30 seconds
  },

  // Retry configuration
  retry: {
    attempts: 3,
    delay: 1000, // 1 second
  },
};

/**
 * Get the appropriate base URL based on environment
 */
export function getApiBaseUrl(): string {
  const envBaseUrl = import.meta.env.VITE_API_BASE_URL;
  
  if (envBaseUrl) {
    return envBaseUrl;
  }

  // Fallback based on environment
  if (import.meta.env.PROD) {
    return apiConfig.baseUrls.production;
  }
  
  return apiConfig.baseUrls.development;
}
