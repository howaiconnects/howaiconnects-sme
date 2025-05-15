
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBanner from "@/components/ResourcesBanner";
import BlogPosts from "@/components/BlogPosts";
import CaseStudies from "@/components/CaseStudies";
import AITools from "@/components/AITools";
import AutomationTemplates from "@/components/AutomationTemplates";

const Resources = () => {
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
