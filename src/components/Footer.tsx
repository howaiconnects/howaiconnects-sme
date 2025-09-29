import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

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
                src="/src/assets/logo-dark.png" 
                alt="HowAIConnects Logo" 
                className="h-10 w-auto mr-2"
              />
              <h2 className="text-2xl font-bold text-white">HowAIConnects</h2>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Building AI-designed and AI-powered full-stack applications that transform 
              how SMBs operate, scale, and compete in the digital age.
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
              <a href="https://yelp.com/biz/howaiconnects-com-mississauga-4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Yelp</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 926.7 1220" className="h-6 w-6 fill-current">
                  <path d="M23.6 587.4C3.8 619.1-4.5 658.5 3.9 695.3c12.5 59.3 83.4 94.4 141.8 104.8 24.8 4.5 148.9 20.7 167.2-21.3 7.2-21.5 8.7-50.6 1.3-71.5-7.3-18.4-20.5-32.4-42.1-33.2-53.1-6.3-56.7 60.1-108.7 65-27.2-5-46.1-26.7-48.9-54.1-1.4-14.3 1.6-30.7 6.8-43.3 24.1-46.4 67.5-69.2 99.4-105.7 58.3-66.8 93.3-191.9 59.9-311.9C266.5 156 232.3 85.5 154.8 45.3 96.5 19.4 12.5 18.2 3.2 94.9c-1.9 55.6 15.3 111.6 23.5 165.3 8.1 36 13.5 78 4.2 114.7-8.8 73.4-1.1 147 32.5 212.5h-39.8z"/>
                  <path d="M364.5 335.8c2.5 69.5 66.2 125.8 130.3 143.2 59.7 11.9 141.6 3.2 186.4-41.6 43.6-44.7 73.1-148.9 25.3-203.3-35-40.3-99.8-63.4-158-41.3-57.5 18.9-167.5 75-184 142.9zM254.9 1127.3c36.7 21.5 82.7 29.7 128.2 29.9 62.3 3.3 133.9-5.8 172.8-53.6 31.5-38.9 31.2-103.8 6.8-143-21.2-33.1-66.7-55.2-109.2-61.3-52.1-10.9-116.1-1.6-157.5 25.3-45.7 30.9-81 101.4-41 143.9v58.9h-.1zM2044.7 1408.9H1371c-8.9 0-16.1-5.8-16.1-14.7V552.5c0-8.9 7.2-14.7 16.1-14.7h673.7c8.9 0 14.1 5.8 14.1 14.7v841.7c0 8.9-5.1 14.7-14.1 14.7"/>
                  <path d="M894 1045.1c-7.7-.1-39.7-.1-47.4 0-80.2 0-130.3-50.2-130.3-130.3V783.5c0-8.9-7.2-16.1-16.1-16.1h-95.4c-8.9 0-16.1 7.2-16.1 16.1v139.8c0 173.7 107.5 298.8 257.8 298.8H894c8.9 0 16.1-7.2 16.1-16.1v-144.7c0-8.9-7.2-16.2-16.1-16.2M587.3 557.6h95.4c8.9 0 16.1-7.2 16.1-16.1V288c0-8.9-7.2-16.1-16.1-16.1h-95.4c-8.9 0-16.1 7.2-16.1 16.1v253.5c0 8.9 7.2 16.1 16.1 16.1"/>
                  <path d="M587.3 670.7h95.4c8.9 0 16.1-7.2 16.1-16.1v-61.6c0-8.9-7.2-16.1-16.1-16.1h-95.4c-8.9 0-16.1 7.2-16.1 16.1v61.6c0 8.9 7.2 16.1 16.1 16.1M1039.1 557.6h-74.9c-8.9 0-16.1 7.2-16.1 16.1v482c0 8.9 7.2 16.1 16.1 16.1H1154c8.9 0 16.1-7.2 16.1-16.1v-95.4c0-8.9-7.2-16.1-16.1-16.1h-98.9c-8.9 0-16.1-7.2-16.1-16.1V557.6h.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Our Web Apps */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Web Apps</h3>
            <ul className="space-y-2">
              <li><Link to="/projects/howaiconnects-platform" className="text-gray-300 hover:text-brand-lightAccent">HowAIConnects Platform</Link></li>
              <li><Link to="/projects/dealstream" className="text-gray-300 hover:text-brand-lightAccent">DealStream</Link></li>
              <li><Link to="/projects/ost2pst" className="text-gray-300 hover:text-brand-lightAccent">OST2PST.com</Link></li>
              <li><Link to="/web-apps/path-to-canada" className="text-gray-300 hover:text-brand-lightAccent">AI Immigration Assistant</Link></li>
            </ul>
          </div>
          
          {/* AI Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">AI Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-automation-solutions/marketing-automation" className="text-gray-300 hover:text-brand-lightAccent">Marketing Intelligence</Link></li>
              <li><Link to="/services/ai-automation-solutions/customer-service-automation" className="text-gray-300 hover:text-brand-lightAccent">Customer Intelligence</Link></li>
              <li><Link to="/early-access" className="text-gray-300 hover:text-brand-lightAccent">Early Access Program</Link></li>
              <li><Link to="/web-app-development" className="text-gray-300 hover:text-brand-lightAccent">Custom AI Applications</Link></li>
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
