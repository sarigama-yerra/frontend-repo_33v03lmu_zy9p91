import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Reels() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6])

  return (
    <section id="reels" ref={container} className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_100%,rgba(34,211,238,0.12),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white">Motion Reels</h2>
            <p className="text-zinc-400 mt-2">Micro-interactions, reels & branded loops</p>
          </div>
          <a href="#" className="text-sm text-cyan-300 hover:text-white">Play Reel</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} style={{ rotate }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <video className="w-full h-64 object-cover" autoPlay muted loop playsInline src={`https://cdn.coverr.co/videos/coverr-aerial-view-of-a-bridge-9684/1080p.mp4`} />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-3 text-white text-sm font-semibold">Loop {i}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
