'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { GraduationCap, MapPin, Calendar, Cpu, Globe, Database } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, label: 'CS Student', value: 'COMSATS University' },
  { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan' },
  { icon: Calendar, label: 'GPA', value: '3.83 / 4.0' },
]

const focus = [
  { icon: Cpu, label: 'AI / ML', desc: 'Neural networks, data processing, intelligent systems' },
  { icon: Globe, label: 'Full Stack', desc: 'React, Node.js, Express, MERN stack applications' },
  { icon: Database, label: 'Database Systems', desc: 'SQL, MongoDB, Oracle, concurrency control' },
]

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left column */}
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="Who I"
            highlight="Am"
            subtitle="A passionate Computer Science student building real-world solutions at the intersection of AI and full-stack engineering."
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-text-secondary font-body leading-relaxed text-[15px]"
          >
            <p>
              I'm a Computer Science student at{' '}
              <span className="text-text-primary font-medium">COMSATS University Islamabad</span>{' '}
              with a GPA of{' '}
              <span className="gradient-text font-semibold">3.83</span>, specializing in full-stack
              development, database systems, and AI-based applications.
            </p>
            <p>
              I've built systems ranging from a{' '}
              <span className="text-text-primary font-medium">Hospital Management System</span> with
              concurrency control, to{' '}
              <span className="text-text-primary font-medium">machine learning models</span> for customer
              churn prediction, and scalable web applications deployed in production.
            </p>
            <p>
              Currently, my focus is on{' '}
              <span className="gradient-text font-semibold">Artificial Intelligence</span> and
              system-level engineering — crafting solutions that don't just work, but scale.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 shadow-card">
                <div className="w-8 h-8 rounded-lg bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-cyan-DEFAULT" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
                  <div className="font-body text-sm text-text-primary font-medium">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column - focus areas */}
        <div className="space-y-4">
          {focus.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:border-cyan-DEFAULT/30 border border-transparent"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-DEFAULT/15 to-blue-accent/15 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-DEFAULT/25 group-hover:to-blue-accent/25 transition-all duration-300">
                  <Icon size={22} className="text-cyan-DEFAULT" />
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg text-text-primary mb-1">{label}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Code snippet decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-2xl p-5 shadow-card font-mono text-xs leading-relaxed"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="text-text-muted">
              <span className="text-blue-bright">const</span>{' '}
              <span className="text-cyan-light">sohaib</span>{' '}
              <span className="text-text-secondary">=</span>{' '}
              <span className="text-text-secondary">{'{'}</span>
            </div>
            <div className="text-text-muted pl-4">
              <span className="text-cyan-DEFAULT">passion</span>
              <span className="text-text-muted">:</span>{' '}
              <span className="text-green-400">"AI & Systems"</span>,
            </div>
            <div className="text-text-muted pl-4">
              <span className="text-cyan-DEFAULT">status</span>
              <span className="text-text-muted">:</span>{' '}
              <span className="text-green-400">"Open to work"</span>,
            </div>
            <div className="text-text-muted pl-4">
              <span className="text-cyan-DEFAULT">gpa</span>
              <span className="text-text-muted">:</span>{' '}
              <span className="text-yellow-400">3.83</span>
            </div>
            <div className="text-text-secondary">{'}'}</div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
