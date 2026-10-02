import { useEffect, useState } from 'react'

const tabs = [
  { label: 'Home', icon: '🏠', href: '#home' },
  { label: 'Games', icon: '🎮', href: '#games' },
  { label: 'Book', icon: '📅', href: '#booking' },
  { label: 'Call', icon: '📞', href: 'tel:7829807717' },
  { label: 'Visit', icon: '📍', href: '#contact' },
]

export default function BottomNav() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = tabs
      .filter((t) => t.href.startsWith('#'))
      .map((t) => ({ id: t.href, el: document.querySelector(t.href) }))
      .filter((s) => s.el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((s) => observer.observe(s.el!))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <a
          key={tab.href}
          href={tab.href}
          className={`bottom-nav-item ${active === tab.href ? 'bottom-nav-active' : ''}`}
        >
          <span className="bottom-nav-icon">{tab.icon}</span>
          <span className="bottom-nav-label">{tab.label}</span>
        </a>
      ))}
    </nav>
  )
}
