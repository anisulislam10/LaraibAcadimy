import { useEffect, useMemo, memo } from 'react';
import { CheckCircle2, BookOpenCheck, Globe2, Users, Award, GraduationCap, Heart, Shield, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = memo(() => {
  // Memoize SEO data
  const seoData = useMemo(() => ({
    title: 'About Laraib Quran Academy | Certified Teachers & Online Quran Classes',
    description: 'Meet Laraib, certified Hafiza teaching Quran online with qualified male & female teachers. 1-to-1 classes for kids & adults with tajweed focus, flexible timings, and free trial.',
    keywords: 'online quran teachers, certified hafiza, male quran teacher, female quran teacher, learn quran online'
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
    
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Laraib Quran Academy",
      "description": "Online Quran learning platform with certified male and female Quran teachers",
      "mainEntity": {
        "@type": "Person",
        "name": "Laraib",
        "jobTitle": "Certified Hafiza & Founder",
        "description": "Certified female Hafiza with Ijazah and tajweed expertise teaching Quran online worldwide",
        "knowsAbout": ["Quran Recitation", "Tajweed Rules", "Quran Memorization", "Quran Translation", "Islamic Studies"]
      },
      "about": {
        "@type": "EducationalOrganization",
        "name": "Laraib Quran Academy",
        "description": "Online Quran classes for kids and adults with certified teachers",
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
        ]
      }
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
          <li className="text-purple-300 font-medium" aria-current="page">About Us</li>
        </ol>
      </nav>

      {/* Main Content Section - UPDATED */}
      <section aria-labelledby="main-heading" className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Who we are</p>
          <h1 id="main-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Laraib Quran Academy: Certified Teachers for Every Student
          </h1>
          <p className="text-sm text-slate-300">
            Founded by <strong>Laraib, a certified Hafiza and tajweed specialist</strong>, we provide one-to-one online Quran classes worldwide. 
            We offer both male and female certified teachers to ensure every student learns with comfort, clarity, and compassion.
          </p>
          
          {/* UPDATED: Mention both male and female teachers */}
          <div className="space-y-2 text-sm text-slate-200">
            {[
              'Founded by certified female Hafiza with Ijazah and tajweed expertise.',
              'Team of qualified male and female Quran teachers available.',
              'Live 1-to-1 Quran classes for kids and adults across all time zones.',
              'Weekly feedback, recordings, and parent-teacher calls for younger students.',
              'Structured notes, digital whiteboard, and practical revision plans.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="mt-0.5 text-purple-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button as={Link} to="/signup" aria-label="Start free trial with certified Quran teachers">
              Start free trial
            </Button>
            <Button as={Link} to="/contact" variant="outline" aria-label="Contact our Quran academy">
              Talk to us
            </Button>
          </div>
        </div>
        
        {/* Image with optimized alt text - UPDATED */}
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-white/5 shadow-2xl shadow-purple-900/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.16),transparent_45%)]" aria-hidden="true" />
          <img
            src="https://myqurantutor.com/wp-content/uploads/2025/09/female-quran-teacher.webp"
            alt="Quran teacher providing online instruction to students worldwide"
            width="600"
            height="400"
            className="h-72 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* UPDATED: Teacher Options Section */}
      <section aria-labelledby="teacher-options" className="mt-12">
        <h2 id="teacher-options" className="text-2xl font-bold text-white mb-6 text-center">
          Qualified Teachers for Every Need
        </h2>
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg shadow-purple-900/20 md:grid-cols-4">
          {[
            { 
              icon: Award, 
              title: 'Female Hafiza', 
              text: 'Ijazah certified Hafiza for sisters & kids',
              color: 'from-violet-500 to-purple-500'
            },
            { 
              icon: UserCheck, 
              title: 'Male Teachers', 
              text: 'Certified male Quran teachers available',
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              icon: GraduationCap, 
              title: 'Tajweed Experts', 
              text: 'Specialized in proper Quran pronunciation',
              color: 'from-green-500 to-emerald-500'
            },
            { 
              icon: Shield, 
              title: 'Safe Learning', 
              text: 'Comfortable environment for all students',
              color: 'from-amber-500 to-orange-500'
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center p-4">
              <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} mb-3`}>
                <item.icon className="text-white" size={24} />
              </div>
              <p className="text-lg font-semibold text-white mb-2">{item.title}</p>
              <p className="text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid - UPDATED */}
      <section aria-labelledby="features" className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg shadow-purple-900/20 md:grid-cols-3">
        {[
          { 
            icon: Users, 
            title: 'Teacher Choice', 
            text: 'Select between qualified male or female teachers based on preference' 
          },
          { 
            icon: Globe2, 
            title: 'Worldwide Access', 
            text: 'Flexible Quran class timings for students in UK, US, Canada, GCC, Australia' 
          },
          { 
            icon: BookOpenCheck, 
            title: 'Structured Progress', 
            text: 'Weekly goals, progress tests, and detailed reports for parents and students' 
          },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <item.icon className="text-purple-400 flex-shrink-0" size={22} />
            <div>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-slate-300">{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Mission & Vision - UPDATED */}
      <section aria-labelledby="mission-vision" className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Our Mission</p>
          <h2 id="mission-vision" className="text-2xl font-bold text-white">Accessible Quran Education for Everyone</h2>
          <p className="text-sm text-slate-300">
            We believe <strong>Quran learning should be accessible to all</strong>, regardless of gender preference. 
            Our mission is to provide qualified male and female teachers so every student can learn in a comfortable 
            environment with inspiring teaching methodology.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Our Vision</p>
          <h3 className="text-2xl font-bold text-white">Confident Reciters with Proper Guidance</h3>
          <p className="text-sm text-slate-300">
            Beyond proper pronunciation, we focus on understanding and living the Quran's teachings with 
            <strong> qualified guidance from certified teachers</strong>. Students develop both recitation skills 
            and beautiful Islamic character.
          </p>
        </div>
      </section>

      {/* FAQ Section - UPDATED */}
      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq" className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">Do you have both male and female teachers?</h3>
            <p className="text-sm text-slate-300">
              Yes, we offer <strong>both qualified male and female Quran teachers</strong>. Students can choose based on their 
              preference and comfort level, especially important for sisters and children.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">What makes your academy different?</h3>
            <p className="text-sm text-slate-300">
              We provide <strong>teacher choice with certified options</strong>. Founded by a female Hafiza, we offer 
              personalized 1-to-1 attention with tajweed focus, progress tracking, and flexible scheduling.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">What qualifications do teachers have?</h3>
            <p className="text-sm text-slate-300">
              Our founder Laraib is a <strong>certified Hafiza with Ijazah</strong>. All teachers are qualified with 
              tajweed certification and teaching experience to ensure quality education.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white mb-2">Can I request a specific teacher?</h3>
            <p className="text-sm text-slate-300">
              Yes! We offer <strong>teacher preferences during enrollment</strong>. You can specify if you prefer 
              a male or female teacher, and we'll match you with the most suitable certified instructor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - UPDATED */}
      <section aria-labelledby="cta" className="mt-12 text-center">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-8">
          <h2 id="cta" className="text-2xl font-bold text-white mb-4">Start Your Quran Journey Today</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of students worldwide learning Quran with proper tajweed from certified teachers. 
            Experience personalized 1-to-1 teaching with teacher choice options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/signup" className="px-8">
              Book Free Trial with Teacher Choice
            </Button>
            <a 
              href="https://wa.me/923265757534?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20learn%20more%20about%20teacher%20options%20at%20Laraib%20Quran%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
            >
              WhatsApp for Teacher Info
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;