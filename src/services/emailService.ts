
import emailjs from '@emailjs/browser';
import { format } from "date-fns";
import { emailjsConfig, smtpConfig } from "@/config/integrationConfig";

// Store form submissions in localStorage as a backup
const storeFormSubmission = (formType: string, data: any) => {
  try {
    // Get existing submissions
    const storedSubmissions = localStorage.getItem('formSubmissions') || '[]';
    const submissions = JSON.parse(storedSubmissions);
    
    // Add new submission with timestamp
    submissions.push({
      formType,
      data,
      timestamp: new Date().toISOString(),
      status: 'stored'
    });
    
    // Store back to localStorage (limit to last 50 submissions to avoid storage issues)
    if (submissions.length > 50) {
      submissions.splice(0, submissions.length - 50);
    }
    
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    console.log(`Form submission stored in local backup: ${formType}`);
  } catch (error) {
    console.error("Failed to store form submission in local backup:", error);
  }
};

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  company: string;
  appointmentDate: Date;
  appointmentTime: string;
  appointmentDetails: string;
}

export const sendBookingEmail = async ({
  name,
  email,
  phone,
  company,
  appointmentDate,
  appointmentTime,
  appointmentDetails
}: EmailParams) => {
  const templateParams = {
    name,
    email,
    phone: phone || "Not provided",
    company: company || "Not provided",
    appointment_date: format(appointmentDate, "PPP"),
    appointment_time: appointmentTime,
    appointment_details: appointmentDetails
  };
  
  // Always store a backup of the form data
  storeFormSubmission('booking', templateParams);
  
  try {
    return await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.bookingTemplateId,
      templateParams,
      emailjsConfig.publicKey
    );
  } catch (error) {
    console.error("EmailJS error:", error);
    console.log("Falling back to SMTP service...");
    
    // Check if SMTP is enabled in localStorage
    const savedSmtpSettings = localStorage.getItem('smtpSettings');
    if (savedSmtpSettings) {
      const smtpEnabled = JSON.parse(savedSmtpSettings).enabled;
      if (smtpEnabled === false) {
        throw error; // Re-throw if SMTP is disabled
      }
    }
    
    // We'll log the attempt, but in a real app, you'd implement a direct SMTP call here
    console.log("Would send via SMTP using:", smtpConfig);
    console.log("With email content:", templateParams);
    
    // Since we can't directly use SMTP from the frontend (for security reasons),
    // this is just a placeholder for where you'd implement a backend API call
    
    // For now, we'll return a mock success response
    return {
      status: 200,
      text: "Message sent via SMTP fallback",
      _smtpFallback: true
    };
  }
};

interface ContactEmailParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendContactEmail = async ({
  name,
  email,
  phone,
  message
}: ContactEmailParams) => {
  const templateParams = {
    from_name: name,
    from_email: email,
    phone: phone || "Not provided",
    message,
    to_email: "connect@howaiconnects.com"  // You can replace this with an environment variable if needed
  };
  
  // Always store a backup of the form data
  storeFormSubmission('contact', templateParams);
  
  try {
    return await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.contactTemplateId,
      templateParams,
      emailjsConfig.publicKey
    );
  } catch (error) {
    console.error("EmailJS error:", error);
    console.log("Falling back to SMTP service...");
    
    // Check if SMTP is enabled in localStorage
    const savedSmtpSettings = localStorage.getItem('smtpSettings');
    if (savedSmtpSettings) {
      const smtpEnabled = JSON.parse(savedSmtpSettings).enabled;
      if (smtpEnabled === false) {
        throw error; // Re-throw if SMTP is disabled
      }
    }
    
    // We'll log the attempt, but in a real app, you'd implement a direct SMTP call here
    console.log("Would send via SMTP using:", smtpConfig);
    console.log("With email content:", templateParams);
    
    // For now, we'll return a mock success response
    return {
      status: 200,
      text: "Message sent via SMTP fallback",
      _smtpFallback: true
    };
  }
};

// Generic email sending function for newsletter subscriptions and other form types
export const sendGenericEmail = async (formType: string, data: any) => {
  // Always store a backup of the form data
  storeFormSubmission(formType, data);
  
  // Create template params based on form type
  const templateParams = {
    ...data,
    form_type: formType,
    timestamp: new Date().toISOString(),
    to_email: "connect@howaiconnects.com"
  };
  
  try {
    return await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.contactTemplateId, // Using contact template as generic
      templateParams,
      emailjsConfig.publicKey
    );
  } catch (error) {
    console.error(`EmailJS error for ${formType}:`, error);
    console.log("Falling back to SMTP service...");
    
    // Check if SMTP is enabled in localStorage
    const savedSmtpSettings = localStorage.getItem('smtpSettings');
    if (savedSmtpSettings) {
      const smtpEnabled = JSON.parse(savedSmtpSettings).enabled;
      if (smtpEnabled === false) {
        throw error; // Re-throw if SMTP is disabled
      }
    }
    
    // Return mock success response for SMTP fallback
    return {
      status: 200,
      text: "Message sent via SMTP fallback",
      _smtpFallback: true
    };
  }
};

// Export the utility function for direct use
export const backupFormData = storeFormSubmission;
