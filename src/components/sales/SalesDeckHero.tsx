
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Images for each business division
  const divisionImages = [
    "/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png", // AI Services
    "/lovable-uploads/af6b0bd3-79bb-44ac-af7d-134a7e6d842a.png", // AI Agency Building
    "/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png", // Web App Development
  ];

  // Web App Development project logos
  const webAppLogos = [
    "/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png", // Web App Development main logo
    "/lovable-uploads/6a19eca0-b899-42d6-bcd1-37c87248c21d.png", // Path to Canada logo
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-white py-20 md:py-28 overflow-hidden">
      {/* Abstract shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="block">Transform</span>
              <span className="block">Your</span>
              <span className="block text-brand-primary">Business</span>
              <span className="block text-brand-secondary">Future</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-xl">
              Discover our comprehensive suite of business solutions designed to power your growth and digital transformation journey.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="#solutions">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-accent transition-all shadow-md">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 shadow-sm">
                  Schedule a Call
                </Button>
              </Link>
            </div>

            {/* Scroll down indicator */}
            <div className="hidden md:flex items-center mt-16 animate-bounce">
              <a href="#solutions" className="flex flex-col items-center text-gray-500 hover:text-brand-primary">
                <span className="text-sm mb-1">Scroll to explore</span>
                <ChevronDown className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block" data-aos="fade-left">
            <Carousel 
              className="w-full max-w-md mx-auto"
              opts={{ loop: true }}
              setApi={(api) => {
                // When active index changes from the timer, move carousel
                useEffect(() => {
                  if (api) api.scrollTo(activeIndex);
                }, [activeIndex, api]);
              }}
            >
              <CarouselContent>
                {businessDivisions.map((division, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.02] duration-300">
                        <div className="bg-gradient-to-r from-brand-primary/20 to-brand-accent/30 p-6 flex justify-center items-center h-40">
                          <img 
                            src={divisionImages[index]} 
                            alt={division.title}
                            className="h-32 w-auto object-contain"
                            onError={(e) => {
                              console.error(`Failed to load image: ${divisionImages[index]}`);
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-brand-primary mb-3">{division.title}</h3>
                          <p className="text-gray-600 mb-4">{division.description}</p>
                          <Link 
                            to={`#${division.linkFragment}`} 
                            className="text-brand-primary flex items-center font-medium group"
                          >
                            Learn more 
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:-left-12" />
              <CarouselNext className="right-0 sm:-right-12" />
            </Carousel>
            
            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {businessDivisions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-brand-primary scale-125 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View ${businessDivisions[index].title}`}
                />
              ))}
            </div>
            
            {/* Web App Development Projects Carousel */}
            {activeIndex === 2 && (
              <div className="mt-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md" data-aos="fade-up">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Featured Web App Projects</h4>
                <Carousel
                  className="w-full"
                  opts={{ loop: true, align: "start" }}
                  autoPlay={true}
                >
                  <CarouselContent>
                    {webAppLogos.map((logo, idx) => (
                      <CarouselItem key={idx} className="basis-1/2 md:basis-1/3">
                        <div className="p-1">
                          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <img
                              src={logo}
                              alt={idx === 1 ? "Path to Canada" : "Web App Development"}
                              className="h-16 w-auto object-contain"
                              onError={(e) => {
                                console.error(`Failed to load logo: ${logo}`);
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="mt-2 text-center text-sm text-gray-500">
                  {activeIndex === 2 && <span>Including Path to Canada web application</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesDeckHero;
