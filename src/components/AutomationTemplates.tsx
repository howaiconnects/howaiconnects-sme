
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AutomationTemplates = () => {
  const templates = [
    {
      title: "Customer Support Chatbot",
      description: "A ready-to-use template for creating a basic customer support chatbot for your website.",
      platform: "For Dialogflow",
      difficulty: "Beginner",
      link: "/resources/automation-templates/customer-support-chatbot"
    },
    {
      title: "Email Marketing Sequence",
      description: "An AI-powered email marketing sequence template that personalizes content for each recipient.",
      platform: "For MailChimp & Make.com",
      difficulty: "Intermediate",
      link: "/resources/automation-templates/email-marketing-sequence"
    },
    {
      title: "Document Processing Workflow",
      description: "Automate the extraction of data from invoices, receipts, and other business documents.",
      platform: "For Make.com & OpenAI",
      difficulty: "Advanced",
      link: "/resources/automation-templates/document-processing-workflow"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Automation Templates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Ready-to-use templates for common small business automation needs
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
                <Button className="w-full flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" /> Access Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationTemplates;
