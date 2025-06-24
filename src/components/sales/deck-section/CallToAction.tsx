
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  linkTo: string;
  linkText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ linkTo, linkText }) => {
  return (
    <>
      <Link to={linkTo} className="print:hidden">
        <Button 
          className="bg-brand-primary hover:bg-brand-secondary transition-colors hover:scale-105 transform duration-200 group"
          size="lg"
        >
          {linkText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      
      {/* Static text for print version */}
      <div className="hidden print:block text-brand-primary font-bold">
        {linkText}
      </div>
    </>
  );
};

export default CallToAction;
