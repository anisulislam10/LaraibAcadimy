import { Link } from 'react-router-dom'
import { Mail, PhoneCall, MapPin, MessageCircle } from 'lucide-react'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About', to: '/about' },
  { label: 'Support', to: '/support' },
]

function Footer() {
  // Professional WhatsApp message for footer contact
  const whatsappMessage = encodeURIComponent("Assalamu Alaikum, I have a question about Laraib Online Quran Academy. Could you please provide me with more information?")
  const whatsappUrl = `https://wa.me/923265757534?text=${whatsappMessage}`

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f] text-slate-200">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8 relative z-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white font-black shadow-lg shadow-purple-500/30 ring-2 ring-purple-500/20">
              LO
            </div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Laraib</p>
              <p className="text-lg font-semibold text-white">Quran Academy</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Learn Quran online with a certified female Hafiza instructor. Flexible timings, one-day free
            trial, and personalized feedback for every student.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-300">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="hover:text-purple-200 transition-colors" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-300">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-purple-400" />
              laraibonlinequranacadmy@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall size={16} className="mt-0.5 text-purple-400" />
              03265757534
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-purple-400" />
              Dubai (online worldwide)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-300">Support</h4>
          <p className="mt-4 text-sm text-slate-400">
            Have a question? We reply on WhatsApp within a few minutes during class hours.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 bg-[#050508] py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Laraib Online Quran Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer