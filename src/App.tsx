import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Games from './components/Games'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CallButton from './components/CallButton'
import BottomNav from './components/BottomNav'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Banner />
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Features />
      <Games />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
      <CallButton />
      <BottomNav />
    </>
  )
}
