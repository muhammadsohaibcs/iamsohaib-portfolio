'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Mail, Send, CheckCircle, MapPin, Clock, AlertCircle } from 'lucide-react'

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error('Failed to send email')
      }

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error('Email send failed:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-surface/20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left */}
        <div ref={ref}>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's"
            highlight="Connect"
            subtitle="Available for internships, freelance work, and collaborations. Let's build something great together."
          />

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'muhammadsohaibcs@gmail.com',
                link: 'mailto:muhammadsohaibcs@gmail.com',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Islamabad, Pakistan',
                link: null,
              },
              {
                icon: Clock,
                label: 'Status',
                value: 'Open to opportunities',
                link: null,
                badge: true,
              },
            ].map(({ icon: Icon, label, value, link, badge }) => (
              <div key={label} className="glass-card rounded-2xl p-5 border border-border/50 flex items-center gap-4 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-cyan-DEFAULT" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{label}</p>
                  {link ? (
                    <a href={link} className="font-body text-sm text-text-primary hover:text-cyan-DEFAULT transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm text-text-primary">{value}</span>
                      {badge && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Availability note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 p-5 rounded-2xl border border-cyan-DEFAULT/20 bg-cyan-DEFAULT/5"
          >
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              💼 Currently seeking{' '}
              <span className="text-cyan-DEFAULT font-medium">internships</span>,{' '}
              <span className="text-cyan-DEFAULT font-medium">freelance projects</span>, and{' '}
              <span className="text-cyan-DEFAULT font-medium">collaborative opportunities</span> in
              AI engineering and full-stack development.
            </p>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border border-border/50 shadow-card space-y-5">
            <h3 className="font-display font-700 text-xl text-text-primary">Send a Message</h3>
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-center gap-2">
                <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-DEFAULT/60 focus:bg-cyan-DEFAULT/5 transition-all duration-200 font-body"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-DEFAULT/60 focus:bg-cyan-DEFAULT/5 transition-all duration-200 font-body"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Subject</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-DEFAULT/60 focus:bg-cyan-DEFAULT/5 transition-all duration-200 font-body"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan-DEFAULT/60 focus:bg-cyan-DEFAULT/5 transition-all duration-200 font-body resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm border transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                sent
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400/50 shadow-lg shadow-green-500/30'
                  : 'bg-gradient-to-r from-cyan-DEFAULT to-blue-accent text-white border-white/30 hover:shadow-glow-cyan'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {sent ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-muted rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-center font-mono text-[10px] text-text-muted">
              I typically respond within 24 hours
            </p>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
