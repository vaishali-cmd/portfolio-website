import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ currentTheme, onToggle }) => {
  return (
    <aside 
      aria-label="Theme switcher"
      className="fixed top-3.5 right-3.5 sm:top-4 sm:right-5 z-[70] flex items-center bg-zinc-950/80 hover:bg-zinc-950/95 text-white/80 rounded-full p-1 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl select-none transition-all duration-300"
    >
      {/* Dark Mode Button: Only 1 symbol, NO words */}
      <button
        id="theme-toggle-dark"
        onClick={() => onToggle('dark')}
        title="Dark Mode"
        aria-label="Dark Mode"
        aria-pressed={currentTheme === 'dark'}
        className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
          currentTheme === 'dark'
            ? 'bg-zinc-800 text-white shadow-md shadow-black/50 border border-white/20 scale-110'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>

      {/* Separator */}
      <span className="text-white/30 px-0.5 text-xs font-mono select-none font-bold" aria-hidden="true">/</span>

      {/* Light Mode Button: Only 1 symbol, NO words */}
      <button
        id="theme-toggle-light"
        onClick={() => onToggle('light')}
        title="Light Mode"
        aria-label="Light Mode"
        aria-pressed={currentTheme === 'light'}
        className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
          currentTheme === 'light'
            ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/40 border border-amber-300 scale-110'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
    </aside>
  );
};

export default ThemeToggle;
