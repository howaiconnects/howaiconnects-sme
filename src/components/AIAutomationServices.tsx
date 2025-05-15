
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, Mail } from "lucide-react";

const AIAutomationServices = () => {
  const services = [
    {
      title: "Marketing Automation",
      description: "Automate email sequences, social media posting, and content generation to reach more customers with less effort.",
      icon: <Mail className="h-8 w-8 text-brand-primary" />,
      items: ["Email marketing sequences", "Social media automation", "AI-driven content generation", "Marketing analytics"],
      link: "/services/ai-automation-solutions/marketing-automation"
    },
    {
      title: "Workflow Automation",
      description: "Streamline your business processes, eliminate manual data entry, and automate reporting to save time and reduce errors.",
      icon: <BarChart3 className="h-8 w-8 text-brand-primary" />,
      items: ["Document processing", "Data extraction & entry", "Automated reporting", "Process optimization"],
      link: "/services/ai-automation-solutions/workflow-automation"
    },
    {
      title: "Customer Service Automation",
      description: "Provide 24/7 customer support, automate ticket routing, and build intelligent FAQ systems that learn from interactions.",
      icon: <Bot className="h-8 w-8 text-brand-primary" />,
      items: ["AI chatbots", "Ticket routing & prioritization", "Self-learning FAQ systems", "Customer insight analysis"],
      link: "/services/ai-automation-solutions/customer-service-automation"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI Automation Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Ready-to-implement AI systems that solve specific business challenges
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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

export default AIAutomationServices;
