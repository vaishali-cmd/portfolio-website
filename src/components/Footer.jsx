import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] pt-24 pb-12 px-6 md:px-12 w-full font-sans border-t border-white/10 flex flex-col justify-between min-h-[50vh]">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between flex-grow">
        
        {/* 1. Top Section: Three-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full pb-16 border-b border-white/10 text-left">
          
          {/* Left Column: Creative Service / Technical Specializations */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF2A2A] font-bold mb-2">
              Core Capabilities
            </span>
            <ul className="space-y-1.5 font-mono text-xs text-gray-300 uppercase tracking-wider">
              <li className="hover:text-white transition-colors">&bull; AST Static Code Analysis</li>
              <li className="hover:text-white transition-colors">&bull; Python & Backend Architecture</li>
              <li className="hover:text-white transition-colors">&bull; Relational Database Engineering</li>
              <li className="hover:text-white transition-colors">&bull; Custom Data Structures & Heaps</li>
            </ul>
          </div>
          
          {/* Center Column: Experience showcase with Underlined View Work link */}
          <div className="flex flex-col gap-2 md:items-center text-left md:text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF2A2A] font-bold mb-2">
              Background & Experience
            </span>
            <p className="text-xs text-gray-300 font-mono leading-relaxed">
              BTech Information Technology '26 &bull; CAHCET<br />
              Walmart Global Tech Simulation &bull; 100% Completion
            </p>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase tracking-wider underline underline-offset-4 hover:text-[#FF2A2A] transition-colors mt-2"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {/* Right Column: Availability status & Location */}
          <div className="flex flex-col gap-2 md:items-end text-left md:text-right">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF2A2A] font-bold mb-2">
              Availability
            </span>
            <div className="flex items-center md:justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
              <span className="text-xs font-mono text-white font-medium">Available for Engineering Roles</span>
            </div>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Vellore, Tamil Nadu, India &bull; Remote Worldwide
            </p>
            <span className="text-[11px] font-mono text-gray-500">
              Active {new Date().getFullYear()}
            </span>
          </div>

        </div>

        {/* 2. Center Hero Branding: Massive Typography Centerpiece "vaishali" */}
        <div className="w-full flex justify-center items-center py-16 md:py-24 overflow-hidden select-none">
          <h2 className="text-[20vw] md:text-[18vw] leading-[0.8] font-black tracking-tighter lowercase text-[#222222] hover:text-[#f4f4f4] transition-all duration-700 w-full text-center cursor-default hover:drop-shadow-[0_0_50px_rgba(255,42,42,0.35)]">
            vaishali
          </h2>
        </div>

        {/* 3. Bottom Section: Three-column layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs font-mono text-gray-400">
          
          {/* Left: Copyright */}
          <div className="text-left w-full md:w-auto">
            &copy; {new Date().getFullYear()} Vaishali A. &bull; Built with Python.
          </div>

          {/* Center: Underlined Email Link */}
          <div className="w-full md:w-auto text-left md:text-center">
            <a 
              href="mailto:vaishali240905@gmail.com" 
              className="text-gray-300 hover:text-white underline underline-offset-4 decoration-red-500/70 hover:decoration-[#FF2A2A] transition-all font-mono text-xs sm:text-sm font-semibold"
            >
              vaishali240905@gmail.com
            </a>
          </div>

          {/* Right: Social icons & Back to top button */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end">
            <a 
              href="https://github.com/vaishali-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/vaishali-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://leetcode.com/u/vaishu204/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-colors"
              title="LeetCode (vaishu204)"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-[#FF2A2A] hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
