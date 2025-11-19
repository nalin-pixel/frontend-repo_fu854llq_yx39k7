import React from 'react'
import { Leaf, Droplets, ShieldCheck, Sparkles } from 'lucide-react'

const points = [
  { icon: Leaf, label: 'Eco-friendly' },
  { icon: Droplets, label: 'Water saving' },
  { icon: ShieldCheck, label: 'Gentle on surfaces' },
  { icon: Sparkles, label: 'Safe for interiors' },
]

export default function WhySteam() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Why Steam Cleaning?</h2>
          <p className="text-slate-600 mt-2">A modern, sustainable alternative to heavy chemicals and water waste.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.label} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <p className="font-semibold text-slate-800">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 h-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-2xl" />
    </section>
  )
}
