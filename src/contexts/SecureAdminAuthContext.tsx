import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { SecureSession, loginRateLimiter } from '@/utils/security';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  remainingLockoutTime: number;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [remainingLockoutTime, setRemainingLockoutTime] = useState<number>(0);
  
  useEffect(() => {
    // Check if admin is authenticated using secure session
    const sessionValid = SecureSession.isSessionValid();
    const sessionData = SecureSession.getSession();
    
    // Verify it's an admin session
    if (sessionValid && sessionData?.role === 'admin') {
      setIsAuthenticated(true);
    }

    // Update lockout time every second
    const interval = setInterval(() => {
      const userIP = 'admin'; // In a real app, you'd get the actual IP
      const remaining = loginRateLimiter.getRemainingTime(userIP);
      setRemainingLockoutTime(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const userIP = 'admin'; // In a real app, you'd get the actual IP
    
    // Check rate limiting
    if (!loginRateLimiter.isAllowed(userIP)) {
      const remainingTime = Math.ceil(loginRateLimiter.getRemainingTime(userIP) / 1000 / 60);
      return {
        success: false,
        error: `Too many failed attempts. Please try again in ${remainingTime} minutes.`
      };
    }
    
    try {
      // Use Supabase authentication for admin login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        return {
          success: false,
          error: 'Invalid credentials. Please try again.'
        };
      }
      
      if (!data.user) {
        return {
          success: false,
          error: 'Authentication failed. Please try again.'
        };
      }
      
      // Check if user has admin role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();
      
      if (!profile || profile.role !== 'admin') {
        // Sign out the user since they're not an admin
        await supabase.auth.signOut();
        return {
          success: false,
          error: 'Access denied. Admin privileges required.'
        };
      }
      
      // Create secure admin session
      SecureSession.setSession({ 
        role: 'admin', 
        loginTime: Date.now(),
        userId: data.user.id,
        email: data.user.email
      });
      
      setIsAuthenticated(true);
      return { success: true };
      
    } catch (error) {
      console.error('Admin login error:', error);
      return {
        success: false,
        error: 'An error occurred during login. Please try again.'
      };
    }
  };
  
  const logout = async () => {
    try {
      // Clear secure session
      SecureSession.clearSession();
      
      // Sign out from Supabase
      await supabase.auth.signOut();
      
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Admin logout error:', error);
      // Still clear local state even if logout fails
      SecureSession.clearSession();
      setIsAuthenticated(false);
    }
  };
  
  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout, remainingLockoutTime }}>
      {children}
    </AdminAuthContext.Provider>
  );
};