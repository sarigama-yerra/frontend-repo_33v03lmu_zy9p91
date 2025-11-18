import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1800 + Math.random() * 1200
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setProgress(Math.floor(p * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Scanline / noise */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(transparent, rgba(0,0,0,0.6))',
            mixBlendMode: 'overlay'
          }} />

          {/* Glitching title */}
          <motion.div
            className="relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
          >
            <div className="text-center select-none">
              <div className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">
                  DARKROOM
                </span>
              </div>
              <div className="mt-3 text-sm md:text-base text-zinc-300/80 font-mono">
                initializing visual systems...
              </div>
            </div>

            {/* Glitch layers */}
            <div className="absolute inset-0 -z-0 blur-sm opacity-70">
              <div className="w-full h-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 animate-pulse" />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-16 w-[70%] max-w-md h-2 rounded-full bg-zinc-800/70 overflow-hidden border border-zinc-700/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500"
              style={{ width: `${progress}%` }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
