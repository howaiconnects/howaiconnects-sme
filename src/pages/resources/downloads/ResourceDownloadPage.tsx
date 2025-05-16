
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Mail } from "lucide-react";

const ResourceDownloadPage = () => {
  const { resourceSlug } = useParams();
  
  // This would be replaced with actual data fetching based on the resourceSlug
  const resourceData = {
    title: resourceSlug === "resource-pack" ? 
      "AI for SMEs Resource Pack" : 
      resourceSlug?.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    description: "A comprehensive collection of resources to help small businesses implement and leverage AI technologies.",
    format: "PDF Bundle",
    size: "12.4 MB",
    status: "Coming Soon"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{resourceData.title} | HowAIConnects</title>
        <meta name="description" content={`Download our ${resourceData.title} to access valuable AI implementation resources for small businesses.`} />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{resourceData.title}</h1>
            
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Resource Overview</h2>
                  <p className="text-gray-600 mb-6">{resourceData.description}</p>
                  
                  <div className="bg-brand-primary/5 p-4 rounded-md">
                    <p className="text-gray-700">This resource is currently under development. Please join our waitlist to be notified when it's available for download.</p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Resource Details</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Format:</span>
                      <span className="font-medium">{resourceData.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium">{resourceData.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="font-medium">{resourceData.status}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <Button className="w-full flex items-center justify-center">
                      <FileText className="mr-2 h-4 w-4" /> Join Download Waitlist
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <Mail className="mr-2 h-4 w-4" /> Subscribe to Updates
                    </Button>
                  </div>
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

export default ResourceDownloadPage;
