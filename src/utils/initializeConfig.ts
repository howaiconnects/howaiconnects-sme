import { n8nConfig } from "@/config/integrationConfig";

/**
 * Sanitize a string for display (remove sensitive information)
 */
const sanitizeForDisplay = (input: string): string => {
  // If it's a default placeholder value, return it as is
  if (input.includes('YOUR_') || input.startsWith('http')) {
    return input;
  }
  
  // Otherwise, mask the value
  return input.length > 8 
    ? `${input.substring(0, 3)}...${input.substring(input.length - 3)}` 
    : '********';
};

/**
 * Initialize configuration values from localStorage if available
 */
export const initializeConfig = () => {
  // Load n8n webhook URLs from localStorage if available
  const storedContactWebhook = localStorage.getItem('n8n_contact_webhook');
  if (storedContactWebhook) {
    n8nConfig.contactFormWebhook = storedContactWebhook;
  }
  
  const storedBookingWebhook = localStorage.getItem('n8n_booking_webhook');
  if (storedBookingWebhook) {
    n8nConfig.assessmentBookingWebhook = storedBookingWebhook;
  }
  
  // You can add more configuration initialization here
  
  console.log("Application configuration initialized");
};

/**
 * Export sanitizer for use in displaying sensitive information
 */
export { sanitizeForDisplay };
