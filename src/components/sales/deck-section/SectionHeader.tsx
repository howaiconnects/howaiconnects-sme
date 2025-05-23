
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  description 
}) => {
  return (
    <>
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
    </>
  );
};

export default SectionHeader;
