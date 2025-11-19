import React from 'react'
import { Car, Sailboat, Caravan } from 'lucide-react'

const cards = [
  {
    title: 'Car Steam Cleaning',
    Icon: Car,
    desc: 'Deep-clean exterior and interior with minimal water. Sanitizes and revives surfaces safely.',
  },
  {
    title: 'Campervan Steam Cleaning',
    Icon: Caravan,
    desc: 'Whole-van freshen up: kitchenettes, upholstery, and exterior panels with steam precision.',
  },
  {
    title: 'Boat Steam Cleaning',
    Icon: Sailboat,
    desc: 'Salt, mildew, and grime removed with care. Ideal for decks, cabins, and marine upholstery.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Our Services</h2>
          <p className="text-slate-600 mt-2">Premium steam cleaning tailored for road and sea.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, Icon, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* hover steam wisp */}
              <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-100/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-steam-rise transition-opacity" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-4 text-slate-600">{desc}</p>
              <a
                href="#packages"
                className="mt-6 inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
              >
                View Packages →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* steam divider */}
      <div className="mt-16 h-12 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-70 blur-xl" />
    </section>
  )
}
