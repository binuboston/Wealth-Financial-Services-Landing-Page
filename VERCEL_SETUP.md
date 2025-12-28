# Vercel Deployment Setup Guide

## Environment Variables Configuration

To enable email functionality on Vercel, you need to add the following environment variables in your Vercel project settings:

### Step 1: Access Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Environment Variables**

### Step 2: Add Required Variables

Add these environment variables for **Production**, **Preview**, and **Development** environments:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `SMTP_HOST` | Gmail SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_SECURE` | Use secure connection | `false` |
| `SMTP_USER` | Your Gmail address | `your-email@gmail.com` |
| `SMTP_PASS` | Gmail App Password (16 characters) | `abcdefghijklmnop` |
| `SMTP_FROM` | From email address | `support@dhanovaa.com` |

### Step 3: Generate Gmail App Password

If you haven't already:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (required for App Passwords)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select:
   - **App**: Mail
   - **Device**: Other (Custom name) → Enter "Dhanovaa Contact Form"
5. Click **Generate**
6. Copy the 16-character password (spaces can be removed)

**Important**: Use the **App Password** (16 characters), NOT your regular Gmail password.

### Step 4: Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Click the **three dots** (⋯) on the latest deployment
3. Select **Redeploy**

Or simply push a new commit to trigger automatic redeployment.

### Step 5: Verify

1. Test the contact form on your live site
2. Check **Deployments** → **Functions** → **Logs** for any errors
3. Look for `[Email] Email sent successfully` in the logs

## Troubleshooting

### Error: "Email service not configured"
- **Solution**: Make sure all environment variables are added in Vercel dashboard
- **Check**: Go to Settings → Environment Variables and verify all 6 variables exist

### Error: "SMTP authentication failed" or "535 Authentication failed"
- **Solution**: You're using a regular Gmail password instead of an App Password
- **Fix**: Generate a new App Password from Google Account settings and update `SMTP_PASS`

### Error: "Could not connect to SMTP server"
- **Solution**: Check `SMTP_HOST` and `SMTP_PORT` are correct
- **Gmail Settings**: 
  - `SMTP_HOST`: `smtp.gmail.com`
  - `SMTP_PORT`: `587`
  - `SMTP_SECURE`: `false`

### Email not sending but no errors
- **Check Vercel Logs**: Deployments → Functions → Select your API route → View Logs
- **Look for**: `[Email]` prefixed log messages for detailed debugging info

## Testing Locally

For local development, create a `.env.local` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=support@dhanovaa.com
```

**Note**: Never commit `.env.local` to Git. It's already in `.gitignore`.

