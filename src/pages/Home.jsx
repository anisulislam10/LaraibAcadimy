import { memo, useMemo, useCallback, lazy, Suspense, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Clock, Award, MessageCircle, Sparkles, Users } from 'lucide-react'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

// Regular imports
import courses from '../data/courses'
import testimonials from '../data/testimonials'
// import SimplePaymentAlert from './Warning'

// Lazy load heavy components
const Button = lazy(() => import('../components/Button'))
const CourseCard = lazy(() => import('../components/CourseCard'))
const TestimonialCard = lazy(() => import('../components/TestimonialCard'))

function Home() {
  const featured = useMemo(() => courses.slice(0, 3), [])
  
  const { trialWhatsappUrl, inquiryWhatsappUrl } = useMemo(() => {
    const trialMessage = encodeURIComponent("Assalamu Alaikum, I am interested in booking a free trial class with Laraib Online Quran Academy. Could you please assist me with scheduling?")
    const inquiryMessage = encodeURIComponent("Assalamu Alaikum, I would like to inquire about Quran classes at Laraib Online Quran Academy. Could you provide me with more information about course offerings and schedules?")
    
    return {
      trialWhatsappUrl: `https://wa.me/923265757534?text=${trialMessage}`,
      inquiryWhatsappUrl: `https://wa.me/923265757534?text=${inquiryMessage}`
    }
  }, [])

  const openWhatsAppPopup = useCallback(() => {
    const width = 600
    const height = 700
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    
    window.open(
      inquiryWhatsappUrl,
      'WhatsApp Chat',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    )
  }, [inquiryWhatsappUrl])

  const featureItems = useMemo(() => [
    { title: 'Certified Teachers', note: 'Qualified male & female instructors', icon: Users },
    { title: 'Progress tracking', note: 'Weekly reports + recordings', icon: Award },
    { title: 'Flexible timings', note: 'Across all time zones', icon: Clock },
    { title: 'Parent updates', note: 'Monthly call for kids', icon: MessageCircle },
  ], [])

  // Updated SEO metadata
  useEffect(() => {
    document.title = 'Learn Quran Online with Certified Teachers - Laraib Online Quran Academy'
    
    const metaUpdates = []
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = 'One-on-one Quran classes with qualified male and female teachers. Free trial, flexible timings, Tajweed focused. Join students from 15+ countries worldwide.'
    metaUpdates.push(metaDescription)
    
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = 'online quran classes, quran teachers, learn quran online, quran for kids, adult quran lessons, tajweed classes, male quran teacher, female quran teacher'
    metaUpdates.push(metaKeywords)
    
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = window.location.href
    metaUpdates.push(canonical)
    
    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.innerHTML = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Laraib Online Quran Academy",
        "description": "Online Quran learning platform with certified male and female Quran teachers",
        "url": window.location.origin,
        "telephone": "+923265757534",
        "email": "contact@laraibquranacademy.com",
        "address": {
          "@type": "VirtualLocation",
          "description": "Online classes available worldwide"
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Laraib",
            "jobTitle": "Certified Hafiza & Quran Teacher",
            "gender": "Female"
          },
          {
            "@type": "Person",
            "name": "Certified Male Teachers",
            "jobTitle": "Quran Teacher",
            "gender": "Male"
          }
        ],
        "offers": {
          "@type": "Offer",
          "name": "Free Trial Class",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1000",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ])
    
    document.head.appendChild(schemaScript)
    
    return () => {
      schemaScript.parentNode?.removeChild(schemaScript)
      metaUpdates.forEach(meta => {
        meta.parentNode?.removeChild(meta)
      })
    }
  }, [])

  const heroImage = useMemo(() => ({
    src: 'https://qurantutorsacademy.com/wp-content/uploads/2024/08/Quran-Tutor-Academy.png',
    alt: 'Student learning Quran online with certified teacher',
    width: 500,
    height: 300
  }), [])

  return (
    <div className="relative overflow-hidden">
      
      <header role="banner">
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-purple-950/40 via-[#0a0a0f] to-[#0f0f15] px-4 pb-20 pt-28 md:px-6 lg:px-8">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url('https://easywaytolearnquran.com/wp-content/uploads/2025/02/EasyWaytoQuran.gif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-500/15" aria-hidden="true" />
          </div>

          <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-400/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 backdrop-blur-sm">
                <Sparkles size={14} aria-hidden="true" />
                <strong>Three-day free trial for all students</strong>
              </div>
              
              {/* UPDATED H1: Removed "Female" */}
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Learn Quran Online with Dedicated Quran Instructors
                
              </h1>
              
              {/* UPDATED: Changed to "qualified teachers" */}
              <p className="text-lg text-slate-300">
                Flexible timings, certified teachers, affordable monthly fee, Three-day free trial
                for all students. Live 1-to-1 classes for kids, adults, and reverts worldwide.
              </p>
              
              <Suspense fallback={<div className="h-10"></div>}>
                <div className="flex flex-wrap items-center gap-3">
                  <Button 
                    as={Link} 
                    to="/signup" 
                    className="shadow-amber-900/30"
                    aria-label="Start your free trial class"
                  >
                    Start Free Trial
                  </Button>
                  <Button 
                    as={Link} 
                    to="/courses" 
                    variant="outline"
                    aria-label="View all Quran courses"
                  >
                    
                    View Courses
                  </Button>
                  <Button 
                    as="a" 
                    href={trialWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                    aria-label="Contact us on WhatsApp for inquiries"
                  >
                    <MessageCircle size={18} className="mr-2" aria-hidden="true" />
                    WhatsApp Inquiry
                  </Button>
                </div>
              </Suspense>
              
              {/* UPDATED: First item changed to "Qualified Teachers" */}
              <ul className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:flex sm:flex-row sm:items-center sm:gap-6" aria-label="Key features">
                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-5 w-5 text-purple-400" aria-hidden="true" />
                  Qualified Teachers
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="text-purple-400" size={18} aria-hidden="true" />
                  Flexible slots
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-purple-400" size={18} aria-hidden="true" />
                  Tajweed focused
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="text-purple-400" size={18} aria-hidden="true" />
                  WhatsApp support
                </li>
              </ul>
              
              <div className="grid grid-cols-2 gap-4 rounded-3xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-6 text-sm sm:max-w-lg" role="region" aria-label="Achievements">
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">1000+</p>
                  <p className="text-xs uppercase tracking-wide text-purple-200 mt-1">Students Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">4.9 ★</p>
                  <p className="text-xs uppercase tracking-wide text-purple-200 mt-1">Parent Ratings</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full lg:w-5/12"
              aria-label="Visual representation of online Quran learning"
            >
              <div className="overflow-hidden rounded-3xl border border-purple-500/30 bg-white/5 shadow-2xl shadow-purple-900/40 backdrop-blur-sm">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="space-y-3 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                    Trusted by families in 15+ countries
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Personalized 1-to-1 sessions with progress tracking and weekly reports.
                  </p>
                  {/* UPDATED: Changed tag text */}
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="rounded-full bg-purple-500/20 border border-purple-400/30 px-3 py-1 text-purple-200">
                      Kids & Adults
                    </span>
                    <span className="rounded-full bg-fuchsia-500/20 border border-fuchsia-400/30 px-3 py-1 text-fuchsia-200">
                      Certified Teachers
            {/* <SimplePaymentAlert /> */}

                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8" aria-label="Popular Quran Courses">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Featured</p>
              <h2 className="text-2xl font-bold text-white">Popular Quran Courses</h2>
              <p className="text-sm text-slate-400">
                Live classes with structured notes, recordings, and weekly feedback.
              </p>
            </div>
            <Suspense fallback={<div className="h-10 w-24 bg-white/5 rounded"></div>}>
              <Button as={Link} to="/courses" variant="outline" className="hidden sm:inline-flex" aria-label="View all courses">
                View all
              </Button>
            </Suspense>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={
              <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-64 w-full rounded-2xl bg-white/5 animate-pulse"></div>
                ))}
              </div>
            }>
              {featured.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </Suspense>
          </div>
          
        </section>

        <section className="bg-gradient-to-br from-purple-950/30 via-[#0a0a0f] to-[#0f0f15] py-14" aria-label="Why Choose Our Academy">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6 lg:px-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Why choose us</p>
              <h3 className="text-2xl font-bold text-white">
                Structured Quran learning, compassionate teaching, real progress.
              </h3>
              
              {/* UPDATED: Changed "female Hafiza" to "certified teachers" */}
              <p className="text-sm text-slate-400">
                Our certified teachers teach with digital whiteboards, voice notes, and
                personalized feedback so every student learns at their own pace.
            {/* <SimplePaymentAlert /> */}

              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {featureItems.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 hover:border-purple-500/30 transition-colors"
                  >
                    <item.icon size={20} className="text-purple-400" aria-hidden="true" />
                    <div>
                      <p className="text-base font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-white/5 p-8 shadow-2xl shadow-purple-900/40 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_42%)]" aria-hidden="true" />
              <div className="relative space-y-4">
                <h4 className="text-lg font-semibold text-white">One-day Free Quran Trial</h4>
                <p className="text-sm text-slate-300">
                  Try our live Quran class, meet your instructor, and experience the teaching style before you
                  enroll. No payment required until you choose to continue.
                </p>
                <Suspense fallback={<div className="h-10"></div>}>
                  <div className="flex flex-col gap-3">
                    <Button as={Link} to="/signup" aria-label="Book your free Quran trial class">
                      Book your trial
                    </Button>
                    <Button 
                      as="a" 
                      href={trialWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                      aria-label="Schedule trial via WhatsApp"
                    >
                      <MessageCircle size={18} className="mr-2" aria-hidden="true" />
                      Schedule via WhatsApp
                    </Button>
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8" aria-label="Student Testimonials">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Reviews</p>
              <h2 className="text-2xl font-bold text-white">Families trust Laraib Online Quran Academy</h2>
              <p className="text-sm text-slate-400">From UK, US, Canada, Australia, and GCC.</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
              <Suspense fallback={
                <div className="flex gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="min-w-[280px] h-64 rounded-2xl bg-white/5 animate-pulse"></div>
                  ))}
                </div>
              }>
                {testimonials.map((t, idx) => (
                  <div 
                    key={t.id} 
                    className="min-w-[280px] snap-center md:min-w-0"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <TestimonialCard testimonial={t} index={idx} />
                  </div>
                ))}
              </Suspense>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-violet-700/40 via-purple-600/30 to-fuchsia-500/20 py-12" aria-label="Call to Action">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-100">Call to action</p>
              <h3 className="text-2xl font-bold text-white">Ready to start learning Quran online?</h3>
              <p className="text-sm text-purple-50">
                Book your free trial class. We respond within minutes on WhatsApp.
              </p>
            </div>
            <Suspense fallback={<div className="h-10 w-48 bg-white/5 rounded"></div>}>
              <div className="flex gap-3">
                <Button as={Link} to="/signup" aria-label="Enroll in Quran classes">
                  Enroll now
                </Button>
                <Button 
                  as="a" 
                  href={trialWhatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                  aria-label="Contact for trial via WhatsApp"
                >
                  <MessageCircle size={18} className="mr-2" aria-hidden="true" />
                  WhatsApp for Trial
                </Button>
              </div>
            </Suspense>
          </div>
        </section>
      </main>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:p-4">
        Skip to main content
      </a>

      <button
        onClick={openWhatsAppPopup}
        className="fixed bottom-18 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-2xl shadow-green-500/50 transition hover:-translate-y-1 hover:shadow-green-500/70 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Chat with us on WhatsApp for Quran class inquiries"
        title="WhatsApp Inquiry - Laraib Online Quran Academy"
      >
        <MessageCircle size={24} aria-hidden="true" />
        
      </button>
    </div>
    
  )
}

export default memo(Home)