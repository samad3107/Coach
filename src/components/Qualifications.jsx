import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Shield, FileText, Activity } from 'lucide-react';
import SafeImage from './SafeImage';

export default function Qualifications() {
  const { t } = useTranslation();

  const certs = [
    {
      title: "Physical Fitness Certificate",
      issuer: "Qatar Olympic Academy & Qatar University",
      description: "Official completion of the professional Physical Fitness program in Doha, Qatar.",
      image: "/assets/images/qfa-diploma.jpg",
      icon: Award
    },
    {
      title: "Fitness Trainer Level 1",
      issuer: "European Institute & PERF-UP",
      description: "100-hour joint course covering sports performance optimization and athlete conditioning.",
      image: "/assets/images/fitness-trainer-cert.jpg",
      icon: Shield
    },
    {
      title: "Tactical Video Analyst",
      issuer: "SICS Match Analyst Certification",
      description: "Specialized certification in match video analysis, spatial breakdown, and tactical reporting.",
      image: "/assets/images/tactical-video-analysis.jpg",
      icon: Activity
    },
    {
      title: "Certified Fitness Trainer Level 3",
      issuer: "Official Sports Licensing Board",
      description: "Advanced physical trainer qualification for high-performance individual and team athletes.",
      image: "/assets/images/doha-team-doc.jpg",
      icon: FileText
    }
  ];

  return (
    <section id="qualifications" className="py-24 bg-[#0a0d12] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
            Verified Licensing & Education
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Qualifications & Diplomas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Backed by Asian Football Confederation standards, Qatar Olympic Academy, and international sports institutes.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed pt-2">
                    {cert.description}
                  </p>
                </div>

                {/* Certificate Preview */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950 border-t border-slate-800/80 p-3">
                  <SafeImage
                    src={cert.image}
                    alt={cert.title}
                    objectFit="object-contain"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}