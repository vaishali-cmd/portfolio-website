import { 
  GraduationCap, Award, BookOpen, CheckCircle2, 
  Calendar, MapPin, Building2
} from 'lucide-react';

const EducationCertifications = () => {
  const education = [
    {
      degree: 'BTech Information Technology',
      institution: 'C. Abdul Hakeem College of Engineering and Technology',
      location: 'Vellore, Tamil Nadu',
      period: '2022 – May 2026',
      score: 'CGPA: 8.30 / 10.0',
      badge: 'Undergraduate Degree',
      color: 'border-red-500/50 bg-red-500/10 text-red-400',
      details: 'Specialized in Software Engineering, Relational Database Systems, Operating Systems, and Advanced Algorithm Design.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC - Class XII)',
      institution: 'Unity Matric Hr. Sec. School',
      location: 'Sholinghur, Tamil Nadu',
      period: 'Completed 2022',
      score: 'Percentage: 70%',
      badge: 'Higher Secondary',
      color: 'border-white/20 bg-white/5 text-gray-300',
      details: 'Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC - Class X)',
      institution: 'Unity Matric Hr. Sec. School',
      location: 'Sholinghur, Tamil Nadu',
      period: 'Completed 2020',
      score: 'Percentage: 90.6%',
      badge: 'Secondary School',
      color: 'border-white/20 bg-white/5 text-gray-300',
      details: 'Academic excellence with distinction in Mathematics and Science subjects.'
    }
  ];

  const certifications = [
    {
      title: 'Crash Course on Python',
      issuer: 'Google',
      date: 'Sep 2026',
      badgeColor: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10',
      iconBg: 'from-amber-500 to-yellow-600',
      skills: 'Python OOP, Data Structures, Scripting, Automation',
      verified: true
    },
    {
      title: 'SQL Foundations',
      issuer: 'Microsoft',
      date: 'Sep 2026',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      iconBg: 'from-blue-600 to-cyan-500',
      skills: 'Relational Queries, Complex Joins, Aggregations, Data Filtering',
      verified: true
    },
    {
      title: 'Intro to Software Engineering',
      issuer: 'IBM',
      date: 'May 2026',
      badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      iconBg: 'from-indigo-600 to-blue-700',
      skills: 'SDLC, Agile Methodologies, Software Architecture, Architecture Design',
      verified: true
    }
  ];

  const coursework = [
    { title: 'Data Structures & Algorithms', desc: 'Custom Heaps, Trees, Graphs, Sorting Algorithms, Big-O Analysis' },
    { title: 'Database Management Systems', desc: 'Relational Schema Design, Normalization, ACID, SQL Optimization, ERD' },
    { title: 'Object Oriented Programming', desc: 'Class Diagrams, Inheritance, Polymorphism, Design Patterns' },
    { title: 'Operating Systems', desc: 'Process Scheduling, Concurrency & Synchronization, Memory Management' },
  ];

  return (
    <section id="education" className="bg-[#09090b] py-28 px-6 md:px-12 w-full relative text-white border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-red-400" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Solid computer science foundation backed by BTech coursework and globally recognized certifications.
          </p>
        </div>

        {/* 2-Column Layout: Education Timeline vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div data-aos="fade-up" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-white">Education History</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={edu.degree}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all duration-300 text-left relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold mb-2 border ${edu.color}`}>
                        {edu.badge}
                      </span>
                      <h4 className="text-lg md:text-xl font-black text-white group-hover:text-red-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-gray-300 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="sm:text-right font-mono text-xs">
                      <span className="text-yellow-400 font-bold text-sm bg-yellow-500/10 px-2.5 py-1 rounded-lg border border-yellow-500/20 inline-block">
                        {edu.score}
                      </span>
                      <p className="text-gray-400 mt-1 flex items-center sm:justify-end gap-1">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        {edu.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 mt-3">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Coursework (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Certifications Block */}
            <div id="certifications" className="scroll-mt-28">
              <div data-aos="fade-up" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-white">Global Certifications</h3>
              </div>

              <div className="space-y-3.5">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cert.title}
                    data-aos="fade-up"
                    data-aos-delay={cIdx * 100}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all text-left flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cert.iconBg} flex items-center justify-center font-black text-white text-base shadow-lg shrink-0`}>
                      {cert.issuer[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-sm truncate">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-gray-400 shrink-0">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-red-400 mt-0.5">
                        {cert.issuer}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-tight">
                        {cert.skills}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework Block */}
            <div>
              <div data-aos="fade-up" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white">Graduate Coursework</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
                {coursework.map((course, idx) => (
                  <div 
                    key={course.title}
                    data-aos="fade-up"
                    data-aos-delay={idx * 50}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between gap-1"
                  >
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      {course.title}
                    </span>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      {course.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationCertifications;
