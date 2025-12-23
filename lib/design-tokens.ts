// Design Token System for Scalability
export const designTokens = {
  colors: {
    brand: {
      primary: '#003448',
      secondary: '#68c0ae',
      accent: '#9ece6c',
      primaryDark: '#004d6b',
      secondaryLight: '#8dd4c0',
      accentLight: '#b3e698',
    },
    semantic: {
      background: '#ffffff',
      muted: '#f0f9f6',
      border: 'rgba(0, 52, 72, 0.1)',
      error: '#d4183d',
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 52, 72, 0.05)',
    md: '0 4px 6px -1px rgba(0, 52, 72, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 52, 72, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 52, 72, 0.1)',
  },
  
  typography: {
    fontFamily: "'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  transitions: {
    fast: '150ms',
    base: '250ms',
    slow: '350ms',
  },
  
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
  },
} as const;

// Type-safe color helper
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = designTokens.colors;
  
  for (const key of keys) {
    value = value[key];
    if (!value) return undefined;
  }
  
  return value as string;
};

// Opacity utilities
export const withOpacity = (color: string, opacity: number) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

export type DesignTokens = typeof designTokens;
