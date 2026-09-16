import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Award, Shield } from 'lucide-react';
import SafeImage from './SafeImage';

export default function PlayingCareer() {
  const { t } = useTranslation();

  const careerHighlights = [
    {
      title: "Qatar Squad Representation",
      category: "Playing Career",
      description: "Represented Qatar on the pitch in competitive national-level tournaments.",
      image: "/assets/images/qatar-team.jpg",
      icon: Award
    },
    {
      title: "Fixtures vs. International Clubs",
      category: "Match Experience",
      description: "Competed against top European clubs including Zenit St. Petersburg during training camps in Doha.",
      image: "/assets/images/zenit-match-1.jpg",
      icon: Shield
    },
    {
      title: "Al Dafna FC Youth Academy",
      category: "Youth Development",
      description: "Mentoring young grassroot players on tactical positioning, fundamental techniques, and teamwork.",
      image: "/assets/images/al-dafna-academy.jpg",
      icon: Users
    }
  ];

  return (
    <section id="career" className="py-24 bg-[#0a0d12] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
            Pitch Experience & Player Pathways
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Playing Career & Youth Development
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From playing at the highest level in Qatar to building future talent at top academies.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    objectFit="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0d12]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}