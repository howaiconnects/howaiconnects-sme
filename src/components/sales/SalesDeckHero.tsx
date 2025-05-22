
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SalesDeckHeroProps {
  businessDivisions: Array<{
    title: string;
    description: string;
    linkFragment: string;
  }>;
}

const SalesDeckHero = ({ businessDivisions }: SalesDeckHeroProps) => {
  return (
    <section className="relative bg-gradient-to-b from-brand-primary/20 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="block">Complete</span>
          <span className="block gradient-text">Business Solutions</span>
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
          Discover our comprehensive suite of business divisions designed to power your digital transformation journey.
        </p>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businessDivisions.map((division, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-brand-primary mb-2">{division.title}</h2>
              <p className="text-gray-600 mb-4">{division.description}</p>
              <Link to={`#${division.linkFragment}`} className="text-brand-primary flex items-center font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesDeckHero;
