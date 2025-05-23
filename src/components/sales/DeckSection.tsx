
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
            {/* Highlighted value proposition label */}
            <div 
              className={cn(
                "inline-flex items-center mb-3 px-4 py-1.5 rounded-full",
                "bg-gradient-to-r from-brand-primary/10 to-brand-accent/10",
                "border border-brand-accent/20"
              )}
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
              <span className="text-sm font-medium text-brand-primary">{subtitle}</span>
            </div>
            
            {/* Title with enhanced styling */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              <span className="gradient-text">{title}</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-1 bg-brand-accent rounded-full mr-3 hidden md:block"></span>
                Key Benefits
              </h4>
              <ul className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start transform transition-all"
                    style={{animationDelay: `${(index + 1) * 100}ms`}}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-accent/10 flex items-center justify-center mr-3 mt-1">
                      <span className="text-brand-accent text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to={linkTo} className="print:hidden">
              <Button 
                className="bg-brand-primary hover:bg-brand-accent transition-colors hover:scale-105 transform duration-200 group"
                size="lg"
              >
                {linkText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* Static text for print version */}
            <div className="hidden print:block text-brand-primary font-bold">
              {linkText}
            </div>
          </div>
          
          <div 
            className={cn(
              "flex justify-center transform transition-all duration-700",
              reverse ? "md:justify-start" : "md:justify-end",
              isVisible 
                ? "translate-y-0 opacity-100" 
                : reverse ? "translate-x-24 opacity-0" : "translate-x-[-6rem] opacity-0",
              "print:translate-y-0 print:translate-x-0 print:opacity-100"
            )}
          >
            <div className="relative group">
              {/* Enhanced image presentation with glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl blur-md opacity-25 animate-pulse print:hidden group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="relative rounded-lg shadow-xl w-full h-auto object-cover max-w-md hover:scale-105 transition-transform duration-500 print:hover:scale-100 print:shadow-none"
                onError={(e) => {
                  console.error(`Failed to load image: ${imageSrc}`);
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-brand-accent/30 rounded-md rotate-12 z-0 hidden md:block group-hover:rotate-45 transition-transform duration-300"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-brand-primary/30 rounded-full z-0 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        {benefits.length > 0 && (
          <div 
            className={cn(
              "mt-20 print:mt-10", 
              isVisible ? "animate-fade-in" : "opacity-0",
              "print:opacity-100 print:animate-none"
            )}
            style={{animationDelay: "300ms"}}
          >
            <div className="flex items-center justify-center mb-10">
              <div className="h-0.5 w-12 bg-brand-primary/30 rounded hidden md:block"></div>
              <h3 className="text-2xl font-bold text-center mx-4 gradient-text">Real Business Impact</h3>
              <div className="h-0.5 w-12 bg-brand-primary/30 rounded hidden md:block"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all hover:border-brand-accent/30 group print:shadow-none print:border print:hover:shadow-none"
                  style={{animationDelay: `${(index + 1) * 150}ms`}}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                    <span className="text-brand-primary group-hover:text-brand-accent transition-colors text-xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-brand-primary group-hover:text-brand-accent transition-colors">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeckSection;
