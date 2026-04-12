import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    icon: '⌨️',
    color: '#7C3AED',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 75 },
      { name: 'C / C++', level: 80 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#0D9488',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Angular', level: 70 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'TypeScript', level: 65 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#F59E0B',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 72 },
      { name: 'Express.js', level: 70 },
      { name: 'Flask', level: 68 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🗄️',
    color: '#F43F5E',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 70 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'IntelliJ / VS Code', level: 90 },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  )
}

const concepts = [
  'OOP', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks',
  'REST APIs', 'JWT Auth', 'ACID Transactions', 'JPA / Hibernate',
  'Spring Security', 'CI/CD', 'Agile', 'Cloud Computing',
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px flex-1 max-w-[60px] bg-primary/40" />
          <span className="font-mono text-sm text-primary uppercase tracking-widest">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          Tech I work with
        </motion.h2>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-white/20 transition-all"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: cat.color + '18' }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    delay={0.3 + ci * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concepts cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">
            Core Concepts & Principles
          </p>
          <div className="flex flex-wrap gap-2">
            {concepts.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-full text-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 cursor-default hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
