# HomiFi Contact Form Setup Guide

## 🎉 What's Included

Your professional contact form system is now integrated with:

- ✅ Beautiful Apple-style contact form component
- ✅ Customer confirmation emails with HomiFi branding
- ✅ Internal notification emails to info@homifi.ae
- ✅ Full mobile responsiveness
- ✅ Form validation and error handling
- ✅ Loading states and success messages

## 📦 Files Added

### Email Templates
- `emails/customer-confirmation-email.tsx` - Beautiful branded email sent to customers
- `emails/internal-notification-email.tsx` - Clean notification sent to info@homifi.ae

### API Route
- `app/api/contact/route.ts` - Handles form submissions and sends both emails

### Component
- `components/ContactSection.tsx` - Apple-style contact form (added to homepage)

## 🚀 Quick Setup (5 minutes)

### 1. Get Resend API Key

1. Sign up at [resend.com](https://resend.com) (FREE - 3,000 emails/month)
2. Verify your domain or use their test domain
3. Generate an API key from the dashboard

### 2. Add Environment Variable

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

### 3. Domain Setup (Recommended)

For production, you'll want to send from your own domain:

1. Go to [resend.com/domains](https://resend.com/domains)
2. Add your domain: `homifi.ae`
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (usually a few minutes)

Once verified, emails will come from `hello@homifi.ae` and `notifications@homifi.ae`.

### 4. Test the Form

```bash
npm run dev
```

Visit `http://localhost:3000` and scroll to the contact form at the bottom of the page.

## 📧 Email Details

### Customer Confirmation Email

**From:** HomiFi <hello@homifi.ae>
**Subject:** Thank you for contacting HomiFi

**Features:**
- HomiFi logo and branding
- Personalized greeting
- 3-step timeline of what happens next
- Message summary
- Quick contact buttons (Call, WhatsApp)
- All contact info in footer

### Internal Notification Email

**To:** info@homifi.ae
**Subject:** 🔔 New Contact: [Customer Name]

**Features:**
- Red "NEW LEAD" alert badge
- All customer info (name, email, phone, property type)
- Full message display
- Quick action buttons (Reply, Call, WhatsApp)
- Next steps checklist
- Dubai timezone timestamp

## 💰 Pricing

**FREE Tier:**
- 3,000 emails/month
- 100 emails/day
- Send from your own domain

Perfect for getting started!

## 🎨 Customization

### Update Contact Information

Edit these files to change contact details:

- `components/ContactSection.tsx` - Bottom contact links
- `emails/customer-confirmation-email.tsx` - Customer email footer
- `app/api/contact/route.ts` - Recipient email address

### Styling

The contact form matches your Apple-style design with:
- Inter font family
- Black primary buttons
- Clean, minimal aesthetic
- Smooth animations via Framer Motion

## 🧪 Testing

### Test Mode (Before Domain Verification)

While using Resend's test mode, emails will only be sent to verified email addresses. Add your email in the Resend dashboard to receive test emails.

### Production Mode (After Domain Verification)

Once your domain is verified, emails can be sent to any address.

## 📍 Where It's Added

The contact form appears on:
- Homepage (Desktop & Mobile) - Before the footer

You can easily add it to other pages by importing:

```tsx
import ContactSection from '@/components/ContactSection';

// Then add it anywhere:
<ContactSection />
```

## 🔧 Troubleshooting

### "Missing required fields" error
Make sure name, email, and message are filled out.

### Emails not sending
1. Check your `.env.local` has the correct `RESEND_API_KEY`
2. Restart your dev server after adding environment variables
3. Check the browser console for errors
4. Verify your API key is active in Resend dashboard

### Domain verification pending
DNS changes can take 1-48 hours. Use test mode with verified emails while waiting.

## 🚀 Next Steps

1. Add your Resend API key to `.env.local`
2. Test the form locally
3. Set up domain verification for production
4. Deploy to production

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [React Email Components](https://react.email/docs/introduction)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

Built with ❤️ for HomiFi
