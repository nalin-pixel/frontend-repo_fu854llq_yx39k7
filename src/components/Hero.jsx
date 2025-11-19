import React from 'react'

const SteamLayer = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    aria-hidden="true"
  >
    {/* Soft drifting wisps */}
    <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-white/15 blur-3xl rounded-full animate-steam-float" />
    <div className="absolute -bottom-16 left-1/2 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-steam-drift" />
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/12 blur-3xl rounded-full animate-steam-rise" />
  </div>
)

export default function Hero() {
  const bgUrl =
    'https://images.unsplash.com/photo-1607863680065-53a5f3c43d3a?q=80&w=2070&auto=format&fit=crop'

  return (
    <section className="relative min-h-[80vh] sm:min-h-[88vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-slate-900/60" aria-hidden />

      {/* Subtle steam behind text */}
      <SteamLayer />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-medium ring-1 ring-emerald-400/20 mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Eco-conscious, water-saving steam care
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight drop-shadow-[0_2px_16px_rgba(255,255,255,0.1)]">
            Eco-Friendly Steam Cleaning for Cars, Campervans & Boats
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg max-w-2xl">
            Premium, chemical-light detailing that sanitizes and refreshes—
            gentle on surfaces, tough on grime, and safe for interiors.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#packages"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              See Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Light mist drifting across hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  )
}
