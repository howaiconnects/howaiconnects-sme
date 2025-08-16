import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/contexts/AuthContext";
import { Shield } from 'lucide-react';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user, userProfile } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Admin Header - HowAIConnects Branded with Admin Theme */}
        <header className="fixed top-0 left-0 right-0 h-14 flex items-center border-b bg-gradient-to-r from-destructive to-red-700 shadow-md z-50">
          <SidebarTrigger className="ml-3 text-white hover:bg-white/20 transition-colors" />
          <div className="flex-1 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-white" />
              <span className="font-semibold text-white text-lg">HowAIConnects Admin Panel</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs bg-white/20 text-white rounded-full font-medium">
                Admin Access
              </span>
              {user && (
                <div className="text-sm text-white/90 bg-white/10 px-3 py-1 rounded-full">
                  {userProfile?.full_name || user.email}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content - Updated padding for new header height */}
        <main className="flex-1 pt-14 bg-gradient-to-br from-destructive/5 to-red-50/30 min-h-screen">
          <div className="container mx-auto px-4 py-6">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;