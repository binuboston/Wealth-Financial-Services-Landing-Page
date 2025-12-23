// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navigationConfig: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
] as const;

