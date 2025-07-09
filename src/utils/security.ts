import DOMPurify from 'dompurify';
import bcrypt from 'bcryptjs';

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target'],
    ALLOW_DATA_ATTR: false
  });
};

/**
 * Validates and sanitizes user input
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Remove any potential script tags and dangerous characters
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
};

/**
 * Hashes a password using bcrypt
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Verifies a password against its hash
 */
export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

/**
 * Generates a secure random string for tokens
 */
export const generateSecureToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Rate limiting helper for form submissions
 */
class RateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier);

    if (!userAttempts) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    // Reset if window has expired
    if (now - userAttempts.lastAttempt > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    // Check if under limit
    if (userAttempts.count < this.maxAttempts) {
      userAttempts.count++;
      userAttempts.lastAttempt = now;
      return true;
    }

    return false;
  }

  getRemainingTime(identifier: string): number {
    const userAttempts = this.attempts.get(identifier);
    if (!userAttempts) return 0;
    
    const timeRemaining = this.windowMs - (Date.now() - userAttempts.lastAttempt);
    return Math.max(0, timeRemaining);
  }
}

export const formRateLimiter = new RateLimiter();
export const loginRateLimiter = new RateLimiter(3, 15 * 60 * 1000); // 3 attempts per 15 minutes

/**
 * Encrypts sensitive data for localStorage
 */
export const encryptForStorage = (data: any): string => {
  // Simple encryption for localStorage (not cryptographically secure)
  const jsonString = JSON.stringify(data);
  return btoa(encodeURIComponent(jsonString));
};

/**
 * Decrypts data from localStorage
 */
export const decryptFromStorage = (encryptedData: string): any => {
  try {
    const jsonString = decodeURIComponent(atob(encryptedData));
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to decrypt data from storage:', error);
    return null;
  }
};

/**
 * Secure session management
 */
export class SecureSession {
  private static readonly SESSION_KEY = 'secure_session';
  private static readonly TOKEN_EXPIRY = 8 * 60 * 60 * 1000; // 8 hours

  static setSession(data: any): void {
    const sessionData = {
      data,
      timestamp: Date.now(),
      token: generateSecureToken()
    };
    
    const encrypted = encryptForStorage(sessionData);
    localStorage.setItem(this.SESSION_KEY, encrypted);
  }

  static getSession(): any {
    const encrypted = localStorage.getItem(this.SESSION_KEY);
    if (!encrypted) return null;

    const sessionData = decryptFromStorage(encrypted);
    if (!sessionData) return null;

    // Check if session has expired
    if (Date.now() - sessionData.timestamp > this.TOKEN_EXPIRY) {
      this.clearSession();
      return null;
    }

    return sessionData.data;
  }

  static clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  static isSessionValid(): boolean {
    return this.getSession() !== null;
  }
}