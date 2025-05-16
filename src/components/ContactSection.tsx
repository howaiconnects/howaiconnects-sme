
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-16 bg-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Get Started with AI Automation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with AI? Contact us today to discuss 
              your needs or book your free AI readiness assessment.
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
                    <a href="tel:+12895055070" className="hover:text-brand-primary">
                      (289) 505-5070
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Free Assessment</h3>
              <p className="text-gray-600 mb-4">
                Schedule your complimentary 30-minute AI readiness assessment call with one of our experts.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-brand-primary hover:bg-brand-secondary">
                  Book Assessment Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <Input
                      type="text"
                      id="first-name"
                      className="mt-1"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <Input
                      type="text"
                      id="last-name"
                      className="mt-1"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="mt-1"
                    placeholder="john@example.com"
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
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="mt-1"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button className="w-full bg-brand-primary hover:bg-brand-secondary">
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
