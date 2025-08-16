
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-brand-light to-white overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-10 top-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 
                className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <span className="block">We're Building What</span>
                <span className="block gradient-text">You're Dreaming About — Today</span>
              </h1>
              <p 
                className={`mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all duration-700 delay-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                Seamlessly integrating AI into everyday life with advanced automation, deep integrations, and intuitive design. We build AI orchestration platforms that anticipate what you'll need tomorrow.
              </p>
              <div 
                className={`mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4 transition-all duration-700 delay-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative group w-full sm:w-auto mb-4 sm:mb-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-lightAccent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Link to="/contact" className="relative block">
                     <Button 
                      variant="accent"
                      className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md md:text-lg"
                    >
                      Explore Our Platform <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
                    </Button>
                  </Link>
                </div>
                <div className="w-full sm:w-auto">
                  <Link to="/web-app-development" className="block">
                     <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md md:text-lg"
                    >
                      Try Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-brand-accent/30 mix-blend-multiply z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <img
            className={`h-full w-full object-cover transition-all duration-1000 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-70'}`}
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="AI neural network visualization"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
