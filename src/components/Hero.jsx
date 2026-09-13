import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Volume2, VolumeX, Play, Pause, ChevronDown, Download, Check, Loader2 } from 'lucide-react';
import heroVideo from '../assets/hero video/hero_reel.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('idle'); // 'idle' | 'downloading' | 'downloaded'

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleVideo = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If unmuted autoplay is blocked by browser policy, play muted
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleDownloadResume = (e) => {
    if (e) e.preventDefault();
    if (downloadStatus === 'downloading') return;
    
    setDownloadStatus('downloading');

    // Programmatically trigger download of the real resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vaishali_A_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show Downloading... then transition to Downloaded!
    setTimeout(() => {
      setDownloadStatus('downloaded');
      // Reset after 3.5 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3500);
    }, 1200);
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black flex items-center justify-center pt-16"
    >
      {/* Background Video with Smooth Dark Overlay */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-45 brightness-[0.8] transition-opacity duration-700 pointer-events-none"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Modern Gradient Background Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_25%_40%,rgba(255,42,42,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_60%,rgba(255,42,42,0.12),transparent_55%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16">
        
        {/* Left Side: Headline, Bio and Action Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          
          {/* Status Badge */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-wider mb-5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse"></span>
            <span>Software Engineer &bull; BTech IT '26</span>
          </div>

          {/* Large Bold Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-[1.08]"
          >
            Hi, I’m <br />
            <span className="text-white">Vaishali A.</span>
            <span className="block stroke-text-white uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] mt-1 select-none">
              Software Developer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-base sm:text-lg md:text-xl font-normal mb-8 leading-relaxed drop-shadow-md max-w-xl"
          >
            Passionate <span className="text-white font-semibold">Python & Backend Developer</span> with expertise in <span className="text-red-400 font-semibold">SQL</span> and software architecture. Focused on high performance, code static analysis, and scalable web platforms.
          </p>

          {/* Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-4 w-full"
          >
            {/* 1. Primary CTA: White background, Black text, Rounded pill shape, Hover scale */}
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-white hover:bg-gray-100 text-black font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-[0_4px_25px_rgba(255,255,255,0.25)] flex items-center gap-2 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* 2. Secondary CTA: View My Resume */}
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-black/40 hover:bg-white/10 border border-white/25 hover:border-white/50 text-white font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-md hover:scale-105 inline-flex items-center gap-2"
            >
              <span>View My Resume</span>
            </a>
          </div>

          {/* Quick Metrics Pills */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="grid grid-cols-3 gap-3 mt-8 w-full max-w-lg"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
              <span className="text-xl font-black text-[#FF2A2A]">8.30</span>
              <span className="text-[11px] text-gray-400 font-medium">BTech IT CGPA</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
              <span className="text-xl font-black text-white">100%</span>
              <span className="text-[11px] text-gray-400 font-medium">Walmart Sim Completion</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
              <span className="text-xl font-black text-red-400">3+ Global</span>
              <span className="text-[11px] text-gray-400 font-medium">Industry Certs</span>
            </div>
          </div>

        </div>

        {/* Right Side: Large Circular Play Intro Button with Glassmorphism & Red Accent Glow */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="450"
          className="flex flex-col items-center justify-center shrink-0"
        >
          {/* Circular Button Container */}
          <div className="relative flex flex-col items-center">
            
            {/* Ambient Pulse Ring when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 rounded-full bg-[#FF2A2A]/20 animate-ping pointer-events-none scale-110"></div>
            )}

            {/* The Large Circular Play Intro Button */}
            <button
              onClick={toggleVideo}
              aria-label={isPlaying ? "Pause Intro" : "Play Intro"}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-black/50 hover:bg-black/70 border-2 border-white/30 hover:border-[#FF2A2A] backdrop-blur-xl flex flex-col items-center justify-center text-white transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_50px_rgba(255,42,42,0.65)] group cursor-pointer relative z-10"
            >
              {/* Center Play / Pause Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF2A2A] group-hover:bg-red-500 flex items-center justify-center transition-all duration-300 shadow-lg shadow-red-600/50 mb-2">
                {!isPlaying ? (
                  <Play className="w-7 h-7 text-white fill-white ml-1 transition-transform group-hover:scale-110" />
                ) : (
                  <Pause className="w-7 h-7 text-white fill-white transition-transform group-hover:scale-110" />
                )}
              </div>

              {/* Small Uppercase Label Below Icon inside button */}
              <span className="text-[11px] sm:text-xs font-mono font-black tracking-widest uppercase text-white/90 group-hover:text-white transition-colors">
                {!isPlaying ? "PLAY INTRO" : "PAUSE"}
              </span>
            </button>

            {/* Audio Toggle Control when playing */}
            {isPlaying && (
              <button
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                className="mt-4 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md transition-all animate-fade-in"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-red-400" />
                    <span>Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-green-400" />
                    <span>Audio On</span>
                  </>
                )}
              </button>
            )}

            {/* Sub-label under button */}
            <span className="text-[11px] font-mono tracking-wider text-gray-400 mt-3 text-center">
              {!isPlaying ? "Click to watch full intro" : "Playing profile intro"}
            </span>

          </div>

          {/* Download Resume Button below Intro Reel */}
          <button
            onClick={handleDownloadResume}
            id="download-resume-btn"
            disabled={downloadStatus === 'downloading'}
            className={`mt-6 inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm tracking-wide border transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer select-none ${
              downloadStatus === 'downloading'
                ? 'bg-blue-700 text-white border-blue-500 shadow-[0_4px_20px_rgba(37,99,235,0.5)] cursor-wait'
                : downloadStatus === 'downloaded'
                ? 'bg-emerald-600 text-white border-emerald-400/40 shadow-[0_4px_20px_rgba(16,185,129,0.4)]'
                : 'bg-blue-600 hover:bg-blue-500 text-white border-blue-400/30 shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.6)]'
            }`}
            aria-label={
              downloadStatus === 'downloading' 
                ? 'Downloading Resume...' 
                : downloadStatus === 'downloaded' 
                ? 'Resume Downloaded' 
                : "Download Vaishali A's Resume"
            }
          >
            {downloadStatus === 'downloading' ? (
              <>
                <Loader2 className="w-4 h-4 text-white animate-spin" />
                <span>Downloading...</span>
              </>
            ) : downloadStatus === 'downloaded' ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Scroll Indicator: Bottom Center, Animated Bouncing Arrow, Visible only on Desktop */}
      <div 
        data-aos="fade-up"
        data-aos-delay="700"
        className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-1.5 pointer-events-none select-none"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400">Scroll Down</span>
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#FF2A2A]" strokeWidth={2.5} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
