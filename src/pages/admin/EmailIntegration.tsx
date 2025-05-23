
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailSettings from "@/components/admin/EmailSettings";

const EmailIntegration = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Email Integration Settings | HowAIConnects Admin</title>
        <meta name="description" content="Configure email integration settings for your HowAIConnects website." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Email Integration Settings</h1>
            <p className="mt-2 text-lg text-gray-600">
              Configure how contact form submissions are delivered to your inbox
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <EmailSettings />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmailIntegration;
