import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a0d12] text-white border-t border-slate-800">
      
      {/* Contact Banner */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4 text-left rtl:text-right">
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Book a Tactical Session
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Available for professional team consultation, individual high-performance player coaching, and match analysis in Doha.
              </p>

              <div className="pt-4 space-y-3">
                <a
                  href="https://wa.me/97466832375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">+974 6683 2375</span>
                </a>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">Doha, Qatar</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="https://wa.me/97466832375"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-5 rounded-2xl transition-all shadow-lg shadow-emerald-500/10 text-base uppercase"
              >
                <Send className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mandatory Developer Credits */}
      <div className="border-t border-slate-900 bg-black/80 py-6 text-center text-xs text-slate-400 space-y-1.5">
        <p>© {new Date().getFullYear()} Amine Khatim. All rights reserved.</p>
        <p className="text-slate-500">
          Powered by: <a href="https://xenosysweb.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Xenosysweb.com</a> | CR: 250039 | Location: Doha, Qatar
        </p>
      </div>

    </footer>
  );
}