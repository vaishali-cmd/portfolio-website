import { useState } from 'react';
import { 
  FolderGit2, ExternalLink, CheckCircle2, Cpu
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = () => {
  const [activeProjectTab, setActiveProjectTab] = useState({
    p1: 'overview',
    p2: 'overview'
  });

  const projects = [
    {
      id: 'p1',
      title: 'Software Change Impact & Risk Analysis Platform',
      tagline: 'Static AST Code Analysis, Dependency Graphing & Rule-Based Risk Scoring',
      period: 'Jan 2026 – Apr 2026',
      badge: 'Static Analysis Engine',
      badgeColor: 'bg-red-500/10 border-red-500/30 text-red-400',
      keyMetric: '100% Impact Detection Accuracy',
      description: 'A Python-based static code analysis platform that parses source files, builds a dependency relationship graph, and detects components affected by a proposed software change with automated risk scoring.',
      highlights: [
        'Built a Python-based static code analysis platform that parses source files using Python AST, constructs dependency relationship graphs, and detects components affected by proposed changes.',
        'Designed a rule-based risk-scoring engine that classifies code changes as Low, Medium, or High risk, presented dynamically on a web dashboard.',
        'Achieved 100% accuracy in identifying affected components across the tested project dataset, completely automating dependency-based impact analysis.',
        'Generated structured impact and risk assessment reports to support developer code review, PR auditing, and release decision-making.'
      ],
      architecture: [
        { title: 'AST Parser (ast)', desc: 'Parses Python source code into abstract syntax trees to extract module imports, class definitions, and function invocation call trees.' },
        { title: 'Graph Engine (NetworkX)', desc: 'Generates directed acyclic dependency graphs (DAG) to trace transitive ripple effects and blast radius of modified files.' },
        { title: 'Risk Engine', desc: 'Evaluates graph depth, fan-in/fan-out complexity, and test coverage to assign Low/Medium/High risk scores.' },
        { title: 'Web Dashboard (Flask)', desc: 'Interactive visualization dashboard rendering component trees, risk metrics, and downloadable analysis reports.' },
      ],
      stack: ['Python', 'Flask', 'ast', 'NetworkX', 'Pandas', 'SQLite', 'VS Code', 'PyCharm', 'Git & GitHub', 'Postman'],
      metrics: [
        { label: 'Detection Accuracy', value: '100%', detail: 'Tested dataset verification' },
        { label: 'Analysis Speed', value: '< 2.5s', detail: 'Per multi-file diff batch' },
        { label: 'Risk Tiers', value: '3 Levels', detail: 'Low, Medium, High triage' },
      ],
      githubUrl: 'https://github.com/vaishali-cmd'
    },
    {
      id: 'p2',
      title: 'Workforce Intelligence & Management Platform',
      tagline: 'Role-Based Access Control (RBAC), 4 Dedicated Dashboards & Centralized MySQL Storage',
      period: 'May 2026 – Aug 2026',
      badge: 'Enterprise Platform',
      badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      keyMetric: '4 Differentiated Role Dashboards',
      description: 'A role-based workforce intelligence and management platform featuring dedicated permission-guarded dashboards for HR, Manager, Team Lead, and Employee roles to streamline operations.',
      highlights: [
        'Built a comprehensive role-based workforce management platform with dedicated, isolated dashboards for HR, Manager, Team Lead, and Employee roles.',
        'Implemented rigorous role-based authentication and authorization (RBAC) that dynamically routes users to their role-specific dashboards for tasks, attendance, leaves, and performance.',
        'Achieved 100% accuracy in role-based access validation across tested user roles with zero permission leaks.',
        'Centralized employee, task allocation, attendance logs, leave requests, and performance appraisal data in MySQL with SQLAlchemy ORM, automating routine workforce workflows.'
      ],
      architecture: [
        { title: 'RBAC Security (Werkzeug)', desc: 'Cryptographic password hashing and session authorization decorators enforcing strict least-privilege role boundaries.' },
        { title: '4 Role Dashboards', desc: 'Custom tailored interfaces for HR (hiring & payroll), Manager (approvals), Team Lead (task assignments), and Employee (self-service).' },
        { title: 'Relational DB (MySQL)', desc: 'Normalized schema connecting employees, departments, leave quotas, attendance check-ins, and performance reviews.' },
        { title: 'Analytics & Reporting', desc: 'Pandas-powered data aggregation for workforce attendance rates, overtime tracking, and department productivity metrics.' },
      ],
      stack: ['Python', 'SQL', 'Flask', 'Pandas', 'SQLAlchemy', 'Werkzeug', 'MySQL', 'VS Code', 'PyCharm', 'Git & GitHub', 'Postman', 'MySQL Workbench'],
      metrics: [
        { label: 'RBAC Accuracy', value: '100%', detail: 'Validated across all 4 roles' },
        { label: 'Role Dashboards', value: '4 Views', detail: 'HR, Manager, Lead, Employee' },
        { label: 'Database Schema', value: 'Normalized', detail: 'Multi-table MySQL RDBMS' },
      ],
      githubUrl: 'https://github.com/vaishali-cmd'
    }
  ];

  return (
    <section id="projects" className="bg-[#0c0c0e] py-28 px-6 md:px-12 w-full relative text-white border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-red-400" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Engineered Platforms & Systems
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Production-grade Python applications focused on static code intelligence, graph dependency analysis, and enterprise role-based management.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const currentTab = activeProjectTab[project.id];

            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-6 md:p-10 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300 shadow-2xl"
              >
                {/* Project Header Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10 text-left">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      {project.title}
                    </h3>
                    <p className="text-red-400 text-sm font-semibold">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions & Key Metric */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:self-center">
                    <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>{project.keyMetric}</span>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Sub-Tabs: Highlights vs Architecture vs Metrics */}
                <div className="flex items-center gap-2 mt-6 mb-6 overflow-x-auto pb-2">
                  <button
                    onClick={() => setActiveProjectTab(prev => ({ ...prev, [project.id]: 'overview' }))}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currentTab === 'overview'
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Key Highlights & Impact
                  </button>
                  <button
                    onClick={() => setActiveProjectTab(prev => ({ ...prev, [project.id]: 'architecture' }))}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currentTab === 'architecture'
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    System Architecture
                  </button>
                  <button
                    onClick={() => setActiveProjectTab(prev => ({ ...prev, [project.id]: 'metrics' }))}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currentTab === 'metrics'
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Performance & Metrics
                  </button>
                </div>

                {/* Tab Content Display */}
                {currentTab === 'overview' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left my-4">
                    {project.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {currentTab === 'architecture' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left my-4">
                    {project.architecture.map((arch, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between gap-2"
                      >
                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                          <Cpu className="w-4 h-4 text-red-500" />
                          <span>{arch.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {arch.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {currentTab === 'metrics' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left my-4">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col items-center justify-center text-center gap-1"
                      >
                        <span className="text-3xl font-black text-red-500">{m.value}</span>
                        <span className="text-sm font-bold text-white">{m.label}</span>
                        <span className="text-xs text-gray-400">{m.detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-6 mt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-left">
                  <span className="text-xs font-mono text-gray-500 font-bold mr-1">Stack:</span>
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
