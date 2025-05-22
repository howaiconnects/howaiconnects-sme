
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface SalesDeckHeroProps {
  businessDivisions: Array<{
    title: string;
    description: string;
    linkFragment: string;
  }>;
}

const SalesDeckHero = ({ businessDivisions }: SalesDeckHeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate through divisions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % businessDivisions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [businessDivisions.length]);

  return (
    <section className="relative bg-gradient-to-b from-brand-primary/30 to-white py-24 overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="block">Transform Your</span>
              <span className="block gradient-text mt-2">Business Future</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-xl">
              Discover our comprehensive suite of business solutions designed to power your growth and digital transformation journey.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="#solutions">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-accent transition-all">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-2xl blur"></div>
            <div className="h-96 w-full relative">
              {businessDivisions.map((division, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out rounded-xl shadow-xl overflow-hidden bg-white ${
                    index === activeIndex 
                      ? "opacity-100 scale-100 z-20" 
                      : "opacity-0 scale-95 z-10"
                  }`}
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-brand-primary mb-3">{division.title}</h2>
                      <p className="text-gray-600">{division.description}</p>
                    </div>
                    <Link 
                      to={`#${division.linkFragment}`} 
                      className="text-brand-primary flex items-center font-medium self-start"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
              
              {/* Navigation dots */}
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
                {businessDivisions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? "bg-brand-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View ${businessDivisions[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesDeckHero;
