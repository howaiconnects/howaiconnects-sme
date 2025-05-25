
import { useState, useCallback } from 'react';
import { ApiResponse } from '@/services/apiService';

interface UseApiRequestState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface UseApiRequestReturn<T> extends UseApiRequestState<T> {
  execute: (...args: any[]) => Promise<ApiResponse<T>>;
  reset: () => void;
}

export function useApiRequest<T = any>(
  apiFunction: (...args: any[]) => Promise<ApiResponse<T>>
): UseApiRequestReturn<T> {
  const [state, setState] = useState<UseApiRequestState<T>>({
    data: null,
    loading: false,
    error: null,
    success: false,
  });

  const execute = useCallback(async (...args: any[]): Promise<ApiResponse<T>> => {
    setState(prev => ({ ...prev, loading: true, error: null, success: false }));

    try {
      const response = await apiFunction(...args);
      
      if (response.success) {
        setState({
          data: response.data || null,
          loading: false,
          error: null,
          success: true,
        });
      } else {
        setState({
          data: null,
          loading: false,
          error: response.error || 'Request failed',
          success: false,
        });
      }

      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setState({
        data: null,
        loading: false,
        error: errorMessage,
        success: false,
      });

      return {
        success: false,
        error: errorMessage,
      };
    }
  }, [apiFunction]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
      success: false,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
