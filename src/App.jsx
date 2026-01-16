import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Support from './pages/Support'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import SimplePaymentAlert from './pages/Warning'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a1711] text-slate-100">
      <SimplePaymentAlert />

      <Navbar />
      <ScrollToTop />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
      
      <Footer />

    </div>
  )
}

export default App
