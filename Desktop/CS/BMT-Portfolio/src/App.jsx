import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import ArtistStatement from './components/ArtistStatement'
import Footer from './components/Footer'

export default function App() {
  const [overlayOpacity, setOverlayOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      // Start fading at 25% of hero, fully opaque at 100% of hero
      const start = heroHeight * 0.25
      const end = heroHeight
      if (scrollY <= start) {
        setOverlayOpacity(0.3)
      } else if (scrollY >= end) {
        setOverlayOpacity(0.78)
      } else {
        setOverlayOpacity(((scrollY - start) / (end - start)) * 0.78)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-stone-800 relative">
      {/* Fixed video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="/background.mp4"
      />

      {/* Scroll-driven dark overlay */}
      <div
        className="fixed inset-0 bg-stone-900 pointer-events-none -z-10"
        style={{ opacity: overlayOpacity, transition: 'opacity 0.05s linear' }}
      />

      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <ArtistStatement />
      </main>
      <Footer />
    </div>
  )
}
