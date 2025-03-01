import Navbar from '@/components/Navbar/navbar'
import { HeroSection } from '@/components/heroSection/heroSection'
import { Skills } from '@/components/skills/skills'

import { Projects } from '@/components/projects/projects'
import Footer from '@/components/footer/footer'
import { Experience } from '@/components/experience/experience'

export default function Home() {
  return (
    <main className="">
      <div className="tlo">
        <Navbar />
        <div className="tlo1 mt-10">
          <HeroSection />
        </div>
        <div className="tlo2">
          <Skills />
          <Experience />
        </div>
        <div className="tlo3">
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  )
}
