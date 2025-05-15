
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, Strategy, Headphones } from "lucide-react";

const AIConsultationServices = () => {
  const services = [
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your business processes and identify the highest-impact opportunities for AI implementation.",
      icon: <ClipboardCheck className="h-8 w-8 text-brand-primary" />,
      items: ["Process evaluation", "Automation opportunity mapping", "ROI calculation", "Implementation roadmap"],
      link: "/services/ai-consultation/ai-readiness-assessment"
    },
    {
      title: "AI Strategy Development",
      description: "Create a customized AI adoption strategy aligned with your business goals and available resources.",
      icon: <Strategy className="h-8 w-8 text-brand-primary" />,
      items: ["Custom AI roadmap", "Technology selection guidance", "Budget & resource planning", "Implementation timeline"],
      link: "/services/ai-consultation/ai-strategy-development"
    },
    {
      title: "Implementation Support",
      description: "Get hands-on guidance throughout your AI implementation journey from our experienced consultants.",
      icon: <Headphones className="h-8 w-8 text-brand-primary" />,
      items: ["Technical setup assistance", "Integration support", "Staff training", "Ongoing optimization"],
      link: "/services/ai-consultation/implementation-support"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI Consultation Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Expert guidance to help you implement the right AI solutions for your business
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
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIConsultationServices;
