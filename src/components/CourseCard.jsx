import { BookOpen, Clock, GraduationCap, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

function CourseCard({ course, compact = false }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-white/[0.02] p-6 shadow-xl shadow-purple-900/20 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">{course.badge}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{course.title}</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{course.description}</p>
        </div>
        <div className="rounded-full bg-purple-500/20 border border-purple-400/30 px-3 py-1 text-xs font-semibold text-purple-200">
          {course.level}
        </div>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
        <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-sm">
          <Clock size={16} className="text-purple-400" />
          {course.durationMinutes}
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-sm">
          <BookOpen size={16} className="text-purple-400" />
          {course.classesPerWeek} classes/week
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-sm">
          <Video size={16} className="text-purple-400" />
          {course.mode}
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-sm">
          <GraduationCap size={16} className="text-purple-400" />
          {course.focus}
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Monthly fee</p>
          <p className="text-2xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{course.price}</p>
        </div>
        {!compact && (
          <Button as={Link} to="/signup">
            Enroll Now
          </Button>
        )}
      </div>
    </div>
  )
}

export default CourseCard

