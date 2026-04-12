import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'College Placement Portal',
    subtitle: 'TNP System',
    emoji: '🎓',
    description: 'A full-stack college placement management system with separate dashboards for students and TNP admins.',
    longDescription: 'Built a comprehensive college placement management system enabling students to register, apply to companies, and track application status. The TNP Admin Dashboard allows managing companies, viewing applications, and accepting or rejecting them. Implemented JPA entity relationships (Student ↔ Company ↔ Application) and REST APIs for all core operations.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    color: '#7C3AED',
    gradient: 'from-violet-500/20 to-purple-500/10',
    github: 'https://github.com/Shaily0407/college_placement_portal.git',
    live: 'https://college-placement-portal-3i0d.onrender.com',
    highlights: [
      'REST APIs for registration, login, and placement applications',
      'JPA entity relationships: Student ↔ Company ↔ Application',
      'Status-based tracking: Applied / Accepted / Rejected',
      'Student-specific data visibility and TNP Admin panel',
    ],
  },
  {
    title: 'BankFlow',
    subtitle: 'Secure Banking Platform',
    emoji: '🏦',
    description: 'A secure full-stack banking transaction platform with ACID-compliant transactions and JWT authentication.',
    longDescription: 'Designed and implemented a secure banking system with complete ACID-compliant transactions, rollback handling, and concurrency-safe balance updates. Features a normalized relational database schema with foreign key constraints and complete audit logging. All APIs are secured via JWT-based authentication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
    color: '#0D9488',
    gradient: 'from-teal-500/20 to-emerald-500/10',
    github: 'https://github.com/Shaily0407',
    highlights: [
      'ACID-compliant transactions with rollback handling',
      'Concurrency-safe balance updates using MySQL',
      'Normalized relational DB schema with audit logging',
      'JWT-based authentication for secure API access',
    ],
  },
  {
    title: 'QueryPilot AI',
    subtitle: 'Text-to-SQL Platform',
    emoji: '🤖',
    description: 'An AI-powered platform that translates natural language queries into SQL, enabling conversational data exploration.',
    longDescription: 'Designed and implemented an AI-powered system that translates natural language queries into SQL using LLM APIs. Built backend APIs for schema introspection, SQL generation, and secure query execution. Implemented dynamic CSV ingestion that creates database tables automatically. Developed a responsive React UI for querying datasets, viewing schemas, and analyzing results.',
    tech: ['React', 'Flask', 'MySQL', 'Pandas', 'OpenRouter LLM', 'Python'],
    color: '#F59E0B',
    gradient: 'from-amber-500/20 to-orange-500/10',
    github: 'https://github.com/Shaily0407/text-to-sql.git',
    highlights: [
      'Natural language → SQL via LLM API integration',
      'Dynamic CSV ingestion → auto database table creation',
      'Schema introspection and secure query execution',
      'Responsive React UI with conversational exploration',
    ],
  },
  {
    title: 'LC-Scrutiny',
    subtitle: 'Enterprise @ Reliance Industries',
    emoji: '🏢',
    description: 'Enterprise full-stack document validation system developed during internship at Reliance Industries Limited.',
    longDescription: 'Worked on the AI-LC Scrutiny System during a 3-month on-site internship at Reliance Industries Limited, PetChem IT Team, Navi Mumbai. Improved the Spring Boot and Angular application by normalizing the database, implementing correct JPA One-to-Many mappings, repairing multi-role workflow movement, rebuilding dashboard logic, fixing remark sharing, correcting amendment versus original LC handling, and resolving production bugs. Also supported AI microservice integration for LC document clause and PI extraction.',
    tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'Angular', 'REST APIs', 'Amazon Blob Storage', 'Azure DevOps'],
    color: '#F43F5E',
    gradient: 'from-rose-500/20 to-pink-500/10',
    github: null,
    isWork: true,
    highlights: [
      'Normalized LC document storage and implemented proper One-to-Many JPA mappings',
      'Repaired role-based workflow movement and dashboard transitions across the LC lifecycle',
      'Fixed remarks sharing, status handling, and amendment versus original LC processing',
      'Resolved production bugs and supported AI microservice integration via REST APIs',
    ],
  },
]

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 w-full max-w-xl bg-white dark:bg-[#111] rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-white/10 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: project.color + '20' }}
          >
            {project.emoji}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-sm font-medium" style={{ color: project.color }}>{project.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{project.longDescription}</p>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features</p>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                style={{ color: project.color, borderColor: project.color + '40', background: project.color + '10' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.isWork && (
            <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 text-sm">
              🔒 Proprietary — Reliance Industries
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px flex-1 max-w-[60px] bg-primary/40" />
          <span className="font-mono text-sm text-primary uppercase tracking-widest">Projects</span>
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Things I've built
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="https://github.com/Shaily0407"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <Github size={16} /> View GitHub
          </motion.a>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group relative cursor-pointer p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Gradient hover bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: project.color + '18' }}
                  >
                    {project.emoji}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <p className="text-xs font-medium mb-1" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-xs font-medium border"
                      style={{ color: project.color, borderColor: project.color + '30', background: project.color + '0D' }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-xs text-gray-400 dark:text-gray-600">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Click hint */}
                <div className="mt-4 flex items-center gap-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={12} style={{ color: project.color }} />
                  <span style={{ color: project.color }}>Click to see details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
