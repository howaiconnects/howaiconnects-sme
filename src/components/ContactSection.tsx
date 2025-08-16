
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields (first name, email, message).",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section className="py-16 bg-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Join the AI Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to experience the future? Get early access to our platform and be part of the next generation of AI-powered business automation.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">
                    <a href="mailto:connect@howaiconnects.com" className="hover:text-brand-primary">
                      connect@howaiconnects.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-primary flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">
                    <a href="tel:+12892052980" className="hover:text-brand-primary">
                      (289) 205-2980
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Waitlist</h3>
              <p className="text-gray-600 mb-4">
                Get early access to our revolutionary AI platform and be the first to experience the future of business automation.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-brand-primary hover:bg-brand-secondary">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name*
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      className="mt-1"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      className="mt-1"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="mt-1"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <Input
                    type="text"
                    id="company"
                    className="mt-1"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about your platform needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-secondary">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
