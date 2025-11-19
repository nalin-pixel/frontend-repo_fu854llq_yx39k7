import React, { useEffect, useState } from 'react'

const data = [
  { name: 'Amelia', city: 'Brighton', text: 'Immaculate finish and the van smells fresh for weeks. Loved the eco approach.' },
  { name: 'Liam', city: 'Bristol', text: 'Boat deck looks brand new. Steam handled the mildew better than chemicals.' },
  { name: 'Noah', city: 'London', text: 'Fast booking and premium results. Interior sanitized without soaking everything.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % data.length), 4000)
    return () => clearInterval(id)
  }, [])

  const item = data[index]

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8">What Customers Say</h2>
        <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-12 shadow-sm">
          <div className="transition-opacity duration-500">
            <div className="flex items-center gap-2 text-amber-500 mb-4" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l1.519 3.654a1.25 1.25 0 001.01.772l3.957.34c1.164.1 1.636 1.545.749 2.305l-2.995 2.57a1.25 1.25 0 00-.41 1.2l.89 3.87c.271 1.18-1.014 2.104-2.06 1.49l-3.46-1.98a1.25 1.25 0 00-1.228 0l-3.46 1.98c-1.046.614-2.331-.31-2.06-1.49l.89-3.87a1.25 1.25 0 00-.41-1.2l-2.995-2.57c-.887-.76-.415-2.205.749-2.306l3.957-.339a1.25 1.25 0 001.01-.772l1.52-3.654z"/></svg>
              ))}
            </div>
            <p className="text-lg text-slate-800 mb-4">“{item.text}”</p>
            <p className="text-sm font-medium text-slate-600">{item.name} — {item.city}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
