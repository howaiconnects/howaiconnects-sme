
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Award, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const StartupFundingSection = () => {
  const fundingOptions = [
    {
      title: "AI Accelerator Programs",
      description: "Access to top-tier accelerators like Techstars AI, NVIDIA Inception, and Google for Startups AI programs.",
      icon: <Award className="h-8 w-8 text-brand-accent" />,
      funding: "Up to $250K",
      benefits: ["Mentorship", "Demo Day", "Network Access", "Technical Support"]
    },
    {
      title: "AI Vendor Credits",
      description: "Substantial cloud credits and API access from major AI vendors including OpenAI, Anthropic, Google AI, and AWS.",
      icon: <Handshake className="h-8 w-8 text-brand-accent" />,
      funding: "$100K+ in Credits",
      benefits: ["API Credits", "Cloud Computing", "AI Model Access", "Technical Support"]
    },
    {
      title: "Government AI Grants",
      description: "Access to SBIR grants, state-level AI initiatives, and international AI development funding programs.",
      icon: <DollarSign className="h-8 w-8 text-brand-accent" />,
      funding: "$50K - $1.5M",
      benefits: ["Non-Dilutive", "Research Focused", "Milestone Based", "Government Backing"]
    },
    {
      title: "AI Investor Network",
      description: "Introductions to investors who specifically focus on AI startups and understand the unique needs of AI companies.",
      icon: <TrendingUp className="h-8 w-8 text-brand-accent" />,
      funding: "$100K - $10M+",
      benefits: ["Industry Expertise", "Strategic Value", "Follow-on Rounds", "Board Support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            AI Startup Funding Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We connect you with funding sources specifically designed for AI startups, from accelerators to government grants to specialized investors.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {fundingOptions.map((option, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-accent">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-brand-accent/10 rounded-lg">
                    {option.icon}
                  </div>
                  <span className="text-lg font-bold text-brand-primary">{option.funding}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{option.title}</CardTitle>
                <CardDescription className="text-gray-600">{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {option.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-brand-lightAccent rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our AI Startup Success Record</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've helped numerous AI startups secure funding and launch successfully. Here's our track record:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-brand-primary mb-2">$50M+</h4>
              <p className="text-gray-600">Total Funding Secured</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-brand-primary mb-2">150+</h4>
              <p className="text-gray-600">AI Startups Launched</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-brand-primary mb-2">85%</h4>
              <p className="text-gray-600">Funding Success Rate</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-brand-primary mb-2">30</h4>
              <p className="text-gray-600">Days Average Launch</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-brand-accent hover:bg-brand-lightAccent text-white px-8 py-4">
              Access AI Startup Funding <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartupFundingSection;
