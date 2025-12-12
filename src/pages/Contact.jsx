import { useState } from 'react'
import { Mail, Phone, MapPin, SendHorizontal } from 'lucide-react'
import Button from '../components/Button'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Contact Form Submission - Laraib Online Quran Academy*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Message:* ${form.message}\n\n` +
      `---\n` +
      `*Submitted via:* Contact Form on Website`
    )
    
    // WhatsApp phone number
    const phoneNumber = '923265757534' // Pakistan format with country code
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Show success message
    setSent(true)
    
    // Reset form
    setForm({ name: '', email: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Contact us</p>
          <h1 className="text-3xl font-bold text-white">We respond within a few minutes</h1>
          <p className="text-sm text-slate-300">
            Share your questions about courses, scheduling, or tutor preferences. Our team will
            reach out via email or WhatsApp with the next steps.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-200">
            <div className="flex items-start gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
              <Mail className="text-purple-400" size={18} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-slate-300">laraibonlinequranacadmy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-3">
              <Phone className="text-purple-400" size={18} />
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-slate-300">03265757534</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-3 sm:col-span-2">
              <MapPin className="text-purple-400" size={18} />
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="text-slate-300">Online worldwide, based in Dubai</p>
              </div>
            </div>
          </div>
          <img
            src="https://quranhost.com/wp-content/uploads/2022/07/female-teacher-new-side-image.jpg"
            alt="Mosque interior"
            className="mt-4 w-full rounded-3xl border border-purple-500/30 object-cover shadow-lg shadow-purple-900/30"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl shadow-purple-900/20">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-semibold text-white">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm"
                placeholder="How can we help?"
              />
            </div>
            <Button type="submit" className="w-full justify-center">
              <SendHorizontal size={16} />
              Send via WhatsApp
            </Button>
            {sent && (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
                <p className="text-sm font-semibold text-green-300">
                  ✓ Form submitted successfully!
                </p>
                <p className="text-xs text-green-200/70 mt-1">
                  WhatsApp is opening with your message. Please click send to complete submission.
                </p>
              </div>
            )}
          </form>
          <div className="mt-6 space-y-3 rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-4 text-sm text-purple-50">
            <p className="font-semibold text-white">Support info</p>
            <p>WhatsApp: 03265757534 (quickest)</p>
            <p>Email: laraibonlinequranacadmy@gmail.com</p>
            <p>Office hours: 9 AM – 11 PM (GMT+5)</p>
            <p className="text-xs text-purple-300/70 pt-2">
              Note: Form submissions are sent directly to WhatsApp for fastest response
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact