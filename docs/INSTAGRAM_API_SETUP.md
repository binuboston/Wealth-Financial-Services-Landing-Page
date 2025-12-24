# Instagram API Setup Guide

This guide explains how to set up the Instagram API to fetch and display the latest posts from your Instagram account.

## Prerequisites

1. **Instagram Business Account**: Your Instagram account must be converted to a Business or Creator account.
2. **Facebook Page**: You need a Facebook Page connected to your Instagram Business account.
3. **Facebook Developer Account**: Access to [Facebook Developers](https://developers.facebook.com/).

## Setup Steps

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Select "Business" as the app type
4. Fill in your app details and create the app

### 2. Add Instagram Basic Display Product

1. In your Facebook App dashboard, go to "Add Products"
2. Find "Instagram Basic Display" and click "Set Up"
3. Follow the setup wizard

### 3. Configure Instagram Basic Display

1. Go to "Basic Display" in the left sidebar
2. Add your Instagram app ID and app secret
3. Add authorized redirect URIs (e.g., `https://yourdomain.com/auth/instagram/callback`)

### 4. Get Access Token

1. Go to "Basic Display" → "User Token Generator"
2. Add test users (your Instagram account)
3. Generate a User Token
4. This token will be used as `INSTAGRAM_ACCESS_TOKEN`

### 5. Get Instagram Business Account ID

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app
3. Get a User Access Token with `instagram_basic` permission
4. Make a GET request to: `https://graph.instagram.com/me?fields=id`
5. The returned `id` is your `INSTAGRAM_BUSINESS_ACCOUNT_ID`

### 6. Set Environment Variables

Add these to your `.env.local` file:

```env
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id_here
```

## Alternative: Using Instagram Graph API

For more advanced features, you can use the Instagram Graph API:

1. Add "Instagram Graph API" product to your Facebook App
2. Get a Page Access Token
3. Get your Instagram Business Account ID
4. Use the Graph API endpoint instead

## Testing

1. Start your development server
2. Visit the contact/Instagram section
3. Check the browser console for any API errors
4. If credentials are not set, fallback images will be displayed

## Troubleshooting

### "Instagram API credentials not configured"
- Make sure you've set both environment variables
- Restart your development server after adding environment variables

### "Failed to fetch Instagram posts"
- Verify your access token is valid and not expired
- Check that your Instagram account is a Business account
- Ensure the account ID is correct

### Posts not showing
- The API will fall back to placeholder images if it can't fetch posts
- Check the browser console for detailed error messages

## Notes

- Access tokens expire. You may need to refresh them periodically.
- The API fetches the latest 6 posts and displays the first 4.
- If the API is not configured, the component will use fallback placeholder images.

