'use client';

import { useState } from 'react';
import { CreditCard, ShieldCheck, Landmark, ArrowRight, Server, FileText } from 'lucide-react';
import { FadeSlideUp } from '@/components/ScrollAnimations';

export default function CustomToolsSection() {
  const [activeTab, setActiveTab] = useState('sme');

  // Define tab details
  const tabs = {
    sme: {
      id: 'sme',
      title: 'SME Banking',
      header: 'Community banking as a service',
      description:
        'Today we empower much broader financial institutions to be digitally connected to the offline communities by enabling them with all the resources needed to power financial services to the underserved through mobile money agents. Customized in their brands, backed by Grupp.',
      action: 'Learn More',
      preview: 'We aid in fulfilling your financial inclusion aspirations while delivering...',
      icon: <Landmark size={20} className="text-zinc-650" />,
      visual: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-48 shadow-xl animate-float">
            {/* POS terminal body */}
            <div className="bg-sky-600 rounded-xl p-4 border border-sky-400/30">
              {/* Receipt slot */}
              <div className="h-6 bg-white rounded-t-lg flex items-end justify-center mb-3">
                <span className="w-10 h-1 bg-zinc-300 rounded mb-1" />
              </div>
              {/* Screen */}
              <div className="h-10 bg-zinc-950 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-sky-400">grupp.</span>
              </div>
              {/* Keyboard/Button grids */}
              <div className="grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-2.5 bg-sky-500/50 rounded-sm" />
                ))}
              </div>
            </div>
            {/* Pedestal */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-3 bg-zinc-950/20 rounded-full blur-md" />
          </div>
        </div>
      ),
    },
    payment: {
      id: 'payment',
      title: 'Payment',
      header: 'Payment Infrastructure',
      description:
        'Connect to multiple channels to give your end-users the best payments experience. Whether in person point-of-sales terminals, Nuban, or APIs for disbursements, you can rely on our robust infrastructure to always have you covered.',
      links: [
        { label: 'Terminal', href: '#' },
        { label: 'Nuban', href: '#' },
      ],
      preview: 'You can offer full-scale payment services. Leverage...',
      icon: <CreditCard size={20} className="text-zinc-650" />,
      visual: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-48 shadow-xl animate-float">
            {/* Database server rack */}
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-sky-600 rounded-lg p-2.5 border border-sky-400/30 flex items-center justify-between">
                  <Server size={14} className="text-white" />
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    lending: {
      id: 'lending',
      title: 'Lending',
      header: 'Lending',
      description:
        'Lending to underserved businesses often comes with high credit risks, increased operational costs, repeated data entry, paperwork, and human error. Enjoy a fully regulated, secured, digitalized, and automated end-to-end lending process; to help you serve even the most complex of business borrowers.',
      action: 'Learn More',
      preview: 'No more manual process of Loan Origination; Gain a competitive edge using Grupp.',
      icon: <ShieldCheck size={20} className="text-zinc-650" />,
      visual: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-48 shadow-xl animate-float">
            {/* ID / Lending badge */}
            <div className="bg-sky-600 rounded-xl p-3 border border-sky-400/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center">
                  <FileText size={14} className="text-sky-600" />
                </div>
                <div>
                  <div className="w-12 h-1.5 bg-white rounded" />
                  <div className="w-8 h-1 bg-white/60 rounded mt-1" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-1 bg-white/30 rounded" />
                <div className="w-full h-1 bg-white/30 rounded" />
                <div className="w-3/4 h-1 bg-white/30 rounded" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const getInactiveTabs = () => {
    return Object.values(tabs).filter((tab) => tab.id !== activeTab);
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden">
      <FadeSlideUp>
        <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold tracking-tight mb-12">
          Unlock <span className="text-sky-500">Custom-Built</span> Tools
        </h2>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Active Card - Left (Col Span 2) */}
          <div className="lg:col-span-2 rounded-3xl bg-[#38BDF8] p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 justify-between items-center shadow-xl shadow-sky-500/10">
            {/* Text description */}
            <div className="flex-1 space-y-6">
              <span className="text-xs uppercase tracking-wider font-bold text-white/80">
                {tabs[activeTab].title}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {tabs[activeTab].header}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-md">
                {tabs[activeTab].description}
              </p>

              {/* Action Buttons/Links */}
              {tabs[activeTab].links ? (
                <div className="flex gap-4">
                  {tabs[activeTab].links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-sky-600 px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-sky-50 shadow-lg hover:-translate-y-px"
                    >
                      {link.label}
                      <ArrowRight size={13} />
                    </a>
                  ))}
                </div>
              ) : (
                <button className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-sky-600 px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-sky-50 shadow-lg hover:-translate-y-px">
                  {tabs[activeTab].action}
                  <ArrowRight size={13} />
                </button>
              )}
            </div>

            {/* Visual Panel */}
            <div className="w-full md:w-1/2 flex justify-center">
              {tabs[activeTab].visual}
            </div>
          </div>

          {/* Inactive Tab List - Right (Col Span 1) */}
          <div className="flex flex-col gap-4">
            {getInactiveTabs().map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="w-full text-left p-6 rounded-2xl border border-zinc-150 dark:border-zinc-800 bg-[#FAFAFA] dark:bg-zinc-900/50 hover:border-sky-300 dark:hover:border-sky-900 transition-all duration-300 group flex items-start justify-between shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="space-y-2 flex-1 pr-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-sky-500/10 group-hover:text-sky-500 transition-colors duration-300">
                      {tab.icon}
                    </span>
                    <h4 className="text-sm font-bold tracking-tight text-zinc-800 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
                      {tab.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {tab.preview}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900 text-zinc-400 group-hover:text-sky-500 group-hover:border-sky-400 transition-all duration-300 mt-1">
                  <ArrowRight size={13} />
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
      </FadeSlideUp>
    </section>
  );
}
