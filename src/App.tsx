import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminAuthProvider as SecureAdminAuthProvider } from "@/contexts/SecureAdminAuthContext";

// Layout Components
import PublicLayout from "@/components/layouts/PublicLayout";
import AppLayout from "@/components/layouts/AppLayout";
import AdminLayout from "@/components/layouts/AdminLayout";

// Auth Components
import ProtectedRoute from "@/components/ProtectedRoute";
import RoleBasedRoute from "@/components/auth/RoleBasedRoute";
import PublicRoute from "@/components/auth/PublicRoute";
import AuthLayout from "@/components/auth/AuthLayout";
import AdminProtectedRoute from "@/components/admin/ProtectedRoute";

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import EarlyAccess from "./pages/EarlyAccess";

// Project Pages
import DealStream from "./pages/projects/DealStream";
import OST2PST from "./pages/projects/OST2PST";
import HowAIConnectsPlatform from "./pages/projects/HowAIConnectsPlatform";

// Service Pages
import MarketingAutomation from "./pages/services/ai-automation-solutions/MarketingAutomation";
import WorkflowAutomation from "./pages/services/ai-automation-solutions/WorkflowAutomation";
import CustomerServiceAutomation from "./pages/services/ai-automation-solutions/CustomerServiceAutomation";
import AIReadinessAssessment from "./pages/services/ai-consultation/AIReadinessAssessment";
import AIStrategyDevelopment from "./pages/services/ai-consultation/AIStrategyDevelopment";
import ImplementationSupport from "./pages/services/ai-consultation/ImplementationSupport";

// Resource Pages
import Resources from "./pages/Resources";
import Blog from "./pages/resources/Blog";
import CaseStudiesPage from "./pages/resources/CaseStudiesPage";
import ToolsPage from "./pages/resources/ToolsPage";
import AutomationTemplatesPage from "./pages/resources/AutomationTemplatesPage";
import ResourcesPage from "./pages/resources/ResourcesPage";
import ResourceDownloadPage from "./pages/resources/downloads/ResourceDownloadPage";
import TemplateDetail from "./pages/resources/templates/TemplateDetail";

// Course Pages
import Courses from "./pages/Courses";
import CourseDetail from "./pages/courses/CourseDetail";

// Business Pages
import DoneForYouAIAgency from "./pages/DoneForYouAIAgency";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import PathtoCanadaPage from "./pages/PathtoCanadaPage";
import AIDataGemPage from "./pages/AIDataGemPage";

// Marketing Pages
import AdLandingPage from "./pages/AdLandingPage";
import SalesDeck from "./pages/SalesDeck";
import SalesDeckPresentation from "./pages/SalesDeckPresentation";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Auth Pages
import Auth from "./pages/Auth";
import AuthCallback from "./pages/auth/Callback";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

// App Platform
import AppDashboard from "./pages/app/AppDashboard";

// Automation Dashboard
import AutomationDashboard from "./pages/AutomationDashboard";

// Navigation Dashboard
import NavigationDashboard from "./pages/NavigationDashboard";

// Routing Audit Dashboard  
import RoutingAuditDashboard from "./pages/RoutingAuditDashboard";

// Internal Linking Audit
import InternalLinkingAudit from "./components/InternalLinkingAudit";

