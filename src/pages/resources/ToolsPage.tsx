
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Tools for Small Businesses | HowAIConnects</title>
        <meta name="description" content="Discover practical AI tools and software solutions designed specifically for small and medium-sized business needs." />
        <meta name="keywords" content="AI tools for SMEs, small business AI software, AI solutions, business automation tools" />
        <link rel="canonical" href="https://howaiconnects.com/resources/tools" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "AI Tools for Small Businesses",
              "description": "Collection of AI tools and software solutions for small and medium-sized businesses",
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
        {/* Page content will go here */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                AI Tools for Small Businesses
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Coming soon! This page is under development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
