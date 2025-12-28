import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, formatContactEmail } from '@/lib/email';

// Type definitions
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Recipient email address
const CONTACT_EMAIL = 'support@dhanovaa.com';

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Email validation regex (compiled once)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact - Handle contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
          },
        }
      );
    }

    // Parse request body with size limit
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize and validate input
    const name = body.name.trim();
    const email = body.email.trim().toLowerCase();
    const message = body.message.trim();

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      );
    }

    // Email validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to support@dhanovaa.com
    try {
      const emailHtml = formatContactEmail({
        name,
        email,
        phone: body.phone?.trim(), // Include phone if provided (for leads)
        message,
      });

      await sendEmail({
        to: CONTACT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
        replyTo: email, // Allow replying directly to the user
      });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will get back to you soon!',
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
    } catch (error) {
      console.error('Error sending contact email:', error);
      
      // In development, still return success if email isn't configured
      // In production, you should configure SMTP or use a service
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json(
          {
            success: true,
            message: 'Thank you for contacting us. We will get back to you soon!',
            note: 'Email not sent (email service not configured in development)',
          },
          { 
            status: 200,
            headers: {
              'Cache-Control': 'no-store',
            },
          }
        );
      }

      // In production, return error if email fails
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { 
          status: 500,
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      );
    }

  } catch (error) {
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}

// GET /api/contact - Not allowed
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { 
      status: 405,
      headers: {
        'Allow': 'POST',
      },
    }
  );
}

// Export route config
export const runtime = 'nodejs';
export const maxDuration = 10; // 10 seconds max
