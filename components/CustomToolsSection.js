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
      icon: <Landmark size={20} className="text-zinc-400 group-hover:text-sky-500 transition-colors" />,
      visual: (
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
          <div className="relative bg-white rounded-[24px] shadow-2xl shadow-sky-900/20 animate-float overflow-hidden w-48 md:w-56 aspect-square flex items-center justify-center">
            <video 
              src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/pos-payment-animation-gif-download-9769620.mp4"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-[110%] h-[110%] object-cover max-w-none"
            />
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
      icon: <CreditCard size={20} className="text-zinc-400 group-hover:text-sky-500 transition-colors" />,
      visual: (
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-40 md:w-48 shadow-xl animate-float">
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
      icon: <ShieldCheck size={20} className="text-zinc-400 group-hover:text-sky-500 transition-colors" />,
      visual: (
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-40 md:w-48 shadow-xl animate-float">
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
    <section className="py-16 md:py-24 px-[var(--page-px)] bg-transparent text-white overflow-hidden relative z-10">
      <FadeSlideUp>
        <div className="max-w-[1280px] mx-auto">
        
          {/* Title */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[clamp(32px,5vw,48px)] leading-[1.1] font-extrabold tracking-[-0.02em]">
              Unlock <span className="text-sky-500">Custom-Built</span> Tools
            </h2>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            
            {/* Active Card - Left */}
            <div className="lg:col-span-7 xl:col-span-8 rounded-[24px] md:rounded-[32px] bg-[#38BDF8] p-6 sm:p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 justify-between items-center shadow-xl shadow-sky-500/10">
              
              {/* Text description (Bottom on mobile, Left on Desktop) */}
              <div className="flex-1 space-y-4 md:space-y-6 order-last md:order-first w-full text-center md:text-left">
                <span className="inline-block text-[10px] md:text-xs uppercase tracking-wider font-bold text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  {tabs[activeTab].title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                  {tabs[activeTab].header}
                </h3>
                <p className="text-white/90 text-[15px] leading-relaxed max-w-md mx-auto md:mx-0">
                  {tabs[activeTab].description}
                </p>

                {/* Action Buttons/Links */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  {tabs[activeTab].links ? (
                    tabs[activeTab].links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center justify-center gap-2 text-sm font-bold bg-white text-sky-600 px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:bg-sky-50 hover:-translate-y-px w-full sm:w-auto"
                      >
                        {link.label}
                        <ArrowRight size={14} />
                      </a>
                    ))
                  ) : (
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-bold bg-white text-sky-600 px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:bg-sky-50 hover:-translate-y-px w-full sm:w-auto">
                      {tabs[activeTab].action}
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Panel (Top on mobile, Right on Desktop) */}
              <div className="w-full md:w-[45%] flex justify-center order-first md:order-last">
                {tabs[activeTab].visual}
              </div>
            </div>

            {/* Inactive Tab List - Right */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 justify-center h-full">
              {getInactiveTabs().map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="w-full text-left p-5 md:p-6 rounded-[20px] md:rounded-[24px] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-sky-500/50 backdrop-blur-sm transition-all duration-300 group flex items-start justify-between cursor-pointer"
                >
                  <div className="space-y-2 flex-1 pr-4">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 rounded-xl bg-white/10 text-zinc-400 group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors duration-300">
                        {tab.icon}
                      </span>
                      <h4 className="text-[15px] font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors duration-300">
                        {tab.title}
                      </h4>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed">
                      {tab.preview}
                    </p>
                  </div>
                  <div className="p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 group-hover:text-sky-400 group-hover:border-sky-400 group-hover:bg-sky-500/10 transition-all duration-300 mt-1">
                    <ArrowRight size={14} />
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
