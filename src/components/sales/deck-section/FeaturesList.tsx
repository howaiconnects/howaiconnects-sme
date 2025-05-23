
import React from "react";

interface FeaturesListProps {
  features: string[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
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
  );
};

export default FeaturesList;
