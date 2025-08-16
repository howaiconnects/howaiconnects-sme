import React, { createContext, useContext, useState, useEffect } from 'react';
import { verifyPassword } from '@/utils/security';
import { SecureSession, loginRateLimiter } from '@/utils/security';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<{ success: boolean; error?: string }>;
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

// Secure authentication configuration
const ADMIN_PASSWORD_HASH = import.meta.env.VITE_ADMIN_PASSWORD_HASH || "$2a$12$K8gJQ4xQK9wQ1Q5Q5Q5Q5uK5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5QO"; // Default hash for "admin123"
const AUTH_KEY = "secure_admin_session";

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [remainingLockoutTime, setRemainingLockoutTime] = useState<number>(0);
  
  useEffect(() => {
    // Check if user is authenticated on mount using secure session
    const sessionValid = SecureSession.isSessionValid();
    setIsAuthenticated(sessionValid);

    // Update lockout time every second
    const interval = setInterval(() => {
      const userIP = 'admin'; // In a real app, you'd get the actual IP
      const remaining = loginRateLimiter.getRemainingTime(userIP);
      setRemainingLockoutTime(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const login = async (password: string): Promise<{ success: boolean; error?: string }> => {
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
      // Verify password against hash
      const isValid = await verifyPassword(password, ADMIN_PASSWORD_HASH);
      
      if (isValid) {
        // Create secure session
        SecureSession.setSession({ role: 'admin', loginTime: Date.now() });
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return {
          success: false,
          error: 'Invalid password. Please try again.'
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'An error occurred during login. Please try again.'
      };
    }
  };
  
  const logout = () => {
    SecureSession.clearSession();
    setIsAuthenticated(false);
  };
  
  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout, remainingLockoutTime }}>
      {children}
    </AdminAuthContext.Provider>
  );
};