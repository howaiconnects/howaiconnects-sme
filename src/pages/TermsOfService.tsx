
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Terms of Service | HowAIConnects</title>
        <meta name="description" content="HowAIConnects terms and conditions for using our website and services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://howaiconnects.com/terms-of-service" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Terms of Service</h1>
            <div className="mt-8 prose prose-blue max-w-none">
              <p>Last Updated: May 16, 2024</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the HowAIConnects website and services, you agree to be bound 
                by these Terms of Service. If you disagree with any part of the terms, you may not 
                access our website or use our services.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                Our services are intended for business use. You agree not to use our services for any illegal
                purposes or in violation of any applicable local, state, national, or international law.
              </p>
              
              <h2>3. Intellectual Property</h2>
              <p>
                The content, features, and functionality of our services, including text, graphics, logos,
                icons, images, and software, are the property of HowAIConnects or its licensors and are
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2>4. User Accounts</h2>
              <p>
                When you create an account with us, you guarantee that the information you provide is accurate,
                complete, and current at all times. You are responsible for maintaining the confidentiality of
                your account and password. You agree to accept responsibility for any and all activities that
                occur under your account.
              </p>
              
              <h2>5. Content and Data</h2>
              <p>
                You retain all rights to any content or data you submit through our services. By submitting content
                or data, you grant HowAIConnects a worldwide, non-exclusive, royalty-free license to use, reproduce,
                modify, and display the content in connection with providing our services to you.
              </p>
              
              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall HowAIConnects, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
                inability to access or use the service.
              </p>
              
              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any changes by
                posting the new Terms of Service on this page. Changes are effective immediately upon posting.
                Your continued use of our services constitutes your acceptance of such changes.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p><a href="mailto:connect@howaiconnects.com">connect@howaiconnects.com</a></p>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
