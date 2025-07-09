import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val), {
      message: "Please enter a valid phone number"
    }),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});

// Admin login validation schema
export const adminLoginSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(255, "Password is too long")
});

// Assessment booking validation schema
export const assessmentBookingSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number is too long")
    .regex(/^[\+]?[1-9][\d]{9,18}$/, "Please enter a valid phone number"),
  company: z.string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must be less than 200 characters"),
  selectedDate: z.string()
    .min(1, "Please select a date"),
  selectedTime: z.string()
    .min(1, "Please select a time")
});

// Email settings validation schema
export const emailSettingsSchema = z.object({
  serviceId: z.string().min(1, "Service ID is required"),
  contactTemplateId: z.string().min(1, "Contact template ID is required"),
  bookingTemplateId: z.string().min(1, "Booking template ID is required"),
  publicKey: z.string().min(1, "Public key is required")
});

// SMTP settings validation schema
export const smtpSettingsSchema = z.object({
  host: z.string().min(1, "SMTP host is required"),
  port: z.number()
    .min(1, "Port must be greater than 0")
    .max(65535, "Port must be less than 65536"),
  secure: z.boolean(),
  user: z.string().email("Please enter a valid email address"),
  appPassword: z.string().min(1, "App password is required")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;
export type AssessmentBookingData = z.infer<typeof assessmentBookingSchema>;
export type EmailSettingsData = z.infer<typeof emailSettingsSchema>;
export type SmtpSettingsData = z.infer<typeof smtpSettingsSchema>;