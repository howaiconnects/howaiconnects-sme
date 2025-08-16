
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CoursesBanner = () => {
  return (
    <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Master AI Platform</span>
            <span className="block gradient-text">Development & Integration</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Advanced training programs for developers and innovators building the next generation of AI-powered platforms and orchestration systems.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button variant="accent" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                Explore Platform Training <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesBanner;
