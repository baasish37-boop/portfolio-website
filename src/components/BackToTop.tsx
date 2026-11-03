import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isDark: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isDark }) => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setVisible(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl border shadow-xl transition-all duration-300 transform hover:-translate-y-1 group ${
        isDark 
          ? 'bg-slate-900/90 border-slate-700/80 text-cyan-400 hover:border-cyan-400/60' 
          : 'bg-white/95 border-slate-200 text-blue-600 hover:border-blue-400 shadow-slate-200'
      }`}
    >
      {/* SVG Circular Progress Ring */}
      <svg className="w-8 h-8 -rotate-90 pointer-events-none" viewBox="0 0 36 36">
        <path
          className="text-slate-700/40"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-cyan-400"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeWidth="2.5"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      </div>
    </button>
  );
};
