import { CheckCircle2, BookOpenCheck, Globe2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Who we are</p>
          <h1 className="text-3xl font-bold text-white">Laraib Online Quran Academy</h1>
          <p className="text-sm text-slate-300">
            Led entirely by Laraib, a certified Hafiza and tajweed specialist teaching
            one-to-one worldwide. She blends traditional recitation with interactive tools so every
            student learns with clarity, discipline, and compassion.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            {[
              'Certified female Hafiza with Ijazah and tajweed expertise.',
              'Live 1-to-1 classes across UK, USA, Canada, Australia, and GCC time zones.',
              'Weekly feedback, recordings, and parent-teacher calls for younger students.',
              'Structured notes, digital whiteboard, and practical revision plans.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="mt-0.5 text-purple-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button as={Link} to="/signup">
              Start free trial
            </Button>
            <Button as={Link} to="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-white/5 shadow-2xl shadow-purple-900/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.16),transparent_45%)]" />
          <img
            src="https://myqurantutor.com/wp-content/uploads/2025/09/female-quran-teacher.webp"
            alt="Female tutor teaching online"
            className="h-72 w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg shadow-purple-900/20 md:grid-cols-3">
        {[
          { icon: Users, title: 'Dedicated instructor', text: 'Personalized coaching for every student' },
          { icon: Globe2, title: 'Worldwide timings', text: 'Slots for UK, US, Canada, GCC, AUS' },
          { icon: BookOpenCheck, title: 'Structured plans', text: 'Weekly goals, tests, and reports' },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <item.icon className="text-purple-400" size={22} />
            <div>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-slate-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Mission</p>
          <h2 className="text-2xl font-bold text-white">Accessible Quran education for every home</h2>
          <p className="text-sm text-slate-300">
            We believe Quran learning should be accessible, engaging, and affordable. Our mission is
            to help busy families, university students, and reverts build a strong relationship with
            the Quran through consistent practice and inspiring teaching.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Vision</p>
          <h2 className="text-2xl font-bold text-white">Confident reciters with beautiful character</h2>
          <p className="text-sm text-slate-300">
            Beyond pronunciation, we focus on understanding and living the Quran. Students learn
            duas, manners, and prophetic lessons that nurture character alongside recitation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

