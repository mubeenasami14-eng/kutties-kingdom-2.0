import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HomeActions from '../components/HomeActions'
import AppFooter from '../components/AppFooter'
import { AppView } from '../App'

interface HomeScreenProps {
  onNavigate: (v: AppView) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <HomeActions onNavigate={onNavigate} />
      <About />
      <Features />
      <Pricing onNavigate={() => onNavigate('book')} />
      <Gallery />
      <Testimonials />
      <FAQ />
      <AppFooter />
    </>
  )
}
