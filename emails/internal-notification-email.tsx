import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface InternalNotificationEmailProps {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  propertyType?: string;
  message: string;
  submittedAt: string;
}

export default function InternalNotificationEmail({
  customerName = 'Ahmed Al-Mansoori',
  customerEmail = 'ahmed@example.com',
  customerPhone = '+971 50 123 4567',
  propertyType = 'Villa',
  message = 'Interested in smart lighting and security...',
  submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }),
}: InternalNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>🔔 New Contact Form Submission from {customerName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Alert Header */}
          <Section style={alertHeader}>
            <Text style={alertBadge}>🔔 NEW LEAD</Text>
            <Heading style={heading}>New Contact Form Submission</Heading>
            <Text style={timestamp}>{submittedAt}</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            {/* Customer Details Card */}
            <Section style={card}>
              <Heading style={cardHeading}>👤 Customer Information</Heading>

              <Section style={detailsGrid}>
                <Section style={detailRow}>
                  <Text style={detailLabel}>Name</Text>
                  <Text style={detailValue}>{customerName}</Text>
                </Section>

                <Section style={detailRow}>
                  <Text style={detailLabel}>Email</Text>
                  <Link href={`mailto:${customerEmail}`} style={detailLink}>
                    {customerEmail}
                  </Link>
                </Section>

                {customerPhone && (
                  <Section style={detailRow}>
                    <Text style={detailLabel}>Phone</Text>
                    <Link href={`tel:${customerPhone}`} style={detailLink}>
                      {customerPhone}
                    </Link>
                  </Section>
                )}

                {propertyType && (
                  <Section style={detailRow}>
                    <Text style={detailLabel}>Property Type</Text>
                    <Text style={detailValue}>{propertyType}</Text>
                  </Section>
                )}
              </Section>
            </Section>

            {/* Message Card */}
            <Section style={card}>
              <Heading style={cardHeading}>💬 Message</Heading>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>

            {/* Quick Actions */}
            <Section style={actionsSection}>
              <Heading style={actionsHeading}>Quick Actions</Heading>

              <Section style={buttonGroup}>
                <Link href={`mailto:${customerEmail}`} style={primaryButton}>
                  📧 Reply via Email
                </Link>

                {customerPhone && (
                  <>
                    <Link href={`tel:${customerPhone}`} style={secondaryButton}>
                      📞 Call Now
                    </Link>

                    <Link
                      href={`https://wa.me/${customerPhone.replace(/[^0-9]/g, '')}`}
                      style={secondaryButton}
                    >
                      💬 WhatsApp
                    </Link>
                  </>
                )}
              </Section>
            </Section>

            <Hr style={divider} />

            {/* Footer Notes */}
            <Section style={footer}>
              <Text style={footerTitle}>📋 Next Steps</Text>
              <Text style={footerText}>
                1. Review the customer's requirements
                <br />
                2. Contact them within 48 hours
                <br />
                3. Schedule a consultation call
                <br />
                4. Prepare a custom proposal
              </Text>

              <Text style={footerNote}>
                This lead came from the HomiFi website contact form.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f5f5f7',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const alertHeader = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const alertBadge = {
  display: 'inline-block',
  backgroundColor: '#ef4444',
  color: '#ffffff',
  padding: '6px 16px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '700',
  letterSpacing: '0.5px',
  margin: '0 0 16px 0',
};

const heading = {
  fontSize: '28px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 8px 0',
  lineHeight: '1.2',
};

const timestamp = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
};

const content = {
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  padding: '40px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
};

const card = {
  backgroundColor: '#f9fafb',
  borderRadius: '16px',
  padding: '24px',
  marginBottom: '24px',
  border: '1px solid #e5e7eb',
};

const cardHeading = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 20px 0',
};

const detailsGrid = {
  margin: '0',
};

const detailRow = {
  marginBottom: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e5e7eb',
};

const detailLabel = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#6b7280',
  margin: '0 0 4px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const detailValue = {
  fontSize: '16px',
  color: '#000000',
  margin: '0',
  fontWeight: '500',
};

const detailLink = {
  fontSize: '16px',
  color: '#3b82f6',
  textDecoration: 'none',
  fontWeight: '500',
};

const messageBox = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '20px',
  border: '1px solid #e5e7eb',
};

const messageText = {
  fontSize: '15px',
  color: '#374151',
  margin: '0',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
};

const actionsSection = {
  marginBottom: '24px',
};

const actionsHeading = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 16px 0',
};

const buttonGroup = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '12px',
};

const primaryButton = {
  display: 'block',
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '14px 24px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0 0 8px 0',
};

const secondaryButton = {
  display: 'block',
  backgroundColor: '#f3f4f6',
  color: '#000000',
  padding: '14px 24px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: '600',
  textAlign: 'center' as const,
  border: '1px solid #e5e7eb',
  margin: '0 0 8px 0',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const footer = {
  textAlign: 'center' as const,
};

const footerTitle = {
  fontSize: '15px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 12px 0',
};

const footerText = {
  fontSize: '14px',
  color: '#374151',
  margin: '0 0 16px 0',
  lineHeight: '1.8',
  textAlign: 'left' as const,
};

const footerNote = {
  fontSize: '13px',
  color: '#9ca3af',
  margin: '0',
  fontStyle: 'italic' as const,
};
