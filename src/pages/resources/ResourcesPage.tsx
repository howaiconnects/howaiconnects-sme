
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBanner from "@/components/ResourcesBanner";
import ResourcesList from "@/components/ResourcesList";
import { ResourceItem } from "@/types/resources";
import { useToast } from "@/components/ui/use-toast";
import ResourcesFilter from "@/components/ResourcesFilter";

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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Free AI Resources for Small Businesses | HowAIConnects</title>
        <meta 
          name="description" 
          content="Access our comprehensive library of free AI resources to help your small business implement and leverage AI technologies effectively." 
        />
        <link rel="canonical" href="https://howaiconnects.com/resources" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <ResourcesBanner />
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Free Resource Library
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse our collection of guides, templates, and tools designed to help small businesses 
              implement AI solutions effectively.
            </p>
            
            <ResourcesFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            <ResourcesList resources={filteredResources} isLoading={isLoading} />
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
