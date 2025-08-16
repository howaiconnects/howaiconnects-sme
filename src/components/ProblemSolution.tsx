
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            AI Orchestration at Scale
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Products designed to anticipate what you'll need tomorrow
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Technology Card */}
          <Card className="border-t-4 border-brand-primary shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Our Technology Stack</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  Built on Next.js, Supabase, and advanced AI orchestration tools. We create web applications, not websites. Our platform delivers bulletproof, production-ready solutions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Innovation Card */}
          <Card className="border-t-4 border-brand-accent shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Voice-Activated AI</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  Our proprietary voice-activated AI systems create almost unlimited deep connections between workflows, anticipating needs before they arise and automating complex business processes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-t-4 border-brand-secondary shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  We're building technology that empowers businesses to achieve unprecedented automation. Our platform connects AI to your workflows, delivering personalized automation at scale.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
