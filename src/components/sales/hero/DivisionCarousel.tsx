
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import BusinessDivisionSlide from "./BusinessDivisionSlide";

interface BusinessDivision {
  title: string;
  description: string;
  linkFragment: string;
}

interface DivisionCarouselProps {
  businessDivisions: BusinessDivision[];
  isVisible: boolean;
}

const DivisionCarousel: React.FC<DivisionCarouselProps> = ({ 
  businessDivisions, 
  isVisible 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Updated inspirational business division showcase images
  const divisionImages = [
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // AI Services - showing business transformation
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // AI Agency Building - entrepreneurs in action
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Web App Development - collaborative team environment
  ];
  
  // Auto-rotate through divisions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % businessDivisions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [businessDivisions.length]);

  // Connect activeIndex to carousel position
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(activeIndex);
    }
  }, [activeIndex, carouselApi]);

  return (
    <div 
      className={`hidden md:block print:block transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
      data-aos="fade-left"
    >
      <div className="relative">
        {/* Enhanced decorative elements with new colors */}
        <div className="absolute -left-10 -top-10 w-20 h-20 border border-emerald-400/40 rounded-xl rotate-12 z-0"></div>
        <div className="absolute -right-5 -bottom-5 w-32 h-32 border border-cyan-400/30 rounded-full z-0"></div>
        
        {/* Enhanced showcase carousel with better backdrop */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 relative z-10 ring-1 ring-emerald-400/20">
          {/* Interactive graphic element */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
            <span className="animate-pulse text-xs font-bold">AI</span>
          </div>
          
          <Carousel 
            className="w-full max-w-md mx-auto"
            opts={{ loop: true }}
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {businessDivisions.map((division, index) => (
                <CarouselItem key={index}>
                  <BusinessDivisionSlide 
                    division={division} 
                    image={divisionImages[index]}
                    index={index}
                    total={businessDivisions.length}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12 print:hidden text-white backdrop-blur-sm bg-slate-800/60 hover:bg-slate-700/80 border-0 hover:text-emerald-400" />
            <CarouselNext className="right-0 sm:-right-12 print:hidden text-white backdrop-blur-sm bg-slate-800/60 hover:bg-slate-700/80 border-0 hover:text-emerald-400" />
          </Carousel>
          
          {/* Enhanced navigation dots with better visibility */}
          <div className="flex justify-center gap-2 mt-6 print:hidden">
            {businessDivisions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all ${
                  index === activeIndex 
                    ? "bg-emerald-400 scale-125 w-6 h-3 rounded-full shadow-lg" 
                    : "bg-white/40 hover:bg-white/60 w-3 h-3 rounded-full"
                }`}
                aria-label={`View ${businessDivisions[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionCarousel;
