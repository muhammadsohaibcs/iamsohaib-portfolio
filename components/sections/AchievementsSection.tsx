'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { Trophy, Award, X, ZoomIn, GraduationCap, ExternalLink } from 'lucide-react'

const achievements = [
  {
    id: 'techfest',
    type: 'achievement',
    icon: Trophy,
    title: '3rd Position — CUI Tech Fest 2025',
    issuer: 'COMSATS University Islamabad',
    description: 'Secured 3rd place at an annual tech competition featuring 10+ universities in Islamabad, competing against top Computer Science students.',
    color: 'amber',
    image: "/CUI TECH.jpeg", // Replace with '/techfest-cert.jpg'
    ceremonyImage: null, // Replace with '/techfest-ceremony.jpg'
    year: '2025',
  },
  {
    id: 'gpa',
    type: 'academic',
    icon: GraduationCap,
    title: 'Academic Excellence — GPA 3.83',
    issuer: 'COMSATS University Islamabad',
    description: 'Maintained a 3.83 / 4.0 GPA throughout the CS program, demonstrating consistent academic performance.',
    color: 'cyan',
    image: "/Result.jpeg",
    year: 'Ongoing',
  },
  {
    id: 'python',
    type: 'certification',
    icon: Award,
    title: 'Python for Everybody',
    issuer: 'Coursera / University of Michigan',
    description: 'Comprehensive Python programming specialization covering data structures, web scraping, and databases.',
    color: 'blue',
    image: "/Python for everbody.jpeg", // Replace with '/cert-python.jpg'
    year: '2025',
  },
  {
    id: 'ai',
    type: 'certification',
    icon: Award,
    title: 'AI for Everyone',
    issuer: 'Coursera / DeepLearning.AI',
    description: "Andrew Ng's AI strategy course covering AI capabilities, business applications, and ethical implications.",
    color: 'violet',
    image: "/AI For Everybody.jpeg",
    year: '2025',
  },
  {
    id: 'wordpress',
    type: 'certification',
    icon: Award,
    title: 'WordPress Development',
    issuer: 'DigiSkills Pakistan',
    description: 'Professional certification in WordPress development and site building.',
    color: 'emerald',
    image: "/wordpress.jpeg",
    year: '2024',
  },
  {
    id: 'ecommerce',
    type: 'certification',
    icon: Award,
    title: 'E-Commerce Mastery',
    issuer: 'DigiSkills Pakistan',
    description: 'Certification in WooCommerce, digital commerce strategies, and online selling platforms.',
    color: 'teal',
    image: "/ecom.jpeg",
    year: '2024',
  },
  {
    id: 'va',
    type: 'certification',
    icon: Award,
    title: 'Virtual Assistance',
    issuer: 'DigiSkills Pakistan',
    description: 'Digital workspace, productivity tools, communication and remote collaboration skills certification.',
    color: 'pink',
    image: "/VA.jpeg",
    year: '2024',
  },
]

const colorMap: Record<string, string> = {
  amber: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
  cyan: 'from-cyan-500/20 to-blue-500/10 border-cyan-DEFAULT/30 text-cyan-DEFAULT',
  blue: 'from-blue-500/20 to-indigo-500/10 border-blue-accent/30 text-blue-bright',
  violet: 'from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-400',
  emerald: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
  teal: 'from-teal-500/20 to-cyan-500/10 border-teal-500/30 text-teal-400',
  pink: 'from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-400',
}

const typeLabels: Record<string, string> = {
  achievement: '🏆 Achievement',
  academic: '🎓 Academic',
  certification: '📜 Certification',
}

export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <SectionWrapper id="achievements" className="bg-surface/20">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements &"
        highlight="Certifications"
        subtitle="Milestones that reflect my commitment to learning and excellence."
      />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((item, i) => {
          const Icon = item.icon
          const colors = colorMap[item.color]
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden border shadow-card hover:shadow-card-hover transition-all duration-300 group bg-gradient-to-br ${colors.split(' ').slice(0, 2).join(' ')}`}
            >
              {/* Image area */}
              <div
                className="relative h-40 bg-black/30 flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => item.image && window.open(item.image, '_blank')}
              >
                {item.image ? (
                  <>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-2 opacity-50">
                    <Icon size={40} className={colors.split(' ').pop()} />
                    <span className="font-mono text-xs text-text-muted">Add image</span>
                  </div>
                )}
                {/* Year badge */}
                <span className="absolute top-3 right-3 font-mono text-[10px] bg-black/50 border border-white/10 text-white drop-shadow-md px-2 py-1 rounded-full">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-text-muted">{typeLabels[item.type]}</span>
                </div>
                <h3 className="font-display font-700 text-base text-text-primary leading-snug mb-1">
                  {item.title}
                </h3>
                <p className={`font-mono text-xs mb-3 ${colors.split(' ').pop()}`}>{item.issuer}</p>
                <p className="font-body text-xs text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
