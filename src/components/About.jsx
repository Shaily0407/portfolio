import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { useEffect } from 'react'
import { GraduationCap, MapPin, Code2, Music } from 'lucide-react'

function Counter({ from = 0, to, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(from)
  const rounded = useSpring(count, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration })
    }
  }, [inView, to, count, duration])

  return (
    <span ref={ref}>
      <motion.span>{rounded.get().toFixed(suffix === '' ? 0 : 2)}</motion.span>
      {suffix}
    </span>
  )
}

const languages = [
  { name: 'English', level: 'Fluent', flag: '🇬🇧', color: '#7C3AED' },
  { name: 'Gujarati', level: 'Native', flag: '🇮🇳', color: '#0D9488' },
  { name: 'Hindi', level: 'Fluent', flag: '🇮🇳', color: '#F59E0B' },
  { name: 'Marathi', level: 'Conversational', flag: '🇮🇳', color: '#F43F5E' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/5 to-transparent dark:from-primary/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="h-px flex-1 max-w-[60px] bg-primary/40" />
          <span className="font-mono text-sm text-primary uppercase tracking-widest">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Avatar placeholder + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Avatar container */}
            <div className="relative w-72 h-72 mx-auto lg:mx-0">
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/30"
              />
              {/* Inner card */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 dark:from-primary/30 dark:via-secondary/20 flex items-center justify-center border border-white/40 dark:border-white/10">
                <div className="text-center">
                  <div className="text-7xl mb-2">👩‍💻</div>
                  <p className="font-mono text-sm text-primary">@Shaily0407</p>
                </div>
              </div>
              {/* CGPA badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -top-4 -right-4 bg-primary text-white px-3 py-2 rounded-2xl text-sm font-bold shadow-lg shadow-primary/30"
              >
                CGPA: 8.76
              </motion.div>
              {/* RIL badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -left-4 bg-secondary text-white px-3 py-2 rounded-2xl text-xs font-semibold shadow-lg shadow-secondary/30"
              >
                Intern @ RIL 🏢
              </motion.div>
            </div>

            {/* Quick facts */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, text: 'B.E. IT – PCCOER, Pune', color: 'text-primary' },
                { icon: MapPin, text: 'Pune, Maharashtra', color: 'text-secondary' },
                { icon: Code2, text: '100+ LeetCode', color: 'text-amber-500' },
                { icon: Music, text: 'Piano & Harmonium', color: 'text-rose-500' },
              ].map(({ icon: Icon, text, color }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                >
                  <Icon size={16} className={color} />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Building things that{' '}
              <span className="gradient-text">matter</span>
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              <p>
                I'm a third-year Information Technology student at PCCOER, Pune, passionate about crafting full-stack web applications with clean architecture and thoughtful UX.
              </p>
              <p>
                I completed a <span className="text-primary font-medium">3-month on-site Software Development Internship</span> at{' '}
                <span className="font-semibold text-gray-800 dark:text-gray-200">Reliance Industries Limited, PetChem IT Team</span>{' '}
                in Navi Mumbai, where I worked on the AI-LC Scrutiny System across Spring Boot, JPA/Hibernate, MySQL, and Angular.
              </p>
              <p>
                Beyond code, I'm exploring research in Security Challenges in Cloud Computing, love solving algorithmic problems, and unwind by playing piano and harmonium.
              </p>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3 uppercase tracking-wide">Languages I speak</p>
              <div className="flex flex-wrap gap-2">
                {languages.map(({ name, level, flag, color }, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all cursor-default"
                    style={{ borderColor: color + '40', backgroundColor: color + '12', color }}
                  >
                    <span>{flag}</span>
                    <span>{name}</span>
                    <span className="opacity-60 text-xs">· {level}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Education timeline */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Pimpri Chinchwad College of Engineering and Research</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">B.E. in Information Technology · Savitribai Phule Pune University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Expected May 2027 · 6th Semester</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 flex-1 max-w-[180px] rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '87.6%' } : {}}
                        transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                    <span className="text-xs font-mono text-primary font-semibold">8.76 / 10</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
