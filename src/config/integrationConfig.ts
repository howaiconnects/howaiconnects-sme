
/**
 * Configuration for third-party integrations
 * This file centralizes all external service credentials
 */

/**
 * EmailJS Configuration
 * Create an account at https://www.emailjs.com/ to get these values
 * - serviceId: Found in Email Services section of your EmailJS dashboard
 * - templateIds: Create email templates in the Email Templates section
 * - publicKey: Your Public Key found in Account > API Keys
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jz8senj",
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || "YOUR_CONTACT_TEMPLATE_ID",
  bookingTemplateId: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || "YOUR_BOOKING_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

/**
 * SMTP Configuration
 * For direct email sending through SMTP (used as backup if EmailJS fails)
 */
export const smtpConfig = {
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // use SSL
  user: "support@howaiconnects.com",
  // Password should be stored in environment variable in production
  // This is just for development purposes
  appPassword: "Recant6^Gizzard1!Justifier0", 
};

/**
 * Zapier Webhook Configuration
 * Create Zaps with Webhook triggers to get these URLs
 */
export const zapierConfig = {
  contactFormWebhook: import.meta.env.VITE_ZAPIER_CONTACT_WEBHOOK || "YOUR_ZAPIER_CONTACT_FORM_WEBHOOK_URL",
  assessmentBookingWebhook: import.meta.env.VITE_ZAPIER_BOOKING_WEBHOOK || "YOUR_ZAPIER_ASSESSMENT_BOOKING_WEBHOOK_URL",
};

/**
 * n8n Webhook Configuration
 * Create n8n workflows with Webhook nodes to get these URLs
 */
export const n8nConfig = {
  contactFormWebhook: import.meta.env.VITE_N8N_CONTACT_WEBHOOK || "YOUR_N8N_CONTACT_FORM_WEBHOOK_URL",
  assessmentBookingWebhook: import.meta.env.VITE_N8N_BOOKING_WEBHOOK || "YOUR_N8N_ASSESSMENT_BOOKING_WEBHOOK_URL",
};

/**
 * Zendesk Configuration
 * Get widget key from your Zendesk dashboard
 */
export const zendeskConfig = {
  widgetKey: import.meta.env.VITE_ZENDESK_WIDGET_KEY || "your-zendesk-key",
};

