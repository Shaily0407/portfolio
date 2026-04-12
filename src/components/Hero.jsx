import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react'

const roles = [
  'Full-Stack Developer',
  'Java & Spring Boot Dev',
  'React Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIdx]
    let i = typing ? 0 : role.length
    let timer

    if (typing) {
      timer = setInterval(() => {
        i++
        setDisplayText(role.slice(0, i))
        if (i >= role.length) {
          clearInterval(timer)
          setTimeout(() => setTyping(false), 1800)
        }
      }, 65)
    } else {
      timer = setInterval(() => {
        i--
        setDisplayText(role.slice(0, i))
        if (i <= 0) {
          clearInterval(timer)
          setRoleIdx((prev) => (prev + 1) % roles.length)
          setTimeout(() => setTyping(true), 200)
        }
      }, 40)
    }

    return () => clearInterval(timer)
  }, [roleIdx, typing])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-70" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-accent/10 blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
            <span className="block text-gray-900 dark:text-white">Shaily</span>
            <span className="block gradient-text">Gujarathi</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={item} className="h-10 mb-6">
            <p className="text-xl md:text-2xl font-mono text-primary">
              {displayText}
              <span className="typing-cursor" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-8">
            I am a B.Tech Information Technology 3rd year B.E IT student passionate about building efficient software and backend systems. I enjoy solving problems using C, C++, and Java,         
                           I am constantly improving my skills in Data Structures, DBMS, and Web Development. Currently, I am an active member of the ACM technical team where I collaborate on projects and expand my technical knowledge. I am also interested in building AI-powered applications and cloud-based systems. My goal is to grow as a software developer and build impactful technology solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-2xl bg-primary text-white font-semibold text-base hover:bg-violet-700 transition-colors shadow-lg shadow-primary/25"
            >
              View Projects →
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-2xl border-2 border-gray-200 dark:border-white/20 font-semibold text-base hover:border-primary hover:text-primary dark:hover:border-primary transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5">
            {[
              { icon: Github, href: 'https://github.com/Shaily0407', label: 'GitHub' },
              { icon: Mail, href: 'mailto:shailygujarathi04@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shaily-gujarathi-345814292?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className="p-3 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-200 text-gray-600 dark:text-gray-400"
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <span className="text-sm text-gray-400 dark:text-gray-600 ml-2">
              github.com/Shaily0407
            </span>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-wrap gap-8"
        >
          {[
            { value: '8.76', label: 'CGPA', color: 'text-primary' },
            { value: '100+', label: 'LeetCode Problems', color: 'text-secondary' },
            { value: '3+', label: 'Projects Built', color: 'text-amber-500' },
            { value: '3 Months', label: 'Intern @ RIL', color: 'text-rose-500' },
          ].map(({ value, label, color }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className={`text-3xl font-bold font-mono ${color}`}>{value}</span>
              <span className="text-sm text-gray-500 dark:text-gray-500">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}
