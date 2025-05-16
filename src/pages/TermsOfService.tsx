
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Terms of Service | HowAIConnects</title>
        <meta name="description" content="HowAIConnects terms and conditions for using our website and services." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://howaiconnects.com/terms-of-service" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Terms of Service</h1>
            <div className="mt-8 prose prose-blue">
              <p>Last Updated: May 16, 2025</p>
              
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the HowAIConnects website and services, you agree to be bound 
                by these Terms of Service. If you disagree with any part of the terms, you may not 
                access our website or use our services.
              </p>

              <h2>Use of Services</h2>
              <p>Coming soon! This page is under development.</p>
              
              {/* More content will be added here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
