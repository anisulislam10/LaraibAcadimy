import { useEffect } from 'react';
import { CheckCircle2, BookOpenCheck, Globe2, Users, Award, GraduationCap, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function About() {
  // Set page metadata
  useEffect(() => {
    // Update page title
    document.title = 'About Laraib Quran Academy | Certified Female Hafiza Teacher & Online Quran Classes';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Meet Laraib, certified Hafiza teaching Quran online worldwide. 1-to-1 classes for kids & adults with tajweed focus, flexible timings, and free trial. Learn about our mission.';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Add structured data for About page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Laraib Quran Academy",
      "description": "Online Quran learning platform with certified female Hafiza instructor",
      "mainEntity": {
        "@type": "Person",
        "name": "Laraib",
        "jobTitle": "Certified Hafiza & Quran Teacher",
        "description": "Certified female Hafiza with Ijazah and tajweed expertise teaching Quran online worldwide",
        "knowsAbout": ["Quran Recitation", "Tajweed Rules", "Quran Memorization", "Quran Translation", "Islamic Studies"]
      },
      "about": {
        "@type": "EducationalOrganization",
        "name": "Laraib Quran Academy",
        "description": "Online Quran classes for kids and adults with female teacher"
      }
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
            <li className="text-purple-300 font-medium" aria-current="page">About Us</li>
          </ol>
        </nav>

        {/* Main Content Section */}
        <section aria-labelledby="main-heading" className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Who we are</p>
            <h1 id="main-heading" className="text-3xl font-bold text-white sm:text-4xl">
              Laraib Online Quran Academy: Certified Female Hafiza Teaching Worldwide
            </h1>
            <p className="text-sm text-slate-300">
              Led by <strong>Laraib, a certified Hafiza and tajweed specialist</strong> teaching one-to-one online Quran classes worldwide. 
              She blends traditional Quran recitation with interactive tools so every student learns with clarity, discipline, and compassion.
            </p>
            
            {/* Key Benefits with SEO-rich text */}
            <div className="space-y-2 text-sm text-slate-200">
              {[
                'Certified female Hafiza with Ijazah and tajweed expertise teaching Quran online.',
                'Live 1-to-1 Quran classes for kids and adults across UK, USA, Canada, Australia, and GCC time zones.',
                'Weekly feedback, recordings, and parent-teacher calls for younger Quran students.',
                'Structured notes, digital whiteboard, and practical revision plans for effective learning.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 text-purple-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button as={Link} to="/signup" aria-label="Start free trial with certified Quran teacher">
                Start free trial
              </Button>
              <Button as={Link} to="/contact" variant="outline" aria-label="Contact our Quran academy">
                Talk to us
              </Button>
            </div>
          </div>
          
          {/* Image with optimized alt text */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-white/5 shadow-2xl shadow-purple-900/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.16),transparent_45%)]" aria-hidden="true" />
            <img
              src="https://myqurantutor.com/wp-content/uploads/2025/09/female-quran-teacher.webp"
              alt="Female Quran teacher Laraib teaching online Quran classes to students"
              width="600"
              height="400"
              className="h-72 w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Teacher Qualification Section */}
        <section aria-labelledby="teacher-qualifications" className="mt-12">
          <h2 id="teacher-qualifications" className="text-2xl font-bold text-white mb-6 text-center">
            Why Learn from a Certified Female Hafiza?
          </h2>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg shadow-purple-900/20 md:grid-cols-4">
            {[
              { icon: Award, title: 'Ijazah Certified', text: 'Formal certification in Quran recitation with chain of narration' },
              { icon: GraduationCap, title: 'Tajweed Expert', text: 'Specialized in proper Quran pronunciation rules' },
              { icon: Heart, title: 'Patient Teaching', text: 'Especially skilled with beginners and young Quran students' },
              { icon: Shield, title: 'Safe Environment', text: 'Comfortable learning space for sisters and children' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-4">
                <item.icon className="text-purple-400 mb-3" size={28} />
                <p className="text-lg font-semibold text-white mb-2">{item.title}</p>
                <p className="text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section aria-labelledby="features" className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg shadow-purple-900/20 md:grid-cols-3">
          {[
            { icon: Users, title: 'Personalized 1-to-1 Classes', text: 'Dedicated attention for every Quran student with customized learning pace' },
            { icon: Globe2, title: 'Worldwide Time Zones', text: 'Flexible Quran class timings for students in UK, US, Canada, GCC, Australia' },
            { icon: BookOpenCheck, title: 'Structured Learning Plans', text: 'Weekly goals, progress tests, and detailed reports for parents' },
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

        {/* Mission & Vision */}
        <section aria-labelledby="mission-vision" className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Our Mission</p>
            <h2 id="mission-vision" className="text-2xl font-bold text-white">Accessible Quran Education for Every Home</h2>
            <p className="text-sm text-slate-300">
              We believe <strong>Quran learning should be accessible, engaging, and affordable</strong> for everyone. 
              Our mission is to help busy families, university students, and reverts build a strong relationship with 
              the Quran through consistent practice and inspiring teaching by a certified female instructor.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Our Vision</p>
            <h3 className="text-2xl font-bold text-white">Confident Quran Reciters with Beautiful Character</h3>
            <p className="text-sm text-slate-300">
              Beyond proper pronunciation, we focus on understanding and living the Quran's teachings. 
              Students learn duas, Islamic manners, and prophetic lessons that nurture character alongside 
              <strong> Quran recitation and tajweed mastery</strong>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq" className="mt-12">
          <h2 id="faq" className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Do you teach both kids and adults?</h3>
              <p className="text-sm text-slate-300">
                Yes, we offer <strong>online Quran classes for all age groups</strong>. Our curriculum is tailored for 
                children (starting from age 5) and adults, with teaching methods adapted for each age group.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">What makes your academy different?</h3>
              <p className="text-sm text-slate-300">
                We specialize in <strong>1-to-1 classes with a certified female Hafiza</strong>, offering personalized attention 
                that's rare in group settings. Our focus on tajweed, weekly progress tracking, and parent involvement 
                ensures real results.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">What qualifications does Laraib have?</h3>
              <p className="text-sm text-slate-300">
                Laraib is a <strong>certified Hafiza with Ijazah</strong> (formal certification) in Quran recitation and 
                tajweed. She has years of experience teaching Quran online to students worldwide.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial available?</h3>
              <p className="text-sm text-slate-300">
                Yes! We offer a <strong>free trial Quran class</strong> for all new students. This allows you to experience 
                our teaching style, meet the instructor, and see our platform before enrolling.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta" className="mt-12 text-center">
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-8">
            <h2 id="cta" className="text-2xl font-bold text-white mb-4">Start Your Quran Learning Journey Today</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of students worldwide who are learning Quran with proper tajweed from a 
              certified female Hafiza. Experience the difference of personalized 1-to-1 teaching.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button as={Link} to="/signup" className="px-8">
                Book Your Free Trial Class
              </Button>
              <a 
                href="https://wa.me/923265757534?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20learn%20more%20about%20Laraib%20Quran%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
              >
                WhatsApp for More Info
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;