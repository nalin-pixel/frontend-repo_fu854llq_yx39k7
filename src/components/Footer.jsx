import React from 'react'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">SteamClean Co.</h3>
            <p className="text-slate-400">Premium, eco-friendly steam cleaning for road and sea.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Quick Links</p>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#packages" className="hover:text-white">Pricing</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Contact</p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +44 0000 000000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@steamclean.co</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Book Now</p>
            <a href="#packages" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors">Book an Appointment</a>
            <div className="flex items-center gap-3 mt-6 text-slate-400">
              <a href="#" className="hover:text-white" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 text-sm text-slate-500 border-t border-white/10">© {new Date().getFullYear()} SteamClean Co. All rights reserved.</div>
      </div>
    </footer>
  )
}
