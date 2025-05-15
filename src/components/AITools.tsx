
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AITools = () => {
  const tools = [
    {
      title: "AI Readiness Assessment Tool",
      description: "Evaluate how prepared your business is to implement AI automation technologies.",
      downloadType: "Interactive spreadsheet",
      fileSize: "245 KB",
      link: "/resources/tools/ai-readiness-assessment"
    },
    {
      title: "AI ROI Calculator",
      description: "Calculate the potential return on investment for AI implementation in your business.",
      downloadType: "Excel spreadsheet",
      fileSize: "380 KB",
      link: "/resources/tools/roi-calculator"
    },
    {
      title: "AI Vendor Evaluation Checklist",
      description: "A comprehensive checklist for evaluating AI solution providers before purchasing.",
      downloadType: "PDF document",
      fileSize: "125 KB",
      link: "/resources/tools/vendor-evaluation-checklist"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Free AI Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Practical tools to help you plan and implement AI in your business
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
