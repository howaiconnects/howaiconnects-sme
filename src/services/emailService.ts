
import emailjs from '@emailjs/browser';
import { format } from "date-fns";
import { emailjsConfig } from "@/config/integrationConfig";

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
  
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.bookingTemplateId,
    templateParams,
    emailjsConfig.publicKey
  );
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
  
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.contactTemplateId,
    templateParams,
    emailjsConfig.publicKey
  );
};
