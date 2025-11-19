import React from 'react'

const tiers = [
  {
    name: 'Basic',
    price: '£59',
    benefits: ['Exterior rinse & steam', 'Quick interior refresh', 'Windows & mirrors'],
  },
  {
    name: 'Standard',
    price: '£99',
    benefits: ['Full exterior steam detail', 'Interior sanitization', 'Upholstery spot clean'],
  },
  {
    name: 'Premium',
    price: '£159',
    benefits: ['Complete detail in/out', 'Deep upholstery steam', 'Protective finish'],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 bg-gradient-to-b from-white to-blue-50/30">
      {/* subtle steam motion behind cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-1/3 w-80 h-80 bg-white/40 blur-3xl rounded-full animate-steam-drift" />
        <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-white/30 blur-3xl rounded-full animate-steam-rise" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Packages</h2>
          <p className="text-slate-600 mt-2">Choose the level that suits your vehicle and schedule.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">{t.price}<span className="text-base font-medium text-slate-500"> / vehicle</span></p>
              <ul className="mt-4 space-y-2 text-slate-600">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">Choose Package</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
