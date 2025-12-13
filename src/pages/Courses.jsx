import { useEffect, useMemo, memo } from 'react';
import CourseCard from '../components/CourseCard';
import courses from '../data/courses';

const Courses = memo(() => {
  // Memoize SEO data
  const seoData = useMemo(() => ({
    title: 'Online Quran Classes for Kids & Adults | Certified Teachers - Laraib Quran Academy',
    description: 'Choose from structured Quran courses: Qaida, Nazira, Hifz, Translation & Tafseer. 1-on-1 live classes with qualified male & female teachers. Free trial available.',
    keywords: 'online quran courses, quran classes for kids, adult quran lessons, male quran teacher, female quran teacher, learn tajweed online'
  }), []);

  // Set page metadata
  useEffect(() => {
    document.title = seoData.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = seoData.description;
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = seoData.keywords;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Add structured data - UPDATED
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Online Quran Courses - Laraib Quran Academy",
      "description": "Structured Quran learning programs with certified teachers",
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
            "description": "Online Quran classes with certified male and female teachers",
            "employee": [
              {
                "@type": "Person",
                "name": "Certified Female Teachers",
                "jobTitle": "Quran Teacher",
                "gender": "Female"
              },
              {
                "@type": "Person",
                "name": "Certified Male Teachers", 
                "jobTitle": "Quran Teacher",
                "gender": "Male"
              }
            ]
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
    
    return () => {
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [seoData]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      {/* Breadcrumb for SEO */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:text-purple-300 transition-colors">Home</a></li>
          <li className="text-slate-500">/</li>
          <li className="text-purple-300 font-medium" aria-current="page">Online Quran Courses</li>
        </ol>
      </nav>

      {/* Page Header - UPDATED */}
      <header className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Courses</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Online Quran Classes for Kids & Adults
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Structured Quran courses with certified teachers. Choose from Qaida, Nazira, Hifz, Translation, or Tafseer. 
          Weekly feedback and recorded corrections included.
        </p>
        {/* UPDATED: Tags */}
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200 backdrop-blur-sm">1-to-1 Live Classes</span>
          <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200 backdrop-blur-sm">Recorded Sessions</span>
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-blue-200 backdrop-blur-sm">Male & Female Teachers</span>
          <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-green-200 backdrop-blur-sm">Free Trial Available</span>
        </div>
      </header>

      {/* Why Choose Us Section - UPDATED */}
      <section aria-labelledby="why-choose-us" className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
        <h2 id="why-choose-us" className="text-xl font-semibold text-white mb-4">
          Why Choose Our Online Quran Classes?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
          {/* UPDATED: Teacher choice first */}
          <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
              <span className="text-purple-400 text-sm">✓</span>
            </div>
            <div>
              <strong className="text-white block mb-1">Teacher Choice</strong>
              <span>Learn with certified male or female teachers based on your preference and comfort</span>
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

      {/* Teacher Options Section - NEW */}
      <section aria-labelledby="teacher-options" className="mt-8">
        <h2 id="teacher-options" className="text-2xl font-bold text-white mb-6">
          Teacher Options for Every Student
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-5">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-fuchsia-400"></span>
              Female Teachers
            </h3>
            <p className="text-sm text-slate-300">
              Ideal for sisters, women, and young girls who prefer learning from female instructors. 
              Our female teachers are certified with tajweed expertise and patient teaching methods.
            </p>
            <div className="mt-3 text-xs text-violet-300">
              <span className="inline-block bg-violet-500/20 px-2 py-1 rounded mr-2">Hafiza Available</span>
              <span className="inline-block bg-violet-500/20 px-2 py-1 rounded">Sisters Only Option</span>
            </div>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              Male Teachers
            </h3>
            <p className="text-sm text-slate-300">
              Certified male Quran teachers available for brothers, boys, and students who prefer 
              male instructors. All teachers are qualified with proper tajweed certification.
            </p>
            <div className="mt-3 text-xs text-blue-300">
              <span className="inline-block bg-blue-500/20 px-2 py-1 rounded mr-2">Tajweed Experts</span>
              <span className="inline-block bg-blue-500/20 px-2 py-1 rounded">Brothers Option</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO - UPDATED */}
      <section aria-labelledby="faq-section" className="mt-8">
        <h2 id="faq-section" className="text-2xl font-bold text-white mb-6">
          Frequently Asked Questions About Quran Classes
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Can I choose between male or female teacher?
            </h3>
            <p className="text-sm text-slate-300">
              Yes, we offer <strong>teacher choice options</strong>. You can specify your preference for 
              male or female teacher during enrollment, and we'll match you with the most suitable 
              certified instructor.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              What age groups do you teach?
            </h3>
            <p className="text-sm text-slate-300">
              We teach students from age 5 to adults. Our Quran classes for kids are specially designed 
              with interactive methods, while adult classes focus on comprehensive learning.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Are all teachers qualified?
            </h3>
            <p className="text-sm text-slate-300">
              Absolutely. All our teachers are <strong>certified with tajweed expertise</strong>. 
              Founded by a female Hafiza, we maintain high standards for all instructors in our academy.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Is there a free trial available?
            </h3>
            <p className="text-sm text-slate-300">
              Yes! We offer a <strong>free trial Quran class</strong> for all new students. This allows 
              you to experience our teaching style, meet potential teachers, and see our platform.
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

      {/* CTA Section - UPDATED */}
      <section aria-labelledby="cta-section" className="mt-12 text-center">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-8">
          <h2 id="cta-section" className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Quran Learning Journey?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied students learning Quran with proper tajweed from our certified teachers. 
            Choose the teacher that's right for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/signup" 
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              aria-label="Book free trial with teacher choice"
            >
              Book Free Trial with Teacher Choice
            </a>
            <a 
              href="https://wa.me/923265757534?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20inquire%20about%20teacher%20options%20for%20Quran%20courses." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
              aria-label="WhatsApp for teacher information"
            >
              WhatsApp for Teacher Info
            </a>
          </div>
          <p className="text-xs text-slate-400 mt-6">
            All courses include: Teacher choice • 1-to-1 sessions • Weekly progress reports • Recorded lessons • Flexible scheduling
          </p>
        </div>
      </section>
    </div>
  );
});

export default Courses;