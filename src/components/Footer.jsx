import { motion } from 'framer-motion'
import { Github, Mail, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/5 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div>
          <a href="#" className="font-mono text-lg font-medium">
            <span className="text-primary">sg</span>
            <span className="text-gray-400">.dev</span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-600 mt-1">
            © {new Date().getFullYear()} Shaily Gujarathi · Built with React + Vite
          </p>
        </div>

        <div className="flex items-center gap-4">
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
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-600 dark:text-gray-400 transition-all"
            >
              <Icon size={18} />
            </motion.a>
          ))}

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-primary text-white shadow-lg shadow-primary/25 hover:bg-violet-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
