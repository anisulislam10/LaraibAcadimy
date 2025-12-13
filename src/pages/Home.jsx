import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Clock, Award, MessageCircle, Sparkles } from 'lucide-react'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import Button from '../components/Button'
import CourseCard from '../components/CourseCard'
import TestimonialCard from '../components/TestimonialCard'
import courses from '../data/courses'
import testimonials from '../data/testimonials'
import { useEffect } from 'react'

function Home() {
  const featured = courses.slice(0, 3)
  
  // Professional WhatsApp messages for different sections
  const trialWhatsappMessage = encodeURIComponent("Assalamu Alaikum, I am interested in booking a free trial class with Laraib Online Quran Academy. Could you please assist me with scheduling?")
  const inquiryWhatsappMessage = encodeURIComponent("Assalamu Alaikum, I would like to inquire about Quran classes at Laraib Online Quran Academy. Could you provide me with more information about course offerings and schedules?")
  
  const trialWhatsappUrl = `https://wa.me/923265757534?text=${trialWhatsappMessage}`
  const inquiryWhatsappUrl = `https://wa.me/923265757534?text=${inquiryWhatsappMessage}`

  const openWhatsAppPopup = () => {
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    window.open(
      inquiryWhatsappUrl,
      'WhatsApp Chat',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  }

  // SEO: Update document metadata on component mount
  useEffect(() => {
    // Set page title
    document.title = 'Learn Quran Online with Certified Female Teacher - Laraib Online Quran Academy';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'One-on-one Quran classes with female Hafiza instructor. Free trial, flexible timings, Tajweed focused. Join students from 15+ countries worldwide.';
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'online quran classes, female quran teacher, learn quran online, quran for kids, adult quran lessons, tajweed classes, quran memorization, islamic studies';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Add structured data for SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Laraib Online Quran Academy",
      "description": "Online Quran learning platform with certified female Hafiza instructor",
      "url": window.location.origin,
      "telephone": "+923265757534",
      "email": "contact@laraibquranacademy.com",
      "address": {
        "@type": "VirtualLocation",
        "description": "Online classes available worldwide"
      },
      "founder": {
        "@type": "Person",
        "name": "Laraib",
        "jobTitle": "Certified Hafiza & Quran Teacher"
      },
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
    });
    document.head.appendChild(schemaScript);
    
    // Add breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);
    
    // Cleanup function
    return () => {
      // Remove scripts on unmount to prevent duplicates
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
      if (breadcrumbScript.parentNode) {
        breadcrumbScript.parentNode.removeChild(breadcrumbScript);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Add semantic HTML structure */}
      <header role="banner">
        <section className="relative isolate overflow-hidden bg-linear-to-b from-purple-950/40 via-[#0a0a0f] to-[#0f0f15] px-4 pb-20 pt-28 md:px-6 lg:px-8">
          {/* SEO: Add aria-label for screen readers */}
          <div className="absolute inset-0 bg-[url('https://easywaytolearnquran.com/wp-content/uploads/2025/02/EasyWaytoQuran.gif')] bg-cover bg-center opacity-10" aria-hidden="true" />
          <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-transparent to-fuchsia-500/15" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

          <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
            <div className="relative z-10 max-w-2xl space-y-6">
              {/* SEO: Use <strong> instead of <span> for emphasis */}
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-400/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 backdrop-blur-sm">
                <Sparkles size={14} aria-hidden="true" />
                <strong>One-day free trial for all students</strong>
              </div>
              
              {/* SEO: Main H1 tag - keep it as is, it's perfect */}
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Learn Quran Online with a Dedicated Female Quran Instructor
              </h1>
              
              {/* SEO: Descriptive paragraph with keywords */}
              <p className="text-lg text-slate-300">
                Flexible timings, certified female teacher, affordable monthly fee, one-day free trial
                for all students. Live 1-to-1 classes for kids, adults, and reverts worldwide.
              </p>
              
              {/* SEO: Add aria-labels to buttons for better accessibility */}
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
              
              {/* SEO: Use <ul> for list of features */}
              <ul className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:flex sm:flex-row sm:items-center sm:gap-6" aria-label="Key features">
                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-5 w-5 text-purple-400" aria-hidden="true" />
                  Female Hafiza instructor
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
              
              {/* SEO: Use semantic HTML for stats */}
              <div className="grid grid-cols-2 gap-4 rounded-3xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-6 text-sm sm:max-w-lg" role="region" aria-label="Achievements">
                <div>
                  <p className="text-3xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">1000+</p>
                  <p className="text-xs uppercase tracking-wide text-purple-200 mt-1">Students Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">4.9 ★</p>
                  <p className="text-xs uppercase tracking-wide text-purple-200 mt-1">Parent Ratings</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 w-full lg:w-5/12"
              aria-label="Visual representation of online Quran learning"
            >
              {/* SEO: Add width and height to image */}
              <div className="overflow-hidden rounded-3xl border border-purple-500/30 bg-white/5 shadow-2xl shadow-purple-900/40 backdrop-blur-sm">
                <img
                  src="https://qurantutorsacademy.com/wp-content/uploads/2024/08/Quran-Tutor-Academy.png"
                  alt="Student learning Quran online with teacher"
                  width="500"
                  height="300"
                  className="h-72 w-full object-cover"
                  loading="lazy" // SEO: Lazy load non-critical image
                />
                <div className="space-y-3 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                    Trusted by families in 15+ countries
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Personalized 1-to-1 sessions with progress tracking and weekly reports.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="rounded-full bg-purple-500/20 border border-purple-400/30 px-3 py-1 text-purple-200">
                      Kids & Adults
                    </span>
                    <span className="rounded-full bg-fuchsia-500/20 border border-fuchsia-400/30 px-3 py-1 text-fuchsia-200">
                      Taught by Laraib
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </header>

      <main>
        {/* SEO: Use semantic section with aria-label */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8" aria-label="Popular Quran Courses">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Featured</p>
              {/* SEO: H2 heading for courses section */}
              <h2 className="text-2xl font-bold text-white">Popular Quran Courses</h2>
              <p className="text-sm text-slate-400">
                Live classes with structured notes, recordings, and weekly feedback.
              </p>
            </div>
            <Button as={Link} to="/courses" variant="outline" className="hidden sm:inline-flex" aria-label="View all courses">
              View all
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="bg-linear-to-br from-purple-950/30 via-[#0a0a0f] to-[#0f0f15] py-14" aria-label="Why Choose Our Academy">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6 lg:px-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Why choose us</p>
              {/* SEO: H3 heading for benefits section */}
              <h3 className="text-2xl font-bold text-white">
                Structured Quran learning, compassionate teaching, real progress.
              </h3>
              <p className="text-sm text-slate-400">
                Our certified female Hafiza teaches with digital whiteboards, voice notes, and
                personalized feedback so every student learns at their own pace.
              </p>
              {/* SEO: Use <ul> for benefits list */}
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Certified instructor', note: 'Ijazah qualified Hafiza', icon: ShieldCheck },
                  { title: 'Progress tracking', note: 'Weekly reports + recordings', icon: Award },
                  { title: 'Flexible timings', note: 'Across all time zones', icon: Clock },
                  { title: 'Parent updates', note: 'Monthly call for kids', icon: MessageCircle },
                ].map((item) => (
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
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8" aria-label="Student Testimonials">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Reviews</p>
              {/* SEO: H2 for testimonials */}
              <h2 className="text-2xl font-bold text-white">Families trust Laraib Online Quran Academy</h2>
              <p className="text-sm text-slate-400">From UK, US, Canada, Australia, and GCC.</p>
            </div>
          </div>
          {/* SEO: Add structured data for reviews */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": testimonials.map((testimonial, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": testimonial.name
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": testimonial.feedback
                }
              }))
            })
          }} />
          <div className="mt-6">
            <div className="flex gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
              {testimonials.map((t, idx) => (
                <div key={t.id} className="min-w-[280px] snap-center md:min-w-0">
                  <TestimonialCard testimonial={t} index={idx} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO: CTA section with semantic markup */}
        <section className="bg-linear-to-r from-violet-700/40 via-purple-600/30 to-fuchsia-500/20 py-12" aria-label="Call to Action">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-100">Call to action</p>
              <h3 className="text-2xl font-bold text-white">Ready to start learning Quran online?</h3>
              <p className="text-sm text-purple-50">
                Book your free trial class. We respond within minutes on WhatsApp.
              </p>
            </div>
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
          </div>
        </section>
      </main>

      {/* SEO: Add skip to main content link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:p-4">
        Skip to main content
      </a>

      {/* SEO: Add proper ARIA label to floating button */}
      <button
        onClick={openWhatsAppPopup}
        className="fixed bottom-18 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-green-500 to-teal-500 text-white shadow-2xl shadow-green-500/50 transition hover:-translate-y-1 hover:shadow-green-500/70 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Chat with us on WhatsApp for Quran class inquiries"
        title="WhatsApp Inquiry - Laraib Online Quran Academy"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </button>
    </div>
  )
}

export default Home