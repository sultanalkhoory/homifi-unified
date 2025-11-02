import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import CustomerConfirmationEmail from '@/emails/customer-confirmation-email';
import InternalNotificationEmail from '@/emails/internal-notification-email';

// Initialize Resend with your API key (use placeholder for build time)
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_for_build');

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder_for_build') {
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to .env.local' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, phone, property, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Dubai',
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'HomiFi <hello@homifi.ae>', // Will need to verify domain first
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

    // Send notification email to HomiFi team
    const internalEmail = await resend.emails.send({
      from: 'HomiFi Notifications <notifications@homifi.ae>',
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

    return NextResponse.json({
      success: true,
      customerEmailId: customerEmail.data?.id,
      internalEmailId: internalEmail.data?.id,
    });

  } catch (error: any) {
    console.error('Error sending emails:', error);

    return NextResponse.json(
      {
        error: 'Failed to send emails',
        details: error.message
      },
      { status: 500 }
    );
  }
}
