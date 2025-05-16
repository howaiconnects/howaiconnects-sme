
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const WorkflowAutomation = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Workflow Automation for SMEs | HowAIConnects</title>
        <meta name="description" content="Optimize your business operations with AI-powered workflow automation solutions designed for small and medium-sized businesses." />
        <meta name="keywords" content="workflow automation, business process automation, AI workflow, SME automation" />
        <link rel="canonical" href="https://howaiconnects.com/services/ai-automation-solutions/workflow-automation" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Workflow Automation",
              "description": "AI-powered workflow and business process automation for small and medium-sized businesses",
              "provider": {
                "@type": "Organization",
                "name": "HowAIConnects"
              },
              "serviceType": "Workflow Automation"
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
                AI Workflow Automation
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

export default WorkflowAutomation;
