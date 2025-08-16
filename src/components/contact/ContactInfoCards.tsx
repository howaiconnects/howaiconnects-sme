
import { Building, Mail, MapPin, Phone, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactInfoCards = () => {
  return (
    <div className="relative py-16 bg-gray-50">
      {/* Decorative yellow border - inspired by your reference */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-4">
          <svg 
            viewBox="0 0 800 400" 
            className="w-full h-auto max-h-96 opacity-20"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M50 200 Q 150 50, 400 200 Q 650 350, 750 200" 
              stroke="#F59E0B" 
              strokeWidth="6" 
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
            <p className="text-gray-600 text-lg">
              <a href="tel:+12895055070" className="hover:text-brand-primary transition-colors">(289) 505-5070</a>
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
            <p className="text-gray-600 text-lg">
              <a href="mailto:connect@howaiconnects.com" className="hover:text-brand-primary transition-colors">connect@howaiconnects.com</a>
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Office</h3>
            <p className="text-gray-600">Mississauga, ON</p>
            <p className="text-gray-600">Greater Toronto Area</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Area</h3>
            <p className="text-gray-600">Remote services available worldwide</p>
            <p className="text-gray-600">In-person consultations in GTA</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rss className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <a href="https://linkedin.com/company/howaiconnects/" className="hover:text-brand-primary transition-colors">LinkedIn</a>
              </p>
              <p className="text-gray-600">
                <a href="https://x.com/HowAIConnects" className="hover:text-brand-primary transition-colors">X (Twitter)</a>
              </p>
              <p className="text-gray-600">
                <a href="https://instagram.com/howaiconnects/" className="hover:text-brand-primary transition-colors">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Row - inspired by your reference */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link to="/contact">
            <Button 
              className="bg-gradient-to-r from-brand-accent to-brand-accent/80 hover:from-brand-accent/90 hover:to-brand-accent/70 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Send a Message
            </Button>
          </Link>
          
          <Link to="/services/ai-consultation/ai-readiness-assessment">
            <Button 
              variant="outline"
              className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Book Assessment
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button 
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Customer Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
