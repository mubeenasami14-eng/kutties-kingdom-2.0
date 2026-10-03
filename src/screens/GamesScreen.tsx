import Games from '../components/Games'
import Pricing from '../components/Pricing'
import { AppView } from '../App'

interface GamesScreenProps {
  onNavigate?: (v: AppView) => void
}

export default function GamesScreen({ onNavigate }: GamesScreenProps) {
  return (
    <>
      <div className="screen-banner">
        <h2 className="screen-banner-title">Games & Activities</h2>
        <p className="screen-banner-subtitle">Over 15 fun games for ages 2 to 14!</p>
      </div>
      <Games />
      <Pricing onNavigate={onNavigate ? () => onNavigate('book') : undefined} />
      {onNavigate && (
        <div className="screen-cta">
          <h3>Ready to Play?</h3>
          <p>Book your slot now and let the fun begin!</p>
          <button className="btn-primary" onClick={() => onNavigate('book')}>
            Book Your Slot
          </button>
        </div>
      )}
    </>
  )
}
