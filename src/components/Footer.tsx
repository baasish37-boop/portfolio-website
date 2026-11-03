import React from 'react';
import { Mail, Linkedin, Facebook, Heart, ArrowUp, Github, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand & Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-600 p-[1.5px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-cyan-300">
                  ∑B
                </div>
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Mathematics Graduate & Secondary Level Educator based in Nepal. Transforming complex numerical and geometric ideas into clear, inspiring learning journeys.
            </p>

            <p className="text-xs font-mono text-cyan-400">
              &ldquo;Designed with curiosity, logic, and creativity.&rdquo;
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">· About Me</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">· Academic Journey</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">· Professional Role</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">· Skills & Disciplines</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">· Research & Projects</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-cyan-400 transition-colors">· Teaching Philosophy</a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Social Channels
            </span>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-slate-500 pt-2">
              Inquiries: {PERSONAL_INFO.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            © {currentYear} {PERSONAL_INFO.name} · All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
