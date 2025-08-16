
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminAuthProvider as SecureAdminAuthProvider } from "@/contexts/SecureAdminAuthContext";

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

// Auth Pages
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

// SEO AI Platform
import SEODashboard from "./pages/seo/SEODashboard";

// Automation Dashboard
import AutomationDashboard from "./pages/AutomationDashboard";

// Admin Pages
import SecureAdminLogin from "./pages/admin/SecureAdminLogin";
import EmailIntegration from "./pages/admin/EmailIntegration";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes - Available to everyone */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/services" element={<Services />} />
        
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

        {/* Auth Routes - Redirect authenticated users */}
        <Route path="/auth" element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        } />

        {/* Protected User Routes - Require authentication */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AuthLayout>
              <Dashboard />
            </AuthLayout>
          </ProtectedRoute>
        } />

        {/* SEO AI Platform - Require authentication */}
        <Route path="/seo" element={
          <ProtectedRoute>
            <SEODashboard />
          </ProtectedRoute>
        } />
        
        {/* Automation Dashboard - Require authentication */}
        <Route path="/automation" element={
          <ProtectedRoute>
            <AutomationDashboard />
          </ProtectedRoute>
        } />

        {/* Protected Download Routes - Require authentication */}
        <Route path="/resources/downloads/:id" element={
          <ProtectedRoute>
            <AuthLayout>
              <ResourceDownloadPage />
            </AuthLayout>
          </ProtectedRoute>
        } />
        <Route path="/resources/templates/:id" element={
          <ProtectedRoute>
            <AuthLayout>
              <TemplateDetail />
            </AuthLayout>
          </ProtectedRoute>
        } />

        {/* Admin Routes - Require admin role */}
        <Route path="/admin/dashboard" element={
          <RoleBasedRoute allowedRoles={['admin']}>
            <AuthLayout>
              <AdminDashboard />
            </AuthLayout>
          </RoleBasedRoute>
        } />

        {/* Legacy Admin Routes - Redirect to secure login */}
        <Route path="/admin/login" element={
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

        {/* Secure Admin Routes - New secure authentication system */}
        <Route path="/admin/secure-login" element={
          <SecureAdminAuthProvider>
            <SecureAdminLogin />
          </SecureAdminAuthProvider>
        } />
        
        <Route path="/admin/secure/dashboard" element={
          <SecureAdminAuthProvider>
            <AdminProtectedRoute>
              <AuthLayout>
                <AdminDashboard />
              </AuthLayout>
            </AdminProtectedRoute>
          </SecureAdminAuthProvider>
        } />

        {/* New Admin Routes - Using new role-based auth */}
        <Route path="/admin/settings" element={
          <RoleBasedRoute allowedRoles={['admin']}>
            <AuthLayout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold">Admin Settings</h2>
                <p className="text-muted-foreground mt-2">Coming soon...</p>
              </div>
            </AuthLayout>
          </RoleBasedRoute>
        } />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </AuthProvider>
  );
}

export default App;