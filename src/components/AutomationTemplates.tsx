
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const AutomationTemplates = () => {
  const templates = [
    {
      title: "AI-Powered Real Estate Intelligence",
      description: "Advanced AI system for uncovering distressed property listings with intelligent matching algorithms.",
      platform: "DealStream Platform",
      difficulty: "Enterprise",
      link: "/projects/dealstream"
    },
    {
      title: "Enterprise Email Data Conversion",
      description: "AI-enhanced email data migration with intelligent parsing and error recovery systems.",
      platform: "OST2PST Platform", 
      difficulty: "Enterprise",
      link: "/projects/ost2pst"
    },
    {
      title: "Multi-Agent AI Orchestration",
      description: "Unified AI framework with enterprise authentication and intelligent agent coordination.",
      platform: "HowAIConnects Platform",
      difficulty: "Advanced",
      link: "/projects/howaiconnects-platform"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            Platform Templates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Production-ready automation templates built on our AI orchestration platform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <CardTitle>{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex justify-between text-sm">
                  <span className="text-gray-500">{template.platform}</span>
                  <span className={`font-medium ${
                    template.difficulty === "Beginner" ? "text-green-600" :
                    template.difficulty === "Intermediate" ? "text-amber-600" :
                    "text-red-600"
                  }`}>
                    {template.difficulty}
                  </span>
                </div>
                <Link to={template.link}>
                  <Button className="w-full flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" /> Access Template
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/projects">
            <Button variant="outline" size="lg">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AutomationTemplates;
