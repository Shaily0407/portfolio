import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Trophy, Users, Code2 } from 'lucide-react'

const experiences = [
  {
    icon: Briefcase,
    color: '#7C3AED',
    type: 'Work',
    title: 'Software Development Intern – AI-LC Scrutiny System',
    org: 'Reliance Industries Limited · PetChem IT Team',
    location: 'Navi Mumbai · On-site',
    period: '3-month internship',
    bullets: [
      'Fixed database design through normalization and implemented proper One-to-Many mapping.',
      'Repaired workflow movement between roles and corrected amendment versus original LC flow.',
      'Built dashboard logic, fixed remarks sharing, and ensured proper dashboard-to-dashboard movement.',
      'Resolved production bugs across the Java, Spring Boot, JPA/Hibernate, MySQL, and Angular stack.',
    ],
  },
  {
    icon: Code2,
    color: '#0D9488',
    type: 'Achievement',
    title: 'LeetCode Problem Solver',
    org: 'Self-directed',
    location: 'Remote',
    period: 'Ongoing',
    bullets: [
      'Solved 100+ Data Structures & Algorithms problems on LeetCode',
      'Focus on arrays, trees, graphs, dynamic programming',
      'Participated in Smart India Hackathon (SIH)',
      'Competed in inter-college coding competitions',
    ],
  },
  {
    icon: Users,
    color: '#F59E0B',
    type: 'Community',
    title: 'Technical Team Member',
    org: 'ACM Student Chapter – PCCOER',
    location: 'Pune',
    period: '2024 – Present',
    bullets: [
      'Contributed to coding events and technical workshops',
      'Supported student project initiatives',
      'Organized and participated in peer learning sessions',
    ],
  },
  {
    icon: Trophy,
    color: '#F43F5E',
    type: 'Research',
    title: 'Research Exploration',
    org: 'Pimpri Chinchwad College of Engineering and Research',
    location: 'Pune',
    period: '2024 – Present',
    bullets: [
      'Exploring research projects in Security Challenges in Cloud Computing',
      'Investigating modern cloud security architectures',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="section-padding bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px flex-1 max-w-[60px] bg-primary/40" />
          <span className="font-mono text-sm text-primary uppercase tracking-widest">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          My journey so far
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-6 w-12 h-12 rounded-2xl hidden md:flex items-center justify-center shadow-lg"
                    style={{ background: exp.color + '20', border: `2px solid ${exp.color}30` }}
                  >
                    <Icon size={20} style={{ color: exp.color }} />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-gray-200 dark:hover:border-white/20 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-0.5 rounded-md text-xs font-medium"
                            style={{ color: exp.color, background: exp.color + '15' }}
                          >
                            {exp.type}
                          </span>
                          {exp.badge && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {exp.org} · {exp.location}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-lg">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
