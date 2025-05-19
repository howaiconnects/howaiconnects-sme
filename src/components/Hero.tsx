
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
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
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">AI Automation & Consultation</span>
                <span className="block gradient-text">Tailored for Small Business Growth</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Increase efficiency, reduce costs, and scale operations with AI solutions designed specifically for SMEs
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/contact" className="w-full block">
                    <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-lightAccent md:py-4 md:text-lg md:px-10">
                      Get Your Free AI Readiness Assessment <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/courses" className="w-full block">
                    <Button variant="outline" className="w-full h-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-brand-primary bg-white hover:bg-gray-50 border border-gray-300 md:py-4 md:text-lg md:px-10">
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 z-10"></div>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Woman using laptop with AI visualization"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
