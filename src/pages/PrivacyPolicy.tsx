
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Privacy Policy | HowAIConnects</title>
        <meta name="description" content="Read about how HowAIConnects collects, uses, and protects your personal information." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://howaiconnects.com/privacy-policy" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
            <div className="mt-8 prose prose-blue">
              <p>Last Updated: May 16, 2025</p>
              
              <h2>Introduction</h2>
              <p>
                At HowAIConnects, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our 
                website or use our services.
              </p>

              <h2>Information We Collect</h2>
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

export default PrivacyPolicy;
