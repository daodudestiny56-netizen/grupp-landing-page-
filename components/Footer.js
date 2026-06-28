'use client';

const COLS = [
  {
    title: 'Product',
    links: ['Digital Ledgers', 'Lending Engine', 'Agent Portal', 'Settlement Rails', 'Analytics Dashboard'],
  },
  {
    title: 'Developers',
    links: ['API Reference', 'SDKs & Libraries', 'Webhooks', 'Sandbox Environment', 'Status Page'],
  },
  {
    title: 'Compliance',
    links: ['CBN Framework', 'NDIC Coverage', 'Data Privacy Policy', 'AML / KYC', 'Security'],
  },
  {
    title: 'Company',
    links: ['About Grupp', 'Careers', 'Blog', 'Press Kit', 'Contact'],
  },
];

export default function Footer({ darkMode }) {
  return (
    <footer className={`pt-20 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-0.5 mb-4">
              <span className={`font-black text-xl tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-950'}`}>grupp</span>
              <span className="text-emerald-500 text-2xl font-black leading-none">.</span>
            </div>
            <p className={`text-sm leading-relaxed mb-5 max-w-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Community banking infrastructure for the next billion users across Africa and beyond.
            </p>
            {/* Social stubs */}
            <div className="flex gap-2">
              {[['X', 'Twitter'], ['in', 'LinkedIn'], ['gh', 'GitHub']].map(([abbr]) => (
                <button
                  key={abbr}
                  className={`w-9 h-9 rounded-lg border text-xs font-bold transition-all duration-200 ${
                    darkMode
                      ? 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300 hover:bg-zinc-900'
                      : 'border-zinc-200 text-zinc-400 hover:border-zinc-300 hover:text-zinc-700 hover:bg-zinc-50'
                  }`}
                >
                  {abbr}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className={`text-[11px] font-bold tracking-widest uppercase mb-5 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-sm transition-colors duration-200 ${
                        darkMode ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-400 hover:text-zinc-800'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className={`text-center py-12 border-y ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}>
          <p className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
            Built for communities.{' '}
            <em
              className="text-emerald-500"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}
            >
              Scaled effortlessly.
            </em>
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 py-8 text-xs ${
            darkMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          <span>© 2025 Grupp Financial Technologies Ltd. All rights reserved.</span>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Cookies'].map((t) => (
              <a
                key={t}
                href="#"
                className={`transition-colors duration-200 ${
                  darkMode ? 'hover:text-zinc-400' : 'hover:text-zinc-600'
                }`}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
