import React from 'react';
import { Award, FileText, Shield, Target } from 'lucide-react';
import SafeImage from './SafeImage';

export default function PlayingCareer() {
  const careerPictures = [
    {
      title: "Qatar Squad Representation",
      category: "National Level",
      image: "/assets/images/qatar-team.jpg",
      description: "Represented Qatar in elite regional fixtures and national team training environments."
    },
    {
      title: "Tactical & Pitchside Briefings",
      category: "Pitchside Leadership",
      image: "/assets/images/career-pitchside.jpg",
      description: "Collaborating on tactical setups, player conditioning, and matchday positioning."
    },
    {
      title: "Matchday Starting Lineup",
      category: "First Team Experience",
      image: "/assets/images/career-lineup.jpg",
      description: "Competing in top-tier official league and cup fixtures."
    },
    {
      title: "International Pro Experience",
      category: "Locker Room & Elite Mentorship",
      image: "/assets/images/career-locker.jpg",
      description: "Sharing the dressing room and training grounds with world-class international professionals."
    }
  ];

  const coachingPictures = [
    {
      title: "Tactical Briefings & Squad Setup",
      category: "Matchday Tactics",
      image: "/assets/images/coaching-tactics.jpg",
      description: "Conducting post-session tactical breakdowns and pitchside positioning instructions."
    },
    {
      title: "Match Preparation vs. Zenit Saint Petersburg",
      category: "International Fixtures",
      image: "/assets/images/coaching-zenit.jpg",
      description: "Leading tactical preparation and matchday management against European powerhouse Zenit Saint Petersburg."
    },
    {
      title: "Youth Academy Development",
      category: "Grassroots & Academy",
      image: "/assets/images/coaching-academy.jpg",
      description: "Mentoring and training youth prospects at Al Dafna FC Academy in foundational football principles."
    },
    {
      title: "Pitchside Match Control",
      category: "First Team Management",
      image: "/assets/images/coaching-pitchside.jpg",
      description: "Directing gameplay strategies and team formation live from the technical area."
    },
    {
      title: "First Team Coaching Staff",
      category: "Squad Leadership",
      image: "/assets/images/coaching-team.jpg",
      description: "Leading competitive first-team squads through official league matches and tournaments."
    }
  ];

  return (
    <section id="career" className="py-24 bg-[#0a0d12] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SUBHEADING 1: PLAYER CAREER */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
              On-Pitch Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Player Career
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Competitive pitch experience across top-tier regional matches, international training fixtures, and elite locker room environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPictures.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    objectFit="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0d12]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBHEADING 2: COACHING EXPERIENCE */}
        <div className="space-y-12 border-t border-slate-800/60 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
              Technical & Tactical Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Coaching Experience
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Hands-on leadership across high-profile international matches, youth development, squad management, and tactical preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coachingPictures.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    objectFit="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0d12]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <Target className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBHEADING 3: PROFESSIONAL CV DIPLOMA */}
        <div className="space-y-10 border-t border-slate-800/60 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
              Licensing & Accreditation
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Professional CV
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Official AFC certification, Qatar Olympic Academy credentials, and physical fitness specialization.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:order-2 relative h-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <SafeImage
                src="/assets/images/cv.jpg"
                alt="Professional CV & Diploma"
                className="w-full h-full"
                objectFit="object-contain"
              />
            </div>

            <div className="md:col-span-6 md:order-1 space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <FileText className="w-4 h-4" />
                <span>Verified Documentation</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                AFC A License & Official Qualifications
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Accredited by the Asian Football Confederation (AFC), Qatar Olympic Academy, and specialized European sports institutes. Prepared for senior team management, high-performance coaching, and tactical analysis.
              </p>
              <div className="pt-2">
                <a
                  href="/assets/images/cv.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>Inspect License Document</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}