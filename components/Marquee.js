'use client';

const PARTNERS = [
  'FirstBank MFB', 'LAPO Microfinance', 'Accion MFB', 'Grooming MFB', 'Renmoney',
  'AB Microfinance', 'FINCA Nigeria', 'VFD Microfinance', 'Kuda Bank', 'FCMB',
  'Aso Savings', 'Fortis MFB', 'Parallex Bank', 'Advans MFB', 'NPF MFB',
];

function Track({ reverse, darkMode }) {
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <div className="overflow-hidden relative marquee-mask">
      <div
        className={`flex gap-4 w-max ${reverse ? 'marquee-reverse-animation' : 'marquee-animation'}`}
        style={{ willChange: 'transform' }}
      >
        {items.map((name, i) => (
          <div
            key={i}
            className={`flex-shrink-0 px-[14px] py-[6px] text-[12px] md:px-5 md:py-2.5 md:text-sm rounded-xl border font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 ${
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
      <style dangerouslySetInnerHTML={{__html: `
        .marquee-animation { animation: marquee 20s linear infinite; }
        .marquee-reverse-animation { animation: marquee-reverse 20s linear infinite; }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }
        
        @media (min-width: 768px) {
          .marquee-animation { animation: marquee 28s linear infinite; }
          .marquee-reverse-animation { animation: marquee-reverse 28s linear infinite; }
        }
        
        @media (min-width: 1024px) {
          .marquee-animation { animation: marquee 35s linear infinite; }
          .marquee-reverse-animation { animation: marquee-reverse 35s linear infinite; }
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          }
        }
      `}} />
      <p
        className={`text-center text-[11px] font-semibold tracking-widest uppercase mb-8 ${
          darkMode ? 'text-zinc-600' : 'text-zinc-400'
        }`}
      >
        Trusted by 120+ financial institutions across Africa
      </p>
      <Track reverse={false} darkMode={darkMode} />
      <div className="hidden md:block">
        <Track reverse={true} darkMode={darkMode} />
      </div>
    </section>
  );
}
