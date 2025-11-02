import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface CustomerConfirmationEmailProps {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  propertyType?: string;
  message: string;
}

export default function CustomerConfirmationEmail({
  customerName = 'Ahmed',
  customerEmail = 'ahmed@example.com',
  customerPhone = '',
  propertyType = '',
  message = '',
}: CustomerConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting HomiFi - We'll be in touch soon</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={logoSection}>
            <Img
              src="https://homifi.ae/homifi-logo.png"
              alt="HomiFi"
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            {/* Greeting */}
            <Heading style={heading}>Thank you, {customerName}.</Heading>

            <Text style={paragraph}>
              We've received your message about transforming your home with smart automation.
            </Text>

            {/* Glass Card - What Happens Next */}
            <Section style={card}>
              <Heading style={cardHeading}>What happens next</Heading>

              <Section style={timeline}>
                <Section style={timelineItem}>
                  <Text style={timelineNumber}>1</Text>
                  <Section style={timelineContent}>
                    <Text style={timelineTitle}>We review your request</Text>
                    <Text style={timelineDescription}>
                      Our team carefully reviews your needs and property details
                    </Text>
                  </Section>
                </Section>

                <Section style={timelineItem}>
                  <Text style={timelineNumber}>2</Text>
                  <Section style={timelineContent}>
                    <Text style={timelineTitle}>We reach out</Text>
                    <Text style={timelineDescription}>
                      Expect a call or email within 48 hours to discuss your project
                    </Text>
                  </Section>
                </Section>

                <Section style={timelineItem}>
                  <Text style={timelineNumber}>3</Text>
                  <Section style={timelineContent}>
                    <Text style={timelineTitle}>We design your plan</Text>
                    <Text style={timelineDescription}>
                      A custom smart home solution tailored to your lifestyle
                    </Text>
                  </Section>
                </Section>
              </Section>
            </Section>

            {/* Summary of Submission */}
            <Text style={summaryHeading}>Your message:</Text>
            <Section style={summaryCard}>
              <Text style={summaryText}>"{message}"</Text>
              {propertyType && (
                <Text style={summaryDetail}>Property Type: {propertyType}</Text>
              )}
            </Section>

            {/* Contact CTA */}
            <Section style={ctaSection}>
              <Text style={ctaText}>
                Have questions in the meantime? We're here to help.
              </Text>

              <Section style={contactButtons}>
                <Link href="tel:+971505547744" style={button}>
                  📞 Call Us
                </Link>
                <Link href="https://wa.me/971505547744" style={button}>
                  💬 WhatsApp
                </Link>
              </Section>
            </Section>

            <Hr style={divider} />

            {/* Footer */}
            <Section style={footer}>
              <Text style={footerText}>
                Best regards,
                <br />
                <strong>The HomiFi Team</strong>
              </Text>

              <Section style={footerLinks}>
                <Link href="tel:+971505547744" style={footerLink}>
                  +971 50 554 7744
                </Link>
                <Text style={footerSeparator}>•</Text>
                <Link href="mailto:info@homifi.ae" style={footerLink}>
                  info@homifi.ae
                </Link>
                <Text style={footerSeparator}>•</Text>
                <Link href="https://instagram.com/homifi.ae" style={footerLink}>
                  @homifi.ae
                </Link>
              </Section>

              <Text style={footerNote}>
                Apple-first smart home automation for your space
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

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const logo = {
  height: '32px',
  margin: '0 auto',
};

const content = {
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  padding: '48px 40px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
};

const heading = {
  fontSize: '32px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 16px 0',
  lineHeight: '1.2',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#6b7280',
  margin: '0 0 32px 0',
};

const card = {
  backgroundColor: '#f9fafb',
  borderRadius: '16px',
  padding: '24px',
  marginBottom: '32px',
  border: '1px solid #e5e7eb',
};

const cardHeading = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 20px 0',
};

const timeline = {
  margin: '0',
};

const timelineItem = {
  display: 'flex',
  marginBottom: '16px',
};

const timelineNumber = {
  display: 'inline-block',
  width: '32px',
  height: '32px',
  backgroundColor: '#000000',
  color: '#ffffff',
  borderRadius: '50%',
  textAlign: 'center' as const,
  lineHeight: '32px',
  fontSize: '14px',
  fontWeight: '600',
  marginRight: '16px',
  flexShrink: 0,
};

const timelineContent = {
  flex: 1,
};

const timelineTitle = {
  fontSize: '15px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 4px 0',
};

const timelineDescription = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
  lineHeight: '1.5',
};

const summaryHeading = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#6b7280',
  margin: '0 0 12px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const summaryCard = {
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '32px',
  borderLeft: '3px solid #3b82f6',
};

const summaryText = {
  fontSize: '15px',
  color: '#374151',
  margin: '0 0 8px 0',
  fontStyle: 'italic' as const,
  lineHeight: '1.6',
};

const summaryDetail = {
  fontSize: '13px',
  color: '#6b7280',
  margin: '0',
};

const ctaSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const ctaText = {
  fontSize: '15px',
  color: '#6b7280',
  margin: '0 0 20px 0',
};

const contactButtons = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
};

const button = {
  display: 'inline-block',
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '24px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 6px',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '15px',
  color: '#374151',
  margin: '0 0 16px 0',
  lineHeight: '1.5',
};

const footerLinks = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '12px',
  flexWrap: 'wrap' as const,
};

const footerLink = {
  fontSize: '14px',
  color: '#6b7280',
  textDecoration: 'none',
  padding: '0 4px',
};

const footerSeparator = {
  fontSize: '14px',
  color: '#d1d5db',
  margin: '0 8px',
};

const footerNote = {
  fontSize: '13px',
  color: '#9ca3af',
  margin: '8px 0 0 0',
};
