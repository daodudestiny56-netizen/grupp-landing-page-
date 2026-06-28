'use client';

const PARTNERS = [
  'FirstBank MFB', 'LAPO Microfinance', 'Accion MFB', 'Grooming MFB', 'Renmoney',
  'AB Microfinance', 'FINCA Nigeria', 'VFD Microfinance', 'Kuda Bank', 'FCMB',
  'Aso Savings', 'Fortis MFB', 'Parallex Bank', 'Advans MFB', 'NPF MFB',
];

function Track({ reverse, darkMode }) {
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <div className="overflow-hidden relative">
      {/* Fade masks */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none ${
          darkMode
            ? 'bg-gradient-to-r from-zinc-950 to-transparent'
            : 'bg-gradient-to-r from-[#FAFAFA] to-transparent'
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none ${
          darkMode
            ? 'bg-gradient-to-l from-zinc-950 to-transparent'
            : 'bg-gradient-to-l from-[#FAFAFA] to-transparent'
        }`}
      />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} 38s linear infinite`,
          willChange: 'transform',
        }}
      >
        {items.map((name, i) => (
          <div
            key={i}
            className={`flex-shrink-0 px-5 py-2.5 rounded-xl border text-sm font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 ${
              darkMode
                ? 'border-zinc-800 text-zinc-500 bg-zinc-900/40'
                : 'border-zinc-100 text-zinc-400 bg-white'
            }`}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee({ darkMode }) {
  return (
    <section className={`py-16 border-y space-y-4 ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}>
      <p
        className={`text-center text-[11px] font-semibold tracking-widest uppercase mb-8 ${
          darkMode ? 'text-zinc-600' : 'text-zinc-400'
        }`}
      >
        Trusted by 120+ financial institutions across Africa
      </p>
      <Track reverse={false} darkMode={darkMode} />
      <Track reverse={true} darkMode={darkMode} />
    </section>
  );
}
