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

// Product-UI mockup: one agent's terminal ledger. Illustrative, and labelled as
// such on the page — it shows what the software does, it claims no volume.
//
// Everything here is deterministic. Holds are fixed rather than random, times
// advance by a stated gap rather than from the clock, and figures are formatted
// by hand — Date.now() and Math.random() are both build errors in a Server
// Component under cacheComponents, and Intl locale differences between server
// and client would cause hydration mismatches.
export const DEMO_TERMINAL = {
  agent: 'Adaeze O.',
  location: 'Ojo Market, Lagos',
  ref: 'AGT-2214',
  openingCount: 47,
  openingTotal: 312400,
  startMinute: 14 * 60 + 3, // 14:03
};

// `gap` = minutes since the previous transaction. `dir` in = money into the
// customer's account at the terminal, out = paid out or disbursed.
export const DEMO_TRANSACTIONS = [
  { name: 'Ngozi K.', kind: 'Savings deposit', amount: 5000, dir: 'in', gap: 4, hold: 3400 },
  { name: 'Adamu E.', kind: 'Loan repayment', amount: 12000, dir: 'in', gap: 3, hold: 3900 },
  { name: 'Fatima O.', kind: 'Transfer out', amount: 8500, dir: 'out', gap: 2, hold: 3600 },
  { name: 'Charles B.', kind: 'Cash deposit', amount: 15000, dir: 'in', gap: 6, hold: 4200 },
  { name: 'Cynthia A.', kind: 'Business loan', amount: 50000, dir: 'out', gap: 3, hold: 3700 },
  { name: 'Emeka N.', kind: 'Cash withdrawal', amount: 20000, dir: 'out', gap: 5, hold: 3500 },
  { name: 'Halima S.', kind: 'Ajo contribution', amount: 2500, dir: 'in', gap: 2, hold: 4000 },
  { name: 'Tunde A.', kind: 'Airtime purchase', amount: 1000, dir: 'out', gap: 4, hold: 3300 },
  { name: 'Blessing U.', kind: 'Cash deposit', amount: 7500, dir: 'in', gap: 3, hold: 3800 },
  { name: 'Sadiq M.', kind: 'Loan repayment', amount: 9000, dir: 'in', gap: 5, hold: 3600 },
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
