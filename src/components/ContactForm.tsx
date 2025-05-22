
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form schema with validation
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Please provide a message of at least 10 characters")
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Create email service URL using Email.js or similar service
      // Replace with your actual email service endpoint
      const emailServiceUrl = "https://api.emailjs.com/api/v1.0/email/send";
      
      const response = await fetch(emailServiceUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "your_service_id", // Replace with your Email.js service ID
          template_id: "your_template_id", // Replace with your Email.js template ID
          user_id: "your_user_id", // Replace with your Email.js user ID
          template_params: {
            from_name: `${data.firstName} ${data.lastName || ""}`,
            from_email: data.email,
            phone: data.phone || "Not provided",
            company: data.company || "Not provided",
            interest: data.interest || "Not specified",
            message: data.message
          }
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll be in touch soon."
        });
        
        // Reset the form
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      className="mt-1 w-full" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Last name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      className="mt-1 w-full" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    type="email"
                    className="mt-1 w-full" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Phone number
                </FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    type="tel"
                    className="mt-1 w-full" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Company
                </FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    className="mt-1 w-full" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  I'm interested in
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="marketing-automation">Marketing Automation</SelectItem>
                    <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
                    <SelectItem value="customer-service-automation">Customer Service Automation</SelectItem>
                    <SelectItem value="ai-readiness-assessment">AI Readiness Assessment</SelectItem>
                    <SelectItem value="ai-strategy-development">AI Strategy Development</SelectItem>
                    <SelectItem value="implementation-support">Implementation Support</SelectItem>
                    <SelectItem value="web-app-development">Web App Development</SelectItem>
                    <SelectItem value="done-for-you-ai-agency">Done-for-You AI Agency</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea 
                    {...field}
                    rows={5}
                    className="mt-1 w-full" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-brand-primary hover:bg-brand-secondary text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, you agree to our <a href="/privacy-policy" className="text-brand-accent hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
