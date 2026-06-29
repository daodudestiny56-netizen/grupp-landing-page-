'use client';

import { Sparkles, Zap, ShieldCheck, Heart } from 'lucide-react';
import { FadeSlideUp, SlideInRight } from '@/components/ScrollAnimations';

export default function WhyGruppSection() {
  const points = [
    {
      title: 'Transformation',
      description: 'Our easy to use Banking-as-a-Service platform allows digitization of rural and semi-urban communities.',
      icon: <Sparkles size={20} className="text-sky-400" />,
    },
    {
      title: 'Speed',
      description: 'Instead of spending lots of resources on infrastructure and months integrating with different partners, Grupp can get you up and running in days.',
      icon: <Zap size={20} className="text-sky-400" />,
    },
    {
      title: 'Fully Licensed',
      description: 'We handle the regulatory burdens and compliance related matters, so you can focus on your customers\' needs.',
      icon: <ShieldCheck size={20} className="text-sky-400" />,
    },
    {
      title: 'Neutrality',
      description: 'We enable you with total control to meet your peculiar needs',
      icon: <Heart size={20} className="text-sky-400" />,
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#09090b] text-white overflow-hidden border-y border-zinc-900">
      {/* Sleek Grid Mesh */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Colorful Animated Glowing Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-sky-500/18 rounded-full blur-[110px] pointer-events-none animate-blob-1" />
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-blob-2" />
      <div className="absolute bottom-[5%] left-[25%] w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[110px] pointer-events-none animate-blob-3" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeSlideUp>
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Why Grupp?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Only a few numbers of Africa's bankable population has access to digital financial services.
              Grupp is here to equalize access for all.
            </p>
          </div>
        </FadeSlideUp>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <SlideInRight key={point.title} delay={i * 0.1}>
              <div
                className="flex gap-5 items-start p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-sky-500/20 hover:bg-white/[0.03] transition-all duration-350 hover:-translate-y-1 group h-full"
              >
                <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/20 flex-shrink-0 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.1)] group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {point.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </SlideInRight>
          ))}
        </div>
      </div>
    </section>
  );
}
