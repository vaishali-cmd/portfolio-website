import { Mail, Phone, MapPin, GraduationCap, Award, Database, Terminal } from 'lucide-react';
import stackImage from '../assets/about/image.png';
import { PythonLogo, SqlLogo } from './TechLogos';

const About = () => {
  return (
    <section id="about" className="bg-[#FF2A2A] pt-24 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-20">
        
        {/* Left Side: Hanging Employee ID Badge Suspended from Black Lanyard */}
        <div className="flex flex-col items-center w-full lg:w-[380px] shrink-0 mt-6 lg:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard strap */}
            <div className="absolute -top-36 left-1/2 w-3.5 h-44 bg-black transform -translate-x-1/2 shadow-2xl z-0 rounded-b-sm"></div>
            
            {/* Lanyard metal clip */}
            <div className="absolute -top-6 left-1/2 w-9 h-12 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-md border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center">
              <div className="w-5 h-2.5 bg-gray-700 rounded-sm shadow-inner"></div>
            </div>
            
            {/* Dark Gray Badge Card with -3 degrees tilt angle */}
            <div className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950 w-full max-w-[320px] rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/15 relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              
              {/* Cutout Hole at Top */}
              <div className="absolute -top-3.5 left-1/2 w-16 h-7 bg-black rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-white/10">
                <div className="w-9 h-2.5 bg-zinc-800 rounded-full shadow-inner"></div>
              </div>

              {/* Top Badge Header */}
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF2A2A] uppercase">
                  ENGINEER PASS #2026
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                  BTech IT
                </span>
              </div>
              
              {/* Profile Photo inside Card */}
              <div className="w-full aspect-[4/4.6] overflow-hidden rounded-2xl bg-zinc-900 border-2 border-red-500/40 relative group shadow-inner">
                <img 
                  src={stackImage} 
                  alt="Vaishali A Profile" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3.5 right-3.5 text-left">
                  <p className="text-white font-black text-xl tracking-tight leading-tight">Vaishali A</p>
                  <p className="text-red-400 text-xs font-mono font-medium">Software Engineer &bull; Backend</p>
                </div>
              </div>

              {/* Badge Details Grid */}
              <div className="mt-4 pt-3 border-t border-white/10 space-y-2 text-left font-mono text-[11px] text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">Institution:</span>
                  <span className="text-white font-sans font-semibold">CAHCET, Vellore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CGPA:</span>
                  <span className="text-yellow-400 font-bold">8.30 / 10.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Graduation:</span>
                  <span className="text-white font-sans font-semibold">May 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-semibold">Available for Hire</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Side: Editorial Content with Large "Hello!" and Bold Highlighted Name */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20 text-left">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/30 border border-black/20 text-black font-black text-xs uppercase tracking-widest mb-4 backdrop-blur-md">
            ABOUT ME
          </div>

          {/* Large Black Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-3 tracking-tight leading-tight">
            Hello!
          </h2>

          {/* Professional Introduction Paragraph */}
          <p className="text-lg sm:text-xl font-bold mb-6 leading-relaxed text-red-50">
            I’m <span className="text-black text-2xl md:text-3xl font-black uppercase underline decoration-black decoration-4 tracking-wide">VAISHALI A</span>, a driven Information Technology engineer studying at C. Abdul Hakeem College of Engineering and Technology, Vellore. I specialize in building reliable, high-performance software systems with strong algorithmic design, scalable backends, and data intelligence.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-black/15 flex items-start gap-3.5 hover:bg-black/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                <Terminal className="w-5 h-5 text-[#FF2A2A]" />
              </div>
              <div>
                <h4 className="text-white font-black text-base">Python & Backend Specialist</h4>
                <p className="text-red-100 text-xs font-medium mt-1 leading-normal">
                  Advanced Python, Flask, Pytest, NumPy, Pandas, SQLAlchemy & AST static graph analysis.
                </p>
              </div>
            </div>

            <div className="bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-black/15 flex items-start gap-3.5 hover:bg-black/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                <Database className="w-5 h-5 text-[#FF2A2A]" />
              </div>
              <div>
                <h4 className="text-white font-black text-base">Databases & Architecture</h4>
                <p className="text-red-100 text-xs font-medium mt-1 leading-normal">
                  Relational DB Design, ERD modeling, SQL queries, MySQL, SQLite, and role-based permissions.
                </p>
              </div>
            </div>

            <div className="bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-black/15 flex items-start gap-3.5 hover:bg-black/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                <Award className="w-5 h-5 text-[#FF2A2A]" />
              </div>
              <div>
                <h4 className="text-white font-black text-base">Walmart Global Tech</h4>
                <p className="text-red-100 text-xs font-medium mt-1 leading-normal">
                  Advanced Software Engineering job simulation with 100% completion across all tasks.
                </p>
              </div>
            </div>

            <div className="bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-black/15 flex items-start gap-3.5 hover:bg-black/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                <GraduationCap className="w-5 h-5 text-[#FF2A2A]" />
              </div>
              <div>
                <h4 className="text-white font-black text-base">Academic Excellence</h4>
                <p className="text-red-100 text-xs font-medium mt-1 leading-normal">
                  8.30 CGPA in BTech IT, global certifications from Google, Microsoft, and IBM.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Skills: Python and SQL core tech stack with floating glassmorphism effect */}
          <div className="mb-8 pt-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/80 block mb-3">
              Core Tech Stack & Primary Focus:
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Python Card */}
              <div className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-black/25 backdrop-blur-md border border-black/15 shadow-xl hover:scale-105 hover:bg-black/35 transition-all duration-300 animate-float cursor-pointer group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 p-1 flex items-center justify-center shrink-0">
                  <PythonLogo className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-black text-base sm:text-lg">Python</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-yellow-300 font-bold border border-yellow-300/30">Primary</span>
                  </div>
                  <p className="text-[11px] text-red-100 font-medium">OOP &bull; Flask &bull; Data Structures</p>
                </div>
              </div>

              {/* SQL Card */}
              <div className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-black/25 backdrop-blur-md border border-black/15 shadow-xl hover:scale-105 hover:bg-black/35 transition-all duration-300 animate-float cursor-pointer group" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 p-1 flex items-center justify-center shrink-0">
                  <SqlLogo className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-black text-base sm:text-lg">SQL</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300 font-bold border border-cyan-300/30">Core DB</span>
                  </div>
                  <p className="text-[11px] text-red-100 font-medium">MySQL &bull; SQLite &bull; Relational Schema</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="mailto:vaishali240905@gmail.com" 
              className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <Mail className="w-3.5 h-3.5 text-red-400" />
              <span>vaishali240905@gmail.com</span>
            </a>
            <a 
              href="tel:+918489962785" 
              className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>+91 84899 62785</span>
            </a>
            <span className="px-4 py-2 rounded-xl bg-black/30 border border-black/20 text-white text-xs font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>Vellore &bull; Sholinghur, TN</span>
            </span>
          </div>

        </div>
      </div>

      {/* Organic Torn Paper SVG Divider into Dark Experience Section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-14 md:h-24 fill-[#09090b]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative Black Star Icons with Soft Pulse Animation */}
      <div className="absolute top-10 right-10 md:right-24 text-black opacity-25 animate-pulse pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/>
        </svg>
      </div>
      <div className="absolute top-1/2 left-6 md:left-14 text-black opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '1.2s' }}>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-36 right-8 md:right-32 text-black opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2.4s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/>
        </svg>
      </div>
    </section>
  );
};

export default About;
