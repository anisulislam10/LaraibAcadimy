import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'
import courses from '../data/courses'

const lectureModes = ['Google Meet', 'Zoom', 'Microsoft Teams']

function Signup() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    age: '',
    course: courses[0]?.title || '',
    mode: lectureModes[0],
    time: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required'
    if (!form.age.trim()) newErrors.age = 'Age is required'
    if (!form.time.trim()) newErrors.time = 'Preferred time slot is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

    emailjs
      .send(
        serviceId,
        templateId,
        {
          full_name: form.name,
          whatsapp: form.whatsapp,
          age: form.age,
          course: form.course,
          mode: form.mode,
          time: form.time,
        },
        { publicKey },
      )
      .then(() => {
        setSubmitted(true)
        setSending(false)
        setForm({
          name: '',
          whatsapp: '',
          age: '',
          course: courses[0]?.title || '',
          mode: lectureModes[0],
          time: '',
        })
      })
      .catch(() => {
        setSending(false)
        alert('Unable to send right now. Please verify your EmailJS keys and template.')
      })
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm'

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Signup</p>
        <h1 className="text-3xl font-bold text-white">Book your free trial class</h1>
        <p className="text-sm text-slate-300">
          Share your details and we will confirm your class within minutes via WhatsApp.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <form
          className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl shadow-purple-900/20"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-white">Full Name</label>
              <input
                className={inputClass}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-amber-300">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-white">WhatsApp Number</label>
              <input
                className={inputClass}
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="03265757534"
              />
              {errors.whatsapp && <p className="mt-1 text-xs text-amber-300">{errors.whatsapp}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Age</label>
              <input
                className={inputClass}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                placeholder="Student age"
              />
              {errors.age && <p className="mt-1 text-xs text-amber-300">{errors.age}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Select Course</label>
              <select
                className={inputClass}
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
              >
                {courses.map((c) => (
                  <option key={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Lecture Mode</label>
              <select
                className={inputClass}
                value={form.mode}
                onChange={(e) => setForm({ ...form, mode: e.target.value })}
              >
                {lectureModes.map((mode) => (
                  <option key={mode}>{mode}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Preferred Time Slot</label>
              <input
                className={inputClass}
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                placeholder="e.g., 7:00 PM (GMT+3)"
              />
              {errors.time && <p className="mt-1 text-xs text-amber-300">{errors.time}</p>}
            </div>
          </div>
          <Button type="submit" className="mt-6 w-full justify-center" disabled={sending}>
            {sending ? 'Sending...' : 'Submit signup'}
          </Button>
          {submitted && (
            <p className="mt-3 text-sm text-purple-300">
              Thank you! Your signup is received. We will confirm your class schedule on WhatsApp
              within a few minutes.
            </p>
          )}
        </form>

        <div className="space-y-4 rounded-3xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-6 text-sm text-purple-50 shadow-lg shadow-purple-900/30">
          <p className="text-base font-semibold text-white">What happens next?</p>
          <ul className="space-y-2 text-purple-50">
            <li>1) We confirm your time slot and instructor preference on WhatsApp.</li>
            <li>2) You receive a meeting link and class notes.</li>
            <li>3) Attend the free trial. If you're happy, continue with monthly plan.</li>
          </ul>
          <p className="text-xs text-purple-100">
            Response time: under 10 minutes (class hours). We respect your privacy and never share
            your contact.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup

