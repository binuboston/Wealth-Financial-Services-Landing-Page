import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

// Create transporter based on environment variables
// Optimized for Vercel serverless functions
const getTransporter = (): Transporter | null => {
  // Check for required environment variables
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    // Log which variables are missing (for debugging in Vercel)
    const missing = [];
    if (!smtpHost) missing.push('SMTP_HOST');
    if (!smtpUser) missing.push('SMTP_USER');
    if (!smtpPass) missing.push('SMTP_PASS');
    
    console.error(`[Email] Missing environment variables: ${missing.join(', ')}`);
    return null;
  }

  // Create transporter with Vercel-optimized settings
  // Build transport options object
  const transportConfig: Record<string, unknown> = {
    host: smtpHost,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    // Optimized for serverless (Vercel)
    pool: false, // Disable connection pooling for serverless
    maxConnections: 1, // Single connection per function
    maxMessages: 1, // Send one message per connection
    // Connection timeout settings for serverless
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
  };

  // Add Gmail-specific TLS settings if using Gmail
  if (smtpHost.includes('gmail.com')) {
    transportConfig.tls = {
      rejectUnauthorized: false, // Gmail sometimes has certificate issues
    };
  }

  // Use type assertion to satisfy nodemailer's createTransport signature
  return nodemailer.createTransport(transportConfig as Parameters<typeof nodemailer.createTransport>[0]);
};

export async function sendEmail({ to, subject, html, replyTo }: SendEmailParams) {
  const transporter = getTransporter();

  // If no transporter (email not configured)
  if (!transporter) {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const isVercel = process.env.VERCEL === '1';
    
    // Check which variables are missing for better error reporting
    const missing = [];
    if (!process.env.SMTP_HOST) missing.push('SMTP_HOST');
    if (!process.env.SMTP_USER) missing.push('SMTP_USER');
    if (!process.env.SMTP_PASS) missing.push('SMTP_PASS');
    
    if (isDevelopment) {
      console.log('📧 Email not configured. Would send email:');
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('HTML:', html);
      console.log('\n---\n');
      console.log('To configure email, set these environment variables:');
      console.log('SMTP_HOST=your-smtp-host');
      console.log('SMTP_PORT=587');
      console.log('SMTP_USER=your-email@domain.com');
      console.log('SMTP_PASS=your-password');
      console.log('SMTP_SECURE=false');
      console.log('SMTP_FROM=support@dhanovaa.com');
      console.log('---\n');
    } else if (isVercel) {
      console.error('[Email] ❌ Configuration missing in Vercel');
      console.error('[Email] Missing variables:', missing.join(', '));
      console.error('[Email] Required: SMTP_HOST, SMTP_USER, SMTP_PASS');
      console.error('[Email] Optional: SMTP_PORT, SMTP_SECURE, SMTP_FROM');
      console.error('[Email] 📖 See VERCEL_EMAIL_SETUP.md for detailed setup instructions');
      console.error('[Email] Steps:');
      console.error('[Email] 1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables');
      console.error('[Email] 2. Add all required SMTP variables');
      console.error('[Email] 3. Redeploy your application');
      console.error('[Email] Note: For Gmail, use App Password (not regular password)');
    }
    
    throw new Error(
      isVercel
        ? `Email service not configured. Missing: ${missing.join(', ')}. Please add SMTP environment variables in Vercel dashboard (Settings → Environment Variables). See VERCEL_EMAIL_SETUP.md for instructions.`
        : `Email service not configured. Missing: ${missing.join(', ')}. Please set up SMTP environment variables.`
    );
  }

  try {
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@dhanovaa.com';
    
    console.log('[Email] Sending email to:', to);
    console.log('[Email] From:', fromEmail);
    
    const info = await transporter.sendMail({
      from: fromEmail,
      to,
      subject,
      html,
      replyTo,
    });

    console.log('[Email] Email sent successfully. Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    // Enhanced error logging for Vercel debugging
    console.error('[Email] Error sending email:');
    console.error('[Email] Error code:', error.code);
    console.error('[Email] Error message:', error.message);
    
    // Provide helpful error messages for common issues
    if (error.code === 'EAUTH') {
      throw new Error('SMTP authentication failed. Please check SMTP_USER and SMTP_PASS in Vercel environment variables. Ensure you are using a Gmail App Password, not your regular password.');
    }
    
    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      throw new Error('Could not connect to SMTP server. Please check SMTP_HOST and SMTP_PORT in Vercel environment variables.');
    }
    
    // Re-throw with original error for other cases
    throw error;
  } finally {
    // Close transporter in serverless environment (cleanup)
    // In serverless, connections are closed automatically, but explicit cleanup is good practice
    try {
      if (transporter && typeof transporter.close === 'function') {
        await transporter.close();
      }
    } catch (closeError) {
      // Ignore close errors in serverless
      console.warn('[Email] Error closing transporter:', closeError);
    }
  }
}

// Helper to format contact form email
export function formatContactEmail(params: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const { name, email, phone, message } = params;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #003448; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #003448; }
        .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
        .message-box { padding: 15px; background-color: white; border-left: 4px solid #68c0ae; margin-top: 10px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${escapeHtml(name)}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${escapeHtml(email)}</div>
          </div>
          
          ${phone ? `
          <div class="field">
            <div class="label">Phone Number (Lead):</div>
            <div class="value">${escapeHtml(phone)}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="footer">
            <p>This email was sent from the contact form on dhanovaa.com</p>
            <p>You can reply directly to this email to respond to ${escapeHtml(name)} at ${escapeHtml(email)}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}








