import type { Metadata, Viewport } from 'next';
import "./globals.css";

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
};

export const metadata: Metadata = {
  title: "HomiFi – Apple-style Smart Home",
  description: "Automate lighting, climate, and security with zero coding. Apple HomeKey, voice control (Siri/Alexa/Google), instant notifications, and seamless integrations.",

  // Favicon configuration - files in /app folder
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
  },

  // Social media preview
  openGraph: {
    title: "HomiFi – Apple-style Smart Home",
    description: "Professional installation. Voice control. Apple HomeKey. No programming required.",
    images: ['/homifi-icon.png'],
  },

  // SEO keywords
  keywords: [
    'smart home automation',
    'Apple HomeKit',
    'Apple HomeKey',
    'voice control',
    'Siri Alexa Google Home',
    'no code installation',
    'instant home notifications',
    'Apple TV integration'
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-50 to-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
