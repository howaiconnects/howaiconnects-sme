
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const featuredServices = [
    {
      title: "DealStream Platform",
      description: "AI-powered real estate intelligence platform uncovering distressed and off-market listings with intelligent matching to hedge funds.",
      items: ["Advanced web scraping", "AI-powered matching", "Real-time market intel", "Automated deal flow"],
      icon: <Code className="h-8 w-8 text-white" />,
      link: "/projects/dealstream",
      bgClass: "bg-gradient-to-br from-brand-primary to-brand-secondary"
    },
    {
      title: "HowAIConnects Platform",
      description: "Unified AI framework powering all our solutions with enterprise authentication, multi-agent orchestration, and intelligent automation.",
      items: ["Multi-agent orchestration", "Enterprise security", "Real-time data sync", "Modular architecture"],
      icon: <Rocket className="h-8 w-8 text-white" />,
      link: "/projects/howaiconnects-platform",
      bgClass: "bg-gradient-to-br from-brand-accent to-brand-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            AI-Powered Applications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Custom AI-designed applications that solve real business problems, not just automate tasks
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 mt-12">
          {featuredServices.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0">
              <div className={`p-6 ${service.bgClass} flex items-center`}>
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
              </div>
              <CardHeader className="bg-white">
                <CardDescription className="text-lg text-gray-700">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2 pb-6 bg-white">
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="w-full bg-brand-primary hover:bg-brand-accent text-white">
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

export default FeaturedServices;