// Admin Pages
import SecureAdminLogin from "./pages/admin/SecureAdminLogin";
import EmailIntegration from "./pages/admin/EmailIntegration";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes - All wrapped in PublicLayout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/services" element={<Services />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          
          {/* Project Showcase Pages - Public */}
          <Route path="/projects/dealstream" element={<DealStream />} />
          <Route path="/projects/ost2pst" element={<OST2PST />} />
          <Route path="/projects/howaiconnects-platform" element={<HowAIConnectsPlatform />} />
          
          {/* Service Detail Pages - Public */}
          <Route path="/services/ai-automation-solutions/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/services/ai-automation-solutions/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/ai-automation-solutions/customer-service-automation" element={<CustomerServiceAutomation />} />
          <Route path="/services/ai-consultation/ai-readiness-assessment" element={<AIReadinessAssessment />} />
          <Route path="/services/ai-consultation/ai-strategy-development" element={<AIStrategyDevelopment />} />
          <Route path="/services/ai-consultation/implementation-support" element={<ImplementationSupport />} />
          
          {/* Resources Pages - Public */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/tools" element={<ToolsPage />} />
          <Route path="/resources/templates" element={<AutomationTemplatesPage />} />
          <Route path="/resources/automation-templates" element={<AutomationTemplatesPage />} />
          <Route path="/resources/:category" element={<ResourcesPage />} />
          
          {/* Courses Pages - Public */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          
          {/* Business Division Pages - Public */}
          <Route path="/done-for-you-ai-agency" element={<DoneForYouAIAgency />} />
          <Route path="/web-app-development" element={<WebAppDevelopment />} />
          
          {/* Web App Examples - Public */}
          <Route path="/web-apps/path-to-canada" element={<PathtoCanadaPage />} />
          <Route path="/web-apps/ai-data-gem" element={<AIDataGemPage />} />
          
          {/* Marketing Pages - Public */}
          <Route path="/special-offer" element={<AdLandingPage />} />
          <Route path="/sales-deck" element={<SalesDeck />} />
          <Route path="/sales-presentation" element={<SalesDeckPresentation />} />
          
          {/* Legal Pages - Public */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>

        {/* Auth Routes - Redirect authenticated users */}
        <Route path="/auth" element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        } />
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* App Platform Routes - All web app features under /app/* */}
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/app" element={<AppDashboard />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/automation" element={<AutomationDashboard />} />
          <Route path="/app/navigation" element={<NavigationDashboard />} />
          <Route path="/app/audit" element={<RoutingAuditDashboard />} />
          <Route path="/app/linking-audit" element={<InternalLinkingAudit />} />
          <Route path="/app/resources/downloads/:id" element={<ResourceDownloadPage />} />
          <Route path="/app/resources/templates/:id" element={<TemplateDetail />} />
          
          {/* Legacy redirects for backward compatibility */}
          <Route path="/seo" element={<AppDashboard />} />
          <Route path="/seo/dashboard" element={<Dashboard />} />
          <Route path="/seo/automation" element={<AutomationDashboard />} />
          <Route path="/seo/navigation" element={<NavigationDashboard />} />
          <Route path="/seo/audit" element={<RoutingAuditDashboard />} />
          <Route path="/app/seo" element={<AppDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/automation" element={<AutomationDashboard />} />
          <Route path="/navigation" element={<NavigationDashboard />} />
          <Route path="/audit" element={<RoutingAuditDashboard />} />
        </Route>

        {/* Admin Routes - All use AdminLayout */}
        <Route element={<RoleBasedRoute allowedRoles={['admin']}><AdminLayout /></RoleBasedRoute>}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold">Admin Settings</h2>
              <p className="text-muted-foreground mt-2">Coming soon...</p>
            </div>
          } />
        </Route>

        {/* Legacy Admin Routes - Standalone with secure auth */}
        <Route path="/admin/login" element={
          <SecureAdminAuthProvider>
            <SecureAdminLogin />
          </SecureAdminAuthProvider>
        } />
        <Route path="/admin/secure-login" element={
          <SecureAdminAuthProvider>
            <SecureAdminLogin />
          </SecureAdminAuthProvider>
        } />
        <Route path="/admin/email-integration" element={
          <SecureAdminAuthProvider>
            <AdminProtectedRoute>
              <EmailIntegration />
            </AdminProtectedRoute>
          </SecureAdminAuthProvider>
        } />
        <Route path="/admin/secure/dashboard" element={
          <SecureAdminAuthProvider>
            <AdminProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </AdminProtectedRoute>
          </SecureAdminAuthProvider>
        } />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </AuthProvider>
  );
}

export default App;