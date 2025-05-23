
import React from "react";

interface BenefitCardProps {
  benefit: { title: string; description: string };
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  return (
    <div 
      className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all hover:border-brand-accent/30 group print:shadow-none print:border print:hover:shadow-none"
      style={{animationDelay: `${(index + 1) * 150}ms`}}
    >
      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
        <span className="text-brand-primary group-hover:text-brand-accent transition-colors text-xl font-bold">{index + 1}</span>
      </div>
      <h4 className="text-xl font-bold mb-3 text-brand-primary group-hover:text-brand-accent transition-colors">{benefit.title}</h4>
      <p className="text-gray-700">{benefit.description}</p>
    </div>
  );
};

export default BenefitCard;
