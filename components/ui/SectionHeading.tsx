'use client'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="h-px w-8 bg-cyan-DEFAULT/60" />
          <span className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-[0.2em]">{eyebrow}</span>
          <div className="h-px w-8 bg-cyan-DEFAULT/60" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-800 text-text-primary leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary font-body text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
