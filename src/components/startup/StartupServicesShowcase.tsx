
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Building, CreditCard, Users, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const StartupServicesShowcase = () => {
  const services = [
    {
      title: "Complete Business Formation",
      description: "LLC/Corporation setup, EIN registration, business bank accounts, and all legal requirements to get your AI startup officially established.",
      icon: <Building className="h-8 w-8 text-brand-primary" />,
      features: ["LLC/Corp Formation", "EIN & Tax ID", "Business Banking", "Legal Compliance"],
      timeline: "5-7 days"
    },
    {
      title: "Professional Website Creation",
      description: "Custom-designed website optimized for AI startups, including landing pages, product showcases, and investor-ready presentation materials.",
      icon: <Globe className="h-8 w-8 text-brand-primary" />,
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Investor Landing Page"],
      timeline: "10-14 days"
    },
    {
      title: "AI Startup Funding Access",
      description: "Connect with AI-focused accelerators, grants, and vendor credits. We help you access funding opportunities specifically for AI companies.",
      icon: <CreditCard className="h-8 w-8 text-brand-primary" />,
      features: ["Grant Applications", "Accelerator Connections", "Vendor Credits", "Investor Introductions"],
      timeline: "Ongoing"
    },
    {
      title: "Market Positioning Strategy",
      description: "Define your AI startup's unique value proposition, target market analysis, and go-to-market strategy tailored for the AI industry.",
      icon: <Users className="h-8 w-8 text-brand-primary" />,
      features: ["Market Research", "Competitor Analysis", "Value Proposition", "Go-to-Market Plan"],
      timeline: "7-10 days"
    },
    {
      title: "Business Documentation",
      description: "Essential startup documents including business plans, pitch decks, financial projections, and compliance documentation.",
      icon: <FileText className="h-8 w-8 text-brand-primary" />,
      features: ["Business Plan", "Pitch Deck", "Financial Models", "Legal Documents"],
      timeline: "5-7 days"
    },
    {
      title: "AI Tools Integration",
      description: "Set up essential AI development and business tools, APIs, and platforms to accelerate your startup's technical foundation.",
      icon: <Zap className="h-8 w-8 text-brand-primary" />,
      features: ["API Integrations", "Development Tools", "Analytics Setup", "Automation Systems"],
      timeline: "3-5 days"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Complete AI Startup Launch Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch your AI startup in 30 days or less. We handle the setup while you focus on innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                    {service.timeline}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-accent text-white px-8 py-4">
              Get Started with Complete Setup <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartupServicesShowcase;
