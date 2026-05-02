import type { Metadata } from 'next'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Muhammad Sohaib — Full Stack Developer | AI Enthusiast',
  description: 'Portfolio of Muhammad Sohaib — Building intelligent systems, scalable applications, and real-world solutions. AI Engineer and Full Stack Developer based in Islamabad.',
  keywords: ['Muhammad Sohaib', 'AI Engineer', 'Full Stack Developer', 'Portfolio', 'COMSATS', 'React', 'Next.js'],
  authors: [{ name: 'Muhammad Sohaib' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Muhammad Sohaib — AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems, scalable applications, and real-world solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
