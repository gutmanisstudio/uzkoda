import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuSection from '@/components/MenuSection'
import KidsRoom from '@/components/KidsRoom'
import CinematicBreak from '@/components/CinematicBreak'
import Reviews from '@/components/Reviews'
import Reservation from '@/components/Reservation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <KidsRoom />
        <CinematicBreak />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
