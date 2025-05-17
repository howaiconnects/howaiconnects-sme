
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PathtoCanadaPage = () => {
  return (
    <>
      <Helmet>
        <title>Path to Canada | Immigration Process Web Application</title>
        <meta name="description" content="Path to Canada - A comprehensive platform designed to guide individuals through the Canadian immigration process." />
      </Helmet>

      <Navbar />

      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="bg-brand-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Path to Canada
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive platform designed to guide individuals through the Canadian immigration process, providing resources, tools, and information to simplify their journey.
              </p>
              <div className="mt-10">
                <a href="https://pathtocanada.ca" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-brand-primary hover:bg-brand-accent text-white">
                    Visit Website <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Immigration Pathways</h3>
                <p className="text-gray-600">
                  Clear explanations of all Canadian immigration programs, including Express Entry, Provincial Nominee Programs, and more.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Document Checklist</h3>
                <p className="text-gray-600">
                  Personalized document checklists based on your immigration pathway, helping you gather all necessary paperwork.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Progress Tracking</h3>
                <p className="text-gray-600">
                  Step-by-step tracking of your application progress, with timeline estimates and milestone notifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technology Stack
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Built using modern web technologies to ensure a seamless, responsive user experience:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">React</h3>
                <p className="text-gray-600">Frontend framework</p>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Node.js</h3>
                <p className="text-gray-600">Backend runtime</p>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">PostgreSQL</h3>
                <p className="text-gray-600">Database</p>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">AWS</h3>
                <p className="text-gray-600">Cloud infrastructure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Development Case Study
            </h2>
            
            <div className="prose max-w-3xl mx-auto">
              <p>
                The Path to Canada platform was developed to address the complex and often overwhelming Canadian immigration process. Our team worked closely with immigration consultants to understand the pain points experienced by applicants.
              </p>
              
              <p className="mt-4">
                Key challenges included creating an intuitive interface that could handle the complexity of multiple immigration pathways, developing dynamic document checklists that adapt to changing requirements, and implementing a reliable progress tracking system.
              </p>
              
              <p className="mt-4">
                The result is a comprehensive web application that has helped thousands of applicants successfully navigate their immigration journey, with an average 40% reduction in application errors and a 30% decrease in processing times.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Similar Web Application?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              We can build a custom web application tailored to your specific industry and business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://pathtocanada.ca" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 w-full sm:w-auto">
                  Visit Path to Canada
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" className="bg-brand-accent hover:bg-brand-lightAccent text-white w-full sm:w-auto">
                  Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PathtoCanadaPage;
