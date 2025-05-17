
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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

        {/* Featured Web Apps with enhanced styling */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Web Applications
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Explore our flagship web applications that demonstrate our expertise in building powerful digital solutions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {/* PathtoCanada */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-cyan-400 p-8 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white text-center">PathtoCanada.ca</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg">
                    A comprehensive platform designed to guide individuals through the Canadian immigration process, providing resources, tools, and information to simplify their journey.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Immigration pathway assessment tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Document checklist generators</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Step-by-step application guides</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Community forum for applicants</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://pathtocanada.ca" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center justify-center">
                      Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <Link to="/web-apps/path-to-canada" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* AIDataGem */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500 p-8 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white text-center">AIDataGem.com</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg">
                    An AI-powered application focused on data analysis and insights, helping businesses unlock the value hidden within their data to make informed decisions.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>AI-driven data analysis dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Automated trend identification</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Custom report generation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Data visualization tools</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://aidatagem.com" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors inline-flex items-center justify-center">
                      Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <Link to="/web-apps/ai-data-gem" className="border border-purple-500 text-purple-500 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors inline-flex items-center justify-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
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
