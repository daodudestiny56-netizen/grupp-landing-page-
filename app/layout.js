import { Bricolage_Grotesque, Inter, Fraunces } from 'next/font/google';
import './globals.css';
import MotionProvider from '@/components/motion/MotionProvider';
import Nav from '@/components/Nav';

// Display face: headings, logo, nav, buttons — everywhere the brand has a voice.
// Variable, so the whole 200–800 range costs one file. `opsz` lets large
// headings tighten optically instead of just scaling up.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  axes: ['opsz'],
});

// Body face. Bricolage has real personality, which is an asset at 40px and a
// liability at 15px — Inter stays neutral and legible in long paragraphs.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Accent italic. Swapping this to another serif is a one-line change here,
// because everything downstream reads --font-accent.
const accent = Fraunces({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
  style: ['italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
});

export const metadata = {
  metadataBase: new URL('https://trygrupp.africa'),
  title: 'Grupp — Community Banking as a Service',
  description:
    'Grupp empowers community banks, microfinance institutions and cooperatives with agent banking, POS terminals, NUBAN accounts and digital lending — in their own brand.',
  keywords: [
    'community banking',
    'microfinance',
    'agent banking',
    'banking as a service',
    'fintech Nigeria',
    'NUBAN',
    'POS terminal',
  ],
  openGraph: {
    title: 'Grupp — Community Banking as a Service',
    description:
      'Only a few numbers of Africa’s bankable population has access to digital financial services. Grupp is here to equalize access for all.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Grupp',
  },
};

// themeColor and colorScheme are deprecated inside `metadata` as of Next.js 14 —
// they belong in a separate viewport export, which must be a Server Component.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBFAF8',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior is required in Next.js 16: it no longer overrides
    // scroll-behavior during navigation without this opt-in.
    //
    // suppressHydrationWarning is here purely for browser extensions, which
    // commonly inject attributes onto <html> and <body> before React hydrates
    // (password managers, shopping and grammar extensions all do this). It is
    // a one-level escape hatch — it covers only this element's own attributes
    // and does NOT cascade to children, so real mismatches inside the app
    // still surface normally.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${inter.variable} ${accent.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* children crosses this client boundary as an already-rendered RSC
            payload, so every section below stays a Server Component. */}
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--ink)] focus:shadow-lg"
          >
            Skip to content
          </a>
          <Nav />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
