import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import MarketingAutomation from "./pages/services/ai-automation-solutions/MarketingAutomation";
import WorkflowAutomation from "./pages/services/ai-automation-solutions/WorkflowAutomation";
import CustomerServiceAutomation from "./pages/services/ai-automation-solutions/CustomerServiceAutomation";
import AIReadinessAssessment from "./pages/services/ai-consultation/AIReadinessAssessment";
import AIStrategyDevelopment from "./pages/services/ai-consultation/AIStrategyDevelopment";
import ImplementationSupport from "./pages/services/ai-consultation/ImplementationSupport";
import Resources from "./pages/Resources";
import Blog from "./pages/resources/Blog";
import CaseStudiesPage from "./pages/resources/CaseStudiesPage";
import ToolsPage from "./pages/resources/ToolsPage";
import AutomationTemplatesPage from "./pages/resources/AutomationTemplatesPage";
import ResourcesPage from "./pages/resources/ResourcesPage";
import ResourceDownloadPage from "./pages/resources/downloads/ResourceDownloadPage";
import TemplateDetail from "./pages/resources/templates/TemplateDetail";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/courses/CourseDetail";
import DoneForYouAIAgency from "./pages/DoneForYouAIAgency";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import PathtoCanadaPage from "./pages/PathtoCanadaPage";
import AIDataGemPage from "./pages/AIDataGemPage";
import AdLandingPage from "./pages/AdLandingPage";
import SalesDeck from "./pages/SalesDeck";
import SalesDeckPresentation from "./pages/SalesDeckPresentation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AIStartupServices from "./pages/AIStartupServices";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import EmailIntegration from "./pages/admin/EmailIntegration";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<AIStartupServices />} />
              <Route path="/original" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              
              {/* Service Detail Pages */}
              <Route path="/services/ai-automation-solutions/marketing-automation" element={<MarketingAutomation />} />
              <Route path="/services/ai-automation-solutions/workflow-automation" element={<WorkflowAutomation />} />
              <Route path="/services/ai-automation-solutions/customer-service-automation" element={<CustomerServiceAutomation />} />
              <Route path="/services/ai-consultation/ai-readiness-assessment" element={<AIReadinessAssessment />} />
              <Route path="/services/ai-consultation/ai-strategy-development" element={<AIStrategyDevelopment />} />
              <Route path="/services/ai-consultation/implementation-support" element={<ImplementationSupport />} />
              
              {/* Resources Pages */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
              <Route path="/resources/tools" element={<ToolsPage />} />
              <Route path="/resources/templates" element={<AutomationTemplatesPage />} />
              <Route path="/resources/:category" element={<ResourcesPage />} />
              <Route path="/resources/downloads/:id" element={<ResourceDownloadPage />} />
              <Route path="/resources/templates/:id" element={<TemplateDetail />} />
              
              {/* Courses Pages */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              
              {/* Business Division Pages */}
              <Route path="/done-for-you-ai-agency" element={<DoneForYouAIAgency />} />
              <Route path="/web-app-development" element={<WebAppDevelopment />} />
              
              {/* Web App Examples */}
              <Route path="/web-apps/path-to-canada" element={<PathtoCanadaPage />} />
              <Route path="/web-apps/ai-data-gem" element={<AIDataGemPage />} />
              
              {/* Marketing Pages */}
              <Route path="/special-offer" element={<AdLandingPage />} />
              <Route path="/sales-deck" element={<SalesDeck />} />
              <Route path="/sales-presentation" element={<SalesDeckPresentation />} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              {/* Admin Pages */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/email-integration" element={<EmailIntegration />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Toaster />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
