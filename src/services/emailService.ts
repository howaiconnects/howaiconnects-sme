
import emailjs from '@emailjs/browser';
import { format } from "date-fns";

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
    'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
    'YOUR_BOOKING_TEMPLATE_ID', // Replace with your EmailJS template ID for bookings
    templateParams,
    'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
  );
};
