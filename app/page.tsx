'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
import ProfilesSection from '@/components/sections/ProfilesSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ProfilesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
