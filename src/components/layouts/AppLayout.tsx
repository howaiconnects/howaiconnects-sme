import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/contexts/AuthContext";
import UserNav from '@/components/UserNav';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* App Platform Header - HowAIConnects Branded */}
        <header className="fixed top-0 left-0 right-0 h-14 flex items-center border-b bg-gradient-to-r from-primary to-secondary shadow-md z-50">
          <SidebarTrigger className="ml-3 text-white hover:bg-white/20 transition-colors" />
          <div className="flex-1 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png" 
                alt="HowAIConnects Logo" 
                className="h-7 w-auto" 
              />
              <span className="font-semibold text-white text-lg">HowAIConnects SEO Platform</span>
            </div>
            <div className="flex items-center gap-3">
              {user && (
                <div className="text-sm text-white/90 bg-white/10 px-3 py-1 rounded-full">
                  {user.email}
                </div>
              )}
              <UserNav />
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content - Updated padding for new header height */}
        <main className="flex-1 pt-14 bg-gradient-to-br from-background to-muted min-h-screen">
          <div className="container mx-auto px-4 py-6">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;