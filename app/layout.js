import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata = {
  title: 'Grupp — Community Banking as a Service',
  description:
    'Grupp powers community banks, microfinance institutions, and cooperatives with enterprise-grade digital infrastructure — tailored, branded, and built for the people most financial services leave behind.',
  keywords: ['community banking', 'microfinance', 'CBaaS', 'agent banking', 'fintech Nigeria', 'MFB'],
  openGraph: {
    title: 'Grupp — Community Banking as a Service',
    description: 'Banking infrastructure for communities everyone else left behind.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${bricolage.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
