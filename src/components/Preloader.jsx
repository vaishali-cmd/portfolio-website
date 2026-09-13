import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + small pause (0.5s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex flex-col items-center justify-center font-['Plus_Jakarta_Sans',sans-serif]"
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-5xl md:text-8xl font-black tracking-tighter text-center"
          >
            {/* Background text (empty state) */}
            <div className="text-red-950/25 select-none">
              Vaishali A<span className="text-red-950/25">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 w-full text-white overflow-hidden whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            >
              Vaishali A<span className="text-black">.</span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white/90 text-xs md:text-sm font-mono tracking-widest uppercase mt-4"
          >
            Software Engineer &bull; Python Specialist
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
