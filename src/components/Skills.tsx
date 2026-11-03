import React, { useState } from 'react';
import { 
  Variable, 
  TrendingUp, 
  Sigma, 
  Network, 
  BarChart3, 
  Binary, 
  CalendarDays, 
  Users, 
  HeartHandshake, 
  BookOpen, 
  CheckCircle2, 
  FileSpreadsheet, 
  Presentation, 
  MonitorSmartphone, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
}

const skillIconMap: Record<string, React.ReactNode> = {
  Variable: <Variable className="w-5 h-5 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-blue-400" />,
  Sigma: <Sigma className="w-5 h-5 text-violet-400" />,
  Network: <Network className="w-5 h-5 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-indigo-400" />,
  Binary: <Binary className="w-5 h-5 text-cyan-300" />,
  CalendarDays: <CalendarDays className="w-5 h-5 text-amber-400" />,
  Users: <Users className="w-5 h-5 text-teal-400" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-sky-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-green-400" />,
  Presentation: <Presentation className="w-5 h-5 text-orange-400" />,
  MonitorSmartphone: <MonitorSmartphone className="w-5 h-5 text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-fuchsia-400" />
};

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mathematics' | 'teaching' | 'technology'>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', count: SKILLS_LIST.length },
    { id: 'mathematics', label: 'Mathematics', count: SKILLS_LIST.filter(s => s.category === 'mathematics').length },
    { id: 'teaching', label: 'Teaching & Pedagogy', count: SKILLS_LIST.filter(s => s.category === 'teaching').length },
    { id: 'technology', label: 'Technology & Digital Tools', count: SKILLS_LIST.filter(s => s.category === 'technology').length }
  ] as const;

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_LIST 
    : SKILLS_LIST.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950 border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-0.5 bg-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400">
                04 · Capabilities & Domain Depth
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Skills & Expertise
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              An integrated synthesis of advanced mathematical disciplines, secondary teaching pedagogics, and contemporary digital technologies.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero pill - clean segmented control) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] font-mono opacity-80`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
                    isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
                  }`}>
                    {skillIconMap[skill.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {skill.description}
                </p>
              </div>

              {/* Specific Topics / Sub-topics */}
              {skill.topics && skill.topics.length > 0 && (
                <div className="pt-4 border-t border-slate-800/60 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          isDark 
                            ? 'bg-slate-950/80 text-cyan-300/80 border border-slate-800/60' 
                            : 'bg-slate-100 text-blue-700 border border-slate-200'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
