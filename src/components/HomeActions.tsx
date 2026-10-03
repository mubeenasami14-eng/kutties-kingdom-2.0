import { AppView } from '../App'

interface HomeActionsProps {
  onNavigate: (v: AppView) => void
}

const actions = [
  { icon: '🎮', title: 'Explore Games', desc: 'Soft play + arcade', view: 'games' as AppView, color: 'orange' },
  { icon: '📅', title: 'Book a Slot', desc: 'Reserve your time', view: 'book' as AppView, color: 'teal' },
  { icon: '📍', title: 'Find Us', desc: 'Moolakadai, Chennai', view: 'contact' as AppView, color: 'yellow' },
]

export default function HomeActions({ onNavigate }: HomeActionsProps) {
  return (
    <div className="home-actions">
      <div className="container">
        <div className="home-actions-grid">
          {actions.map((a) => (
            <button
              key={a.view}
              className={`home-action-card home-action-${a.color}`}
              onClick={() => onNavigate(a.view)}
            >
              <div className="home-action-icon">{a.icon}</div>
              <div className="home-action-text">
                <div className="home-action-title">{a.title}</div>
                <div className="home-action-desc">{a.desc}</div>
              </div>
              <div className="home-action-arrow">›</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
