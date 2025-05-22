
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBanner from "@/components/ResourcesBanner";
import BlogPosts from "@/components/BlogPosts";
import CaseStudies from "@/components/CaseStudies";
import AITools from "@/components/AITools";
import AutomationTemplates from "@/components/AutomationTemplates";
import { Button } from "@/components/ui/button";
import { FileText, Calculator, CheckSquare, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
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
        <title>AI Resources for Small Businesses | HowAIConnects</title>
        <meta name="description" content="Access free AI resources for SMEs including blog posts, case studies, tools, and automation templates to help your business leverage AI." />
        <meta name="keywords" content="AI resources for SMEs, AI tools, automation templates, AI case studies, AI blog" />
        <link rel="canonical" href="https://howaiconnects.com/resources" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "AI Resources for Small Businesses",
              "description": "Collection of AI resources for small and medium-sized businesses including blog posts, case studies, tools, and templates.",
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
        <ResourcesBanner />
        
        {/* Featured Free Resources Section with animation */}
        <section className="py-12 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900">
                Free AI Resources
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Access our free tools, templates, and guides to help your business implement AI effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickAccessResources.map((resource, index) => (
                <Card 
                  key={index} 
                  className="hover-scale hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 h-full flex flex-col"
                  style={{animationDelay: `${index * 150}ms`}}
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
            <div className="text-center mt-10 animate-fade-in" style={{animationDelay: "450ms"}}>
              <Link to="/resources/library">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center gap-2 hover:bg-brand-primary/10"
                >
                  <BookOpen className="h-5 w-5" />
                  Explore All Educational Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <BlogPosts />
        <CaseStudies />
        <AITools />
        <AutomationTemplates />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
