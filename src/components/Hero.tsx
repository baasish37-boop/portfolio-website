import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Mail, Linkedin, Facebook, Sparkles, BookOpen, GraduationCap, Compass, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, FAMOUS_FORMULAS } from '../data/portfolioData';
import { InteractiveMathCanvas } from './InteractiveMathCanvas';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className={`relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Math Coordinates & Radial Glows */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-math-grid' : 'bg-math-grid-light'} opacity-75`} />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      {/* Floating Mathematical Expressions Across Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {FAMOUS_FORMULAS.slice(0, 5).map((formula, idx) => {
          const positions = [
            'top-20 left-6 sm:left-16 rotate-[-8deg]',
            'top-36 right-8 sm:right-24 rotate-[6deg]',
            'bottom-32 left-10 sm:left-28 rotate-[4deg]',
            'bottom-24 right-12 sm:right-32 rotate-[-10deg]',
            'top-1/2 left-3/4 rotate-[12deg]'
          ];
          return (
            <div
              key={formula.label}
              className={`absolute hidden md:block font-mono text-xs px-3 py-1.5 rounded-lg border backdrop-blur-sm transition-all duration-700 animate-pulse ${
                positions[idx % positions.length]
              } ${
                isDark
                  ? 'bg-slate-900/40 border-cyan-500/20 text-cyan-300/60 shadow-lg'
                  : 'bg-white/40 border-blue-400/20 text-blue-700/60 shadow-sm'
              }`}
            >
              <span>{formula.expr}</span>
            </div>
          );
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting, Main Headline, Subtitle, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                {PERSONAL_INFO.greeting}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs font-mono text-slate-400">Nepal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-display tracking-tight leading-[1.15] mb-4">
              Exploring{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Mathematics
              </span>
              .<br />
              Inspiring Minds.<br />
              <span className="relative inline-block">
                Creating Possibilities.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-cyan-400/40"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.5C40 2 120 2 199 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Dynamic Rotating Subtitle Role */}
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium mb-6 min-h-[32px]">
              <span className="text-slate-400">Dedicated</span>
              <span className="font-semibold text-cyan-400 border-b border-cyan-400/40 pb-0.5">
                {PERSONAL_INFO.subtitles[subtitleIndex]}
              </span>
            </div>

            {/* Supporting Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#education"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 text-slate-950 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all ${
                  isDark
                    ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white hover:border-slate-600'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-400 shadow-sm'
                }`}
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Social Links & Quick Verified Attributes */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700/50"
                  aria-label="Send email to Aasish Bhatt"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700/50"
                  aria-label="Aasish Bhatt LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700/50"
                  aria-label="Aasish Bhatt Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-slate-700/60 hidden sm:block" />

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  B.Sc. Mathematics
                </span>
                <span className="text-slate-500">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                  Secondary Educator
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Math Identity & Interactive Sandbox */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Profile Avatar Card + Visual Mathematics Integration */}
            <div className="w-full max-w-md">
              {/* Profile Card Header with Geometric Halo */}
              <div className={`p-6 rounded-3xl border mb-6 relative overflow-hidden backdrop-blur-xl ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 shadow-2xl' 
                  : 'bg-white/80 border-slate-200 shadow-xl'
              }`}>
                {/* Background decorative corner curve */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-4 mb-4">
                  {/* Photo Placeholder with Geometric Math Border */}
                  <div className="relative group shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 p-[2px] shadow-lg shadow-cyan-500/20">
                      <div className={`w-full h-full rounded-[14px] flex flex-col items-center justify-center overflow-hidden relative ${
                        isDark ? 'bg-slate-950' : 'bg-slate-900'
                      }`}>
                        {/* Avatar SVG Portrait Placeholder */}
                        <svg
                          className="w-12 h-12 text-slate-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <div className="absolute bottom-0 inset-x-0 bg-cyan-950/80 text-[9px] font-mono text-center text-cyan-300 py-0.5">
                          A. BHATT
                        </div>
                      </div>
                    </div>
                    {/* Small status dot */}
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full" title="Active Educator & Inquirer" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                      <span>{PERSONAL_INFO.name}</span>
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">B.Sc. Mathematics</p>
                    <p className="text-xs text-slate-400">Secondary Level Educator · Nepal</p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border text-xs font-mono mb-2 ${
                  isDark ? 'bg-slate-950/70 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <span className="text-cyan-400 font-bold">Focus:</span> Pure & Applied Mathematics, Dynamical Modelling, Lesson Scaffolding & Concept-First Pedagogy.
                </div>
              </div>

              {/* Live Interactive Math Canvas embedded directly into hero */}
              <InteractiveMathCanvas isDark={isDark} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span className="tracking-widest uppercase">Scroll to explore</span>
            <div className={`p-2 rounded-full border transition-all group-hover:border-cyan-400 ${
              isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-white'
            }`}>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
