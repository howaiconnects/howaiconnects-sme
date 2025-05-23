
import React from "react";
import { cn } from "@/lib/utils";
import BenefitCard from "./BenefitCard";

interface BenefitsSectionProps {
  benefits: Array<{ title: string; description: string }>;
  isVisible: boolean;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  benefits, 
  isVisible 
}) => {
  return (
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
          <BenefitCard 
            key={index}
            benefit={benefit} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
