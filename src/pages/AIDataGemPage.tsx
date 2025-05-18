<<<<<<< HEAD
import React from 'react';

const AIDataGemPage: React.FC = () => {
  return (
    <div>
      <h1>AI Data Gem</h1>
      <p>This is the placeholder page for AI Data Gem.</p>
    </div>
  );
};

export default AIDataGemPage;
=======

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AIDataGemPage = () => {
  return (
    <>
      <Helmet>
        <title>AIDataGem | AI-Powered Data Analysis Platform</title>
        <meta name="description" content="AIDataGem - An AI-powered application focused on data analysis and insights, helping businesses unlock the value hidden within their data." />
      </Helmet>

      <Navbar />

      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="bg-brand-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/c50cf4b9-a887-4b83-a417-1906d3a084a3.png" 
                  alt="AI Data Gem Logo" 
                  className="h-32 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                AIDataGem
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                An AI-powered application focused on data analysis and insights, helping businesses unlock the value hidden within their data to make informed decisions.
              </p>
              <div className="mt-10">
                <a href="https://aidatagem.com" target="_blank" rel="noopener noreferrer">
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
                <h3 className="text-xl font-bold text-brand-primary mb-4">Advanced Data Analytics</h3>
                <p className="text-gray-600">
                  Powerful AI algorithms that analyze complex datasets and identify patterns, trends, and anomalies.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Predictive Insights</h3>
                <p className="text-gray-600">
                  Machine learning models that forecast future trends and outcomes based on historical data.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Visual Dashboards</h3>
                <p className="text-gray-600">
                  Interactive, customizable dashboards that present complex data in clear, actionable visualizations.
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
              Built with cutting-edge technologies for powerful data processing and analysis:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">TensorFlow</h3>
                <p className="text-gray-600">Machine learning framework</p>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Python</h3>
                <p className="text-gray-600">Backend processing</p>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">React</h3>
                <p className="text-gray-600">Frontend framework</p>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">GraphQL</h3>
                <p className="text-gray-600">API architecture</p>
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
                AIDataGem was developed to address the growing challenge businesses face in extracting meaningful insights from increasingly large and complex datasets.
              </p>
              
              <p className="mt-4">
                Our development team tackled significant technical challenges, including implementing sophisticated machine learning algorithms capable of processing diverse data types, creating an intuitive user interface that makes complex analytics accessible to non-technical users, and ensuring the platform's scalability to handle datasets of any size.
              </p>
              
              <p className="mt-4">
                The platform has been successfully adopted by businesses across various industries, with clients reporting an average 25% improvement in decision-making accuracy and a 30% reduction in data analysis time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Data Solution?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              We can build an AI-powered data analysis platform tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://aidatagem.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 w-full sm:w-auto">
                  Visit AIDataGem
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

export default AIDataGemPage;
>>>>>>> 4cc45a42ef6811ea6f52f8c4d444c2588af3c886
