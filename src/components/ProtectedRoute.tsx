import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresRole?: string[];
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiresRole,
  redirectTo = '/dashboard'
}) => {
  const { user, userProfile, loading } = useAuth();

  // Debug logging for authentication issues
  console.log('ProtectedRoute Debug:', {
    loading,
    user: user ? { id: user.id, email: user.email } : null,
    userProfile,
    currentPath: window.location.pathname
  });

  if (loading) {
    console.log('ProtectedRoute: Still loading authentication state');
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    console.log('ProtectedRoute: No user found, redirecting to /auth');
    return <Navigate to="/auth" replace />;
  }

  // Check role-based access if roles are specified
  if (requiresRole && requiresRole.length > 0) {
    const userRole = userProfile?.role || 'user';
    if (!requiresRole.includes(userRole)) {
      return <Navigate to={redirectTo} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;