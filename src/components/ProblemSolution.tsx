
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why SMEs Need AI Automation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Unlock the potential of AI for your small or medium-sized business
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Problem Card */}
          <Card className="border-t-4 border-red-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">The Problem</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  SMEs struggle to implement AI due to limited resources, technical expertise, and clear roadmaps. Without guidance, the AI landscape can be overwhelming and costly to navigate.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Challenge Card */}
          <Card className="border-t-4 border-yellow-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">The Challenge</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  Without AI automation, your business faces higher operational costs, inefficient processes, and risks falling behind competitors who are already leveraging these technologies.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="border-t-4 border-green-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">The Solution</h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  HowAIConnects provides both done-for-you AI automation services and step-by-step education to empower your business with practical AI solutions without requiring technical expertise.
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
