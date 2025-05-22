
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  downloadUrl: string;
  difficulty: string;
}

const AutomationTemplatesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const templates: Template[] = [
    {
      id: "1",
      title: "Customer Service Chatbot",
      description: "Ready-to-use template for setting up an AI-powered customer service automation system.",
      category: "customer-service",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "/resources/automation-templates/customer-service-chatbot",
      difficulty: "Intermediate"
    },
    {
      id: "2",
      title: "Email Marketing Sequence",
      description: "An AI-powered email marketing sequence template that personalizes content for each recipient.",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "/resources/automation-templates/email-marketing-sequence",
      difficulty: "Beginner"
    },
    {
      id: "3",
      title: "Content Calendar Generator",
      description: "Generate content ideas and schedule social media posts with AI assistance.",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "/resources/automation-templates/content-calendar-generator",
      difficulty: "Beginner"
    },
    {
      id: "4",
      title: "Invoice Processing Workflow",
      description: "Automate invoice data extraction and processing with this customizable template.",
      category: "operations",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "/resources/automation-templates/invoice-processing-workflow",
      difficulty: "Advanced"
    },
    {
      id: "5",
      title: "HR Onboarding Process",
      description: "Streamline new employee onboarding with this automated workflow template.",
      category: "operations",
      image: "https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "/resources/automation-templates/hr-onboarding-process",
      difficulty: "Intermediate"
    },
    {
      id: "6",
      title: "Lead Qualification System",
      description: "Automatically score and route leads based on behavior and demographic data.",
      category: "sales",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      downloadUrl: "/resources/automation-templates/lead-qualification-system",
      difficulty: "Advanced"
    }
  ];

  const filteredTemplates = (category: string) => {
    return templates
      .filter(template => category === 'all' || template.category === category)
      .filter(template => 
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        template.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Automation Templates for SMEs | HowAIConnects</title>
        <meta name="description" content="Access ready-to-use AI automation templates designed to quickly implement common workflows for small and medium-sized businesses." />
        <meta name="keywords" content="AI templates, workflow templates, SME automation templates, business process templates" />
        <link rel="canonical" href="https://howaiconnects.com/resources/automation-templates" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "AI Automation Templates for SMEs",
              "description": "Collection of ready-to-use AI automation templates for small and medium-sized businesses",
              "publisher": {
                "@type": "Organization",
                "name": "HowAIConnects"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-brand-primary to-brand-accent py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl animate-fade-in">
                AI Automation Templates
              </h1>
              <p className="mt-4 text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
                Ready-to-use templates to quickly implement AI automation in your business
              </p>
              <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Link to="/resources/library">
                  <Button variant="outline" className="bg-white text-brand-primary hover:bg-gray-100">
                    Browse All Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Templates */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                Browse Templates
              </h2>
              <div className="relative w-full md:w-72">
                <Input
                  type="search"
                  placeholder="Search templates..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <Filter className="h-4 w-4" />
                </div>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Templates</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="customer-service">Customer Service</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
              </TabsList>
              
              {["all", "marketing", "customer-service", "operations", "sales"].map(category => (
                <TabsContent key={category} value={category}>
                  {filteredTemplates(category).length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredTemplates(category).map((template, index) => (
                        <Card 
                          key={template.id} 
                          className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale flex flex-col"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="h-48 relative">
                            <img 
                              src={template.image} 
                              alt={template.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                            />
                            <div className="absolute top-3 right-3 bg-white text-xs font-medium px-2 py-1 rounded-full">
                              {template.difficulty}
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle>{template.title}</CardTitle>
                            <CardDescription>{template.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="mt-auto">
                            <Link to={template.downloadUrl} className="w-full">
                              <Button className="w-full bg-brand-primary hover:bg-brand-accent transition-colors">
                                <Download className="mr-2 h-4 w-4" /> Get Template
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-600">No templates found matching your search criteria.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setSearchQuery("")}
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl font-bold text-gray-900">Need a Custom Template?</h2>
                <p className="mt-2 text-gray-600">
                  Our AI consultants can create a customized automation template tailored to your specific business needs.
                </p>
              </div>
              <Link to="/contact">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-accent transition-colors whitespace-nowrap">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutomationTemplatesPage;
