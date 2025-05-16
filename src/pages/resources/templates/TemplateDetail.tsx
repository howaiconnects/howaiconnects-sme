
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const TemplateDetail = () => {
  const { templateSlug } = useParams();
  
  // This would be replaced with actual data fetching based on the templateSlug
  const templateData = {
    title: templateSlug?.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    description: "This automation template is designed to help small businesses streamline their operations.",
    platform: "Make.com, Dialogflow, or other relevant platforms",
    difficulty: templateSlug?.includes("chatbot") ? "Beginner" : 
               templateSlug?.includes("email") ? "Intermediate" : "Advanced",
    status: "Coming Soon"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{templateData.title} | HowAIConnects</title>
        <meta name="description" content={`Access our ${templateData.title} template to streamline your small business operations with AI automation.`} />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{templateData.title}</h1>
            
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Template Overview</h2>
                  <p className="text-gray-600 mb-6">{templateData.description}</p>
                  
                  <div className="bg-brand-primary/5 p-4 rounded-md">
                    <p className="text-gray-700">This template is currently under development. Please check back later for full details and download options.</p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Template Details</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Platform:</span>
                      <span className="font-medium">{templateData.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Difficulty:</span>
                      <span className={`font-medium ${
                        templateData.difficulty === "Beginner" ? "text-green-600" :
                        templateData.difficulty === "Intermediate" ? "text-amber-600" :
                        "text-red-600"
                      }`}>
                        {templateData.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="font-medium">{templateData.status}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" /> Join Waitlist
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateDetail;
