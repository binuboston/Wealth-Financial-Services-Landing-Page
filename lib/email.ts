import nodemailer from 'nodemailer';

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

// Create transporter based on environment variables
// Falls back to console logging if email is not configured
const getTransporter = () => {
  // If SMTP is configured, use it
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // For development/testing - use Ethereal Email (generates a test account)
  // Or use a service like Resend, SendGrid, etc.
  // For now, return null and log the email in development
  return null;
};

export async function sendEmail({ to, subject, html, replyTo }: SendEmailParams) {
  const transporter = getTransporter();

  // If no transporter (email not configured), log to console in development
  if (!transporter) {
    if (process.env.NODE_ENV === 'development') {
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
      console.log('---\n');
    }
    // In production without email config, this would fail
    // For now, we'll return a success response but log it
    // You should configure SMTP or use a service like Resend/SendGrid
    throw new Error('Email service not configured. Please set up SMTP environment variables.');
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@dhanovaa.com',
      to,
      subject,
      html,
      replyTo,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
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








