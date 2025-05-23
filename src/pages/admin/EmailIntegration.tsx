
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminNav from "@/components/admin/AdminNav";
import EmailSettings from "@/components/admin/EmailSettings";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, CheckCircle2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { smtpConfig } from "@/config/integrationConfig";

const EmailIntegration = () => {
  const [smtpEnabled, setSmtpEnabled] = useState(true);

  useEffect(() => {
    // Check if SMTP is enabled in localStorage
    const savedSmtpSettings = localStorage.getItem('smtpSettings');
    if (savedSmtpSettings) {
      try {
        const parsedSettings = JSON.parse(savedSmtpSettings);
        setSmtpEnabled(parsedSettings.enabled !== false);
      } catch (error) {
        console.error("Failed to parse saved SMTP settings:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Email Integration Settings | HowAIConnects Admin</title>
        <meta name="description" content="Configure email integration settings for your HowAIConnects website." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-6">
        <AdminNav />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Email Integration Settings</h1>
            <p className="mt-2 text-lg text-gray-600">
              Configure how contact form submissions are delivered to your inbox
            </p>
          </div>
          
          <Alert className={`mb-6 ${smtpEnabled ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
            {smtpEnabled ? (
              <CheckCircle2Icon className="h-4 w-4 text-green-600" />
            ) : (
              <InfoIcon className="h-4 w-4 text-amber-600" />
            )}
            <AlertTitle className={smtpEnabled ? 'text-green-800' : 'text-amber-800'}>
              {smtpEnabled ? 'SMTP configuration active' : 'SMTP configuration disabled'}
            </AlertTitle>
            <AlertDescription className={smtpEnabled ? 'text-green-700' : 'text-amber-700'}>
              {smtpEnabled 
                ? `Your SMTP server (${smtpConfig.host}) is configured and ready to use as a fallback service.`
                : 'SMTP fallback is currently disabled. Enable it below to ensure form submissions are delivered even if primary services fail.'}
            </AlertDescription>
          </Alert>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <EmailSettings />
          </div>
          
          <div className="mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Form Data Collection</h2>
            <p className="text-gray-600 mb-4">
              All form submissions across the HowAIConnects website are configured to:
            </p>
            <ul className="space-y-2 ml-6 list-disc text-gray-600">
              <li>Send notifications to <strong>{smtpConfig.user}</strong> via EmailJS (primary)</li>
              <li>Use SMTP as a fallback if EmailJS fails ({smtpEnabled ? 'Enabled' : 'Disabled'})</li>
              <li>Forward data to Zapier/n8n webhooks if configured</li>
              <li>Store submission data in browser localStorage as an additional backup</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Forms currently capturing data include: Contact Form, Assessment Booking, Consultation Requests,
              and Newsletter Subscriptions.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmailIntegration;
