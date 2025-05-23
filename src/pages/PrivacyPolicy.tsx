
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Privacy Policy | HowAIConnects</title>
        <meta name="description" content="Read about how HowAIConnects collects, uses, and protects your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://howaiconnects.com/privacy-policy" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
            <div className="mt-8 prose prose-blue max-w-none">
              <p>Last Updated: May 16, 2024</p>
              
              <h2>1. Introduction</h2>
              <p>
                At HowAIConnects, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our 
                website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our website, including:</p>
              <ul>
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Business information (company name, job title)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (how you interact with our website)</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures to protect
                your personal data against unauthorized processing, accidental loss, destruction, or damage.
                However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We will retain your personal data only for as long as necessary to fulfill the purposes
                for which we collected it, including for the purposes of satisfying any legal, accounting,
                or reporting requirements.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate or incomplete data</li>
                <li>Right to erasure of your personal data</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2>7. Third-Party Links</h2>
              <p>
                Our website may include links to third-party websites. We are not responsible for
                the privacy practices or content of these third-party sites. We encourage you to
                read the privacy policy of every website you visit.
              </p>
              
              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p>
                <a href="mailto:connect@howaiconnects.com">connect@howaiconnects.com</a>
              </p>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
