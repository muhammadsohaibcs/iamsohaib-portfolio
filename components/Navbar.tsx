'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [clickedButton, setClickedButton] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      
      // Update active section
      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const id = href.slice(1)
    setClickedButton(id)
    setTimeout(() => setClickedButton(null), 1500)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(5,8,16,0.92)] backdrop-blur-xl border-b border-[#1a2540]/60 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-DEFAULT to-blue-accent flex items-center justify-center">
              <Terminal size={14} className="text-white" />
            </div>
            <div className="font-display font-700 text-lg">
              <span className="text-text-primary">MS</span>
              <span className="gradient-text">.</span>
            </div>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-DEFAULT'
                    : 'text-text-secondary hover:text-text-primary'
                } ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button (desktop) */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => scrollTo('#contact')}
            className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full border font-medium text-sm transition-all duration-300 hover:scale-105 ${
              clickedButton === 'contact'
                ? 'border-green-400/60 bg-green-500/15 text-green-400 shadow-glow-green'
                : 'border-cyan-DEFAULT/40 text-cyan-DEFAULT hover:bg-cyan-DEFAULT/10 hover:border-cyan-DEFAULT hover:shadow-glow-cyan'
            }`}
          >
            Hire Me
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-text-primary p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-bg/95 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-3xl font-700 text-text-primary hover:gradient-text transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollTo('#contact')}
                className={`mt-4 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  clickedButton === 'contact'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                    : 'bg-gradient-to-r from-cyan-DEFAULT to-blue-accent text-black'
                }`}
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
