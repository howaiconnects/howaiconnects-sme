import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { userProfile } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">HowAIConnects Platform</h1>
            {userProfile?.role === 'admin' && (
              <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                Admin
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Welcome, {userProfile?.full_name || userProfile?.email}
            </span>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default AuthLayout;