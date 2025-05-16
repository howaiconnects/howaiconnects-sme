
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ImplementationSupport = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Implementation Support for SMEs | HowAIConnects</title>
        <meta name="description" content="Get hands-on guidance throughout your AI implementation journey from our experienced consultants specialized in small business needs." />
        <meta name="keywords" content="AI implementation support, AI integration assistance, SME AI adoption, AI technical support" />
        <link rel="canonical" href="https://howaiconnects.com/services/ai-consultation/implementation-support" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Implementation Support",
              "description": "Technical setup, integration, and training support for AI implementation in small and medium-sized businesses",
              "provider": {
                "@type": "Organization",
                "name": "HowAIConnects"
              },
              "serviceType": "AI Consultation"
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
                AI Implementation Support
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Coming soon! This page is under development.
              </p>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ImplementationSupport;
