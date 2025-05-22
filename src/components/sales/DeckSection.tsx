
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DeckSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: Array<{ title: string; description: string }>;
  linkTo: string;
  linkText: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  reverse?: boolean;
}

const DeckSection = ({
  title,
  subtitle,
  description,
  features,
  benefits,
  linkTo,
  linkText,
  imageSrc,
  imageAlt,
  bgColor = "bg-white",
  reverse = false,
}: DeckSectionProps) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={cn("flex flex-col", reverse ? "md:items-end md:text-right" : "")}>
            <h3 className="text-2xl font-bold text-brand-primary mb-2">{subtitle}</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center mr-2">
                      <span className="text-brand-primary text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to={linkTo}>
              <Button className="bg-brand-primary hover:bg-brand-primary/90">
                {linkText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className={cn("flex justify-center", reverse ? "md:justify-start" : "md:justify-end")}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl blur-md opacity-25"></div>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="relative rounded-lg shadow-xl w-full h-auto object-cover max-w-md"
              />
            </div>
          </div>
        </div>

        {benefits.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-10">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeckSection;
