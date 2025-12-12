import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PhoneCall, MessageCircle, Sparkles } from 'lucide-react'
import Button from './Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Support', to: '/support' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  
  // Professional WhatsApp message for general inquiry
  const whatsappMessage = encodeURIComponent("Assalamu Alaikum, I am visiting Laraib Online Quran Academy website and would like to learn more about your courses. Could you please assist me?")
  const whatsappUrl = `https://wa.me/923265757534?text=${whatsappMessage}`

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-semibold tracking-tight px-3 py-2 rounded-full transition ${
      isActive ? 'text-purple-300 bg-purple-500/10' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white font-black shadow-lg shadow-purple-500/30 ring-2 ring-purple-500/20">
            LOQA
          </div>
          <div className="leading-tight">
            <p className="text-[22px] uppercase tracking-[0.25em] text-purple-400">Laraib</p>
            <p className="text-lg font-semibold text-white">Online Quran Academy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses} end>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="hidden items-center gap-1 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200 lg:flex backdrop-blur-sm">
            <Sparkles size={14} /> One-day free trial
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-200 hover:text-purple-100 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <Button as={Link} to="/signup">
            <PhoneCall size={16} />
            Start Free Trial
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <nav className="space-y-2 border-t border-white/5 bg-[#0f241a] px-6 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 text-sm font-semibold ${
                    isActive ? 'bg-purple-500/10 text-purple-300' : 'text-slate-300 hover:text-white'
                  }`
                }
                onClick={() => setOpen(false)}
                end
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl px-3 py-2 text-sm font-semibold text-green-400 border border-green-500/30 hover:bg-green-500/10 mb-2"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </a>
              <Button as={Link} to="/signup" className="w-full justify-center" onClick={() => setOpen(false)}>
                Start Free Trial
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar