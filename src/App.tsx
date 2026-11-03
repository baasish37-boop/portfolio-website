/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TeachingPhilosophy } from './components/TeachingPhilosophy';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage or default to dark as per prompt requirements
    const saved = localStorage.getItem('ab_theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('ab_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('ab_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        {/* Section 1: Hero / Landing */}
        <Hero isDark={isDark} />

        {/* Section 2: About Me */}
        <About isDark={isDark} />

        {/* Section 3: Academic Journey / Education */}
        <Education isDark={isDark} />

        {/* Section 4: What I Do / Professional Experience */}
        <Experience isDark={isDark} />

        {/* Section 5: Skills & Expertise */}
        <Skills isDark={isDark} />

        {/* Section 6: Ideas Into Practice / Projects & Research */}
        <Projects isDark={isDark} />

        {/* Section 7: How I See Mathematics / Teaching Philosophy */}
        <TeachingPhilosophy isDark={isDark} />

        {/* Section 8: Achievements & Certifications */}
        <Achievements isDark={isDark} />

        {/* Section 9: Let's Connect & Collaborate / Contact */}
        <Contact isDark={isDark} />
      </main>

      {/* Section 10: Footer */}
      <Footer isDark={isDark} />

      {/* Floating Back To Top Progress Button */}
      <BackToTop isDark={isDark} />
    </div>
  );
}
