'use client'

import { GitBranch, Link2, Code, Heart, Terminal, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#profiles', label: 'Profiles' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/muhammadsohaibcs', icon: GitBranch, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/muhammad-sohaib-2538b5310/', icon: Link2, label: 'LinkedIn' },
  { href: 'https://leetcode.com/muhammadsohaibcs', icon: Code, label: 'LeetCode' },
  { href: 'https://wa.me/923237884167', icon: MessageCircle, label: 'WhatsApp' },
]

export default function Footer() {
  const [clickedButton, setClickedButton] = useState<string | null>(null)

  const scrollTo = (href: string) => {
    const id = href.slice(1)
    setClickedButton(id)
    setTimeout(() => setClickedButton(null), 1500)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-border/50 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-DEFAULT to-blue-accent flex items-center justify-center">
                <Terminal size={14} className="text-white" />
              </div>
              <span className="font-display font-700 text-lg text-text-primary">
                Muhammad <span className="gradient-text">Sohaib</span>
              </span>
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed max-w-xs">
              AI Engineer & Full Stack Developer building intelligent systems and scalable applications.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-text-muted hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map(l => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="font-body text-sm text-text-secondary hover:text-text-primary text-left transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-4">Open To</h4>
            <div className="space-y-2">
              {['Internships', 'Freelance Projects', 'Full-time Roles', 'Open Source Collab'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-DEFAULT/60" />
                  <span className="font-body text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollTo('#contact')}
              className={`mt-6 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 border ${
                clickedButton === 'contact'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-400/50 shadow-lg shadow-green-500/30'
                  : 'bg-gradient-to-r from-cyan-DEFAULT to-blue-accent border-muted/50 hover:shadow-glow-cyan'
              }`}
            >
              Get in Touch →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © 2026 Muhammad Sohaib. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted flex items-center gap-1">
            Built with <Heart size={11} className="text-red-400 fill-red-400 mx-0.5" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
