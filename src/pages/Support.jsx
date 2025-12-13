import { useState, useEffect } from 'react';
import { MessageCircle, Mail, Headphones, Clock, HelpCircle, CheckCircle2, Phone, Globe2, BookOpen } from 'lucide-react';
import FAQ from '../components/FAQ';
import faqs from '../data/faqs';
import Button from '../components/Button';

function Support() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Professional WhatsApp message
  const whatsappMessage = encodeURIComponent("Assalamu Alaikum, I am contacting Laraib Online Quran Academy regarding support assistance. I would appreciate your guidance on the following matter:")
  const whatsappUrl = `https://wa.me/923265757534?text=${whatsappMessage}`;

  // Set page metadata
  useEffect(() => {
    // Update page title
    document.title = 'Support - Laraib Quran Academy | FAQ & Help Center for Online Quran Classes';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Find answers to common questions about online Quran classes, scheduling, payments, and technical support. Contact our certified female teacher via WhatsApp for personalized help.';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Add structured data for FAQ Page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
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

  // FAQ categories for filtering
  const faqCategories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'technical', label: 'Technical Support', icon: Headphones },
    { id: 'billing', label: 'Payments & Fees', icon: BookOpen },
    { id: 'scheduling', label: 'Class Scheduling', icon: Clock },
    { id: 'general', label: 'General Questions', icon: HelpCircle },
  ];

  // Filter FAQs based on active category
  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        {/* Breadcrumb for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-purple-300 transition-colors">Home</a></li>
            <li className="text-slate-500">/</li>
            <li className="text-purple-300 font-medium" aria-current="page">Support Center</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="flex flex-col gap-3 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Support Center</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Support & FAQ - Laraib Quran Academy Help Center
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Find quick answers to common questions about <strong>online Quran classes, scheduling, payments, and technical support</strong>. 
            If you need personalized assistance, message our certified female instructor directly on WhatsApp.
          </p>
        </header>

        {/* Quick Support Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-4 text-center">
            <p className="text-2xl font-bold text-white">5-15 min</p>
            <p className="text-xs text-purple-200">Avg. Response Time</p>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm p-4 text-center">
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-xs text-blue-200">Support Availability</p>
          </div>
          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 backdrop-blur-sm p-4 text-center">
            <p className="text-2xl font-bold text-white">100+</p>
            <p className="text-xs text-green-200">FAQs Answered</p>
          </div>
          <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 backdrop-blur-sm p-4 text-center">
            <p className="text-2xl font-bold text-white">4.9★</p>
            <p className="text-xs text-fuchsia-200">Support Rating</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* FAQ Categories & Content */}
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-purple-900/20 lg:col-span-2">
            {/* FAQ Categories Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-3">Browse by Category</h2>
              <div className="flex flex-wrap gap-2">
                {faqCategories.map(category => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors ${activeCategory === category.id 
                        ? 'bg-purple-500/30 border border-purple-400/50 text-white' 
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                      aria-label={`Filter FAQs by ${category.label}`}
                    >
                      <Icon size={14} />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white mb-4">
                {activeCategory === 'all' 
                  ? 'Frequently Asked Questions' 
                  : `${faqCategories.find(c => c.id === activeCategory)?.label}`
                }
              </h2>
              
              {filteredFaqs.length > 0 ? (
                <div className="space-y-3">
                  {filteredFaqs.map((item) => (
                    <FAQ key={item.question} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <HelpCircle size={48} className="mx-auto text-purple-400/50 mb-3" />
                  <p className="text-slate-300">No FAQs found in this category.</p>
                </div>
              )}
            </div>

            {/* Popular Support Topics */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Popular Support Topics</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>How to schedule a <strong>free trial Quran class</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Technical requirements for <strong>online Quran lessons</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Payment methods and <strong>fee structure</strong> for courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Rescheduling or cancelling <strong>Quran classes</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Support Sidebar */}
          <div className="space-y-6">
            {/* Direct Contact Card */}
            <div className="space-y-4 rounded-3xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-6 text-sm text-purple-50 shadow-lg shadow-purple-900/30">
              <h3 className="text-lg font-semibold text-white">Direct Support Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10">
                  <MessageCircle size={18} className="text-green-400" />
                  <div>
                    <p className="font-medium text-white">WhatsApp (Fastest)</p>
                    <p className="text-slate-200">+92 326 5757534</p>
                    <p className="text-xs text-green-300/70 mt-1">Response: 5-15 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10">
                  <Mail size={18} className="text-blue-400" />
                  <div>
                    <p className="font-medium text-white">Email Support</p>
                    <p className="text-slate-200">laraibonlinequranacadmy@gmail.com</p>
                    <p className="text-xs text-blue-300/70 mt-1">Response: Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-500/10">
                  <Headphones size={18} className="text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Parent Support Calls</p>
                    <p className="text-slate-200">Scheduled every Friday</p>
                    <p className="text-xs text-purple-300/70 mt-1">For detailed progress updates</p>
                  </div>
                </div>
              </div>
              
              <Button 
                as="a" 
                href={whatsappUrl} 
                className="w-full justify-center bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 mt-4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start WhatsApp chat with support"
              >
                <MessageCircle size={16} className="mr-2" />
                Start WhatsApp Chat
              </Button>
              
              <p className="text-xs text-purple-300/70 pt-2 text-center">
                Opens WhatsApp with professional greeting for Quran class support
              </p>
            </div>

            {/* Support Hours */}
            <div className="space-y-3 rounded-3xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Clock size={18} />
                Support Hours
              </h3>
              <div className="space-y-2 text-sm text-blue-50">
                <div className="flex justify-between">
                  <span className="text-slate-200">Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 11:00 PM PKT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200">Friday</span>
                  <span className="font-medium">2:00 PM - 11:00 PM PKT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200">Saturday - Sunday</span>
                  <span className="font-medium">9:00 AM - 11:00 PM PKT</span>
                </div>
                <div className="pt-2 text-xs text-blue-300/70">
                  <Globe2 size={12} className="inline mr-1" />
                  Available for all time zones: UK, US, Canada, GCC, AUS
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="space-y-3 rounded-3xl border border-red-500/20 bg-red-500/10 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold text-white">Urgent Technical Issues</h3>
              <p className="text-sm text-slate-200">
                For urgent class access or technical issues during scheduled Quran lessons:
              </p>
              <a 
                href="tel:+923265757534"
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition-colors"
                aria-label="Call for urgent technical support"
              >
                <Phone size={16} />
                Call for Urgent Help: +92 326 5757534
              </a>
              <p className="text-xs text-red-300/70">
                Use only for technical issues during active Quran classes
              </p>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <section aria-labelledby="additional-help" className="mt-12">
          <h2 id="additional-help" className="text-2xl font-bold text-white mb-6">
            Still Need Help? Here Are More Options
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Schedule a Call</h3>
              <p className="text-sm text-slate-300 mb-4">
                Prefer speaking directly? Schedule a 15-minute callback with our support team.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
              >
                Request callback via WhatsApp →
              </a>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Video Tutorials</h3>
              <p className="text-sm text-slate-300 mb-4">
                Watch step-by-step guides for platform setup, class joining, and technical setup.
              </p>
              <a 
                href="#"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
              >
                View tutorial library →
              </a>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Parent Portal Guide</h3>
              <p className="text-sm text-slate-300 mb-4">
                Learn how to access progress reports, recordings, and communicate with teachers.
              </p>
              <a 
                href="#"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
              >
                Access parent guide →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Support;