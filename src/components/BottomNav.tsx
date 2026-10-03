import { AppView } from '../App'

interface BottomNavProps {
  active: AppView
  onNavigate: (v: AppView) => void
}

const tabs: { view: AppView; label: string; icon: string }[] = [
  { view: 'home', label: 'Home', icon: '🏠' },
  { view: 'games', label: 'Games', icon: '🎮' },
  { view: 'book', label: 'Book', icon: '📅' },
  { view: 'contact', label: 'Visit', icon: '📍' },
]

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.view}
          className={`bottom-nav-item ${active === tab.view ? 'bottom-nav-active' : ''}`}
          onClick={() => onNavigate(tab.view)}
        >
          <span className="bottom-nav-icon">{tab.icon}</span>
          <span className="bottom-nav-label">{tab.label}</span>
          {active === tab.view && <span className="bottom-nav-indicator"></span>}
        </button>
      ))}
      <a href="tel:7829807717" className="bottom-nav-item bottom-nav-call">
        <span className="bottom-nav-icon">📞</span>
        <span className="bottom-nav-label">Call</span>
      </a>
    </nav>
  )
}
