
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png" 
                alt="HowAIConnects Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-brand-primary font-bold text-xl">HowAIConnects</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              Courses
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link to="/ai-data-gem" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              AI Data Gem
            </Link>
            <Link to="/path-to-canada" className="text-gray-700 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">
              Path to Canada
            </Link>
            <Link to="/services/ai-consultation/ai-readiness-assessment">
              <Button className="bg-brand-accent hover:bg-brand-lightAccent text-white ml-4" size="sm">
                Get Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-accent hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/courses" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Courses
            </Link>
            <Link to="/resources" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Resources
            </Link>
            <Link to="/about" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/ai-data-gem" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              AI Data Gem
            </Link>
            <Link to="/path-to-canada" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Path to Canada
            </Link>
            <Link to="/services/ai-consultation/ai-readiness-assessment" className="block mt-3">
              <Button className="bg-brand-accent hover:bg-brand-lightAccent text-white w-full" size="sm">
                Get Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
