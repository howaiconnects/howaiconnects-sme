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
        {/* Admin Header with Sidebar Trigger */}
        <header className="fixed top-0 left-0 right-0 h-12 flex items-center border-b bg-destructive/5 backdrop-blur supports-[backdrop-filter]:bg-destructive/5 z-50">
          <SidebarTrigger className="ml-2" />
          <div className="flex-1 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-destructive">Admin Panel</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 text-xs bg-destructive/10 text-destructive rounded-full">
                Admin Access
              </span>
              {user && (
                <span className="text-sm text-muted-foreground">
                  {userProfile?.full_name || user.email}
                </span>
              )}
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

export default AdminLayout;