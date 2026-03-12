"use client"

import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="px-4 md:px-6 lg:px-8">
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] bg-stone-100 overflow-hidden">
        {/* Hero Image - Optimized wide banner for full content display */}
        <Image
          src="/images/hero-banner.jpg"
          alt="冥想场景 - 宁静的禅意空间与燃烧的香"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-stone-900/10 to-transparent" />

        {/* Hero Content - Positioned on left side */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-16 lg:px-24">
            {/* Decorative Line */}
            <div className="w-px h-12 md:h-16 bg-stone-100/60 mb-8" />

            {/* Main Title */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-medium tracking-[0.1em] text-stone-50 mb-4">
              静谧之境
            </h2>

            {/* Subtitle */}
            <p className="text-xs md:text-sm tracking-[0.4em] text-stone-200/90 uppercase mb-8">
              The Art of Stillness
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="text-xs tracking-[0.25em] text-stone-100 hover:text-white transition-colors duration-300 uppercase border-b border-stone-300/60 hover:border-stone-100 pb-1"
            >
              立即探索
            </button>

            {/* Decorative Line */}
            <div className="w-px h-12 md:h-16 bg-stone-100/60 mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
