import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Shield, FileText, Activity, Eye, X } from 'lucide-react';
import SafeImage from './SafeImage';

export default function Qualifications() {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null);

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
    },
    {
      title: "Qatar Armed Forces Military Certificate",
      issuer: "Qatar Armed Forces Military Sports Association",
      description: "Official certificate of participation & achievements with El Jaish FC and Qatar Military National Team (2nd Place Military World Cup Oman, 5th Place CISM Korea).",
      image: "/assets/images/cert-qatar-armed-forces.jpg",
      icon: Award
    },
    {
      title: "CISM 6th World Military Games Certificate",
      issuer: "Conseil International du Sport Militaire (CISM)",
      description: "Official tournament diploma awarded for achieving 5th place in Men's Football at the Mungyeong 2015 World Military Games.",
      image: "/assets/images/cert-cism-world-games.jpg",
      icon: Shield
    },
    {
      title: "Doha Sport Team Head Coach Certification",
      issuer: "Doha Sport Team / Qatar Football Association",
      description: "Official testimonial certifying appointment and continuous service as Head Coach for Doha Sport Team during the 2019/2020 season.",
      image: "/assets/images/cert-doha-sport-team.jpg",
      icon: FileText
    }
  ];

  return (
    <section id="qualifications" className="py-24 bg-[#0a0d12] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
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
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-64 w-full overflow-hidden bg-slate-950 border-t border-slate-800/80 p-3 cursor-pointer group"
                >
                  <SafeImage
                    src={cert.image}
                    alt={cert.title}
                    objectFit="object-contain"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-emerald-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Document</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div>
                <h4 className="text-sm font-bold text-white">{selectedCert.title}</h4>
                <p className="text-xs text-emerald-400">{selectedCert.issuer}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative max-h-[75vh] overflow-y-auto rounded-xl bg-slate-950 flex items-center justify-center p-2 border border-slate-800">
              <SafeImage
                src={selectedCert.image}
                alt={selectedCert.title}
                objectFit="object-contain"
                className="w-full max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}