interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'light' | 'default';
}

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  const logoSrc = '/logo/logo.svg';
  const altText = 'Dhanovaa Financial Services';
  
  // For light variant (used in footer on dark backgrounds) - invert colors
  const isLightVariant = variant === 'light';
  
  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={logoSrc}
        alt={altText}
        style={{ maxWidth: '160px', height: 'auto' }}
      />
    </div>
  );
}
