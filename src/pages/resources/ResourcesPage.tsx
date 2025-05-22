
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBanner from "@/components/ResourcesBanner";
import ResourcesList from "@/components/ResourcesList";
import { ResourceItem } from "@/types/resources";
import { useToast } from "@/components/ui/use-toast";
import ResourcesFilter from "@/components/ResourcesFilter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Calculator, FileText, CheckSquare, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ResourcesPage = () => {
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [filteredResources, setFilteredResources] = useState<ResourceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // In production, this would fetch from Airtable API
        const response = await fetch("/api/resources");
        const data = await response.json();
        setResources(data);
        setFilteredResources(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching resources:", error);
        toast({
          title: "Error loading resources",
          description: "Please try again later",
          variant: "destructive"
        });
        
        // Fallback to placeholder data for demo purpose
        const placeholderData = getFallbackResources();
        setResources(placeholderData);
        setFilteredResources(placeholderData);
        setIsLoading(false);
      }
    };

    fetchResources();
  }, [toast]);

  const handleFilterChange = (filterType: string) => {
    setActiveFilter(filterType);
    if (filterType === "all") {
      setFilteredResources(resources);
    } else {
      setFilteredResources(resources.filter(resource => resource.type === filterType));
    }
  };

  // Quick access resources for the featured section
  const quickAccessResources = [
    {
      title: "AI Automation Templates",
      description: "Ready-to-use templates for common small business automation needs",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      link: "/resources/automation-templates"
    },
    {
      title: "ROI Calculator",
      description: "Calculate the potential return on investment for AI implementation in your business",
      icon: <Calculator className="h-8 w-8 text-green-500" />,
      link: "/resources/tools/roi-calculator"
    },
    {
      title: "AI Readiness Quiz",
      description: "Find out if your business is ready to implement AI automation solutions",
      icon: <CheckSquare className="h-8 w-8 text-purple-500" />,
      link: "/resources/tools/ai-readiness-quiz"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Free AI Resources for Small Businesses | HowAIConnects</title>
        <meta 
          name="description" 
          content="Access our comprehensive library of free AI resources to help your small business implement and leverage AI technologies effectively." 
        />
        <link rel="canonical" href="https://howaiconnects.com/resources/library" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <ResourcesBanner />
        
        {/* Featured Resources Section */}
        <section className="py-12 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Quick Access Resources
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular tools and templates to get you started with AI implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickAccessResources.map((resource, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200 h-full flex flex-col"
                >
                  <CardHeader>
                    <div className="mb-4">{resource.icon}</div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-0">
                    <Link to={resource.link} className="w-full">
                      <Button 
                        variant="default" 
                        className="w-full bg-brand-primary hover:bg-brand-accent transition-colors"
                      >
                        Access Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/resources/library">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Explore All Educational Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Resource Library Tabs */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Resource Library
            </h2>
            
            <Tabs defaultValue="downloadable" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="downloadable">Downloadable Resources</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="downloadable" className="mt-6">
                <ResourcesFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
                <ResourcesList resources={filteredResources} isLoading={isLoading} />
              </TabsContent>
              
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources
                    .filter(resource => resource.type === 'tool')
                    .map((tool) => (
                      <Card key={tool.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="h-48 w-full overflow-hidden">
                          <img 
                            src={tool.image} 
                            alt={tool.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{tool.title}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="text-sm text-gray-500 flex justify-between">
                            <span>{tool.fileType}</span>
                            <span>{tool.fileSize}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 pb-4">
                          <Link to={tool.downloadUrl} className="w-full">
                            <Button className="w-full flex items-center justify-center">
                              <Download className="mr-2 h-4 w-4" /> Access Tool
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="templates" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources
                    .filter(resource => resource.type === 'template')
                    .map((template) => (
                      <Card key={template.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="h-48 w-full overflow-hidden">
                          <img 
                            src={template.image} 
                            alt={template.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{template.title}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-4">
                          <Link to={template.downloadUrl} className="w-full">
                            <Button className="w-full flex items-center justify-center bg-brand-primary hover:bg-brand-accent">
                              <Download className="mr-2 h-4 w-4" /> Get Template
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="guides" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources
                    .filter(resource => resource.type === 'guide')
                    .map((guide) => (
                      <Card key={guide.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="h-48 w-full overflow-hidden">
                          <img 
                            src={guide.image} 
                            alt={guide.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-4">
                          <Link to={guide.downloadUrl} className="w-full">
                            <Button className="w-full flex items-center justify-center">
                              <Download className="mr-2 h-4 w-4" /> Download Guide
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Temporary function to provide fallback data until Airtable integration is complete
const getFallbackResources = (): ResourceItem[] => [
  {
    id: "1",
    title: "AI Implementation Guide for Small Businesses",
    description: "A step-by-step guide to implementing AI in your small business operations without technical expertise.",
    type: "guide",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    downloadUrl: "/resources/downloads/ai-implementation-guide",
    fileSize: "2.4 MB",
    fileType: "PDF"
  },
  {
    id: "2",
    title: "Customer Service Automation Template",
    description: "Ready-to-use template for setting up an AI-powered customer service automation system.",
    type: "template",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    downloadUrl: "/resources/automation-templates/customer-service-chatbot",
    fileSize: "1.8 MB",
    fileType: "ZIP"
  },
  {
    id: "3",
    title: "AI ROI Calculator",
    description: "Calculate the potential return on investment for AI implementation in your business.",
    type: "tool",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    downloadUrl: "/resources/tools/roi-calculator",
    fileSize: "380 KB",
    fileType: "XLSX"
  },
  {
    id: "4",
    title: "AI Vendor Evaluation Checklist",
    description: "A comprehensive checklist for evaluating AI solution providers before purchasing.",
    type: "checklist",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    downloadUrl: "/resources/downloads/vendor-evaluation-checklist",
    fileSize: "125 KB",
    fileType: "PDF"
  },
  {
    id: "5",
    title: "Email Marketing Automation Workflow",
    description: "An AI-powered email marketing sequence template that personalizes content for each recipient.",
    type: "template",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    downloadUrl: "/resources/automation-templates/email-marketing-sequence",
    fileSize: "1.2 MB",
    fileType: "ZIP"
  },
  {
    id: "6",
    title: "AI Readiness Assessment Tool",
    description: "Evaluate how prepared your business is to implement AI automation technologies.",
    type: "tool",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    downloadUrl: "/resources/tools/ai-readiness-assessment",
    fileSize: "245 KB",
    fileType: "XLSX"
  }
];

export default ResourcesPage;
