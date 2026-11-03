import React from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Users, 
  BookOpen, 
  BrainCircuit, 
  Lightbulb,
  FileCheck2
} from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const currentExp = EXPERIENCE_LIST[0];

  return (
    <section
      id="experience"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950/80 border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-0.5 bg-violet-500" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-violet-400">
              03 · Pedagogical Practice
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
            What I Do
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Empowering secondary school students to conquer mathematical anxiety and uncover the beauty of logical discovery.
          </p>
        </div>

        {/* Featured Current Role Hero Card */}
        <div className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden mb-12 backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 border-slate-700/80 shadow-2xl' 
            : 'bg-gradient-to-br from-white via-slate-50 to-slate-100/60 border-slate-200 shadow-xl'
        }`}>
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Role Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[2px] shadow-lg shadow-violet-500/20">
                <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${
                  isDark ? 'bg-slate-950 text-cyan-300' : 'bg-slate-900 text-cyan-300'
                }`}>
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-0.5">
                  Current Professional Role
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {currentExp.role}
                </h3>
              </div>
            </div>

            {/* Editable School & Tenure Placeholders */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                {currentExp.institution}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {currentExp.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {currentExp.location}
              </span>
            </div>
          </div>

          {/* Guiding Statement */}
          <div className={`p-5 rounded-2xl border mb-8 text-base leading-relaxed ${
            isDark ? 'bg-slate-950/70 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}>
            <p className="font-medium text-cyan-200">
              &ldquo;{currentExp.tagline}&rdquo;
            </p>
          </div>

          {/* Responsibilities Grid */}
          <div className="mb-10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              Core Teaching Responsibilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentExp.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                    isDark 
                      ? 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Pedagogical Approach Cards */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-violet-400" />
              Instructional Methodologies in Action
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentExp.teachingMethods.map((method, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    isDark 
                      ? 'bg-slate-900/40 border-slate-800 text-slate-300' 
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-mono text-cyan-400 block mb-1">Method 0{idx + 1}</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
