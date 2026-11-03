import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Compass, 
  MessageSquareText, 
  GraduationCap, 
  FlaskConical, 
  Sparkles, 
  Quote, 
  MapPin, 
  BookMarked, 
  Calculator, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO, CORE_QUALITIES } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
  Compass: <Compass className="w-5 h-5 text-blue-400" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-violet-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-400" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />
};

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const [activeQualityIndex, setActiveQualityIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark 
          ? 'bg-slate-950/90 border-slate-800/80 text-slate-100' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      {/* Decorative math curves background */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-0.5 bg-cyan-400" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400">
              01 · Background & Purpose
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
            A Little About Me
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A portrait of academic passion, classroom pedagogy, and the pursuit of mathematical clarity.
          </p>
        </div>

        {/* Main Content Grid: Narrative & Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Engaging Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-3xl border transition-all ${
              isDark 
                ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-sm' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-6 h-6 text-cyan-400 opacity-60" />
                <h3 className="text-lg font-bold font-display">
                  Transforming Abstract Formulas into Logical Insights
                </h3>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-slate-300">
                <p>
                  I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Mathematics graduate holding a <span className="text-cyan-300 font-medium">Bachelor of Science in Mathematics</span> and an active secondary level mathematics teacher based in Nepal.
                </p>
                <p>
                  My relationship with mathematics began as a fascination with fundamental patterns—how simple axiomatic rules produce the infinite elegance of numbers, curves, and spatial structures. Over years of rigorous academic training in mathematical analysis, differential equations, and applied modelling, this fascination grew into a conviction: mathematics is not a set of rigid algorithms to be feared or memorized, but an empowering creative language.
                </p>
                <p>
                  As an educator, I guide secondary students through that very transformation. I take pride in deconstructing intimidating concepts—whether it is quadratic roots, coordinate geometry, or trigonometric identities—into intuitive, visual, and applicable ideas.
                </p>
                <p>
                  Simultaneously, I maintain an active engagement with research and educational technology. From building dynamic digital demonstrations to exploring mathematical modelling in biology and physics, I continuously seek novel ways to enrich student inquiry and classroom engagement.
                </p>
              </div>

              {/* Quick Metadata Row without pill boxes */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Nepal
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <BookMarked className="w-3.5 h-3.5 text-blue-400" /> B.Sc. Mathematics
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Calculator className="w-3.5 h-3.5 text-violet-400" /> Applied Modelling
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Secondary Pedagogy
                </span>
              </div>
            </div>
          </div>

          {/* Right: Modern Profile Card with Photo Placeholder & Personal Statement */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border relative overflow-hidden backdrop-blur-sm ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 shadow-2xl' 
                : 'bg-white border-slate-200 shadow-xl'
            }`}>
              {/* Geometric background mesh */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/10 via-cyan-500/10 to-transparent rounded-full pointer-events-none" />

              {/* Photograph Placeholder */}
              <div className="relative mb-6 mx-auto flex flex-col items-center">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-[2.5px] shadow-xl shadow-cyan-500/20">
                  <div className={`w-full h-full rounded-[14px] flex flex-col items-center justify-center p-4 text-center overflow-hidden relative ${
                    isDark ? 'bg-slate-950' : 'bg-slate-900'
                  }`}>
                    {/* Portrait Icon */}
                    <svg
                      className="w-16 h-16 text-slate-400 mb-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider">
                      Aasish Bhatt
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <h4 className="text-lg font-bold font-display">{PERSONAL_INFO.name}</h4>
                  <p className="text-xs font-mono text-cyan-400">Mathematics Graduate & Secondary Teacher</p>
                  <p className="text-xs text-slate-400 mt-0.5">Location: Nepal</p>
                </div>
              </div>

              {/* Short Personal Statement */}
              <div className={`p-5 rounded-2xl border text-sm leading-relaxed mb-6 ${
                isDark 
                  ? 'bg-slate-950/60 border-slate-800 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <p className="italic font-serif text-slate-200 text-sm">
                  &ldquo;I believe mathematics is not just about numbers and equations; it is a language of logic, creativity, and discovery. My goal is to illuminate its beauty and equip young minds with lifelong critical thinking tools.&rdquo;
                </p>
              </div>

              {/* Core Interests List */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                  Professional Interests
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {PERSONAL_INFO.interests.map((interest) => (
                    <div
                      key={interest}
                      className={`p-2 rounded-lg border flex items-center gap-2 ${
                        isDark 
                          ? 'bg-slate-950/40 border-slate-800/80 text-slate-300' 
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Qualities Showcase */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold font-display tracking-tight">
                Core Strengths & Pedagogical Qualities
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                The pillars defining my approach as a mathematician and educator
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_QUALITIES.map((quality, idx) => (
              <div
                key={quality.title}
                onMouseEnter={() => setActiveQualityIndex(idx)}
                onMouseLeave={() => setActiveQualityIndex(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 relative group ${
                  activeQualityIndex === idx
                    ? isDark
                      ? 'bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-500/10 -translate-y-1'
                      : 'bg-white border-blue-400 shadow-lg -translate-y-1'
                    : isDark
                    ? 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${
                    isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    {iconMap[quality.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h4 className="text-lg font-bold font-display mb-2 group-hover:text-cyan-400 transition-colors">
                  {quality.title}
                </h4>

                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
