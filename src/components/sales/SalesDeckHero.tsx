
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  // Auto-rotate through divisions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % businessDivisions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [businessDivisions.length]);

  // Connect activeIndex to carousel position
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(activeIndex);
    }
  }, [activeIndex, carouselApi]);
  
  // Animate element appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // More dynamic business division showcase images
  const divisionImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", // AI Services
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // AI Agency Building
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Web App Development
  ];

  return (
    <section className="relative bg-gradient-to-br from-brand-primary to-brand-dark py-20 md:py-32 overflow-hidden print:py-12">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none print:hidden">
        <div className="absolute -right-10 top-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-brand-lightAccent/30 rounded-full blur-3xl"></div>
        <div className="absolute left-1/3 top-1/4 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        
        {/* Floating elements */}
        <div className="hidden lg:block absolute top-20 right-[15%] w-16 h-16 border border-white/30 rounded-md rotate-12 animate-float opacity-70"></div>
        <div className="hidden lg:block absolute bottom-32 left-[20%] w-8 h-8 border border-brand-accent/40 rounded-full animate-float opacity-70"></div>
        <div className="hidden lg:block absolute top-1/3 left-[10%] w-12 h-12 border border-white/20 rounded-lg -rotate-12 animate-float delay-200 opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left" data-aos="fade-right">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="block text-white/90">Transform</span>
              <span className="block text-white/90">Your Business</span>
              <span className="block text-brand-accent">With AI-Powered</span>
              <span className="block text-brand-lightAccent">Solutions</span>
            </h1>
            <p 
              className={`mt-6 text-xl text-white/80 max-w-xl transition-all duration-700 delay-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Discover our comprehensive suite of business solutions designed to power your growth and digital transformation journey.
            </p>
            
            <div 
              className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Link to="#solutions" className="print:hidden">
                <Button size="lg" className="bg-brand-accent hover:bg-brand-lightAccent text-white transition-all duration-300 shadow-lg shadow-brand-accent/25 hover:scale-105">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact" className="print:hidden">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-lg shadow-white/10 hover:scale-105 transition-all duration-300">
                  Schedule a Call
                </Button>
              </Link>
            </div>

            {/* Scroll down indicator */}
            <div 
              className={`hidden md:flex items-center mt-16 animate-bounce print:hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <a href="#solutions" className="flex flex-col items-center text-white/70 hover:text-brand-accent">
                <span className="text-sm mb-1">Scroll to explore</span>
                <ChevronDown className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div 
            className={`hidden md:block print:block transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            data-aos="fade-left"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-10 -top-10 w-20 h-20 border border-brand-accent/30 rounded-xl rotate-12 z-0"></div>
              <div className="absolute -right-5 -bottom-5 w-32 h-32 border border-white/20 rounded-full z-0"></div>
              
              {/* Main showcase */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 relative z-10">
                <Carousel 
                  className="w-full max-w-md mx-auto"
                  opts={{ loop: true }}
                  setApi={setCarouselApi}
                >
                  <CarouselContent>
                    {businessDivisions.map((division, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-xl transform transition-all hover:scale-[1.02] duration-300 print:shadow-md print:hover:scale-100">
                            <div className="relative h-52 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent z-10"></div>
                              <img 
                                src={divisionImages[index]} 
                                alt={division.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  console.error(`Failed to load image: ${divisionImages[index]}`);
                                  e.currentTarget.src = "/placeholder.svg";
                                }}
                              />
                              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                <h3 className="text-2xl font-bold text-white mb-1">{division.title}</h3>
                                <p className="text-white/90 line-clamp-2">{division.description}</p>
                              </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 flex items-center justify-between">
                              <Link 
                                to={`#${division.linkFragment}`} 
                                className="text-brand-accent flex items-center font-medium group print:hidden"
                              >
                                Learn more 
                                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <span className="text-white/60 text-sm">{index + 1} / {businessDivisions.length}</span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 sm:-left-12 print:hidden text-white backdrop-blur-sm bg-black/30 hover:bg-black/50 border-0" />
                  <CarouselNext className="right-0 sm:-right-12 print:hidden text-white backdrop-blur-sm bg-black/30 hover:bg-black/50 border-0" />
                </Carousel>
                
                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-6 print:hidden">
                  {businessDivisions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex ? "bg-brand-accent scale-125 w-6" : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`View ${businessDivisions[index].title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesDeckHero;
