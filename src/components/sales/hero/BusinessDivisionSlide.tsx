
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BusinessDivision {
  title: string;
  description: string;
  linkFragment: string;
}

interface BusinessDivisionSlideProps {
  division: BusinessDivision;
  image: string;
  index: number;
  total: number;
}

const BusinessDivisionSlide: React.FC<BusinessDivisionSlideProps> = ({ 
  division, 
  image, 
  index, 
  total 
}) => {
  return (
    <div className="p-1">
      <div className="overflow-hidden rounded-xl transform transition-all hover:scale-[1.02] duration-300 print:shadow-md print:hover:scale-100 group">
        <div className="relative h-60 overflow-hidden">
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/50 to-transparent z-10"></div>
          
          <img 
            src={image} 
            alt={division.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-2000"
            onError={(e) => {
              console.error(`Failed to load image: ${image}`);
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          
          {/* Enhanced content positioning */}
          <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-lightAccent transition-colors">{division.title}</h3>
            <p className="text-white/90 line-clamp-2">{division.description}</p>
          </div>
          
          {/* Animated highlight line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-brand-accent transition-all duration-500"></div>
        </div>
        
        {/* Enhanced footer with glass effect */}
        <div className="bg-white/10 backdrop-blur-sm p-4 flex items-center justify-between border-t border-white/10">
          <Link 
            to={`#${division.linkFragment}`} 
            className="text-brand-accent flex items-center font-medium group-hover:text-brand-lightAccent transition-colors print:hidden"
          >
            Learn more 
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-white/60 text-sm">{index + 1} / {total}</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessDivisionSlide;
