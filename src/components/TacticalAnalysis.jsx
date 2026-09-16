import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Activity, Target, Layers } from 'lucide-react';
import SafeImage from './SafeImage';

export default function TacticalAnalysis() {
  const { t } = useTranslation();

  return (
    <section id="tactics" className="py-24 bg-[#07090e] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
            Modern Coaching Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Tactical Analysis & Pitch Drills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed opposition analysis combined with high-intensity spatial awareness and agility conditioning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Tactical Match Analysis Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <SafeImage
                src="/assets/images/tactical-analysis.jpg"
                alt="Tactical Match Breakdown"
                className="w-full h-72 sm:h-80"
                objectFit="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#0a0d12]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-2">
                <Target className="w-3.5 h-3.5" />
                <span>Match Analysis</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                Structural Shape & Spatial Control
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Breaking down team positioning, pressing triggers, and defensive transitions with computerized visual overlays for video feedback sessions.
              </p>
            </div>
          </div>

          {/* Actual Video Execution Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black h-72 sm:h-80 flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="/assets/images/profile-action.jpg"
              >
                <source src="/assets/videos/agility-drill.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-3 left-3 bg-[#0a0d12]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-2 pointer-events-none z-10">
                <Activity className="w-3.5 h-3.5" />
                <span>Live Drill Execution</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                High-Intensity Hurdle & Footwork Drills
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Practical execution on the pitch targeting plyometrics, rapid foot movement, and high-tempo coordination for elite players.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}