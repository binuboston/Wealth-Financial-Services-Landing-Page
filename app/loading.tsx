export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9f6] to-white">
      <div className="text-center space-y-4">
        {/* Loading Spinner */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 border-4 border-[#003448]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#68c0ae] rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl text-[#003448]">Loading...</h2>
          <p className="text-sm text-[#003448]/60">Please wait while we prepare your experience</p>
        </div>
      </div>
    </div>
  );
}
