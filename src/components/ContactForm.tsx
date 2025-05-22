import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { sendToZapier } from "@/utils/formUtils";
import { emailjsConfig, zapierConfig, n8nConfig } from "@/config/integrationConfig";
import { sendToN8n } from "@/utils/webhookUtils";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const handleSubmit = async (data: ContactFormValues) => {
    if (!data.name || !data.email || !data.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Configure EmailJS with your SMTP settings
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        message: data.message,
        to_email: "connect@howaiconnects.com"
      };
      
      // Send email notification
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.contactTemplateId,
        templateParams,
        emailjsConfig.publicKey
      );
      
      // Send to n8n for automation workflows
      const n8nSuccess = await sendToN8n(
        n8nConfig.contactFormWebhook,
        {
          ...data,
          formType: "contact"
        }
      );
      
      // Also send to Zapier as a fallback or additional integration
      await sendToZapier(
        zapierConfig.contactFormWebhook,
        {
          ...data,
          formType: "contact"
        },
        "contact_form"
      );
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Send error:", error);
      toast({
        title: "Failed to send message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center gap-3 text-brand-primary mb-6">
        <Mail className="h-7 w-7" />
        <h3 className="text-2xl font-bold">Send Us a Message</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              value={form.watch("name")}
              onChange={(e) => form.setValue("name", e.target.value)}
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={form.watch("email")}
              onChange={(e) => form.setValue("email", e.target.value)}
              className="mt-1"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <Input
            id="phone"
            value={form.watch("phone")}
            onChange={(e) => form.setValue("phone", e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            value={form.watch("message")}
            onChange={(e) => form.setValue("message", e.target.value)}
            className="mt-1"
            rows={5}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-brand-primary hover:bg-brand-accent"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          We'll respond to your message as soon as possible, typically within 24 hours.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
