import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, X } from 'lucide-react';
import SafeImage from './SafeImage';

export default function MediaGallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { src: '/assets/images/pitch.jpg', alt: 'Coach Amine Khatim Pitchside', title: 'Pitch Side Coaching' },
    { src: '/assets/images/skill.jpg', alt: 'Skill Demonstration', title: 'Technical Skill Demo' },
    { src: '/assets/images/qfa-seminar.jpg', alt: 'QFA Classroom Seminar', title: 'Tactical Seminar Session' },
    { src: '/assets/images/zenit-match-1.jpg', alt: 'Friendly Match Action', title: 'Zenit Friendly Match' },
    { src: '/assets/images/qatar-team.jpg', alt: 'Qatar National Squad', title: 'Qatar Squad Lineup' },
    { src: '/assets/images/al-dafna-academy.jpg', alt: 'Academy Players', title: 'Youth Academy Session' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#07090e] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
            Visual Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Media Gallery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Moments on the pitch, tactical seminars, and match action highlights.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.src)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer hover:border-emerald-500/40 transition-all duration-300"
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                objectFit="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">{item.alt}</p>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedImage && (
          <div 
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-emerald-400 p-2"
              >
                <X className="w-7 h-7" />
              </button>
              <SafeImage
                src={selectedImage}
                alt="Enlarged view"
                objectFit="object-contain"
                className="w-full max-h-[85vh] rounded-xl border border-slate-800 bg-slate-950"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}