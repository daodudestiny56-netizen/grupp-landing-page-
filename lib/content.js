// All site copy. Everything here is verbatim from Grupp's live site
// (trygrupp.africa) unless marked [derived]. Edit text here, never in components.

export const BRAND = {
  name: 'Grupp',
  tagline: 'Community Banking as a Service',
  email: 'info@trygrupp.africa',
  calendly: 'https://calendly.com/trygrupp/talk-to-us',
  instagram: 'https://www.instagram.com/grupp_hq/',
  youtube: 'https://www.youtube.com/@grupp_hq',
};

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'How it works', href: '#how' },
  { label: 'Who we serve', href: '#communities' },
  { label: 'Proof', href: '#proof' },
];

export const HERO = {
  eyebrow: 'Community Banking as a Service',
  // Headline [derived] — keeps the B2B clarity of their original
  // "Digital Platform for Community Banks." while carrying the mission.
  headline: ['Banking built for', 'the communities', 'the banks never reached.'],
  accentLine: 2,
  sub: 'Our platform as a service empowers community banks with a variety of digitized financial tools tailored to customers’ needs in their brand.',
  primaryCta: { label: 'Book a call', href: BRAND.calendly },
  secondaryCta: { label: 'See the products', href: '#products' },
  photo: {
    src: '/market.jpg',
    alt: 'A densely packed Lagos market street, traders and shoppers moving between yellow danfo buses',
    caption: 'Balogun Market, Lagos',
  },
};

// Honestly framed: these are real, named customers who appear on camera.
export const TRUST = {
  label: 'Trusted by community banks and financial institutions across Nigeria',
  names: ['Lifegate Microfinance Bank', 'MoreMonee', 'Pegro MFB', 'Dropify'],
};

export const MISSION = {
  lines: [
    'Only a few numbers of Africa’s',
    'bankable population has access to',
    'digital financial services.',
  ],
  accent: 'Grupp is here to equalize access for all.',
};

export const PRODUCTS = [
  {
    id: 'agent',
    label: 'Agent Banking',
    heading: 'Offer full-scale, market-ready community banking.',
    body: 'Today we empower much broader financial institutions to be digitally connected to the offline communities by enabling them with all the resources needed to power financial services to the underserved through mobile money agents. Customized in their brands, backed by Grupp.',
    kicker: 'With zero-line of code, discover interesting tools for your customers.',
    features: [
      'Business Overview',
      'Customer Engagement',
      'Revenue Management',
      'Savings and Thrift',
      'Secure Transactions',
      'Terminal Management',
    ],
  },
  {
    id: 'terminal',
    label: 'Terminal',
    heading: 'Pair with fast & reliable point-of-sale terminals.',
    body: 'At Grupp, we eliminate friction by replacing complex built code with seamless API integration for new & existing businesses. Today, you can leverage our API by integrating to deploy your own customized terminals to your customers. Just plug-and-play.',
    kicker: 'We’ve got the perfect fit for any business size.',
    features: ['Open API based solution', 'Instant Settlement', 'Management Dashboard'],
  },
  {
    id: 'nuban',
    label: 'Virtual Accounts',
    heading: 'Go seamless with direct NUBAN integration.',
    body: 'Create and process remote actions on NUBAN accounts. No more lengthy compliances, delayed settlement, or slow operational processes. Mirror account matches control account — zero discrepancies.',
    kicker: 'Account allocation is easier than ever.',
    features: [
      'One-call Balance Check',
      'On-time Transaction Requery',
      'Instant settlement with improved fund management',
      'Intelligent Dashboard',
    ],
  },
  {
    id: 'lending',
    label: 'Lending',
    heading: 'Lend smarter, grow faster.',
    body: 'Lending to underserved businesses often comes with high credit risks, increased operational costs, repeated data entry, paperwork, and human error. Enjoy a fully regulated, secured, digitalized, and automated end-to-end lending process.',
    kicker: 'Say goodbye to manual spreadsheets, stay in compliance, and scale. No sweat.',
    features: [
      'Credit Scoring and Decisioning',
      'Seamless Loan Application flow',
      'Disbursement and Repayment Management',
      'AML and KYC Compliance Checks',
    ],
  },
];

// [derived] Three steps distilled from their real paragraph:
// "Grupp handles all the technical aspects of your financial service delivery
//  so that you don't have to worry about technology..."
export const STEPS = [
  {
    n: '01',
    title: 'Your brand, front and centre',
    body: 'Your customers see your name, your colours, your branch. Grupp runs quietly underneath. Customized in your brand, backed by Grupp.',
  },
  {
    n: '02',
    title: 'We carry the licensing and the rails',
    body: 'We handle the regulatory burdens and compliance related matters, so you can focus on your customers’ needs. Payments, ledgers, settlement and KYC are ours to run.',
  },
  {
    n: '03',
    title: 'Live in days, not years',
    body: 'Instead of spending lots of resources on infrastructure and months integrating with different partners, Grupp can get you up and running in days.',
  },
];

