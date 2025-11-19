import React, { useState } from 'react'

const faqs = [
  {
    q: 'Is steam cleaning safe for interiors?',
    a: 'Yes. Low-moisture steam sanitizes and refreshes without soaking fabrics or electronics.',
  },
  {
    q: 'How much water do you use?',
    a: 'Up to 90% less than traditional washing—great for the environment and for drought-prone areas.',
  },
  {
    q: 'Do you come to me?',
    a: 'Yes, we offer mobile appointments for cars, campervans, and boats when access allows.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen((o) => !o)} className="w-full py-4 flex items-center justify-between text-left">
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-slate-600">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">FAQ</h2>
          <a href="#faqs" className="text-emerald-600 font-semibold hover:text-emerald-700">See All FAQs →</a>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 md:p-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
