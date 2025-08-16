/**
 * Configuration Loader
 * Handles loading sensitive configuration from Supabase secrets
 */

import { supabase } from '@/integrations/supabase/client';

// Cache for loaded secrets
const secretsCache = new Map<string, string>();

/**
 * Load a secret from Supabase vault
 */
export async function loadSecret(secretName: string): Promise<string> {
  // Check cache first
  if (secretsCache.has(secretName)) {
    return secretsCache.get(secretName)!;
  }

  try {
    // In a real implementation, you would call a Supabase function
    // that safely retrieves secrets from the vault
    const { data, error } = await supabase.functions.invoke('get-secret', {
      body: { secretName }
    });

    if (error) {
      console.warn(`Failed to load secret ${secretName}:`, error);
      return '';
    }

    const secretValue = data?.value || '';
    secretsCache.set(secretName, secretValue);
    return secretValue;
  } catch (error) {
    console.warn(`Error loading secret ${secretName}:`, error);
    return '';
  }
}

/**
 * Initialize configuration with secrets
 */
export async function initializeConfig() {
  try {
    // Load all required secrets
    const secrets = await Promise.allSettled([
      loadSecret('LATITUDE_API_KEY'),
      loadSecret('AZURE_AI_ENDPOINT'),
      loadSecret('AZURE_AI_KEY'),
      loadSecret('AIRTABLE_API_KEY'),
      loadSecret('AIRTABLE_BASE_ID'),
      loadSecret('ZAPIER_API_KEY')
    ]);

    // Update configurations with loaded secrets
    const [latitudeKey, azureEndpoint, azureKey, airtableKey, airtableBase, zapierKey] = secrets.map(
      result => result.status === 'fulfilled' ? result.value : ''
    );

    return {
      latitude: {
        apiKey: latitudeKey,
        projectId: await loadSecret('LATITUDE_PROJECT_ID')
      },
      azure: {
        endpoint: azureEndpoint,
        apiKey: azureKey
      },
      airtable: {
        apiKey: airtableKey,
        baseId: airtableBase
      },
      zapier: {
        apiKey: zapierKey
      }
    };
  } catch (error) {
    console.error('Failed to initialize configuration:', error);
    return null;
  }
}

/**
 * Get configuration value with fallback
 */
export function getConfigValue(key: string, defaultValue: string = ''): string {
  return secretsCache.get(key) || defaultValue;
}

/**
 * Check if all required secrets are loaded
 */
export function isConfigurationReady(): boolean {
  const requiredSecrets = ['LATITUDE_API_KEY', 'AZURE_AI_KEY', 'AIRTABLE_API_KEY'];
  return requiredSecrets.every(secret => secretsCache.has(secret));
}

export default {
  loadSecret,
  initializeConfig,
  getConfigValue,
  isConfigurationReady
};