
import { Button } from "@/components/ui/button";
import { FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesBanner = () => {
  return (
    <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">AI Resources for</span>
            <span className="block gradient-text">Small Business Success</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Free guides, case studies, tools, and templates to help your business leverage AI 
            technologies effectively.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center sm:gap-4 md:mt-8">
            <div className="rounded-md shadow mb-4 sm:mb-0">
              <Link to="/resources/downloads/resource-pack">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-lightAccent md:py-4 md:text-lg md:px-10">
                  Download Resource Pack <FileText className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="rounded-md shadow">
              <Link to="/resources/library">
                <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  Browse Resource Library <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBanner;
