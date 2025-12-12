import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQ({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-left shadow-lg shadow-purple-900/10 hover:border-purple-500/30 transition-colors">
      <button
        className="flex w-full items-center justify-between gap-3 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h4 className="text-base font-semibold text-white">{item.question}</h4>
        <ChevronDown
          className={`h-5 w-5 text-purple-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.answer}</p>}
    </div>
  )
}

export default FAQ

