import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SITE_URL } from '@/lib/site-config';
import './globals.css';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HealthCare Industry Research',
  url: SITE_URL,
  description:
    'Southeast Asia healthcare market intelligence, consulting, research, and advisory for providers, investors, partners, and enterprise buyers.',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'HealthCare Industry Research',
    template: '%s | HealthCare Industry Research',
  },
  description:
    'Southeast Asia healthcare market intelligence, consulting, research, and advisory for providers, investors, partners, and enterprise buyers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