// Real merchant categories from Grupp's own onboarding taxonomy.
export const COMMUNITIES = [
  'Savings & Thrift Group (Ajo/Esusu)',
  'POS & Agent Banking',
  'Motorcycle (Okada) Hailing',
  'Sachet Water & Dispenser Shop',
  'Fish Farming (Aquaculture)',
  'Microfinance & Cooperative Lending',
  'Beekeeping & Honey Production',
  'Community Development',
  'Food Processing & Packaging',
  'Export & Commodity Trading',
  'Agriculture & Agro Products',
  'Money Transfer & Remittance',
];

// Product-UI mockup. Deliberately no aggregate total — this demonstrates the
// product, it does not claim volume. Holds are fixed, not random: deterministic
// across demos, and Math.random() is a build error in a Server Component
// under cacheComponents.
export const DEMO_TRANSACTIONS = [
  { initials: 'CA', name: 'Cynthia A.', action: 'received a business loan', category: 'Loans', amount: '₦50,000', hold: 3400 },
  { initials: 'CB', name: 'Charles B.', action: 'made a cash deposit', category: 'Deposits', amount: '₦15,000', hold: 3900 },
  { initials: 'FO', name: 'Fatima O.', action: 'completed a transfer', category: 'Transfer', amount: '₦8,500', hold: 3600 },
  { initials: 'AE', name: 'Adamu E.', action: 'repaid a loan installment', category: 'Repayment', amount: '₦12,000', hold: 4200 },
  { initials: 'NK', name: 'Ngozi K.', action: 'opened a savings account', category: 'Savings', amount: '₦5,000', hold: 3700 },
];

export const WHY = [
  {
    title: 'Transformation',
    body: 'Our easy to use Banking-as-a-Service platform allows digitization of rural and semi-urban communities.',
  },
  {
    title: 'Speed',
    body: 'Instead of spending lots of resources on infrastructure and months integrating with different partners, Grupp can get you up and running in days.',
  },
  {
    title: 'Fully Licensed',
    body: 'We handle the regulatory burdens and compliance related matters, so you can focus on your customers’ needs.',
  },
  {
    title: 'Neutrality',
    body: 'We enable you with total control to meet your peculiar needs.',
  },
];

// Real video testimonials, live on Grupp's own YouTube channel (@grupp_hq).
// Rendered as a facade: thumbnail + play button, iframe injected only on click.
export const TESTIMONIALS = [
  {
    id: '-qitn2ycM9Q',
    name: 'Dayo Adewale',
    role: 'MD/CEO, Lifegate Microfinance Bank',
    quote: 'With Grupp banking as a services platform, now, we are able to open accounts for customers on the field, and perform seamless transactions thereby increasing our client base.',
  },
  {
    id: 'pVPOjpYSxJc',
    name: 'Mariya Abdullahi Sani',
    role: 'Mobilization & Credit Officer, Pegro MFB',
    quote: 'Grupp has helped us greatly, especially when it comes to our loan repayments. Initially loan payments were done in cash but now we are practically practicing cashless policy.',
  },
  {
    id: '8fO5z9XXxYk',
    name: 'Biola Lawal',
    role: 'Co-CEO / Head of Account, Dropify',
    quote: 'Grupp provides payment infrastructure for all our businesses, such as Dropify More, Dropify Logistics, and Dropify Pay. Grupp has made Dropify gain a lot of ground in the competitive market of financial transaction.',
  },
  {
    id: 'Su4AVxwBxos',
    name: 'Mohammed N. Olatunji',
    role: 'CEO, MoreMonee',
    quote: 'I like Grupp so much because it is in line with our personal vision. Our daily transaction update is increasing, courtesy of the help and partnership we have with Grupp.',
  },
];

export const CTA = {
  eyebrow: 'Ready when you are',
  headline: 'When it comes to getting things done,',
  headlineAccent: 'talking is half the battle.',
  body: 'Tell us about the community you serve. We’ll show you what it looks like running on Grupp.',
  primary: { label: 'Book a call', href: BRAND.calendly },
  secondary: { label: BRAND.email, href: `mailto:${BRAND.email}` },
};

export const FOOTER = {
  blurb: 'Banking infrastructure for community banks, microfinance institutions and cooperatives across Africa.',
  columns: [
    {
      title: 'Products',
      links: PRODUCTS.map((p) => ({ label: p.label, href: '#products' })),
    },
    {
      title: 'Company',
      links: [
        { label: 'How it works', href: '#how' },
        { label: 'Who we serve', href: '#communities' },
        { label: 'Success stories', href: '#proof' },
        { label: 'Book a call', href: BRAND.calendly },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { label: BRAND.email, href: `mailto:${BRAND.email}` },
        { label: 'Instagram', href: BRAND.instagram },
        { label: 'YouTube', href: BRAND.youtube },
      ],
    },
  ],
  legal: [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};
