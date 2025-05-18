
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AIDataGemPage from "./pages/AIDataGemPage";
import PathtoCanadaPage from "./pages/PathtoCanadaPage";

// New service division pages
import WebAppDevelopment from "./pages/WebAppDevelopment";
import DoneForYouAIAgency from "./pages/DoneForYouAIAgency";
import PathtoCanadaPage from "./pages/PathtoCanadaPage";
import AIDataGemPage from "./pages/AIDataGemPage";

// Service detail pages
import MarketingAutomation from "./pages/services/ai-automation-solutions/MarketingAutomation";
import WorkflowAutomation from "./pages/services/ai-automation-solutions/WorkflowAutomation";
import CustomerServiceAutomation from "./pages/services/ai-automation-solutions/CustomerServiceAutomation";
import AIReadinessAssessment from "./pages/services/ai-consultation/AIReadinessAssessment";
import AIStrategyDevelopment from "./pages/services/ai-consultation/AIStrategyDevelopment";
import ImplementationSupport from "./pages/services/ai-consultation/ImplementationSupport";

// Resource detail pages
import Blog from "./pages/resources/Blog";
import CaseStudiesPage from "./pages/resources/CaseStudiesPage";
import ToolsPage from "./pages/resources/ToolsPage";
import AutomationTemplatesPage from "./pages/resources/AutomationTemplatesPage";

// Legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// New placeholder pages for course content
import CourseDetail from "./pages/courses/CourseDetail";

// New placeholder pages for template content
import TemplateDetail from "./pages/resources/templates/TemplateDetail";

// New placeholder page for resource downloads
import ResourceDownloadPage from "./pages/resources/downloads/ResourceDownloadPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-data-gem" element={<AIDataGemPage />} />
            <Route path="/path-to-canada" element={<PathtoCanadaPage />} />
            
            {/* New service division pages */}
            <Route path="/web-app-development" element={<WebAppDevelopment />} />
            <Route path="/done-for-you-ai-agency" element={<DoneForYouAIAgency />} />
            <Route path="/web-apps/path-to-canada" element={<PathtoCanadaPage />} />
            <Route path="/web-apps/ai-data-gem" element={<AIDataGemPage />} />
            
            {/* Service detail pages */}
            <Route path="/services/ai-automation-solutions/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/services/ai-automation-solutions/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/services/ai-automation-solutions/customer-service-automation" element={<CustomerServiceAutomation />} />
            <Route path="/services/ai-consultation/ai-readiness-assessment" element={<AIReadinessAssessment />} />
            <Route path="/services/ai-consultation/ai-strategy-development" element={<AIStrategyDevelopment />} />
            <Route path="/services/ai-consultation/implementation-support" element={<ImplementationSupport />} />
            
            {/* Resource detail pages */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources/tools" element={<ToolsPage />} />
            <Route path="/resources/automation-templates" element={<AutomationTemplatesPage />} />
            
            {/* Course detail pages */}
            <Route path="/courses/:courseSlug" element={<CourseDetail />} />
            
            {/* Template detail pages */}
            <Route path="/resources/automation-templates/:templateSlug" element={<TemplateDetail />} />
            
            {/* Resource download pages */}
            <Route path="/resources/downloads/:resourceSlug" element={<ResourceDownloadPage />} />
            
            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
