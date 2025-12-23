import { NextResponse } from 'next/server';

// GET /api/health - Health check endpoint for monitoring
export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Dhanovaa Financial Services',
      version: '1.0.0',
    },
    { status: 200 }
  );
}
