import { useEffect, useState, useCallback } from 'react'
import AppHeader from './components/AppHeader'
import HomeScreen from './screens/HomeScreen'
import GamesScreen from './screens/GamesScreen'
import BookScreen from './screens/BookScreen'
import ContactScreen from './screens/ContactScreen'
import BottomNav from './components/BottomNav'
import CallButton from './components/CallButton'
import Splash from './components/Splash'

export type AppView = 'home' | 'games' | 'book' | 'contact'

export default function App() {
  const [view, setView] = useState<AppView>('home')
  const [splashDone, setSplashDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 2200)
    return () => clearTimeout(t)
  }, [])

  const navigate = useCallback((v: AppView) => {
    setView(v)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  if (!splashDone) {
    return <Splash />
  }

  return (
    <div className="app-shell">
      <AppHeader onLogoClick={() => navigate('home')} />
      <main className={`app-main app-view-${view}`} key={view}>
        {view === 'home' && <HomeScreen onNavigate={navigate} />}
        {view === 'games' && <GamesScreen />}
        {view === 'book' && <BookScreen />}
        {view === 'contact' && <ContactScreen />}
      </main>
      <CallButton />
      <BottomNav active={view} onNavigate={navigate} />
    </div>
  )
}
