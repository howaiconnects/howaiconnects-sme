
import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none print:hidden">
      {/* Large glowing orbs */}
      <div className="absolute -right-10 top-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-brand-lightAccent/30 rounded-full blur-3xl"></div>
      <div className="absolute left-1/3 top-1/4 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      
      {/* Animated particle effects */}
      <div className="absolute top-20 right-[15%] w-2 h-2 bg-white rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-32 left-[20%] w-3 h-3 bg-brand-accent rounded-full animate-ping opacity-70 animation-delay-700"></div>
      <div className="absolute top-1/3 left-[10%] w-2 h-2 bg-white rounded-full animate-ping opacity-70 animation-delay-1500"></div>
      
      {/* Geometric shapes */}
      <div className="hidden lg:block absolute top-20 right-[15%] w-16 h-16 border border-white/30 rounded-md rotate-12 animate-float opacity-70"></div>
      <div className="hidden lg:block absolute bottom-32 left-[20%] w-8 h-8 border border-brand-accent/40 rounded-full animate-float opacity-70"></div>
      <div className="hidden lg:block absolute top-1/3 left-[10%] w-12 h-12 border border-white/20 rounded-lg -rotate-12 animate-float delay-200 opacity-70"></div>
    </div>
  );
};

export default HeroBackground;
