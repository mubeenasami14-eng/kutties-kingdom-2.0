import Booking from '../components/Booking'
import FAQ from '../components/FAQ'

export default function BookScreen() {
  return (
    <>
      <div className="screen-banner screen-banner-book">
        <h2 className="screen-banner-title">Book Your Slot</h2>
        <p className="screen-banner-subtitle">Reserve your fun time at Kutties Kingdom!</p>
      </div>
      <Booking />
      <FAQ />
    </>
  )
}
