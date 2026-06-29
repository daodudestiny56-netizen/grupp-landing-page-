'use client';

const COLS = [
  {
    title: 'Contact',
    links: ['info@trygrupp.africa'],
  },
  {
    title: 'Quick Link',
    links: ['Terms & Conditions', 'Policy', 'Privacy Policy', 'Book a Call'],
  },
  {
    title: 'Get In Touch',
    links: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
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
            <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Powered by:
            </p>
            <h3 className="font-extrabold text-3xl text-sky-500 mb-6">
              Clane
            </h3>
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
                      href={link.includes('@') ? `mailto:${link}` : '#'}
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

        {/* Bottom bar */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 py-8 text-xs ${
            darkMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          <span>© 2026 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
