import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [audio, setAudio] = useState(null)

  const play = async () => {
    try {
      if (!audio) {
        const a = new Audio('https://assets.mixkit.co/sfx/download/mixkit-retro-game-notification-212.wav')
        setAudio(a)
        a.play()
      } else {
        audio.currentTime = 0
        audio.play()
      }
    } catch (e) {}
  }

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    play()
  }

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_90%_100%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white">Collaborate</h2>
          <p className="text-zinc-400 mt-2">Experiments, campaigns, films — let’s build something unreal</p>
        </div>

        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <input required placeholder="Name" className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400/50" />
          <input required placeholder="Email" type="email" className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400/50" />
          <input placeholder="Website or Instagram" className="md:col-span-2 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400/50" />
          <textarea required placeholder="Project details" rows={5} className="md:col-span-2 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400/50" />
          <div className="md:col-span-2 flex items-center justify-between">
            <label className="text-sm text-zinc-400 flex items-center gap-2"><input type="checkbox" className="accent-fuchsia-500" /> receive experimental updates</label>
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-[0.98] transition">Send</button>
          </div>
          {sent && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:col-span-2 text-center text-emerald-300">
              Sent. I’ll respond within 24h.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
