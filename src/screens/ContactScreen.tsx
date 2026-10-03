import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import AppFooter from '../components/AppFooter'

export default function ContactScreen() {
  return (
    <>
      <div className="screen-banner screen-banner-contact">
        <h2 className="screen-banner-title">Visit Us</h2>
        <p className="screen-banner-subtitle">We're in Moolakadai, Chennai — come say hello!</p>
      </div>
      <Contact />
      <Testimonials />
      <AppFooter />
    </>
  )
}
