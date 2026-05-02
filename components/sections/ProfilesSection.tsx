'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { GitBranch, Link2, Code, ArrowUpRight } from 'lucide-react'

const profiles = [
  {
    platform: 'GitHub',
    handle: '@muhammadsohaibcs',
    url: 'https://github.com/muhammadsohaibcs',
    description: 'Explore my repositories, projects, and open-source contributions. Source code for all portfolio projects lives here.',
    icon: GitBranch,
    color: 'from-gray-700/30 to-gray-800/20',
    border: 'hover:border-gray-400/40',
    accent: 'text-gray-300',
    stats: '7+ repos',
  },
  {
    platform: 'LinkedIn',
    handle: 'Muhammad Sohaib',
    url: 'https://www.linkedin.com/in/muhammad-sohaib-2538b5310/',
    description: 'Professional profile with my experience, education, skills, and recommendations. Let\'s connect professionally.',
    icon: Link2,
    color: 'from-blue-700/30 to-blue-800/20',
    border: 'hover:border-blue-400/40',
    accent: 'text-blue-400',
    stats: 'Connect →',
  },
  {
    platform: 'LeetCode',
    handle: 'muhammadsohaibcs',
    url: 'https://leetcode.com/muhammadsohaibcs',
    description: 'Data structures and algorithms practice. Actively solving problems to sharpen problem-solving skills.',
    icon: Code,
    color: 'from-orange-700/30 to-amber-800/20',
    border: 'hover:border-orange-400/40',
    accent: 'text-orange-400',
    stats: 'Solving daily',
  },
]

export default function ProfilesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="profiles">
      <SectionHeading
        eyebrow="Find Me Online"
        title="Online"
        highlight="Profiles"
        subtitle="Follow my work, connect professionally, and see my problem-solving journey."
        align="center"
      />

      <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {profiles.map(({ platform, handle, url, description, icon: Icon, color, border, accent, stats }, i) => (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`glass-card rounded-2xl p-6 shadow-card border border-border/50 ${border} hover:shadow-card-hover transition-all duration-300 group bg-gradient-to-br ${color} flex flex-col`}
          >
            {/* Icon */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <Icon size={22} className={accent} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-text-muted group-hover:text-text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-display font-700 text-lg text-text-primary mb-1">{platform}</h3>
              <p className={`font-mono text-xs mb-4 ${accent}`}>{handle}</p>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{description}</p>
            </div>

            {/* Stats */}
            <div className="mt-5 pt-4 border-t border-white/5">
              <span className={`font-mono text-xs ${accent}`}>{stats}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}
