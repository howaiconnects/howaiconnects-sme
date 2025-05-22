
/**
 * Configuration for third-party integrations
 * Replace placeholder values with actual credentials in production
 */
export const zapierConfig = {
  // Replace these with your actual Zapier webhook URLs
  contactFormWebhook: "YOUR_ZAPIER_CONTACT_FORM_WEBHOOK_URL",
  assessmentBookingWebhook: "YOUR_ZAPIER_ASSESSMENT_BOOKING_WEBHOOK_URL",
};

export const n8nConfig = {
  // Replace these with your actual n8n webhook URLs
  contactFormWebhook: "YOUR_N8N_CONTACT_FORM_WEBHOOK_URL",
  assessmentBookingWebhook: "YOUR_N8N_ASSESSMENT_BOOKING_WEBHOOK_URL",
};

export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  contactTemplateId: "YOUR_TEMPLATE_ID", 
  bookingTemplateId: "YOUR_BOOKING_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

export const zendeskConfig = {
  widgetKey: "your-zendesk-key",
};
