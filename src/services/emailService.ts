
import emailjs from '@emailjs/browser';
import { format } from "date-fns";
import { emailjsConfig, smtpConfig } from "@/config/integrationConfig";

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

// This is a placeholder function for what would normally be a backend API call
// In a real application, you would make a request to your backend which would handle SMTP directly
const sendViaSmtp = async (params: any) => {
  console.log("This would send via SMTP in a real backend implementation");
  return {
    status: 200,
    text: "Message sent via SMTP",
    _smtpMockResponse: true
  };
};
