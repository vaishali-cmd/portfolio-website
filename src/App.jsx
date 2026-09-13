import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeviceToggle from './components/DeviceToggle';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  const [deviceMode, setDeviceMode] = useState('desktop');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      deviceMode === 'mobile' 
        ? 'py-6 px-2 md:px-6 bg-zinc-950/95 flex flex-col items-center justify-start min-w-full overflow-x-hidden' 
        : 'w-full'
    }`}>
      <Preloader />

      {/* Dedicated Top-Left Corner Device Switcher (with comfortable spacing from corner) */}
      <DeviceToggle 
        currentMode={deviceMode} 
        onToggle={setDeviceMode} 
      />

      {/* Dedicated Top-Right Corner Theme Switcher (with comfortable spacing from corner) */}
      <ThemeToggle 
        currentTheme={theme} 
        onToggle={setTheme} 
      />

      {/* Main Portfolio Container */}
      <div 
        id="portfolio-viewport"
        className={`w-full transition-all duration-500 ${
          deviceMode === 'mobile'
            ? 'max-w-[430px] mx-auto rounded-[46px] shadow-[0_0_0_12px_#1c1917,0_0_0_14px_#3f3f46,0_30px_70px_rgba(0,0,0,0.85)] border border-white/20 relative overflow-hidden bg-black text-white'
            : 'w-full'
        }`}
      >
        {/* Simulated Mobile Device Top Notch Indicator */}
        {deviceMode === 'mobile' && (
          <div className="w-full bg-zinc-950/90 py-2.5 px-6 flex items-center justify-between border-b border-white/10 select-none text-[11px] font-mono text-gray-400 sticky top-0 z-[60] backdrop-blur-md">
            <span>9:41</span>
            <div className="w-20 h-3.5 bg-black rounded-full border border-white/20"></div>
            <span>5G 100%</span>
          </div>
        )}

        <Navbar deviceMode={deviceMode} />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <EducationCertifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

