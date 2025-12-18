import { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Mail, PhoneCall, MapPin, MessageCircle } from 'lucide-react'

// Memoize footer links to prevent re-renders
const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About', to: '/about' },
  { label: 'Support', to: '/support' },
]

const Footer = memo(() => {
  // Memoize values to prevent recalculations
  const { whatsappUrl, currentYear } = useMemo(() => {
    const message = encodeURIComponent("Assalamu Alaikum, I have a question about Laraib Online Quran Academy. Could you please provide me with more information?")
    return {
      whatsappUrl: `https://wa.me/923265757534?text=${message}`,
      currentYear: new Date().getFullYear()
    }
  }, [])

  const handleLinkClick = useMemo(() => (e) => {
    console.log('Footer link clicked - opening:', e.currentTarget.href)
  }, [])

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f] text-slate-200">
      {/* Optimized background - single div */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                          linear-gradient(to bottom, #8882 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
        aria-hidden="true" 
      />
      
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8 relative z-10">
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white font-black shadow-lg shadow-purple-500/30 ring-2 ring-purple-500/20">
                   <img 
      src="/logo.jpeg" 
      alt="Laraib Quran Academy Logo" 
      className="h-full w-full object-object-cover rounded-2xl"
    /> 
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

        {/* Explore Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-300">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  className="hover:text-purple-200 transition-colors block py-1" 
                  to={link.to}
                  prefetch="intent" // Optimized prefetching
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-300">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-purple-400 flex-shrink-0" />
              <span className="break-words">laraibonlineacadmy@gmail.com | support@laraibquranacademy.online</span>
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall size={16} className="mt-0.5 text-purple-400 flex-shrink-0" />
              <span>+92 326 5757534</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-purple-400 flex-shrink-0" />
              <span>Dubai (online worldwide)</span>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-300">Support</h4>
          <p className="mt-4 text-sm text-slate-400">
            Have a question? We reply on WhatsApp within a few minutes during class hours.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/5 bg-[#050508] py-4">
        <div className="text-center text-xs text-slate-500">
          © {currentYear} Laraib Online Quran Academy. All rights reserved. | V 0.0.1 | 
          Developed by{' '}
          <a 
            href="https://anisdev.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
            aria-label="Visit developer Anisul Islam's portfolio"
            title="Visit Developer Portfolio"
          >
            anisulislam
          </a>
        </div>
      </div>
    </footer>
  )
})

export default Footer