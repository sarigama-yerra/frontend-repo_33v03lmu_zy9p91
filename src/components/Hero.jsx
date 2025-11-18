import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const overlayGrad = useMemo(() => (
    'radial-gradient(1200px 600px at 70% 20%, rgba(147,51,234,0.25), transparent 60%), ' +
    'radial-gradient(800px 400px at 10% 80%, rgba(6,182,212,0.18), transparent 60%)'
  ), [])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veils */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: overlayGrad }} />

      {/* Top nav */}
      <div className="relative z-10 px-6 md:px-10 pt-6">
        <div className="flex items-center justify-between">
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-wide">Darkroom</span>
          </motion.div>
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#reels" className="hover:text-white transition-colors">Reels</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-colors">Contact</a>
          </motion.div>
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-10 max-w-6xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }} className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            Cinematic visions in a neon cosmos
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-4 max-w-xl text-zinc-300">
            Photographer and videographer crafting surreal stories with experimental interfaces, motion, and sound.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold shadow-[0_0_30px_rgba(168,85,247,0.6)]">Explore Work</a>
            <a href="#reels" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 backdrop-blur-md transition">Watch Reels</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
