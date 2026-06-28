'use client';

import { Zap, Users, LayoutGrid, Activity, CheckCircle2 } from 'lucide-react';

/* ── Mini Ledger Snippet ─────────────────────────────── */
function LedgerSnippet({ darkMode }) {
  const rows = [
    { label: 'Opening Balance', amount: '₦2,400,000', type: 'neutral' },
    { label: 'Member Contributions', amount: '+₦840,000', type: 'credit' },
    { label: 'Loan Disbursements', amount: '-₦1,100,000', type: 'debit' },
    { label: 'Interest Accrued', amount: '+₦24,500', type: 'credit' },
    { label: 'Closing Balance', amount: '₦2,164,500', type: 'neutral' },
  ];
  return (
    <div className={`rounded-xl border overflow-hidden text-xs font-mono ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
      <div className={`px-4 py-2.5 border-b flex items-center gap-2 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-100'}`}>
        <LayoutGrid size={12} className="text-emerald-500" />
        <span className={`font-sans font-semibold text-[11px] tracking-tight ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
          Ledger · Q2 2025
        </span>
      </div>
      <div className={`divide-y ${darkMode ? 'divide-zinc-800/60 bg-zinc-900/30' : 'divide-zinc-50 bg-white'}`}>
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between items-center px-4 py-2">
            <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>{r.label}</span>
            <span className={`font-sans font-semibold ${
              r.type === 'credit' ? 'text-emerald-500' :
              r.type === 'debit' ? 'text-red-400' :
              darkMode ? 'text-zinc-200' : 'text-zinc-800'
            }`}>{r.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Agent Bars ──────────────────────────────────────── */
function AgentBar({ name, agents, settled, uptime, darkMode }) {
  return (
    <div className={`p-4 rounded-xl border ${darkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-100 bg-zinc-50'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className={`text-xs font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{name}</span>
        <span className="text-xs font-mono font-bold text-emerald-500">{uptime}%</span>
      </div>
      <div className={`flex gap-3 text-xs mb-2.5 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
        <span><span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>{agents}</span> active agents</span>
        <span><span className="text-emerald-500">{settled}</span> settled</span>
      </div>
      <div className={`h-1 rounded-full overflow-hidden ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
        <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${uptime}%` }} />
      </div>
    </div>
  );
}

/* ── Card wrapper ────────────────────────────────────── */
function Card({ children, darkMode, className = '' }) {
  return (
    <div
      className={`relative p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
        darkMode
          ? 'border-zinc-800/70 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-black/30'
          : 'border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-2xl hover:shadow-zinc-200/60'
      } ${className}`}
    >
      {/* Glow edge on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px rgba(16,185,129,0.15)` }} />
      {children}
    </div>
  );
}

function IconBadge({ icon, darkMode }) {
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
      darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
    }`}>
      {icon}
    </div>
  );
}

function FeatureList({ items, darkMode }) {
  return (
    <ul className={`space-y-1.5 text-xs mt-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
      {items.map((f) => (
        <li key={f} className="flex items-center gap-2">
          <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
          {f}
        </li>
      ))}
    </ul>
  );
}

/* ── Section heading ─────────────────────────────────── */
function SectionLabel({ children, darkMode }) {
  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide border ${
      darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-50 border-zinc-100 text-zinc-500'
    }`}>{children}</span>
  );
}

/* ── Main export ─────────────────────────────────────── */
export default function BentoGrid({ darkMode }) {
  return (
    <section id="products" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel darkMode={darkMode}>Core Pillars</SectionLabel>
          <h2 className={`mt-5 text-4xl md:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
            Engineered for{' '}
            <em className="font-serif font-normal italic text-emerald-500 not-italic" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
              scale
            </em>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Purpose-built modules for community banks, cooperatives, and microfinance institutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* A: Digital Ledgers — tall */}
          <Card darkMode={darkMode} className="md:row-span-2">
            <IconBadge icon={<LayoutGrid size={18} />} darkMode={darkMode} />
            <h3 className={`text-base font-bold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Digital Ledgers
            </h3>
            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Spin up multi-tier digital ledgers in seconds. Track member contributions, loan disbursements, and interest accrual with double-entry precision.
            </p>
            <LedgerSnippet darkMode={darkMode} />
            <FeatureList
              darkMode={darkMode}
              items={['Double-entry accounting', 'Automated reconciliation', 'Real-time audit trail', 'GAAP-ready exports']}
            />
          </Card>

          {/* B: Automated Lending */}
          <Card darkMode={darkMode}>
            <IconBadge icon={<Zap size={18} />} darkMode={darkMode} />
            <h3 className={`text-base font-bold tracking-tight mb-1.5 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Automated Lending
            </h3>
            <p className={`text-sm mb-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              AI-powered credit scoring and instant loan routing with zero manual overhead.
            </p>
            {/* Big focal number */}
            <div className="my-3">
              <span
                className="text-[72px] font-black leading-none text-emerald-500 tracking-tighter"
                style={{ textShadow: '0 0 60px rgba(16,185,129,0.35)' }}
              >
                0s
              </span>
              <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Processing time
              </p>
            </div>
            <div className={`flex gap-5 text-xs pt-4 border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
              {[['94.7%', 'Approval rate'], ['₦4.2B', 'Total disbursed'], ['2.3%', 'Default rate']].map(([v, l]) => (
                <div key={l}>
                  <p className={`text-base font-bold tracking-tight ${v === '2.3%' ? 'text-emerald-500' : darkMode ? 'text-white' : 'text-zinc-950'}`}>{v}</p>
                  <p className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>{l}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* C: Network Health */}
          <Card darkMode={darkMode} className={`${darkMode ? 'bg-gradient-to-br from-emerald-500/[0.07] to-zinc-900/40' : 'bg-gradient-to-br from-emerald-50/60 to-white border-emerald-100/60'}`}>
            <div className="flex items-center gap-2 mb-5">
              <Activity size={16} className="text-emerald-500" />
              <span className={`text-xs font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Network Health
              </span>
              <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                ['1,847', 'Active Nodes', false],
                ['99.98%', 'Uptime', true],
                ['4,219', 'Txn / Sec', false],
                ['2.1ms', 'Avg Latency', true],
              ].map(([v, l, em]) => (
                <div key={l}>
                  <p className={`text-2xl font-black tracking-tight ${em ? 'text-emerald-500' : darkMode ? 'text-white' : 'text-zinc-950'}`}>{v}</p>
                  <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>{l}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* D: Agency Management — tall */}
          <Card darkMode={darkMode} className="md:row-span-2">
            <IconBadge icon={<Users size={18} />} darkMode={darkMode} />
            <h3 className={`text-base font-bold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-zinc-950'}`}>
              Agency Management
            </h3>
            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Orchestrate hundreds of field agents across geographies. Real-time settlement, GPS tracking, and commission management at scale.
            </p>
            <div className="space-y-3 mb-5">
              <AgentBar name="Kano South Hub" agents={142} settled="₦12.4M" uptime={99} darkMode={darkMode} />
              <AgentBar name="Lagos Island" agents={98} settled="₦8.9M" uptime={100} darkMode={darkMode} />
              <AgentBar name="Abuja FCT" agents={207} settled="₦21.3M" uptime={97} darkMode={darkMode} />
            </div>
            <FeatureList
              darkMode={darkMode}
              items={['Live agent geo-mapping', 'Auto commission calculation', 'Performance KPI dashboards', 'Offline-capable mobile SDK']}
            />
          </Card>

        </div>
      </div>
    </section>
  );
}
