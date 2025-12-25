# Email Configuration Guide

## Overview

The contact form sends emails to **support@dhanovaa.com** when users submit the form.

## Email Recipient

All contact form submissions are sent to:
- **To:** support@dhanovaa.com
- **Subject:** New Contact Form Submission from [Name]
- **Reply-To:** [User's Email] (allows direct reply)

## Form Data Collected

The email includes:
- **Name** (required)
- **Email** (required)
- **Phone Number** (optional - collected for leads only)
- **Message** (required)

Note: Phone number is collected for lead tracking but is optional. If provided, it will be included in the email.

## Setup Instructions

### 1. Create `.env.local` file

Create a `.env.local` file in the root directory with your SMTP credentials:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

### 2. Common Email Provider Settings

#### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Use App Password, not regular password
SMTP_FROM=your-email@gmail.com
```

**Note:** For Gmail, you need to generate an "App Password":
1. Go to https://myaccount.google.com/apppasswords
2. Generate a new app password
3. Use that password (not your regular Gmail password)

#### Outlook/Office365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
SMTP_FROM=your-email@outlook.com
```

#### Custom SMTP Server
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-password
SMTP_FROM=noreply@yourdomain.com
```

### 3. Development Mode

In development mode, if email is not configured, the form will:
- Log the email content to the console
- Still return a success response (for testing)
- Display instructions for configuring email

### 4. Production Mode

In production, if email is not configured, the form will:
- Return an error to the user
- Log the error to the server logs

**Important:** Always configure SMTP before deploying to production.

## Testing

1. Fill out the contact form on your site
2. Submit the form
3. Check your email at support@dhanovaa.com
4. Verify all fields are included correctly
5. Test replying to the email (should reply to the user)

## Email Template

The email includes:
- Professional HTML formatting
- All form fields clearly labeled
- Phone number (if provided) labeled as "Phone Number (Lead)"
- Direct reply-to functionality
- Branded styling matching Dhanovaa colors

## Troubleshooting

### Email not sending
- Verify all SMTP environment variables are set
- Check SMTP credentials are correct
- Ensure port 587 is not blocked by firewall
- For Gmail, verify you're using an App Password

### Getting connection errors
- Check SMTP_HOST and SMTP_PORT are correct for your provider
- Verify SMTP_SECURE matches your port (false for 587, true for 465)
- Check firewall/network allows SMTP connections

### Development logs
In development, check the console for email logs if SMTP is not configured.


