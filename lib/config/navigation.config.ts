// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navigationConfig: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Service Details', href: '/service-details' },
  { label: 'Gallery', href: '/gallery' },
] as const;

