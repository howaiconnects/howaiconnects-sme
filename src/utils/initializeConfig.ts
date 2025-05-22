
import { n8nConfig } from "@/config/integrationConfig";

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
