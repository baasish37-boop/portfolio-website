import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, ChevronRight, Check, Award, Edit3, Info } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [showEditGuide, setShowEditGuide] = useState<boolean>(false);

  return (
    <section
      id="education"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950 border-slate-800/80 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-0.5 bg-blue-500" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-blue-400">
                02 · Academic Foundations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              My Academic Journey
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Rigorous theoretical training in mathematical analysis, dynamical systems, and analytical problem-solving.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowEditGuide(!showEditGuide)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border transition-all ${
              showEditGuide
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                : isDark
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showEditGuide ? 'Hide Placeholder Notes' : 'Editable Placeholders Info'}</span>
          </button>
        </div>

        {/* Placeholders Note Banner if toggled */}
        {showEditGuide && (
          <div className={`p-4 rounded-2xl border mb-10 flex items-start gap-3 text-xs leading-relaxed transition-all ${
            isDark ? 'bg-cyan-950/30 border-cyan-800/40 text-cyan-200' : 'bg-cyan-50 border-cyan-200 text-cyan-900'
          }`}>
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Customizable Academic Information Note:</p>
              <p>
                In compliance with your instruction to leave realistic placeholders rather than fabricating names, the institution name and graduation year are marked with brackets. You can easily insert your exact university campus name (e.g., Tribhuvan University, Prithvi Narayan Campus, or your specific alma mater) whenever you are ready!
              </p>
            </div>
          </div>
        )}

        {/* Elegant Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[17px] sm:before:left-[25px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-violet-600">
          {EDUCATION_LIST.map((edu, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={edu.degree} className="relative group">
                {/* Timeline Node Marker */}
                <div className={`absolute -left-[30px] sm:-left-[42px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                  idx === 0
                    ? 'border-cyan-400 bg-slate-950 text-cyan-300 shadow-cyan-500/20'
                    : 'border-blue-500 bg-slate-950 text-blue-400 shadow-blue-500/20'
                }`}>
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Timeline Card */}
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isExpanded
                    ? isDark
                      ? 'bg-slate-900/70 border-slate-700/80 shadow-2xl'
                      : 'bg-white border-slate-300 shadow-xl'
                    : isDark
                    ? 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}>
                  {/* Card Header & Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {edu.field}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {edu.period}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution Placeholder */}
                  <div className="flex items-center gap-2 mb-4">
                    <p className={`text-sm font-medium ${
                      edu.isPlaceholderInstitution ? 'text-amber-300/90 font-mono' : 'text-slate-300'
                    }`}>
                      {edu.institution}
                    </p>
                    {edu.isPlaceholderInstitution && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        Editable
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {edu.description}
                  </p>

                  {/* Expand/Collapse Toggle Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{isExpanded ? 'Hide Coursework & Highlights' : 'View Coursework & Academic Focus'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {/* Collapsible Deep Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-800/60 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                          Core Academic Topics & Analysis:
                        </h4>
                        <ul className="space-y-2 text-xs font-mono">
                          {edu.coreSubjects.map((subject) => (
                            <li key={subject} className="flex items-center gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span>{subject}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                          Key Academic Milestones:
                        </h4>
                        <ul className="space-y-2 text-xs leading-relaxed">
                          {edu.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-slate-300">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
