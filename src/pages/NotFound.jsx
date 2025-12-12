import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Button from '../components/Button'

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-linear-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="relative text-9xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          404
        </div>
      </div>
      
      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-lg text-slate-400">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button as={Link} to="/">
          <Home size={18} />
          Go Home
        </Button>
        <Button as={Link} to="/courses" variant="outline">
          <Search size={18} />
          Browse Courses
        </Button>
      </div>

      <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-left sm:grid-cols-3">
        <Link
          to="/courses"
          className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
        >
          <p className="text-sm font-semibold text-white group-hover:text-purple-200">Courses</p>
          <p className="mt-1 text-xs text-slate-400">View all available courses</p>
        </Link>
        <Link
          to="/about"
          className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
        >
          <p className="text-sm font-semibold text-white group-hover:text-purple-200">About</p>
          <p className="mt-1 text-xs text-slate-400">Learn about our academy</p>
        </Link>
        <Link
          to="/contact"
          className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
        >
          <p className="text-sm font-semibold text-white group-hover:text-purple-200">Contact</p>
          <p className="mt-1 text-xs text-slate-400">Get in touch with us</p>
        </Link>
      </div>
    </div>
  )
}

export default NotFound

