
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import DivisionCarousel from "./hero/DivisionCarousel";

interface SalesDeckHeroProps {
  businessDivisions: Array<{
    title: string;
    description: string;
    linkFragment: string;
  }>;
}

const SalesDeckHero = ({ businessDivisions }: SalesDeckHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  // Animate element appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-primary py-20 md:py-32 overflow-hidden print:py-12">
      {/* Background elements */}
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <HeroContent isVisible={isVisible} />
          
          {/* Right side carousel */}
          <DivisionCarousel 
            businessDivisions={businessDivisions}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default SalesDeckHero;
