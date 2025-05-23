
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
import FeaturesList from "./FeaturesList";
import SectionImage from "./SectionImage";
import CallToAction from "./CallToAction";
import BenefitsSection from "./BenefitsSection";

interface DeckSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: Array<{ title: string; description: string }>;
  linkTo: string;
  linkText: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  reverse?: boolean;
  expanded?: boolean;
}

const DeckSection = ({
  title,
  subtitle,
  description,
  features,
  benefits,
  linkTo,
  linkText,
  imageSrc,
  imageAlt,
  bgColor = "bg-white",
  reverse = false,
  expanded = true,
}: DeckSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 ${bgColor} overflow-hidden print:py-10 relative`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute ${reverse ? 'left-0' : 'right-0'} top-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl`}></div>
        <div className={`absolute ${reverse ? 'right-20' : 'left-20'} bottom-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center",
            reverse ? "md:flex-row-reverse" : "",
            isVisible ? "animate-fade-in" : "opacity-0",
            "print:opacity-100 print:animate-none"
          )}
          style={{animationDelay: "150ms"}}
        >
          <div className={cn("flex flex-col", reverse ? "md:items-end md:text-right" : "")}>
            <SectionHeader 
              title={title} 
              subtitle={subtitle} 
              description={description} 
            />
            
            <FeaturesList features={features} />
            
            <CallToAction linkTo={linkTo} linkText={linkText} />
          </div>
          
          <SectionImage 
            imageSrc={imageSrc} 
            imageAlt={imageAlt} 
            isVisible={isVisible} 
            reverse={reverse} 
          />
        </div>

        {benefits.length > 0 && (
          <BenefitsSection benefits={benefits} isVisible={isVisible} />
        )}
      </div>
    </section>
  );
};

export default DeckSection;
