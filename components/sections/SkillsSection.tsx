'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Code, Globe, Database, Brain, Wrench } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    label: 'Languages',
    color: 'cyan',
    skills: ['C++', 'Java', 'Python', 'JavaScript','Assembly'],
  },
  {
    icon: Globe,
    label: 'Web Development',
    color: 'blue',
    skills: ['React', 'Node.js', 'Express', 'HTML/CSS'],
  },
  {
    icon: Database,
    label: 'Databases',
    color: 'cyan',
    skills: ['SQL', 'MongoDB', 'Oracle', 'NoSQL'],
  },
  {
    icon: Brain,
    label: 'AI / ML',
    color: 'blue',
    skills: ['Neural Networks', 'Data Processing', 'scikit-learn', 'Data Analysis'],
  },
  {
    icon: Wrench,
    label: 'Tools & Platforms',
    color: 'cyan',
    skills: ['GitHub', 'Linux', 'WordPress', 'Excel Automation', 'Vercel', 'VS Code'],
  },
]

const colorMap = {
  cyan: {
    border: 'hover:border-cyan-DEFAULT/40',
    icon: 'bg-cyan-DEFAULT/10 text-cyan-DEFAULT',
    tag: 'bg-cyan-DEFAULT/8 border-cyan-DEFAULT/20 text-cyan-DEFAULT',
    glow: 'hover:shadow-glow-cyan',
  },
  blue: {
    border: 'hover:border-blue-accent/40',
    icon: 'bg-blue-accent/10 text-blue-bright',
    tag: 'bg-blue-accent/8 border-blue-accent/20 text-blue-bright',
    glow: 'hover:shadow-glow-blue',
  },
}

export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <SectionWrapper id="skills" className="bg-surface/30">
      <SectionHeading
        eyebrow="Technical Arsenal"
        title="Skills &"
        highlight="Expertise"
        subtitle="Technologies I use to turn ideas into production-ready systems."
      />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map(({ icon: Icon, label, color, skills }, i) => {
          const c = colorMap[color as keyof typeof colorMap]
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 shadow-card border border-border/50 transition-all duration-300 ${c.border} ${c.glow} group`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon} transition-all duration-300`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-700 text-base text-text-primary">{label}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-mono tracking-wide transition-all duration-200 cursor-default
                      bg-transparent ${c.tag} hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}

        {/* Currently learning card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-2xl p-6 shadow-card border border-border/50 sm:col-span-2 lg:col-span-1 animated-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-DEFAULT animate-pulse" />
            <span className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest">Currently Exploring</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['LangChain', 'FastAPI', 'Vector DBs', 'LLM Fine-tuning', 'Docker', 'RAG Systems'].map((s) => (
              <span key={s} className="tech-tag shimmer">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-text-muted font-body text-xs leading-relaxed">
            Continuously expanding my knowledge in AI infrastructure and modern deployment practices.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
