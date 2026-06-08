import Navbar from '@/components/Navbar/navbar'
import { HeroSection } from '@/components/heroSection/heroSection'
import { Skills } from '@/components/skills/skills'

import { Projects } from '@/components/projects/projects'
import Footer from '@/components/footer/footer'
import { Experience } from '@/components/experience/experience'

export default function Home() {
  return (
    <main className="">
      <div className="background-base">
        <Navbar />
        <div className="hero-section-bg mt-10">
          <HeroSection />
        </div>
        <div className="skills-experience-bg">
          <Skills />
          <Experience />
        </div>
        <div className="projects-bg">
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  )
}
