
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const DoneForYouAIAgency = () => {
  return (
    <>
      <Helmet>
        <title>Done-for-You AI Agency Building | HowAIConnects</title>
        <meta name="description" content="Launch your own AI agency without any upfront costs. Our done-for-you service provides a complete, turnkey solution for starting your AI business." />
      </Helmet>

      <main className="py-8">
        {/* Hero Section */}
        <section className="bg-brand-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Done-for-You AI Agency Building
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Dreaming of running your own AI agency but unsure where to start or concerned about initial investment? Our Done-for-You AI Agency Building service provides you with a complete, turnkey solution, allowing you to launch your agency without any upfront cost.
              </p>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Unique Business Model: No Cost to You
            </h2>
            
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/5 rounded-2xl p-8 mb-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  We understand that starting a new venture can be financially challenging. That's why our model is designed to eliminate the initial investment burden for our customers. Instead of charging you for our setup and building services, we leverage our network and expertise to negotiate pre-arranged deals with leading AI vendors and service providers.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  When you utilize the solutions and tools we integrate into your turnkey agency setup through these pre-negotiated deals, we receive a commission directly from the vendors. This affiliate commission structure means <strong>you pay nothing extra</strong> for the services or tools you use; the cost is covered by the vendor as part of our partnership agreement. This allows us to build and deliver a fully functional AI agency foundation for you at absolutely no direct cost to your business.
                </p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Partnership</h3>
                <p className="text-gray-600">We partner with top AI vendors and service providers</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Setup</h3>
                <p className="text-gray-600">We build your AI agency with these pre-negotiated tools</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Commission</h3>
                <p className="text-gray-600">We earn commission from vendors, not from you</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What You Get: A Turnkey Solution
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Our Done-for-You service provides you with a ready-to-operate AI agency framework, including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Initial Setup and Configuration</h3>
                  <p className="text-gray-600">We handle the technical setup of essential tools and platforms needed to run an AI agency.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Vendor Integrations</h3>
                  <p className="text-gray-600">Integration with key AI service providers through our affiliate partnerships.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Business Guidance</h3>
                  <p className="text-gray-600">Guidance on initial service offerings and operational best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Revenue-Ready Foundation</h3>
                  <p className="text-gray-600">A foundation built for you to start acquiring clients and generating revenue immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Launch Your AI Agency with Zero Upfront Cost
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact us to learn how our Done-for-You service can make your entrepreneurial vision a reality.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default DoneForYouAIAgency;
