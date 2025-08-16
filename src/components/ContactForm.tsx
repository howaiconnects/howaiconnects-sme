
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useSecureForm } from "@/hooks/useSecureForm";
import { contactFormSchema, type ContactFormData as ContactFormValues } from "@/schemas/validationSchemas";

// Remove duplicate interface - using the one from schemas

const ContactForm = () => {
  // Use secure form hook instead of direct API calls
  const { loading, error, submitForm } = useSecureForm({
    onSuccess: () => {
      form.reset();
    }
  });
  
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Submit through secure edge function
    await submitForm('secure-contact-form', {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      message: data.message
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-100 floating-elements relative">
      <div className="flex items-center gap-3 text-brand-primary mb-6">
        <Mail className="h-7 w-7" />
        <h3 className="text-2xl font-bold">Send Us a Message</h3>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-brand-primary font-medium">Full Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} className="mt-1 border-brand-primary/20 focus:border-brand-accent" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-brand-primary font-medium">Email Address <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="mt-1 border-brand-primary/20 focus:border-brand-accent" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary font-medium">Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} className="mt-1 border-brand-primary/20 focus:border-brand-accent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-primary font-medium">Message <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Textarea {...field} className="mt-1 border-brand-primary/20 focus:border-brand-accent" rows={5} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-brand-primary hover:bg-brand-accent transition-all hover:scale-105 transform duration-200 shadow-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
          
          {error && (
            <p className="text-sm text-red-600 mt-2">
              Error: {error}
            </p>
          )}
          
          <p className="text-sm text-gray-500 text-center mt-4">
            We'll respond to your message as soon as possible, typically within 24 hours.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
