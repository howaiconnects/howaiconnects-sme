
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How a Local Bakery Increased Orders by 37% with AI Marketing",
      company: "Sunrise Bakery",
      industry: "Food & Beverage",
      result: "37% increase in online orders",
      image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/resources/case-studies/sunrise-bakery"
    },
    {
      title: "Law Firm Reduces Client Onboarding Time by 86% with Document Automation",
      company: "Chen & Associates",
      industry: "Legal Services",
      result: "86% reduction in processing time",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/resources/case-studies/chen-associates"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
              Platform Success Stories
            </h2>
            <p className="mt-2 text-xl text-gray-500">
              Organizations already leveraging our AI orchestration technology to transform operations
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex items-center">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-brand-primary">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Client:</span> {study.company}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Result:</span> {study.result}
                  </p>
                  <Button variant="outline" size="sm">
                    Read Case Study
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden text-center">
          <Button variant="outline" className="w-full">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
