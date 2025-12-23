'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9f6] to-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto bg-[#d4183d]/10 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-[#d4183d]" />
        </div>
        
        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-2xl text-[#003448]">Something went wrong!</h2>
          <p className="text-sm text-[#003448]/60">
            We apologize for the inconvenience. Please try again.
          </p>
        </div>

        {/* Error Details (in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="p-4 bg-red-50 rounded-lg text-left">
            <p className="text-xs text-red-800 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="bg-[#003448] hover:bg-[#004d6b] text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
