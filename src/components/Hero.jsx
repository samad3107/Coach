import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, MapPin, Calendar, Play } from 'lucide-react';
import SafeImage from './SafeImage';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0d12] text-white pt-28 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>AFC A Licensed Coach</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Amine Khatim
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300">
              High-Performance Football Coaching & Tactical Analysis
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Doha, Qatar</span>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/97466832375"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/10 text-sm uppercase"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Tactical Session</span>
              </a>

              <a
                href="#tactics"
                className="flex items-center gap-2 border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-all text-sm uppercase"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>View Tactical Breakdown</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <SafeImage
                  src="/assets/images/hero-main.jpg"
                  alt="Coach Amine Khatim Pitchside"
                  className="w-full h-[450px]"
                  objectFit="object-cover"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/80 to-transparent p-6">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    Tactical Specialist
                  </span>
                  <p className="text-white text-sm font-semibold">
                    Professional Field Coaching & Match Analysis in Qatar
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}