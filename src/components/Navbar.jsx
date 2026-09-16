import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('nav.about'), href: '#hero' },
    { name: t('nav.qualifications'), href: '#qualifications' },
    { name: t('nav.tactics'), href: '#tactics' },
    { name: t('nav.career'), href: '#career' },
    { name: t('nav.gallery'), href: '#gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0d12]/90 backdrop-blur-md z-50 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-wider text-white uppercase">
              AMINE KHATIM
            </span>
            <span className="hidden sm:inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              AFC A
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 font-medium transition-colors duration-200 text-sm tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/97466832375"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-emerald-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>{t('nav.contact')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0d12] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-slate-200 hover:text-emerald-400 font-medium text-base uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/97466832375"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-bold py-2.5 rounded-lg text-sm w-full uppercase"
          >
            <Phone className="w-4 h-4" />
            <span>{t('nav.contact')}</span>
          </a>
        </div>
      )}
    </nav>
  );
}