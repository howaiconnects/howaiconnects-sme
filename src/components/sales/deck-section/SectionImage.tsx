
import React from "react";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  imageSrc: string;
  imageAlt: string;
  isVisible: boolean;
  reverse?: boolean;
}

const SectionImage: React.FC<SectionImageProps> = ({ 
  imageSrc, 
  imageAlt, 
  isVisible, 
  reverse = false 
}) => {
  return (
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
  );
};

export default SectionImage;
