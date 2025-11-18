import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Reels from './components/Reels'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Loader />
      <Hero />
      <Showcase />
      <Reels />
      <About />
      <Contact />
      <footer className="bg-black/80 border-t border-white/10 py-10 text-center text-zinc-400 text-sm">
        © {new Date().getFullYear()} Darkroom — experimental portfolio experience
      </footer>
    </div>
  )
}

export default App
