import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-5xl font-black text-white">About the Studio</h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Fusing photography, motion, and interface design into immersive stories. The studio explores mixed aesthetics—glass, chrome, brutal, soft—under a futuristic lens.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-black text-white">120+</div>
              <div className="text-xs text-zinc-400">Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-black text-white">14</div>
              <div className="text-xs text-zinc-400">Awards</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-black text-white">9 yrs</div>
              <div className="text-xs text-zinc-400">Experience</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=1200&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
