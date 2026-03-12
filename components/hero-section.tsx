"use client"

export function HeroSection() {
  return (
    <section className="px-4 md:px-6 lg:px-8">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] bg-stone-100 overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-100/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            {/* Decorative Line */}
            <div className="w-px h-12 md:h-16 bg-stone-400/40 mx-auto mb-8" />

            {/* Main Title */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-[0.1em] text-stone-800 mb-4">
              静谧之境
            </h2>

            {/* Subtitle */}
            <p className="text-xs md:text-sm tracking-[0.4em] text-stone-500 uppercase mb-8">
              The Art of Stillness
            </p>

            {/* CTA Button */}
            <button className="text-xs tracking-[0.25em] text-stone-700 hover:text-stone-900 transition-colors duration-300 uppercase border-b border-stone-400 hover:border-stone-700 pb-1">
              立即探索
            </button>

            {/* Decorative Line */}
            <div className="w-px h-12 md:h-16 bg-stone-400/40 mx-auto mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
