
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const WebAppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web App Development Services | HowAIConnects</title>
        <meta name="description" content="Custom web application development services for small and medium businesses. From concept to launch, we build scalable and user-friendly web applications." />
      </Helmet>

      <Navbar />

      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="bg-brand-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Web App Development Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond AI, we specialize in designing and launching powerful, user-friendly web applications tailored for small and medium industries. Whether you need a custom business tool, a customer-facing portal, or a platform to streamline operations, our team delivers robust and scalable web solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Web Apps */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Web Apps
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              We've helped bring innovative web applications to life, including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">PathtoCanada.ca</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive platform designed to guide individuals through the Canadian immigration process, providing resources, tools, and information to simplify their journey.
                </p>
                <a href="https://pathtocanada.ca" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-medium hover:underline flex items-center">
                  Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">AIDataGem.com</h3>
                <p className="text-gray-600 mb-6">
                  An AI-powered application focused on data analysis and insights, helping businesses unlock the value hidden within their data to make informed decisions.
                </p>
                <a href="https://aidatagem.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-medium hover:underline flex items-center">
                  Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Web App Development Process
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              We follow a collaborative approach, from initial concept and design to development, testing, and launch, ensuring your web app meets your specific needs and exceeds expectations.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding your business needs and defining project scope</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Design</h3>
                <p className="text-gray-600">Creating wireframes and user experience flows</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Development</h3>
                <p className="text-gray-600">Building your app with modern, scalable technologies</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Launch</h3>
                <p className="text-gray-600">Deployment, testing, and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us for Web Apps?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-brand-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-brand-primary">Custom Solutions</h3>
                <p className="text-gray-600">Tailored to your unique business requirements.</p>
              </div>
              
              <div className="bg-brand-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-brand-primary">User-Centric Design</h3>
                <p className="text-gray-600">Intuitive interfaces for optimal user experience.</p>
              </div>
              
              <div className="bg-brand-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-brand-primary">Scalable Architecture</h3>
                <p className="text-gray-600">Built to grow with your business.</p>
              </div>
              
              <div className="bg-brand-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-brand-primary">End-to-End Service</h3>
                <p className="text-gray-600">From idea to launch and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project and see how we can bring your web app idea to life.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WebAppDevelopment;
