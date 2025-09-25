import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSecureForm } from '@/hooks/useSecureForm';
import { 
  Sparkles, 
  Gift, 
  Users, 
  Settings, 
  Crown, 
  Calendar,
  Star,
  CheckCircle2
} from "lucide-react";

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const { submitForm, loading } = useSecureForm({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm('secure-contact-form', {
      ...formData,
      source: 'early_access',
      subject: 'Early Access Interest - HowAIConnects Platform'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto border-brand-accent/20 bg-gradient-to-br from-brand-light/5 to-brand-accent/5">
        <CardContent className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-4">Welcome to the Early Access Program!</h3>
          <p className="text-brand-secondary mb-6">
            Thank you for joining our exclusive early adopters community. We'll be in touch soon with your personalized onboarding session details.
          </p>
          <Badge variant="secondary" className="bg-brand-accent/10 text-brand-accent border-brand-accent/20">
            <Crown className="h-4 w-4 mr-2" />
            Early Adopter Status: Confirmed
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Benefits Section */}
        <Card className="border-brand-accent/20 bg-gradient-to-br from-brand-light/5 to-brand-accent/5">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-brand-dark">Early Adopter Benefits</CardTitle>
                <CardDescription>Exclusive perks for our founding members</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-brand-accent/20 mt-1">
                <Users className="h-4 w-4 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Individual Design Sessions</h4>
                <p className="text-sm text-brand-secondary">
                  One-on-one sessions with our founders to design custom modular components tailored to your specific needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-brand-accent/20 mt-1">
                <Settings className="h-4 w-4 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Custom Feature Development</h4>
                <p className="text-sm text-brand-secondary">
                  Special features and customizations developed exclusively for your use case and business requirements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-brand-accent/20 mt-1">
                <Crown className="h-4 w-4 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Lifetime Grandfathered Pricing</h4>
                <p className="text-sm text-brand-secondary">
                  Lock in special early adopter pricing that will remain with your account forever, regardless of future price changes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-brand-accent/20 mt-1">
                <Calendar className="h-4 w-4 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Priority Support & Updates</h4>
                <p className="text-sm text-brand-secondary">
                  First access to new features, direct line to our development team, and priority technical support.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-accent/10">
              <Badge className="bg-gradient-to-r from-brand-accent to-brand-primary text-white">
                <Star className="h-3 w-3 mr-1" />
                Limited Time Offer
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Form Section */}
        <Card className="border-brand-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-brand-dark">Join Early Access</CardTitle>
                <CardDescription>Be among the first to experience our AI-powered platform</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-brand-primary/20 focus:border-brand-accent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-brand-primary/20 focus:border-brand-accent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-2">
                  Company / Organization
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-brand-primary/20 focus:border-brand-accent"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                  Tell us about your AI needs
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-brand-primary/20 focus:border-brand-accent"
                  placeholder="What AI challenges are you looking to solve? What features would be most valuable to you?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Join Early Access Program
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarlyAccessForm;