import React, { useState } from 'react';
import { Award, GraduationCap, BookOpen, Sparkles, CheckCircle2, FileBadge, Info, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '../data/portfolioData';

interface AchievementsProps {
  isDark: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Teaching', 'Training & Workshop', 'Award'];

  const filteredAchievements = selectedCategory === 'All'
    ? ACHIEVEMENTS_LIST
    : ACHIEVEMENTS_LIST.filter(a => a.category === selectedCategory);

  return (
    <section
      id="achievements"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950/80 border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-0.5 bg-emerald-400" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-emerald-400">
                07 · Recognition & Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Achievements & Certifications
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Academic milestones, professional pedagogical training, and institutional recognitions.
            </p>
          </div>

          {/* Clean Segmented Category Filters */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Placeholders Note */}
        <div className={`p-4 rounded-2xl border mb-10 flex items-center justify-between gap-4 text-xs ${
          isDark ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Certifications Notice:</strong> As requested, no awards or certificates have been fabricated. These structured cards provide dedicated slots for your verified credentials, diplomas, and workshop accreditations.
            </span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${
                    isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    {item.category === 'Academic' && <GraduationCap className="w-5 h-5 text-cyan-400" />}
                    {item.category === 'Teaching' && <BookOpen className="w-5 h-5 text-blue-400" />}
                    {item.category === 'Training & Workshop' && <FileBadge className="w-5 h-5 text-violet-400" />}
                    {item.category === 'Award' && <Award className="w-5 h-5 text-amber-400" />}
                  </div>

                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-auto flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-amber-300/90">{item.issuer}</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
