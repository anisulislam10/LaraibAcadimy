import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function Courses() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Courses</p>
        <h1 className="text-3xl font-bold text-white">Choose your program</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Select a course that matches your level. Every class is taught directly by Laraib
          with weekly feedback and recorded corrections so you can improve every day.
        </p>
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200 backdrop-blur-sm">1-to-1 Live</span>
          <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200 backdrop-blur-sm">Recordings</span>
          <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-fuchsia-200 backdrop-blur-sm">Female Instructor</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default Courses

