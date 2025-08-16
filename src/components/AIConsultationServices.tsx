
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, BarChart2, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const AIConsultationServices = () => {
  const services = [
    {
      title: "Platform Architecture Analysis",
      description: "Deep-dive analysis of your technology infrastructure to identify AI orchestration opportunities and scalability requirements.",
      icon: <ClipboardCheck className="h-8 w-8 text-brand-primary" />,
      items: ["Infrastructure evaluation", "Orchestration opportunity mapping", "Scalability assessment", "Integration roadmap"],
      link: "/services/ai-consultation/ai-readiness-assessment"
    },
    {
      title: "AI Orchestration Strategy",
      description: "Design comprehensive AI platform strategies that anticipate future needs and create almost unlimited deep connections.",
      icon: <BarChart2 className="h-8 w-8 text-brand-primary" />,
      items: ["Custom AI platform roadmap", "Technology architecture design", "Resource optimization planning", "Implementation timeline"],
      link: "/services/ai-consultation/ai-strategy-development"
    },
    {
      title: "Platform Implementation Labs",
      description: "Hands-on engineering support for building and deploying production-ready AI orchestration systems.",
      icon: <Headphones className="h-8 w-8 text-brand-primary" />,
      items: ["Technical architecture setup", "Platform integration support", "Team engineering training", "Performance optimization"],
      link: "/services/ai-consultation/implementation-support"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            AI Innovation Labs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Advanced research and development services powering next-generation AI solutions
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
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
    </section>
  );
};

export default AIConsultationServices;
