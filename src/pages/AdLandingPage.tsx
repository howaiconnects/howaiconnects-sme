
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle,
  Zap,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

const AdLandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please provide your name and email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Here you would normally send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message received!",
        description: "We'll contact you shortly to discuss your automation needs.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Limited Time Offer | AI Business Automation Package | HowAIConnects</title>
        <meta name="description" content="Launch special: Complete automation package for SMEs - save thousands on infrastructure costs, increase efficiency and reduce labor costs with our business automation workflows." />
      </Helmet>

      {/* Hero Section with Limited Time Offer */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <span className="inline-block bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">LAUNCH SPECIAL • LIMITED TIME OFFER</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Business Operations at <span className="line-through">$5,000</span> <span className="text-yellow-300">$997</span></h1>
              <p className="text-xl mb-8">Get enterprise-grade AI automation with zero infrastructure costs for a full year. Our launch package includes everything small businesses need to reduce costs and boost efficiency.</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-lightAccent" />
                  <span>Premium cloud hosting included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-lightAccent" />
                  <span>No technical skills required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-lightAccent" />
                  <span>Implementation support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-lightAccent" />
                  <span>80% savings on infrastructure</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#pricing">
                  <Button className="bg-brand-accent hover:bg-brand-lightAccent text-white font-bold py-3 px-6 rounded-lg text-lg">
                    Claim Your Offer Now
                  </Button>
                </a>
                <a href="#workflows">
                  <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white font-bold py-3 px-6 rounded-lg text-lg">
                    See Automation Workflows
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/30 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Launch Special Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Rocket className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Full year of premium cloud infrastructure ($5000 value)</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>3 custom automation workflows tailored to your business</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Free onboarding for your team (up to 5 members)</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-6 w-6 mr-3 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>ROI assessment to maximize your cost savings</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <div className="text-sm mb-2">Offer expires in:</div>
                  <div className="flex justify-center gap-2">
                    <div className="bg-black/30 rounded p-2 w-16">
                      <div className="text-2xl font-bold">07</div>
                      <div className="text-xs">Days</div>
                    </div>
                    <div className="bg-black/30 rounded p-2 w-16">
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-xs">Hours</div>
                    </div>
                    <div className="bg-black/30 rounded p-2 w-16">
                      <div className="text-2xl font-bold">45</div>
                      <div className="text-xs">Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Workflows Section */}
      <section id="workflows" className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Cost-Saving Automation Workflows</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Select from our library of proven automation workflows designed specifically for small and medium businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workflow 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
              <div className="p-6">
                <div className="bg-brand-primary/10 p-3 inline-flex rounded-lg mb-4">
                  <TrendingUp className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sales Lead Automation</h3>
                <p className="text-gray-600 mb-4">Automatically qualify, score, and route leads to your sales team. Stop losing potential customers with manual processes.</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Typical Results:</div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>25-40% reduction in lead response time</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>15-30% increase in conversion rates</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>Saves 15+ hours/week in manual work</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Perfect for: Sales Teams</span>
                  <span className="bg-brand-primary/10 text-brand-primary text-xs px-2 py-1 rounded-full font-medium">Most Popular</span>
                </div>
              </div>
            </div>

            {/* Workflow 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
              <div className="p-6">
                <div className="bg-brand-secondary/10 p-3 inline-flex rounded-lg mb-4">
                  <DollarSign className="h-8 w-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expense Processing</h3>
                <p className="text-gray-600 mb-4">Automate receipt collection, expense categorization, and approval workflows. Save hours of accounting work each month.</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Typical Results:</div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>80% faster expense processing</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>50% reduction in accounting errors</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>Saves $1,500+/month in labor costs</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Perfect for: Finance Teams</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">High ROI</span>
                </div>
              </div>
            </div>

            {/* Workflow 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
              <div className="p-6">
                <div className="bg-brand-accent/10 p-3 inline-flex rounded-lg mb-4">
                  <Clock className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Support AI</h3>
                <p className="text-gray-600 mb-4">Implement AI-powered customer support that answers questions 24/7, routes complex issues, and follows up automatically.</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Typical Results:</div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>65% reduction in response time</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>Handle 3x more customer inquiries</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-accent" />
                    <span>40% improvement in customer satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Perfect for: Customer Service</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">Time Saver</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">Not seeing what you need? Our package includes custom automation solutions tailored to your specific business needs.</p>
            <a href="#custom-solution">
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10">
                Explore Custom Solutions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ROI & Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">The ROI of Business Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how our clients are achieving massive returns with our automation solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">78%</div>
              <p className="text-gray-700">Average reduction in time spent on repetitive tasks</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-brand-accent mb-2">$3,800</div>
              <p className="text-gray-700">Average monthly labor cost savings per workflow</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-brand-secondary mb-2">412%</div>
              <p className="text-gray-700">Average ROI within the first year</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Why This Launch Offer Is Different</h3>
                <p className="text-gray-700 mb-6">Unlike typical automation services that require expensive infrastructure, our launch package eliminates all those costs for an entire year.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow mr-4 mt-1">
                      <Rocket className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Enterprise-Grade Infrastructure</h4>
                      <p className="text-sm text-gray-600">Premium cloud deployment with unlimited requests and API calls included in your package.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow mr-4 mt-1">
                      <Zap className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Implementation & Training</h4>
                      <p className="text-sm text-gray-600">We handle all the technical setup and train your team to ensure immediate value.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full shadow mr-4 mt-1">
                      <Users className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Customized To Your Business</h4>
                      <p className="text-sm text-gray-600">Our automation experts analyze your specific processes and customize workflows for maximum impact.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-brand-dark">Why Act Now?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Limited Time Offer</div>
                        <div className="text-sm text-gray-600">This launch package is available to only 20 businesses.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <DollarSign className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Infrastructure Savings</div>
                        <div className="text-sm text-gray-600">$5,000 of cloud infrastructure costs covered in your package.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <TrendingUp className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Immediate Competitive Advantage</div>
                        <div className="text-sm text-gray-600">Get ahead of competitors still using manual processes.</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="text-sm font-semibold text-gray-500 mb-3">Regular Price: <span className="line-through">$5,997</span></div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">Launch Price: $997</div>
                      <div className="text-sm text-gray-500 mb-6">(One-time payment • 83% discount)</div>
                      <a href="#pricing">
                        <Button className="bg-brand-primary hover:bg-brand-secondary text-white w-full py-3">
                          Secure Your Automation Package
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">LAUNCH SPECIAL</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Business Automation Launch Package</h2>
              <p className="text-xl text-gray-600">Everything you need to transform your business operations at an unbeatable price.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-8 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Complete Business Automation Package</h3>
                <div className="text-lg opacity-90 mb-4">Limited Time Launch Offer</div>
                <div className="flex items-center justify-center">
                  <span className="text-3xl line-through opacity-50 mr-3">$5,997</span>
                  <span className="text-5xl font-bold">$997</span>
                </div>
                <div className="text-sm mt-2 opacity-90">One-time payment</div>
              </div>
              
              <div className="p-8">
                <h4 className="font-bold text-xl mb-6">What's Included:</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Enterprise-Grade Cloud Infrastructure</span>
                      <p className="text-sm text-gray-600">Full year of premium cloud hosting with unlimited requests ($5,000 value)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">3 Custom Automation Workflows</span>
                      <p className="text-sm text-gray-600">Tailored to your specific business processes ($3,000 value)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Professional Implementation</span>
                      <p className="text-sm text-gray-600">Our experts handle all the technical setup ($1,500 value)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Team Training & Onboarding</span>
                      <p className="text-sm text-gray-600">For up to 5 team members ($997 value)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Business Process Analysis</span>
                      <p className="text-sm text-gray-600">Expert review to identify optimal automation opportunities ($1,200 value)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Complete Resource Library Access</span>
                      <p className="text-sm text-gray-600">All our premium guides, templates, and tools ($499 value)</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total Value:</span>
                    <span className="font-semibold">$12,196</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-brand-primary">
                    <span>Your Price:</span>
                    <span>$997</span>
                  </div>
                  <div className="text-right text-sm text-gray-500">Total Savings: $11,199 (92% off)</div>
                </div>
                
                <Button className="w-full bg-brand-primary hover:bg-brand-secondary text-white text-lg py-4 rounded-lg">
                  Secure Your Automation Package
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  Limited to first 20 businesses • 30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Have Questions? We're Here to Help</h2>
              <p className="text-xl text-gray-600">Fill out the form below and one of our automation experts will contact you within 24 hours.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  We respect your privacy and will never share your information.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdLandingPage;
