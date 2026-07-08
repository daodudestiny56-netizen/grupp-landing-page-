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
    <footer className={`pt-16 md:pt-20 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'} px-[var(--page-px)] relative z-10`}>
      <div className="max-w-[1280px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 md:gap-x-10 pb-12 md:pb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3">
            {/* Powered by Clane removed */}
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className={`text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-4 md:mb-5 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
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
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t ${
            darkMode ? 'border-zinc-900 text-zinc-600' : 'border-zinc-100 text-zinc-400'
          } text-[11px] md:text-xs font-medium`}
        >
          <span>© 2026 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
