# Vercel Email Configuration Guide

This guide will help you configure the email service for your contact form on Vercel.

## 🚨 Current Issue

If you're seeing this error:
```json
{"error":"Email service is not properly configured. Please contact support."}
```

This means the SMTP environment variables are missing or incorrect in your Vercel project.

## 📋 Step-by-Step Setup

### 1. Go to Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Log in to your account
3. Select your project

### 2. Navigate to Environment Variables

1. Click on **Settings** (top navigation)
2. Click on **Environment Variables** (left sidebar)

### 3. Add Required Environment Variables

Click **Add New** and add each of these variables:

#### Required Variables:

**SMTP_HOST**
```
smtp.gmail.com
```
*(For Gmail. Use your email provider's SMTP server if different)*

**SMTP_USER**
```
your-email@gmail.com
```
*(Your full Gmail address)*

**SMTP_PASS**
```
your-app-password-here
```
*(⚠️ IMPORTANT: This must be a Gmail App Password, NOT your regular password)*

**SMTP_PORT**
```
587
```
*(587 for TLS, 465 for SSL)*

**SMTP_SECURE**
```
false
```
*(false for port 587, true for port 465)*

**SMTP_FROM**
```
support@dhanovaa.com
```
*(Optional: The "From" email address. Defaults to SMTP_USER if not set)*

### 4. Create a Gmail App Password

If you're using Gmail, you **MUST** use an App Password, not your regular password:

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** (left sidebar)
3. Under **How you sign in to Google**, click **2-Step Verification**
   - If not enabled, enable it first (required for App Passwords)
4. After enabling 2-Step Verification, go back to **Security**
5. Under **How you sign in to Google**, click **App passwords**
6. Select app: **Mail**
7. Select device: **Other (Custom name)**
8. Enter: **Vercel Contact Form**
9. Click **Generate**
10. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)
11. Paste this password as your `SMTP_PASS` in Vercel (remove spaces)

### 5. Apply Environment Variables

1. After adding all variables, select which environments they apply to:
   - ✅ **Production**
   - ✅ **Preview**
   - ✅ **Development**
2. Click **Save**

### 6. Redeploy Your Application

After adding the environment variables:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on your latest deployment
3. Click **Redeploy**
   - Or simply push a new commit to trigger a redeploy

### 7. Test the Contact Form

After redeployment:

1. Visit your live site
2. Fill out the contact form
3. Submit it
4. Check your email inbox (support@dhanovaa.com)

## 🔍 Troubleshooting

### Error: "SMTP authentication failed"

**Solution:**
- Make sure you're using a **Gmail App Password**, not your regular password
- Verify 2-Step Verification is enabled on your Google account
- Double-check the App Password was copied correctly (no extra spaces)

### Error: "Could not connect to SMTP server"

**Solution:**
- Verify `SMTP_HOST` is correct: `smtp.gmail.com`
- Verify `SMTP_PORT` matches your `SMTP_SECURE` setting:
  - Port `587` with `SMTP_SECURE=false`
  - Port `465` with `SMTP_SECURE=true`

### Variables are set but still not working

**Solution:**
1. **Redeploy** - Environment variables are only applied on new deployments
2. Check Vercel Function Logs:
   - Go to **Deployments** → Click your deployment → **Functions** tab
   - Click on `/api/contact` function
   - Check the logs for detailed error messages

### Test Environment Variables in Vercel

You can verify your environment variables are set by checking the function logs. The API will log which variables are missing if there's a configuration issue.

## 📧 Using Other Email Providers

### Outlook/Office 365

```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### SendGrid

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun

```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

## ✅ Verification Checklist

- [ ] All required environment variables are added
- [ ] Using Gmail App Password (if using Gmail)
- [ ] Environment variables are set for Production environment
- [ ] Application has been redeployed after adding variables
- [ ] Tested the contact form on the live site
- [ ] Checked Vercel function logs for any errors

## 🔐 Security Notes

- Never commit `.env.local` files to git
- Never share your App Passwords publicly
- App Passwords are safer than regular passwords for API access
- If compromised, revoke and regenerate the App Password immediately

## 📞 Support

If you continue to have issues after following this guide:

1. Check Vercel Function Logs for detailed error messages
2. Verify all environment variable names are exactly as shown (case-sensitive)
3. Ensure you've redeployed after adding the variables

