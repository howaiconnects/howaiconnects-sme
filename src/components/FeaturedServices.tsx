
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const featuredServices = [
    {
      title: "Web App Development",
      description: "Custom web applications designed and built for small and medium businesses, from concept to launch.",
      items: ["Custom business tools", "User-centric design", "Scalable architecture", "End-to-end service"],
      icon: <Code className="h-8 w-8 text-white" />,
      link: "/web-app-development",
      bgClass: "bg-gradient-to-br from-brand-primary to-brand-secondary"
    },
    {
      title: "Done-for-You AI Agency",
      description: "Launch your own AI agency with zero upfront cost through our unique business model and turnkey solutions.",
      items: ["No upfront costs", "Vendor integrations", "Business guidance", "Revenue-ready foundation"],
      icon: <Rocket className="h-8 w-8 text-white" />,
      link: "/done-for-you-ai-agency",
      bgClass: "bg-gradient-to-br from-brand-accent to-brand-lightAccent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            Flagship Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Cutting-edge AI solutions that revolutionize operations and accelerate growth
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
