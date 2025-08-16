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
        {/* Global Header with Sidebar Trigger */}
        <header className="fixed top-0 left-0 right-0 h-12 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <SidebarTrigger className="ml-2" />
          <div className="flex-1 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/37aaff7e-a1cb-4b50-b3a6-29614da5fd71.png" 
                alt="HowAIConnects Logo" 
                className="h-6 w-auto" 
              />
              <span className="font-semibold text-brand-primary">HowAIConnects</span>
            </div>
            <div className="flex items-center gap-2">
              {user && (
                <span className="text-sm text-muted-foreground">{user.email}</span>
              )}
              <UserNav />
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 pt-12 bg-background">
          <div className="container mx-auto px-4 py-6">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;