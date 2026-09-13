import { useState } from 'react';
import { 
  Code, Database, Layers, Wrench, BookOpen, 
  CheckCircle2, ExternalLink, Sparkles, Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'databases', label: 'Databases' },
    { id: 'frameworks', label: 'Frameworks & Libs' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'coursework', label: 'Core Coursework' },
  ];

  const skillGroups = [
    {
      category: 'languages',
      title: 'Programming & Query Languages',
      icon: <Code className="w-5 h-5 text-red-500" />,
      items: [
        { name: 'Python', level: 'Advanced', description: 'OOP, AST parsing, Custom Data Structures (Heaps), Algorithms, Scripting', badge: 'Primary', color: 'border-red-500/50 text-red-400 bg-red-500/10' },
        { name: 'SQL', level: 'Intermediate', description: 'Complex Joins, Aggregations, Subqueries, Relational Modeling, Indexing', badge: 'Core', color: 'border-blue-500/50 text-blue-400 bg-blue-500/10' },
      ]
    },
    {
      category: 'databases',
      title: 'Databases & Storage',
      icon: <Database className="w-5 h-5 text-red-500" />,
      items: [
        { name: 'MySQL', level: 'Intermediate', description: 'Production relational schema design, role-based data partitioning, triggers', badge: 'RDBMS', color: 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10' },
        { name: 'SQLite', level: 'Intermediate', description: 'Embedded application storage, data cleaning & munging pipelines', badge: 'Embedded', color: 'border-sky-500/50 text-sky-400 bg-sky-500/10' },
      ]
    },
    {
      category: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-5 h-5 text-red-500" />,
      items: [
        { name: 'Flask', level: 'Advanced', description: 'RESTful APIs, routing, Jinja2 templates, session management, auth middlewares' },
        { name: 'Pytest', level: 'Intermediate', description: 'Unit testing, test suites, mock assertions, test-driven validation' },
        { name: 'Pandas', level: 'Intermediate', description: 'Data analysis, tabular transformations, dataset munging, report generation' },
        { name: 'NumPy', level: 'Intermediate', description: 'Numerical processing, array calculations, structured data ops' },
        { name: 'SQLAlchemy', level: 'Intermediate', description: 'ORM modeling, relational entity mapping, session queries' },
        { name: 'Werkzeug', level: 'Intermediate', description: 'Password hashing, security utilities, WSGI middleware' },
        { name: 'NetworkX', level: 'Intermediate', description: 'Dependency relationship graphs, directed acyclic graphs (DAG), impact tracking' },
        { name: 'ast (Abstract Syntax Trees)', level: 'Advanced', description: 'Python source code parsing, tokenization, static dependency extraction' },
      ]
    },
    {
      category: 'tools',
      title: 'Tools & Development Ecosystem',
      icon: <Wrench className="w-5 h-5 text-red-500" />,
      items: [
        { name: 'Git & GitHub', level: 'Proficient', description: 'Version control, branch workflows, pull requests, project tracking' },
        { name: 'VS Code', level: 'Proficient', description: 'Primary IDE, debugging, extension ecosystem, linting' },
        { name: 'PyCharm', level: 'Proficient', description: 'Python environment configuration, refactoring, virtual environments' },
        { name: 'Postman', level: 'Proficient', description: 'API testing, request collection runner, endpoint validation' },
        { name: 'MySQL Workbench', level: 'Proficient', description: 'Schema visual modeling, ERD creation, query execution profiling' },
      ]
    },
    {
      category: 'coursework',
      title: 'Core Computer Science Coursework',
      icon: <BookOpen className="w-5 h-5 text-red-500" />,
      items: [
        { name: 'Data Structures & Algorithms', level: 'Mastered', description: 'Heaps, Trees, Graphs, Sorting, Searching, Complexity Analysis (Big-O)' },
        { name: 'Database Management Systems', level: 'Mastered', description: 'Normalization (1NF-BCNF), ACID properties, Transaction Management, ERD' },
        { name: 'Object Oriented Programming', level: 'Mastered', description: 'Inheritance, Polymorphism, Encapsulation, Abstraction, Class Diagrams' },
        { name: 'Operating Systems', level: 'Mastered', description: 'Process scheduling, Concurrency, Memory management, File systems' },
      ]
    }
  ];

  const filteredGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeTab);

  return (
    <section id="skills" className="bg-[#0c0c0e] py-28 px-6 md:px-12 w-full relative text-white border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Skills & Technical Ecosystem
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            A comprehensive overview of programming languages, databases, analytical frameworks, and computer science foundations that drive my software engineering work.
          </p>
        </div>

        {/* Category Filters */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, idx) => (
            <div 
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      {group.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-gray-500">
                    {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Group Items */}
                <div className="grid grid-cols-1 gap-3.5">
                  {group.items.map((item) => (
                    <div 
                      key={item.name}
                      className="p-3.5 rounded-2xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors text-left flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                          {item.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          item.badge ? item.color : 'bg-white/5 border-white/10 text-gray-300'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed pl-6">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Profiles Footer Strip */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="mt-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black to-zinc-950 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-red-400" />
              Verified Developer Profiles
            </h4>
            <p className="text-gray-400 text-xs md:text-sm">
              Explore my code repositories, data structures practice, and professional networks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a 
              href="https://leetcode.com/u/vaishu204/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-[#ffa116]/10 border border-[#ffa116]/30 text-[#ffa116] hover:bg-[#ffa116]/20 text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <LeetcodeIcon className="w-4 h-4" />
              <span>LeetCode: vaishu204</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a 
              href="https://github.com/vaishali-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub: vaishali-cmd</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a 
              href="https://linkedin.com/in/vaishali-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn: vaishali-dev</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
