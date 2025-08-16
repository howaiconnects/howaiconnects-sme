import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface SecureFormOptions {
  rateLimitKey?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useSecureForm = (options: SecureFormOptions = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (endpoint: string, data: any) => {
    setLoading(true);
    setError(null);

    try {
      // Call secure edge function instead of direct API
      const { data: response, error: functionError } = await supabase.functions.invoke(endpoint, {
        body: data
      });

      if (functionError) {
        throw new Error(functionError.message);
      }

      if (response.error) {
        throw new Error(response.error);
      }

      toast({
        title: "Success",
        description: response.message || "Form submitted successfully",
      });

      options.onSuccess?.();
      
      return { success: true, data: response };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      options.onError?.(errorMessage);
      
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    submitForm,
  };
};