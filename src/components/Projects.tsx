import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  X, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  Code2,
  FileCode,
  BookOpen
} from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'modelling' | 'resources' | 'presentations' | 'research'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'bg-slate-950/90 border-slate-800/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-0.5 bg-blue-400" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-blue-400">
                05 · Portfolio & Inquiry
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
              Ideas Into Practice
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Applying mathematical logic to research inquiries, classroom toolkits, and dynamic learning demonstrations.
            </p>
          </div>

          {/* Clean Segmented Filter */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS_LIST.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('modelling')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                activeFilter === 'modelling'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Modelling
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('resources')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                activeFilter === 'resources'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Teaching Resources
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('research')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                activeFilter === 'research'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Research
            </button>
          </div>
        </div>

        {/* Informative Placeholder Notice */}
        <div className={`p-4 rounded-2xl border mb-10 flex items-center justify-between gap-4 text-xs ${
          isDark ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Note on Projects:</strong> Each project entry below represents planned and foundational academic frameworks with clearly marked placeholders ready to update with your exact papers or links.
            </span>
          </div>
          <span className="font-mono text-[11px] text-cyan-400 shrink-0 hidden sm:inline-block">
            4 Structured Frameworks
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-2xl' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <FolderGit2 className="w-4 h-4" />
                    <span>{project.categoryLabel}</span>
                  </div>

                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                    project.status === 'Teaching In Use'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                      : project.status === 'Active Exploration'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      : 'bg-violet-500/10 text-violet-300 border-violet-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p className={`text-sm leading-relaxed mb-6 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Mathematical Equation Feature (if applicable) */}
                {project.equationSample && (
                  <div className={`p-3.5 rounded-xl border mb-6 font-mono text-xs flex items-center justify-between ${
                    isDark ? 'bg-slate-950/80 border-slate-800 text-cyan-300' : 'bg-slate-50 border-slate-200 text-blue-700'
                  }`}>
                    <span className="text-slate-400 font-sans text-[11px]">Core Equation:</span>
                    <span className="font-semibold">{project.equationSample}</span>
                  </div>
                )}

                {/* Technologies / Methods */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Methods & Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg ${
                          isDark ? 'bg-slate-950 border border-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: View Details Modal */}
              <div className="pt-6 border-t border-slate-800/60 mt-auto flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>View Project Details & Methodology</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <span className="text-[11px] font-mono text-slate-500">
                  Placeholder Spec
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: In-Depth Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border shadow-2xl relative ${
                isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category */}
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <FolderGit2 className="w-4 h-4" />
                <span>{selectedProject.categoryLabel}</span>
                <span className="text-slate-500">·</span>
                <span className="text-emerald-400">{selectedProject.status}</span>
              </div>

              {/* Modal Title */}
              <h3 className="text-2xl font-bold font-display mb-4 text-white">
                {selectedProject.title}
              </h3>

              {/* Equation Banner */}
              {selectedProject.equationSample && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-sm mb-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Formal Representation:</span>
                  <span className="font-semibold">{selectedProject.equationSample}</span>
                </div>
              )}

              {/* In-Depth Sections */}
              <div className="space-y-6 text-sm leading-relaxed mb-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                    Problem & Inquiring Context:
                  </h4>
                  <p className="text-slate-300">{selectedProject.details.problemStatement}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
                    Mathematical Methodology:
                  </h4>
                  <p className="text-slate-300">{selectedProject.details.methodology}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-1">
                    Classroom & Educational Impact:
                  </h4>
                  <p className="text-slate-300">{selectedProject.details.educationalImpact}</p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-1">
                    Key Pedagogical Takeaway:
                  </h4>
                  <p className="text-slate-200 italic font-serif">&ldquo;{selectedProject.details.keyTakeaway}&rdquo;</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Placeholder structure ready for external link
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
