
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
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
                <span className="block">AI Automation & Consultation</span>
                <span className="block gradient-text">Tailored for Small Business Growth</span>
              </h1>
              <p 
                className={`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all duration-700 delay-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                Increase efficiency, reduce costs, and scale operations with AI solutions designed specifically for SMEs
              </p>
              <div 
                className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start transition-all duration-700 delay-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="rounded-md shadow w-full sm:w-auto">
                  <Link to="/contact" className="block">
                    <Button 
                      className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-lightAccent hover:scale-105 transition-all duration-300 md:text-lg"
                    >
                      Get Your Free AI Readiness Assessment <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
                  <Link to="/courses" className="block">
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md text-brand-primary border-2 border-brand-primary bg-white hover:bg-gray-50 hover:scale-105 transition-all duration-300 md:text-lg"
                    >
                      Explore Our SME AI Courses
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
          <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <img
            className={`h-full w-full object-cover transition-all duration-1000 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-70'}`}
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Woman using laptop with AI visualization"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
