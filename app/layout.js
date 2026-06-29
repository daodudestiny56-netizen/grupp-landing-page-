import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Grupp — Community Banking as a Service',
  description:
    'Grupp powers community banks, SACCOs, and microfinance institutions with enterprise-grade digital ledgers, instant settlement rails, and AI-driven agent management.',
  keywords: ['community banking', 'microfinance', 'SACCO', 'digital ledger', 'fintech Nigeria', 'agent banking'],
  openGraph: {
    title: 'Grupp — Community Banking as a Service',
    description: 'Banking infrastructure for the next billion users.',
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
