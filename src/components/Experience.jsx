import { Briefcase, Award, Database, Cpu, Layers } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-[#09090b] py-28 px-6 md:px-12 w-full relative text-white border-t border-white/5">
      {/* Anchor for backwards compatibility with #services */}
      <span id="services" className="absolute -top-24"></span>

      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5 text-red-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Engineering Experience & Simulation
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Hands-on software architecture, relational data modeling, custom algorithmic implementations, and database ingestion.
          </p>
        </div>

        {/* Experience Card */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 p-8 md:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500"></div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-500/20 shrink-0">
                W
              </div>
              <div className="text-left">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    Walmart Global Tech
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    100% Task Completion
                  </span>
                </div>
                <p className="text-red-400 text-base font-semibold">
                  Advanced Software Engineering Job Simulation
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-end text-left lg:text-right font-mono text-xs text-gray-400">
              <span className="text-white font-bold text-sm bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 w-fit lg:w-auto">
                Sep 2026 &bull; Virtual Experience
              </span>
              <span className="mt-1 text-gray-500">Industry Architecture & Systems</span>
            </div>
          </div>

          {/* Core Highlights Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-left">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/30 transition-all flex flex-col gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Architecture & ERD Modeling</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Designed a comprehensive class diagram and entity-relationship diagram (ERD) to model software architecture and relational database structure for a simulated retail system.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/30 transition-all flex flex-col gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Custom Heap Data Structure</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Implemented a custom heap data structure from scratch in Python to solve an algorithmic problem-solving task with optimal time and space complexity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/30 transition-all flex flex-col gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Data Munging & SQLite Ingestion</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Cleaned and loaded raw spreadsheet data into SQLite using Python, applying relational database concepts, schema constraints, and data preprocessing techniques.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/30 transition-all flex flex-col gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-base">Full Simulation Mastery</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Completed 100% of the simulated technical challenges, establishing deep proficiency in software engineering lifecycle standards.
              </p>
            </div>
          </div>

          {/* Tech Stack Pills Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-gray-400 font-bold mr-2">Technologies Used:</span>
              {['Python', 'SQL', 'SQLite', 'Software Architecture', 'Relational Database Design', 'Data Structures', 'Custom Heap'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#certifications"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono font-bold transition-all hover:scale-105"
            >
              <Award className="w-3.5 h-3.5" />
              <span>View Verified Certifications &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
