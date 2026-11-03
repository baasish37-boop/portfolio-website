import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'philosophy', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Emblem */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Aasish Bhatt Homepage"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-mono font-bold text-sm tracking-tighter ${
                isDark ? 'bg-slate-950 text-cyan-300' : 'bg-slate-900 text-cyan-300'
              }`}>
                <span>∑</span>
                <span className="text-violet-300">B</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className={`text-base font-bold font-display tracking-tight transition-colors ${
                isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono tracking-wide text-slate-400 -mt-0.5">
                B.Sc. Mathematics · Educator
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                    isActive
                      ? isDark ? 'text-cyan-400 font-bold' : 'text-blue-600 font-bold'
                      : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons: Theme Toggle & Quick CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-xl transition-all border ${
                isDark
                  ? 'bg-slate-900/80 border-slate-700/80 text-amber-400 hover:bg-slate-800 hover:border-slate-600'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`lg:hidden p-2 rounded-xl border ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden mt-3 p-5 rounded-2xl border backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200 ${
              isDark ? 'bg-slate-950/95 border-slate-800 shadow-2xl' : 'bg-white/95 border-slate-200 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? isDark
                        ? 'bg-cyan-500/15 text-cyan-400'
                        : 'bg-blue-50 text-blue-600'
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Location: Nepal</span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
              >
                <span>Contact Aasish</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
