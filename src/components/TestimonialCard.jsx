import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-slate-200 shadow-lg shadow-purple-900/20 hover:border-purple-500/30 transition-colors"
    >
      <Quote className="absolute -top-4 right-6 h-8 w-8 text-purple-400 opacity-60" />
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full border border-purple-400/50 object-cover"
        />
        <div>
          <p className="text-base font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-wide text-purple-300">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{testimonial.message}</p>
      <div className="mt-4 flex items-center gap-2 text-sm bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        {'★'.repeat(testimonial.rating)}
      </div>
    </motion.div>
  )
}

export default TestimonialCard

