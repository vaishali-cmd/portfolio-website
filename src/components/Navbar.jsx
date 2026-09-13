import { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

const Navbar = ({ deviceMode = 'desktop' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 transition-all duration-500 ${
        deviceMode === 'mobile'
          ? 'left-1/2 -translate-x-1/2 w-full max-w-[430px]'
          : 'left-0 w-full'
      } ${
        isOpen 
          ? 'bg-[#09090b]/98 backdrop-blur-2xl py-4 border-b border-white/10'
          : isScrolled 
            ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center gap-4">
        
        {/* Left Side: Personal Logo with padding on mobile to clear top-left corner toggle */}
        <div className="flex items-center pl-16 sm:pl-20 lg:pl-0">
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-sm group-hover:border-red-500/50 group-hover:scale-105 transition-all">
              <span className="text-white">V</span>
            </div>
            <span className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-tight group-hover:text-gray-100 transition-colors">
              Vaishali<span className="text-[#FF2A2A] text-xl sm:text-2xl font-black">.</span>
            </span>
          </a>
        </div>

        {/* Center Navigation: Desktop Menu with Animated Underline */}
        <div className={`${deviceMode === 'mobile' ? 'hidden' : 'hidden lg:flex'} items-center space-x-6 xl:space-x-8`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/80 hover:text-white font-medium text-sm tracking-wide relative group transition-colors duration-300 py-1 whitespace-nowrap"
            >
              {link.name}
              {/* Animated underline that grows from left to right */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2A2A] transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Social links, Hire Me CTA, and Hamburger Menu with padding on mobile to clear top-right corner toggle */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 pr-16 sm:pr-20 lg:pr-0">
          <div className={`${deviceMode === 'mobile' ? 'hidden' : 'hidden md:flex'} items-center space-x-2`}>
            <a 
              href="https://github.com/vaishali-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:border-red-500/50 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/vaishali-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:border-red-500/50 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://leetcode.com/u/vaishu204/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LeetCode Profile (vaishu204)"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-yellow-400 hover:bg-white/15 hover:border-yellow-500/50 transition-all hover:scale-105"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Rounded Glassmorphism CTA Button: Hire Me */}
          <a 
            href="#contact" 
            className="px-3.5 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FF2A2A]/80 text-white text-xs sm:text-sm font-semibold backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,42,42,0.45)] transition-all duration-300 flex items-center gap-1.5 group transform hover:scale-[1.02]"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Hamburger Menu Icon */}
          <div className={`${deviceMode === 'mobile' ? 'flex' : 'lg:hidden flex'} items-center`}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-white p-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5 text-[#FF2A2A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`${deviceMode === 'mobile' ? 'block' : 'lg:hidden'} transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[520px] opacity-100 border-b border-white/10 py-6 bg-[#09090b]/98 backdrop-blur-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-[#FF2A2A] font-semibold text-base py-2 border-b border-white/5 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-white/30 text-xs">&rarr;</span>
            </a>
          ))}

          {/* Mobile Social icons row */}
          <div className="flex items-center gap-3 pt-3">
            <a 
              href="https://github.com/vaishali-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/vaishali-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a 
              href="https://leetcode.com/u/vaishu204/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              <LeetcodeIcon className="w-4 h-4" /> LeetCode
            </a>
          </div>

          <div className="pt-2">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF2A2A] text-white font-bold hover:bg-red-600 transition-colors w-full text-center shadow-lg shadow-red-600/40 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Vaishali A.</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
