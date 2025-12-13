import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, SendHorizontal, MessageCircle, Clock, HelpCircle } from 'lucide-react';
import Button from '../components/Button';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  // Set page metadata
  useEffect(() => {
    // Update page title
    document.title = 'Contact Laraib Quran Academy | WhatsApp Support for Quran Classes';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Contact our certified female Quran teacher via WhatsApp, email, or contact form. Get instant responses about online Quran classes for kids & adults, free trials, and scheduling.';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
    
    // Add structured data for Contact Page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Laraib Quran Academy",
      "description": "Contact form and support information for online Quran classes",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+923265757534",
        "email": "laraibonlinequranacadmy@gmail.com",
        "contactOption": "TollFree",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Urdu", "Arabic"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "23:00",
          "timeZone": "Asia/Karachi"
        }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Contact Form Submission - Laraib Online Quran Academy*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Message:* ${form.message}\n\n` +
      `---\n` +
      `*Submitted via:* Contact Form on Website`
    );
    
    // WhatsApp phone number
    const phoneNumber = '923265757534';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSent(true);
    
    // Reset form
    setForm({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        {/* Breadcrumb for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-purple-300 transition-colors">Home</a></li>
            <li className="text-slate-500">/</li>
            <li className="text-purple-300 font-medium" aria-current="page">Contact Us</li>
          </ol>
        </nav>

        {/* Main Content Section */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Contact us</p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Contact Laraib Quran Academy - Instant WhatsApp Support
            </h1>
            <p className="text-sm text-slate-300">
              Share your questions about <strong>online Quran classes, scheduling, free trials, or tutor preferences</strong>. 
              Our certified female instructor responds within minutes via WhatsApp or email.
            </p>
            
            {/* Contact Methods Grid */}
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-200">
              <div className="flex items-start gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-3 hover:border-purple-500/30 transition-colors">
                <Mail className="text-purple-400 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white">Email Support</p>
                  <p className="text-slate-300">laraibonlinequranacadmy@gmail.com</p>
                  <p className="text-xs text-purple-300/70 mt-1">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-3 hover:border-green-500/30 transition-colors">
                <Phone className="text-green-400 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white">WhatsApp (Fastest)</p>
                  <p className="text-slate-300">+92 326 5757534</p>
                  <p className="text-xs text-green-300/70 mt-1">Instant response 9AM-11PM PKT</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-3 sm:col-span-2 hover:border-blue-500/30 transition-colors">
                <MapPin className="text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white">Online Worldwide</p>
                  <p className="text-slate-300">Based in Dubai, teaching students globally</p>
                  <p className="text-xs text-blue-300/70 mt-1">Available in all time zones: UK, US, Canada, GCC, AUS</p>
                </div>
              </div>
            </div>

            {/* Common Questions Section */}
            <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-5">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <HelpCircle size={18} />
                Common Contact Reasons
              </h3>
              <ul className="space-y-2 text-sm text-purple-50">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-0.5">•</span>
                  <span><strong>Free trial Quran class</strong> scheduling and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-0.5">•</span>
                  <span><strong>Course fees</strong> and payment plans for online Quran classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-0.5">•</span>
                  <span><strong>Female teacher</strong> availability for sisters and kids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-0.5">•</span>
                  <span><strong>Class timings</strong> for different time zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-0.5">•</span>
                  <span><strong>Technical requirements</strong> for online Quran lessons</span>
                </li>
              </ul>
            </div>

            {/* Optimized Image */}
            <img
              src="https://quranhost.com/wp-content/uploads/2022/07/female-teacher-new-side-image.jpg"
              alt="Female Quran teacher providing online instruction to students worldwide"
              width="600"
              height="400"
              className="mt-4 w-full rounded-3xl border border-purple-500/30 object-cover shadow-lg shadow-purple-900/30"
              loading="lazy"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl shadow-purple-900/20">
            <h2 className="text-2xl font-bold text-white mb-2">Send Your Inquiry</h2>
            <p className="text-sm text-slate-300 mb-6">
              Fill out this form and we'll open WhatsApp with your message ready to send for fastest response.
            </p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-white">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm"
                  placeholder="Your full name"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm"
                  placeholder="you@example.com"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-white">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-3 text-sm text-white outline-none ring-purple-400 focus:ring backdrop-blur-sm"
                  placeholder="Tell us about your Quran learning goals, preferred schedule, or any questions..."
                  aria-required="true"
                />
              </div>
              
              <Button type="submit" className="w-full justify-center" aria-label="Submit contact form and open WhatsApp">
                <SendHorizontal size={16} className="mr-2" />
                Send via WhatsApp for Instant Response
              </Button>
              
              {sent && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 animate-pulse">
                  <p className="text-sm font-semibold text-green-300">
                    ✓ Form submitted successfully!
                  </p>
                  <p className="text-xs text-green-200/70 mt-1">
                    WhatsApp is opening with your message. Please click send to complete submission.
                  </p>
                </div>
              )}
            </form>

            {/* Support Info Box */}
            <div className="mt-6 space-y-3 rounded-2xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm p-4 text-sm text-purple-50">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <MessageCircle size={16} />
                Support Information
              </h3>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-purple-300" />
                  <span><strong>Office Hours:</strong> 9:00 AM – 11:00 PM (PKT, GMT+5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-green-300" />
                  <span><strong>WhatsApp:</strong> +92 326 5757534 (Fastest Response)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-300" />
                  <span><strong>Email:</strong> laraibonlinequranacadmy@gmail.com</span>
                </div>
              </div>
              <p className="text-xs text-purple-300/70 pt-2 border-t border-purple-500/20 mt-2">
                <strong>Note:</strong> All form submissions are sent directly to WhatsApp for fastest response. 
                We typically reply within 5-15 minutes during office hours.
              </p>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="mt-4">
              <a
                href="https://wa.me/923265757534?text=Assalamu%20Alaikum,%20I%20have%20a%20question%20about%20Laraib%20Quran%20Academy%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
                aria-label="Chat directly on WhatsApp"
              >
                <MessageCircle size={16} />
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section for Common Questions */}
        <section aria-labelledby="contact-faq" className="mt-12">
          <h2 id="contact-faq" className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About Contacting Us
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">What's the fastest way to get a response?</h3>
              <p className="text-sm text-slate-300">
                <strong>WhatsApp is the fastest method</strong> with responses typically within 5-15 minutes during 
                office hours (9AM-11PM PKT). Our contact form also opens WhatsApp with your message pre-filled.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Do you respond on weekends?</h3>
              <p className="text-sm text-slate-300">
                Yes, we're available <strong>7 days a week including weekends</strong> during our office hours. 
                Response times may be slightly longer on Fridays due to prayer times.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Can I schedule a free trial through contact form?</h3>
              <p className="text-sm text-slate-300">
                Absolutely! Mention that you're interested in a <strong>free trial Quran class</strong> in your message, 
                and we'll arrange a suitable time slot based on your availability.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">What information should I include in my message?</h3>
              <p className="text-sm text-slate-300">
                Include: <strong>student's age, preferred time zone, course interest, and any specific Quran learning goals</strong>. 
                This helps us provide the most accurate information quickly.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;