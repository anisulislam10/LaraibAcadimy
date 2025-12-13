import { useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import courses from '../data/courses';

function Courses() {
  // Set page metadata
  useEffect(() => {
    // Update page title
    document.title = 'Online Quran Classes for Kids & Adults | Certified Teacher - Laraib Quran Academy';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Choose from structured Quran courses: Qaida, Nazira, Hifz, Translation & Tafseer. 1-on-1 live classes with a female Hafiza instructor. Free trial available.';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Add structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Online Quran Courses - Laraib Quran Academy",
      "description": "Structured Quran learning programs with certified female instructor",
      "numberOfItems": courses.length,
      "itemListElement": courses.map((course, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": course.title,
          "description": course.description,
          "provider": {
            "@type": "Organization",
            "name": "Laraib Quran Academy",
            "description": "Online Quran classes with certified female instructor"
          },
          "offers": {
            "@type": "Offer",
            "price": course.price,
            "priceCurrency": "PKR"
          }
        }
      }))
    });
    document.head.appendChild(schemaScript);
    
    // Cleanup function
    return () => {
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        {/* Breadcrumb for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-purple-300 transition-colors">Home</a></li>
            <li className="text-slate-500">/</li>
            <li className="text-purple-300 font-medium" aria-current="page">Online Quran Courses</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Courses</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Online Quran Classes for Kids & Adults
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Structured Quran courses with a certified female instructor. Choose from Qaida, Nazira, Hifz, Translation, or Tafseer. Weekly feedback and recorded corrections included.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200 backdrop-blur-sm">1-to-1 Live Classes</span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200 backdrop-blur-sm">Recorded Sessions</span>
            <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-fuchsia-200 backdrop-blur-sm">Female Quran Teacher</span>
            <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-green-200 backdrop-blur-sm">Free Trial Available</span>
          </div>
        </header>

        {/* Why Choose Us Section - SEO Rich Content */}
        <section aria-labelledby="why-choose-us" className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
          <h2 id="why-choose-us" className="text-xl font-semibold text-white mb-4">
            Why Choose Our Online Quran Classes?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <div>
                <strong className="text-white block mb-1">Female Quran Teacher</strong>
                <span>Learn with a certified Hafiza in a comfortable environment ideal for kids and sisters</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <div>
                <strong className="text-white block mb-1">1-to-1 Live Sessions</strong>
                <span>Personalized attention for all levels - perfect for beginners and advanced students</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <div>
                <strong className="text-white block mb-1">Flexible Schedule</strong>
                <span>Choose timings that work for your timezone - available 24/7 for international students</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <div>
                <strong className="text-white block mb-1">Free Trial Class</strong>
                <span>Experience our teaching methodology before committing to any course enrollment</span>
              </div>
            </li>
          </ul>
        </section>

        {/* FAQ Section for SEO */}
        <section aria-labelledby="faq-section" className="mt-8">
          <h2 id="faq-section" className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About Quran Classes
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                What age groups do you teach?
              </h3>
              <p className="text-sm text-slate-300">
                We teach students from age 5 to adults. Our Quran classes for kids are specially designed with interactive methods, while adult classes focus on comprehensive learning.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you offer classes for sisters only?
              </h3>
              <p className="text-sm text-slate-300">
                Yes, all our classes are taught by female instructors, making them ideal for sisters, women, and young girls seeking a comfortable learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section aria-labelledby="courses-grid" className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 id="courses-grid" className="text-2xl font-bold text-white">
              Available Quran Courses
            </h2>
            <div className="text-sm text-slate-400">
              {courses.length} courses available
            </div>
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-section" className="mt-12 text-center">
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-8">
            <h2 id="cta-section" className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Quran Learning Journey?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied students who have improved their Quran recitation and understanding with our certified female instructor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/signup" 
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                Book Free Trial Class
              </a>
              <a 
                href="https://wa.me/923265757534?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20your%20Quran%20courses." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
              >
                WhatsApp for Course Details
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-6">
              All courses include: 1-to-1 sessions • Weekly progress reports • Recorded lessons • Flexible scheduling
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Courses;