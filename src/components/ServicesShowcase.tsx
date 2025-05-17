
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesShowcase = () => {
  const automationServices = [
    {
      title: "Marketing Automation",
      description: "Automate email sequences, social media posting, and content generation to reach more customers with less effort.",
      items: ["Email marketing sequences", "Social media automation", "AI-driven content generation", "Marketing analytics"],
      link: "/services/ai-automation-solutions/marketing-automation"
    },
    {
      title: "Workflow Automation",
      description: "Streamline your business processes, eliminate manual data entry, and automate reporting to save time and reduce errors.",
      items: ["Document processing", "Data extraction & entry", "Automated reporting", "Process optimization"],
      link: "/services/ai-automation-solutions/workflow-automation"
    },
    {
      title: "Customer Service Automation",
      description: "Provide 24/7 customer support, automate ticket routing, and build intelligent FAQ systems that learn from interactions.",
      items: ["AI chatbots", "Ticket routing & prioritization", "Self-learning FAQ systems", "Customer insight analysis"],
      link: "/services/ai-automation-solutions/customer-service-automation"
    }
  ];

  const consultationServices = [
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your business processes and identify the highest-impact opportunities for AI implementation.",
      items: ["Process evaluation", "Automation opportunity mapping", "ROI calculation", "Implementation roadmap"],
      link: "/services/ai-consultation/ai-readiness-assessment"
    },
    {
      title: "AI Strategy Development",
      description: "Create a customized AI adoption strategy aligned with your business goals and available resources.",
      items: ["Custom AI roadmap", "Technology selection guidance", "Budget & resource planning", "Implementation timeline"],
      link: "/services/ai-consultation/ai-strategy-development"
    },
    {
      title: "Implementation Support",
      description: "Get hands-on guidance throughout your AI implementation journey from our experienced consultants.",
      items: ["Technical setup assistance", "Integration support", "Staff training", "Ongoing optimization"],
      link: "/services/ai-consultation/implementation-support"
    }
  ];

  // New service divisions
  const additionalDivisions = [
    {
      title: "Web App Development",
      description: "Custom web applications designed and built for small and medium businesses, from concept to launch.",
      items: ["Custom business tools", "User-centric design", "Scalable architecture", "End-to-end service"],
      link: "/web-app-development"
    },
    {
      title: "Done-for-You AI Agency",
      description: "Launch your own AI agency with zero upfront cost through our unique business model and turnkey solutions.",
      items: ["No upfront costs", "Vendor integrations", "Business guidance", "Revenue-ready foundation"],
      link: "/done-for-you-ai-agency"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive AI solutions tailored for small and medium-sized businesses
          </p>
        </div>

        {/* Automation Services */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">AI Automation Solutions</h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {automationServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consultation Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">AI Consultation Services</h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {consultationServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Service Divisions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Service Divisions</h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {additionalDivisions.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
