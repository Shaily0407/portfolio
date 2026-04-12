import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate sending
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const socials = [
    { icon: Github, label: 'GitHub', value: 'Shaily0407', href: 'https://github.com/Shaily0407', color: '#333' },
    { icon: Linkedin, label: 'LinkedIn', value: 'shaily-gujarathi-345814292', href: 'https://www.linkedin.com/in/shaily-gujarathi-345814292?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#0A66C2' },
    { icon: Mail, label: 'Email', value: 'shailygujarathi04@gmail.com', href: 'mailto:shailygujarathi04@gmail.com', color: '#7C3AED' },
    { icon: Phone, label: 'Phone', value: '+91 9510732861', href: 'tel:+919510732861', color: '#0D9488' },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra', href: '#', color: '#F43F5E' },
  ]

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px flex-1 max-w-[60px] bg-primary/40" />
          <span className="font-mono text-sm text-primary uppercase tracking-widest">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let's work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mb-14 max-w-xl"
        >
          I'm open to internships, collaborations, and interesting conversations. Drop me a message!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4 mb-10">
              {socials.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: color + '18' }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-600">{label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick facts */}
            <div className="p-5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
              <p className="text-sm font-semibold text-primary mb-2">Currently available for</p>
              <div className="flex flex-wrap gap-2">
                {['Internships', 'Full-time (2027)', 'Open Source', 'Freelance'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs bg-white dark:bg-white/10 border border-primary/20 text-gray-700 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Rahul Sharma' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="relative">
                  <motion.label
                    animate={{
                      y: focused === id || form[id] ? -24 : 0,
                      scale: focused === id || form[id] ? 0.85 : 1,
                      color: focused === id ? '#7C3AED' : '#9CA3AF',
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-4 top-4 text-sm origin-left pointer-events-none"
                    htmlFor={id}
                  >
                    {label}
                  </motion.label>
                  <input
                    id={id}
                    type={type}
                    value={form[id]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused('')}
                    placeholder={focused === id ? placeholder : ''}
                    required
                    className="w-full pt-6 pb-3 px-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary dark:focus:border-primary outline-none text-sm text-gray-800 dark:text-gray-200 transition-colors"
                  />
                </div>
              ))}

              <div className="relative">
                <motion.label
                  animate={{
                    y: focused === 'message' || form.message ? -24 : 0,
                    scale: focused === 'message' || form.message ? 0.85 : 1,
                    color: focused === 'message' ? '#7C3AED' : '#9CA3AF',
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-4 top-4 text-sm origin-left pointer-events-none"
                  htmlFor="message"
                >
                  Your Message
                </motion.label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder={focused === 'message' ? 'Tell me about your project or opportunity...' : ''}
                  required
                  className="w-full pt-6 pb-3 px-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary dark:focus:border-primary outline-none text-sm text-gray-800 dark:text-gray-200 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary text-white font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-primary/25 disabled:opacity-60"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} /> Message Sent! ✨
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
