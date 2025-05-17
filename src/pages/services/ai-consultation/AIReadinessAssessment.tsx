
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookAssessment from "@/components/BookAssessment";
import { CheckCircle, ChevronRight } from "lucide-react";

const AIReadinessAssessment = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Readiness Assessment | HowAIConnects</title>
        <meta name="description" content="Evaluate your business processes and identify high-impact opportunities for AI implementation with our expert AI readiness assessment." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="bg-brand-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                AI Readiness Assessment
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Evaluate your business processes and identify the highest-impact opportunities for AI implementation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Assessment Details */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Is Your Business Ready for AI?
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  AI has the potential to revolutionize your business operations, but knowing where to start can be challenging. Our AI Readiness Assessment helps you identify the most valuable opportunities for AI implementation, tailored specifically to your business.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Our Assessment Includes:
                </h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Process Evaluation:</strong> We analyze your existing business processes to identify areas ripe for AI enhancement.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Automation Opportunity Mapping:</strong> We create a visual map of specific opportunities within your business where AI can make the greatest impact.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>ROI Calculation:</strong> We provide realistic projections of the potential return on investment for each AI implementation opportunity.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Implementation Roadmap:</strong> We develop a prioritized roadmap for AI adoption based on impact, complexity, and resource requirements.</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How It Works:
                </h3>
                
                <ol className="space-y-6 mb-8">
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center mr-3">
                      <span className="text-white font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Initial Consultation</h4>
                      <p className="text-gray-600">A 30-minute call to understand your business, challenges, and goals.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center mr-3">
                      <span className="text-white font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">In-Depth Assessment</h4>
                      <p className="text-gray-600">We conduct a thorough analysis of your existing processes and systems.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center mr-3">
                      <span className="text-white font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Presentation of Findings</h4>
                      <p className="text-gray-600">We deliver a comprehensive report with actionable insights and recommendations.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center mr-3">
                      <span className="text-white font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Strategy Discussion</h4>
                      <p className="text-gray-600">We help you prioritize opportunities and create an implementation plan.</p>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Why Start with an Assessment?</h3>
                  <p className="text-blue-700">
                    Without a proper assessment, businesses often waste resources on AI initiatives that don't deliver meaningful results. Our structured approach ensures you focus on high-impact opportunities first, maximizing your return on investment and building momentum for your AI transformation journey.
                  </p>
                </div>
              </div>
              
              <div className="sticky top-24">
                <BookAssessment />
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                What Our Clients Say
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="ml-4">
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-gray-600 text-sm">CEO, Retail Solutions Inc.</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "The AI Readiness Assessment helped us identify multiple opportunities for automation that we hadn't considered. The ROI calculations were spot-on, and we've already implemented two of their recommendations with great results."
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="ml-4">
                      <h4 className="font-bold">Michael Patel</h4>
                      <p className="text-gray-600 text-sm">Operations Director, LogiTech Services</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "The team at HowAIConnects delivered an incredibly detailed assessment that helped us prioritize our AI initiatives. What impressed me most was how they translated technical possibilities into clear business outcomes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIReadinessAssessment;
