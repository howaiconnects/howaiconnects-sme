import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  title: string;
  description: string;
  link: string;
  category: string;
  popular?: boolean;
}

interface RelatedServicesProps {
  currentService?: string;
  category?: "automation" | "consultation" | "featured";
}

const RelatedServices = ({ currentService, category }: RelatedServicesProps) => {
  const allServices: RelatedService[] = [
    {
      title: "Marketing Automation",
      description: "Automate email campaigns, social media, and lead nurturing",
      link: "/services/ai-automation-solutions/marketing-automation",
      category: "automation",
      popular: true
    },
    {
      title: "Workflow Automation", 
      description: "Streamline business processes and reduce manual tasks",
      link: "/services/ai-automation-solutions/workflow-automation",
      category: "automation"
    },
    {
      title: "Customer Service Automation",
      description: "AI chatbots and automated support systems",
      link: "/services/ai-automation-solutions/customer-service-automation", 
      category: "automation"
    },
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your business for AI implementation",
      link: "/services/ai-consultation/ai-readiness-assessment",
      category: "consultation",
      popular: true
    },
    {
      title: "AI Strategy Development", 
      description: "Create a custom AI adoption roadmap",
      link: "/services/ai-consultation/ai-strategy-development",
      category: "consultation"
    },
    {
      title: "Implementation Support",
      description: "Ongoing support for AI deployment and optimization",
      link: "/services/ai-consultation/implementation-support",
      category: "consultation"
    },
    {
      title: "Web App Development",
      description: "Custom web applications for small and medium businesses",
      link: "/web-app-development", 
      category: "featured",
      popular: true
    },
    {
      title: "Done-for-You AI Agency",
      description: "Launch your own AI agency with zero upfront cost",
      link: "/done-for-you-ai-agency",
      category: "featured"
    }
  ];

  // Filter services based on category and exclude current service
  let filteredServices = allServices.filter(service => 
    service.link !== currentService && 
    (category ? service.category === category : true)
  );

  // If no category specified, show popular services + category-related ones
  if (!category && currentService) {
    const currentCategory = allServices.find(s => s.link === currentService)?.category;
    filteredServices = allServices.filter(service => 
      service.link !== currentService && 
      (service.popular || service.category === currentCategory)
    ).slice(0, 3);
  } else {
    filteredServices = filteredServices.slice(0, 3);
  }

  if (filteredServices.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover other ways we can help transform your business with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={service.popular ? "default" : "secondary"} className="mb-2">
                    {service.category === "automation" ? "Automation" : 
                     service.category === "consultation" ? "Consultation" : "Featured"}
                  </Badge>
                  {service.popular && (
                    <Badge variant="outline" className="text-brand-accent border-brand-accent">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-brand-primary hover:text-brand-accent font-medium group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-md hover:bg-brand-accent transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;