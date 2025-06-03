
import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none print:hidden">
      {/* Large glowing orbs with updated colors */}
      <div className="absolute -right-10 top-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"></div>
      <div className="absolute left-1/3 top-1/4 w-48 h-48 bg-blue-400/15 rounded-full blur-xl"></div>
      
      {/* Animated particle effects */}
      <div className="absolute top-20 right-[15%] w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-32 left-[20%] w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-70 animation-delay-700"></div>
      <div className="absolute top-1/3 left-[10%] w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-1500"></div>
      
      {/* Geometric shapes with updated colors */}
      <div className="hidden lg:block absolute top-20 right-[15%] w-16 h-16 border border-emerald-400/40 rounded-md rotate-12 animate-float opacity-70"></div>
      <div className="hidden lg:block absolute bottom-32 left-[20%] w-8 h-8 border border-cyan-400/50 rounded-full animate-float opacity-70"></div>
      <div className="hidden lg:block absolute top-1/3 left-[10%] w-12 h-12 border border-blue-400/30 rounded-lg -rotate-12 animate-float delay-200 opacity-70"></div>
    </div>
  );
};

export default HeroBackground;
