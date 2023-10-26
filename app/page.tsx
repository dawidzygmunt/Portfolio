import Navbar from '@/components/Navbar/navbar'
import { HeroSection } from '@/components/heroSection/heroSection'
import { Skills } from '@/components/skills/skills'
import { Experience } from '@/components/experiance/experience'
import { Projects } from '@/components/projects/projects'
import Footer from '@/components/footer/footer'




export default function Home() {
  return (
    <main className="">
      <div className='tlo'>
        <Navbar />
        <div className='tlo1'>
          <HeroSection />
        </div>
        <div  className='tlo2'>
          <Skills />
          <Experience />
        </div>
        <div className='tlo3'>
          <Projects />
        </div>
        <Footer />
      </div>
      {/* <div id="modal-root"></div> */}
    </main>
  )
}
