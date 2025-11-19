import React, { useMemo, useState } from 'react'

const allItems = [
  { type: 'Car', before: 'https://images.unsplash.com/photo-1515143341051-9df0c0c3b68c?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop' },
  { type: 'Campervan', before: 'https://images.unsplash.com/photo-1519867850-74775a1a7fdd?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop' },
  { type: 'Boat', before: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop' },
]

function BeforeAfter({ before, after }) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden group">
      <img src={before} alt="before" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={after} alt="after" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 cursor-ew-resize"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          setPos(Math.max(0, Math.min(100, x)))
        }}
      />
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="w-0.5 h-full bg-white/70 shadow" />
      </div>
      <div className="absolute inset-0 ring-1 ring-black/5 group-hover:shadow-xl transition-shadow" />
    </div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const items = useMemo(() => (filter === 'All' ? allItems : allItems.filter((i) => i.type === filter)), [filter])

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Projects</h2>
          <a href="#projects" className="text-emerald-600 font-semibold hover:text-emerald-700">See More Projects →</a>
        </div>

        <div className="flex gap-2 mb-8">
          {['All', 'Car', 'Campervan', 'Boat'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border text-sm ${filter === f ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group">
              <BeforeAfter before={it.before} after={it.after} />
              <div className="mt-3 text-sm text-slate-600">{it.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
