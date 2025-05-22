
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
      { threshold: 0.1 } // Trigger when 10% of the element is visible
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
      className={`py-20 ${bgColor} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center",
            reverse ? "md:flex-row-reverse" : "",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{animationDelay: "150ms"}}
        >
          <div className={cn("flex flex-col", reverse ? "md:items-end md:text-right" : "")}>
            <h3 className="inline-block text-sm font-bold uppercase tracking-wider text-brand-primary mb-2 px-3 py-1 bg-brand-primary/10 rounded-full">{subtitle}</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">{title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
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
            
            <Link to={linkTo}>
              <Button 
                className="bg-brand-primary hover:bg-brand-accent transition-colors hover:scale-105 transform duration-200"
                size="lg"
              >
                {linkText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div 
            className={cn(
              "flex justify-center transform transition-all duration-700",
              reverse ? "md:justify-start" : "md:justify-end",
              isVisible 
                ? "translate-y-0 opacity-100" 
                : reverse ? "translate-x-24 opacity-0" : "translate-x-[-6rem] opacity-0"
            )}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl blur-md opacity-25 animate-pulse"></div>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="relative rounded-lg shadow-xl w-full h-auto object-cover max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {benefits.length > 0 && (
          <div 
            className={cn(
              "mt-20", 
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{animationDelay: "300ms"}}
          >
            <h3 className="text-2xl font-bold text-center mb-10">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all hover:border-brand-accent/30 group"
                  style={{animationDelay: `${(index + 1) * 150}ms`}}
                >
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
