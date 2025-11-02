import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import CustomerConfirmationEmail from '@/emails/customer-confirmation-email';
import InternalNotificationEmail from '@/emails/internal-notification-email';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, phone, property, message } = body;

    console.log('Processing contact form submission for:', email);

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, and Message).' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Dubai',
    });

    // Send confirmation email to customer
    console.log('Sending customer confirmation email...');
    const customerEmail = await resend.emails.send({
      from: 'HomiFi <hello@homifi.ae>',
      replyTo: 'info@homifi.ae', // Replies go to your real inbox
      to: email,
      subject: 'Thank you for contacting HomiFi',
      react: CustomerConfirmationEmail({
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        propertyType: property,
        message: message,
      }),
    });

    if (customerEmail.error) {
      console.error('Customer email error:', customerEmail.error);
      throw new Error(`Failed to send customer email: ${customerEmail.error.message}`);
    }

    console.log('Customer email sent:', customerEmail.data?.id);

    // Send notification email to HomiFi team
    console.log('Sending internal notification email...');
    const internalEmail = await resend.emails.send({
      from: 'HomiFi Notifications <notifications@homifi.ae>',
      replyTo: 'info@homifi.ae', // Set reply-to for internal emails too
      to: 'info@homifi.ae',
      subject: `🔔 New Contact: ${name}`,
      react: InternalNotificationEmail({
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        propertyType: property,
        message: message,
        submittedAt: submittedAt,
      }),
    });

    if (internalEmail.error) {
      console.error('Internal email error:', internalEmail.error);
      throw new Error(`Failed to send internal email: ${internalEmail.error.message}`);
    }

    console.log('Internal email sent:', internalEmail.data?.id);
    console.log('Contact form submission successful');

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We\'ll get back to you within 48 hours.',
        customerEmailId: customerEmail.data?.id,
        internalEmailId: internalEmail.data?.id,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error in contact form API:', error);

    // Provide helpful error messages
    let errorMessage = 'Failed to send email. Please try again or contact us directly at info@homifi.ae';

    if (error.message?.includes('domain')) {
      errorMessage = 'Email configuration error. Please contact us at info@homifi.ae or call +971 50 554 7744';
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
