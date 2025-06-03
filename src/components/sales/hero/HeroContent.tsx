
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroContentProps {
  isVisible: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ 
  isVisible, 
  title = "Transform Your Business With Powerful AI Solutions",
  subtitle = "Cutting-Edge Solutions", 
  description = "Reduce costs, increase efficiency, and gain a competitive edge in today's market with our customized AI automation and digital solutions."
}) => {
  return (
    <div className="text-left relative z-20" data-aos="fade-right">
      {/* Enhanced heading with animated reveal and better contrast */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          <span className="block text-white drop-shadow-lg">{title}</span>
          <span className="block text-brand-accent drop-shadow-lg font-black">{subtitle}</span>
        </h1>
      </div>
      
      <p 
        className={`mt-6 text-xl text-white/95 max-w-xl transition-all duration-700 delay-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
      >
        {description}
      </p>
      
      {/* Enhanced call-to-action buttons */}
      <div 
        className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Link to="#solutions" className="print:hidden group">
          <Button size="lg" className="bg-brand-accent hover:bg-brand-lightAccent text-white transition-all duration-300 shadow-lg shadow-brand-accent/25 hover:scale-105">
            See How We Can Help <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link to="/contact" className="print:hidden">
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-primary shadow-lg shadow-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Schedule a Free Consultation
          </Button>
        </Link>
      </div>

      {/* Enhanced scroll down indicator */}
      <div 
        className={`hidden md:flex items-center mt-16 print:hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <a href="#solutions" className="flex flex-col items-center text-white/90 hover:text-brand-accent transition-colors">
          <span className="text-sm mb-1 drop-shadow-md">Discover our solutions</span>
          <div className="w-7 h-12 rounded-full border-2 border-white/50 flex justify-center p-1.5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
