
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
  title?: string;
  subtitle?: string;
  description?: string;
}

const SalesDeckHero = ({ 
  businessDivisions, 
  title = "Transform Your Business with AI",
  subtitle = "Cutting-Edge Solutions",
  description = "Discover how our comprehensive AI solutions can revolutionize your operations, reduce costs, and accelerate growth."
}: SalesDeckHeroProps) => {
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
    <section className="relative hero-gradient py-20 md:py-32 overflow-hidden print:py-12 bg-hero-pattern">
      {/* Background elements */}
      <HeroBackground />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 via-brand-primary/50 to-brand-primary/70 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <HeroContent 
            isVisible={isVisible} 
            title={title}
            subtitle={subtitle}
            description={description}
          />
          
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
