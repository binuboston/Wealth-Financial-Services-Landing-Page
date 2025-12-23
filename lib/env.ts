/**
 * Environment Variables Management
 * Type-safe environment variable access
 */

// Client-side environment variables (NEXT_PUBLIC_*)
export const env = {
  // App Configuration
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'Dhanovaa Financial Services',
  
  // Feature Flags
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableChat: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
  
  // API Configuration
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
} as const;

// Server-side environment variables (only accessible in server components/API routes)
export const serverEnv = {
  nodeEnv: process.env.NODE_ENV,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Add server-only env vars here
  // databaseUrl: process.env.DATABASE_URL,
  // apiKey: process.env.API_KEY,
} as const;

// Validate required environment variables
export function validateEnv() {
  const required = [
    'NEXT_PUBLIC_APP_URL',
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}
