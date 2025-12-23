import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// POST /api/contact - Handle contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Implement your email service here
    // Examples:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Nodemailer
    
    console.log('Contact form submission:', body);

    // For now, return success
    // In production, integrate with your email service
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will get back to you soon!',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/contact - Not allowed
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
