
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Calculator, CheckSquare, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  category: string;
  downloadUrl: string;
  fileType: string;
  popular: boolean;
}

const ToolsPage = () => {
  const tools: Tool[] = [
    {
      id: "1",
      title: "AI Readiness Assessment Tool",
      description: "Evaluate how prepared your business is to implement AI automation technologies.",
      icon: <CheckSquare className="h-8 w-8 text-purple-500" />,
      category: "assessment",
      downloadUrl: "/resources/tools/ai-readiness-assessment",
      fileType: "Interactive Spreadsheet",
      popular: true
    },
    {
      id: "2",
      title: "AI ROI Calculator",
      description: "Calculate the potential return on investment for AI implementation in your business.",
      icon: <Calculator className="h-8 w-8 text-green-500" />,
      category: "calculator",
      downloadUrl: "/resources/tools/roi-calculator",
      fileType: "Excel Spreadsheet",
      popular: true
    },
    {
      id: "3",
      title: "AI Vendor Evaluation Checklist",
      description: "A comprehensive checklist for evaluating AI solution providers before purchasing.",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      category: "checklist",
      downloadUrl: "/resources/tools/vendor-evaluation-checklist",
      fileType: "PDF Document",
      popular: false
    },
    {
      id: "4",
      title: "Technology Stack Analyzer",
      description: "Analyze your current technology stack for AI integration compatibility.",
      icon: <CheckSquare className="h-8 w-8 text-orange-500" />,
      category: "assessment",
      downloadUrl: "/resources/tools/tech-stack-analyzer",
      fileType: "Web Tool",
      popular: false
    },
    {
      id: "5",
      title: "AI Implementation Cost Calculator",
      description: "Estimate the total cost of implementing various AI solutions in your business.",
      icon: <Calculator className="h-8 w-8 text-red-500" />,
      category: "calculator",
      downloadUrl: "/resources/tools/implementation-cost-calculator",
      fileType: "Excel Spreadsheet",
      popular: false
    },
    {
      id: "6",
      title: "Data Quality Assessment Tool",
      description: "Assess the quality and readiness of your data for AI implementations.",
      icon: <CheckSquare className="h-8 w-8 text-teal-500" />,
      category: "assessment",
      downloadUrl: "/resources/tools/data-quality-assessment",
      fileType: "Interactive Tool",
      popular: false
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Free AI Assessment & Calculator Tools | HowAIConnects</title>
        <meta name="description" content="Access free tools to evaluate AI readiness, calculate ROI, and assess vendors for your small business AI implementation." />
        <meta name="keywords" content="AI assessment tools, ROI calculator, AI readiness, vendor evaluation" />
        <link rel="canonical" href="https://howaiconnects.com/resources/tools" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "AI Tools for Small Businesses",
              "description": "Collection of free AI assessment and calculator tools for small businesses",
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
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl animate-fade-in">
                Free AI Tools & Calculators
              </h1>
              <p className="mt-4 text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
                Practical tools to help you plan and implement AI in your business
              </p>
              <div className="mt-8 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Link to="/resources/library">
                  <Button variant="outline" className="bg-white text-indigo-700 hover:bg-gray-100">
                    Browse All Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Tools
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Download these free tools to help you make informed decisions about AI implementation
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['all', 'assessment', 'calculator', 'checklist'].map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={
                    activeCategory === category
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "hover:bg-indigo-50"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <Card
                  key={tool.id}
                  className="shadow-lg hover:shadow-xl transition-all duration-300 hover-scale flex flex-col relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tool.popular && (
                    <div className="absolute -top-1 -right-1 z-10">
                      <Badge className="bg-green-500 hover:bg-green-600">Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="mb-4">{tool.icon}</div>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500">{tool.fileType}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={tool.downloadUrl} className="w-full">
                      <Button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4" /> Download Tool
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900">Need Guidance Using Our Tools?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our AI consultants can walk you through using these tools effectively and help interpret the results for your specific business context.
                </p>
                <div className="mt-8">
                  <Link to="/services/ai-consultation/ai-readiness-assessment">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 transition-colors">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
