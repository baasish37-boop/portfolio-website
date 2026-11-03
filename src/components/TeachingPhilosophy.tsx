import React, { useState } from 'react';
import { 
  Quote, 
  Lightbulb, 
  Compass, 
  Globe, 
  Smile, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

interface TeachingPhilosophyProps {
  isDark: boolean;
}

const principleIcons: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />,
  Compass: <Compass className="w-5 h-5 text-cyan-400" />,
  Globe: <Globe className="w-5 h-5 text-emerald-400" />,
  Smile: <Smile className="w-5 h-5 text-pink-400" />
};

export const TeachingPhilosophy: React.FC<TeachingPhilosophyProps> = ({ isDark }) => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  // Interactive Exploration Mini-Demo: Pythagorean Triplet Explorer & Visual Area Proof
  const [sideA, setSideA] = useState<number>(3);
  const [sideB, setSideB] = useState<number>(4);
  const sideC = Math.sqrt(sideA * sideA + sideB * sideB);
  const isTriplet = Number.isInteger(sideC);

  return (
    <section
      id="philosophy"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950 border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      {/* Background Decorative Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-0.5 bg-violet-400" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-violet-400">
              06 · Educational Creed
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
            How I See Mathematics
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Teaching mathematics not as passive symbol manipulation, but as an empowering instrument for logical liberation.
          </p>
        </div>

        {/* Featured Philosophy Statement Banner */}
        <div className={`p-8 sm:p-12 rounded-3xl border mb-16 relative overflow-hidden text-center backdrop-blur-xl ${
          isDark 
            ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-700/80 shadow-2xl' 
            : 'bg-gradient-to-b from-white to-slate-100/90 border-slate-200 shadow-xl'
        }`}>
          {/* Subtle Integral Symbol Watermark */}
          <div className="absolute -right-6 -bottom-10 text-9xl font-serif text-cyan-500/5 select-none pointer-events-none">
            ∫
          </div>

          <Quote className="w-10 h-10 text-cyan-400 mx-auto mb-6 opacity-75" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-100 max-w-4xl mx-auto leading-relaxed mb-6">
            &ldquo;Mathematics is not simply about finding the right answer; it is about developing the ability to <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-bold">think, question, explore, and discover</span>.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
            <span>— Aasish Bhatt</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">Secondary Level Mathematics Teacher</span>
          </div>
        </div>

        {/* 4 Core Teaching Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.title}
              onClick={() => setActivePrinciple(idx)}
              className={`p-6 sm:p-7 rounded-2xl border cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                activePrinciple === idx
                  ? isDark
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 -translate-y-1'
                    : 'bg-white border-blue-500 shadow-lg -translate-y-1'
                  : isDark
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${
                    isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {principleIcons[principle.icon]}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {principle.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {principle.title}
                </h3>

                <p className="text-xs font-serif italic text-cyan-300/90 mb-3">
                  &ldquo;{principle.tagline}&rdquo;
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Classroom Execution:
                </span>
                <p className="text-xs text-slate-300 leading-snug">
                  {principle.classroomApplication}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Live Pedagogical Exploration Widget: "Learn Through Exploration" in Action */}
        <div className={`p-8 rounded-3xl border ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Interactive Concept Demonstrator
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display mb-3">
                Putting Principle #02 Into Action
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Instead of demanding that students memorize Pythagorean triples, we give them controls to explore how changing right-triangle legs changes the hypotenuse in real time.
              </p>

              {/* Interactive Controls */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-xs font-mono text-slate-400">Leg a: {sideA}</span>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={sideA}
                    onChange={(e) => setSideA(parseInt(e.target.value))}
                    className="accent-cyan-400 flex-1 cursor-pointer"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-16 text-xs font-mono text-slate-400">Leg b: {sideB}</span>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={sideB}
                    onChange={(e) => setSideB(parseInt(e.target.value))}
                    className="accent-cyan-400 flex-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Geometric Preview Box */}
            <div className={`lg:w-1/2 w-full p-6 rounded-2xl border text-center font-mono ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-xs text-slate-400 mb-2">Equation Output: a² + b² = c²</div>
              <div className="text-lg sm:text-xl font-bold text-cyan-300 mb-3">
                {sideA}² + {sideB}² = {sideA * sideA + sideB * sideB} ⟹ c = {sideC.toFixed(2)}
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans ${
                isTriplet ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
              }`}>
                {isTriplet ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Exact Integer Pythagorean Triplet: ({sideA}, {sideB}, {sideC})!</span>
                  </>
                ) : (
                  <span>Continuous Hypotenuse (Real Number)</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
