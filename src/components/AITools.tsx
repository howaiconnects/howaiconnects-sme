
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AITools = () => {
  const tools = [
    {
      title: "Platform Architecture Analyzer",
      description: "Evaluate system architecture readiness for advanced AI orchestration and deep integration capabilities.",
      downloadType: "Interactive assessment",
      fileSize: "420 KB",
      link: "/resources/tools/platform-architecture-analyzer"
    },
    {
      title: "Orchestration Complexity Calculator",
      description: "Calculate technical complexity and resource requirements for implementing AI orchestration platforms.",
      downloadType: "Engineering spreadsheet",
      fileSize: "650 KB",
      link: "/resources/tools/orchestration-complexity-calculator"
    },
    {
      title: "Integration Readiness Checklist",
      description: "Comprehensive technical checklist for evaluating infrastructure readiness for AI platform deployment.",
      downloadType: "Technical document",
      fileSize: "285 KB",
      link: "/resources/tools/integration-readiness-checklist"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            Platform Development Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Engineering tools and resources for building advanced AI orchestration systems
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex justify-between text-sm text-gray-500">
                  <span>{tool.downloadType}</span>
                  <span>{tool.fileSize}</span>
                </div>
                <Button className="w-full flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" /> Download Tool
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
