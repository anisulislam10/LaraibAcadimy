import { MessageCircle, Mail, Headphones } from 'lucide-react'
import FAQ from '../components/FAQ'
import faqs from '../data/faqs'
import Button from '../components/Button'

function Support() {
  // Professional WhatsApp message
  const whatsappMessage = encodeURIComponent("Assalamu Alaikum, I am contacting Laraib Online Quran Academy regarding support assistance. I would appreciate your guidance on the following matter:")
  
  const whatsappUrl = `https://wa.me/923265757534?text=${whatsappMessage}`

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Support</p>
        <h1 className="text-3xl font-bold text-white">How can we help you?</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Quick answers to common questions. If you need a custom schedule or have a special request,
          message us on WhatsApp and we will arrange it.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20 md:col-span-2">
          <div className="grid gap-3">
            {faqs.map((item) => (
              <FAQ key={item.question} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-6 text-sm text-purple-50 shadow-lg shadow-purple-900/30">
          <p className="text-sm font-semibold text-white">Reach us directly</p>
          <div className="flex items-center gap-2">
            <MessageCircle size={18} className="text-purple-300" /> WhatsApp: +92 326 5757534
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-purple-300" /> laraibonlinequranacadmy@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Headphones size={18} className="text-purple-300" /> Parent calls every Friday
          </div>
          <Button 
            as="a" 
            href={whatsappUrl} 
            className="w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Professional Chat
          </Button>
          <p className="text-xs text-purple-300/70 pt-2 text-center">
            Opens WhatsApp with pre-filled professional greeting
          </p>
        </div>
      </div>
    </div>
  )
}

export default Support