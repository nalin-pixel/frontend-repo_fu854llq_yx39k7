import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WhySteam from './components/WhySteam'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-slate-900">SteamClean Co.</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#packages" className="hover:text-slate-900">Pricing</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#" className="hover:text-slate-900">Blog</a>
          </nav>
          <a href="#packages" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Book Now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <WhySteam />
        <Packages />
        <Testimonials />
        <Gallery />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App
