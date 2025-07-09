import { encryptForStorage, decryptFromStorage } from './security';

/**
 * Secure localStorage wrapper with encryption and expiration
 */
export class SecureStorage {
  private static readonly MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Store data securely with optional expiration
   */
  static setItem(key: string, value: any, maxAge: number = this.MAX_AGE): void {
    const data = {
      value,
      timestamp: Date.now(),
      maxAge
    };

    const encrypted = encryptForStorage(data);
    localStorage.setItem(key, encrypted);
  }

  /**
   * Retrieve and decrypt data if not expired
   */
  static getItem(key: string): any {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;

    const data = decryptFromStorage(encrypted);
    if (!data) return null;

    // Check if data has expired
    if (Date.now() - data.timestamp > data.maxAge) {
      this.removeItem(key);
      return null;
    }

    return data.value;
  }

  /**
   * Remove item from storage
   */
  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear all expired items
   */
  static clearExpired(): void {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return;

      const data = decryptFromStorage(encrypted);
      if (data && Date.now() - data.timestamp > data.maxAge) {
        localStorage.removeItem(key);
      }
    });
  }

  /**
   * Store form submission data securely
   */
  static storeFormSubmission(formType: string, data: any): void {
    const key = `form_${formType}_${Date.now()}`;
    this.setItem(key, {
      type: formType,
      data,
      submitted: true
    }, 7 * 24 * 60 * 60 * 1000); // Keep for 7 days
  }
}

// Clean up expired items on load
if (typeof window !== 'undefined') {
  SecureStorage.clearExpired();
}