
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Pinterest } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would normally send this to your backend or newsletter service
      // For now we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter! Please check your email to confirm your subscription.",
      });
      setEmail("");
    } catch (error) {
      console.error("Subscribe error:", error);
      toast({
        title: "Subscription failed",
        description: "There was a problem with your subscription. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-brand-primary to-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png" 
                alt="HowAIConnects Logo" 
                className="h-10 w-auto mr-2"
              />
              <h2 className="text-2xl font-bold text-white">HowAIConnects</h2>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering SMEs with accessible AI automation and consulting services
              to improve efficiency, reduce costs, and scale operations.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com/howaiconnects" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/HowAIConnects" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/howaiconnects/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@HowAIConnects" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/howaiconnects/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://pinterest.com/HowAIConnects/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Pinterest</span>
                <Pinterest className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Featured Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Featured Services</h3>
            <ul className="space-y-2">
              <li><Link to="/web-app-development" className="text-gray-300 hover:text-brand-lightAccent">Web App Development</Link></li>
              <li><Link to="/done-for-you-ai-agency" className="text-gray-300 hover:text-brand-lightAccent">Done-for-You AI Agency</Link></li>
              <li><Link to="/web-apps/path-to-canada" className="text-gray-300 hover:text-brand-lightAccent">PathtoCanada.ca</Link></li>
              <li><Link to="/web-apps/ai-data-gem" className="text-gray-300 hover:text-brand-lightAccent">AIDataGem.com</Link></li>
            </ul>
          </div>
          
          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">AI Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-automation-solutions/marketing-automation" className="text-gray-300 hover:text-brand-lightAccent">Marketing Automation</Link></li>
              <li><Link to="/services/ai-automation-solutions/workflow-automation" className="text-gray-300 hover:text-brand-lightAccent">Workflow Automation</Link></li>
              <li><Link to="/services/ai-automation-solutions/customer-service-automation" className="text-gray-300 hover:text-brand-lightAccent">Customer Service Automation</Link></li>
              <li><Link to="/services/ai-consultation/ai-readiness-assessment" className="text-gray-300 hover:text-brand-lightAccent">AI Readiness Assessment</Link></li>
              <li><Link to="/services/ai-consultation/ai-strategy-development" className="text-gray-300 hover:text-brand-lightAccent">AI Strategy Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-brand-lightAccent">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-lightAccent">Contact</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-brand-lightAccent">Courses</Link></li>
              <li><Link to="/resources/blog" className="text-gray-300 hover:text-brand-lightAccent">Blog</Link></li>
              <li><Link to="/resources/case-studies" className="text-gray-300 hover:text-brand-lightAccent">Case Studies</Link></li>
              <li><Link to="/resources/tools" className="text-gray-300 hover:text-brand-lightAccent">Tools</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-gray-300 mb-4">Get the latest news and articles on AI automation for SMEs</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="rounded-l-none bg-brand-accent hover:bg-brand-lightAccent"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {currentYear} HowAIConnects. All rights reserved.
          </p>
          <div className="text-gray-300 mt-4 md:mt-0 flex gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-lightAccent">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-lightAccent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
