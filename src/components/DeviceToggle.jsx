import { Smartphone, Monitor } from 'lucide-react';

const DeviceToggle = ({ currentMode, onToggle }) => {
  return (
    <aside 
      aria-label="Device view switcher"
      className="fixed top-3.5 left-3.5 sm:top-4 sm:left-5 z-[70] flex items-center bg-zinc-950/80 hover:bg-zinc-950/95 text-white/80 rounded-full p-1 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl select-none transition-all duration-300"
    >
      {/* Mobile Icon Button: Only 1 symbol, NO words */}
      <button
        id="device-toggle-mobile"
        onClick={() => onToggle('mobile')}
        title="Mobile View"
        aria-label="Mobile View"
        aria-pressed={currentMode === 'mobile'}
        className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
          currentMode === 'mobile'
            ? 'bg-[#FF2A2A] text-white shadow-md shadow-red-600/40 scale-110'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <Smartphone className="w-4 h-4" />
      </button>

      {/* Separator */}
      <span className="text-white/30 px-0.5 text-xs font-mono select-none font-bold" aria-hidden="true">/</span>

      {/* Desktop Icon Button: Only 1 symbol, NO words */}
      <button
        id="device-toggle-desktop"
        onClick={() => onToggle('desktop')}
        title="Desktop View"
        aria-label="Desktop View"
        aria-pressed={currentMode === 'desktop'}
        className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
          currentMode === 'desktop'
            ? 'bg-[#FF2A2A] text-white shadow-md shadow-red-600/40 scale-110'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </aside>
  );
};

export default DeviceToggle;
