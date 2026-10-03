interface AppHeaderProps {
  onLogoClick: () => void
}

export default function AppHeader({ onLogoClick }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <button className="app-header-logo" onClick={onLogoClick}>
          <span className="app-header-crown">👑</span>
          <span className="app-header-name">Kutties Kingdom</span>
        </button>
        <a href="tel:7829807717" className="app-header-call">
          <span>📞</span>
        </a>
      </div>
    </header>
  )
}
