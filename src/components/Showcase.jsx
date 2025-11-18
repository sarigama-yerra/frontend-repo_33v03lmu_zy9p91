import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const shots = [
  { title: 'Neon District', tag: 'Photography', url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Liquid Chrome', tag: 'Product Reel', url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Vapor Bloom', tag: 'Editorial', url: 'https://images.unsplash.com/photo-1520975624749-5f22d1a123f1?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Carbon Mirage', tag: 'Automotive', url: 'https://images.unsplash.com/photo-1542365887-5f6c5c3d9490?q=80&w=1200&auto=format&fit=crop' },
]

export default function Showcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0,1], [0, -80])
  const scale = useTransform(scrollYProgress, [0,1], [1, 1.1])

  return (
    <section ref={ref} id="work" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white">Selected Work</h2>
            <p className="text-zinc-400 mt-2">Immersive visuals across photography and motion</p>
          </div>
          <a href="#" className="text-sm text-cyan-300 hover:text-white">View All</a>
        </div>

        <motion.div style={{ y, scale }} className="grid md:grid-cols-2 gap-6">
          {shots.map((s, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={s.url} alt={s.title} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent">
                <div>
                  <p className="text-white font-semibold tracking-wide">{s.title}</p>
                  <p className="text-xs text-zinc-300">{s.tag}</p>
                </div>
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-black">Open</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
