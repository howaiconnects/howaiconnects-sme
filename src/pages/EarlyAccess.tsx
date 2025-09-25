import { Helmet } from 'react-helmet-async';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import { Sparkles, Rocket, Users, Crown } from 'lucide-react';

const EarlyAccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brand-light/10 to-background">
      <Helmet>
        <title>Early Access Program | HowAIConnects - Exclusive AI Platform Benefits</title>
        <meta name="description" content="Join HowAIConnects Early Access Program for exclusive benefits including individual design sessions, custom features, lifetime pricing, and priority support. Limited time offer for AI pioneers." />
        <meta name="keywords" content="AI early access, custom AI development, exclusive benefits, AI platform beta, early adopters, grandfathered pricing" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Early Access Program",
              "description": "Exclusive early access to HowAIConnects AI platform with special benefits for founding members",
              "url": "https://howaiconnects.com/early-access",
              "isPartOf": {
                "@type": "WebSite",
                "name": "HowAIConnects",
                "url": "https://howaiconnects.com"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-full border border-brand-accent/20">
            <Crown className="h-5 w-5 text-brand-accent" />
            <span className="text-brand-accent font-semibold">Exclusive Early Access Program</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-brand-dark">Be Among the First to Experience</span>
            <span className="block gradient-text">AI-Designed Applications</span>
          </h1>
          
          <p className="text-xl text-brand-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our exclusive early adopters community and gain access to personalized AI solutions, 
            custom feature development, and lifetime benefits that will be grandfathered for founding members.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">
                <Sparkles className="h-8 w-8 mx-auto mb-2" />
                1-on-1
              </div>
              <p className="text-brand-secondary">Design Sessions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                <Users className="h-8 w-8 mx-auto mb-2" />
                50+
              </div>
              <p className="text-brand-secondary">Early Spots Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">
                <Rocket className="h-8 w-8 mx-auto mb-2" />
                Lifetime
              </div>
              <p className="text-brand-secondary">Grandfathered Benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <EarlyAccessForm />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-light/20 to-brand-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
            Why Join Early Access?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand-dark">Shape the Future</h3>
              <p className="text-brand-secondary">
                Have direct input on platform features and development roadmap. Your feedback will literally shape how our AI applications evolve.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand-dark">Exclusive Access</h3>
              <p className="text-brand-secondary">
                Get early access to cutting-edge AI features months before general release, including beta testing of new modules and capabilities.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand-dark">Custom Solutions</h3>
              <p className="text-brand-secondary">
                Work directly with our founders to design custom modular components specifically for your business needs and use cases.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand-dark">Lifetime Benefits</h3>
              <p className="text-brand-secondary">
                Lock in special pricing and features that will remain with your account forever, regardless of future changes to our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;