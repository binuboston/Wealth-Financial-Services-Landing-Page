import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9f6] to-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-[120px] leading-none text-[#003448]/10 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-[#68c0ae]" />
          </div>
        </div>
        
        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-2xl text-[#003448]">Page Not Found</h2>
          <p className="text-sm text-[#003448]/60">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-[#003448] hover:bg-[#004d6b] text-white w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/service-details">
            <Button variant="outline" className="w-full sm:w-auto">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
