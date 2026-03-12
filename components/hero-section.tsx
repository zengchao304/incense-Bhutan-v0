"use client"

export function HeroSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-muted overflow-hidden">
        {/* Hero image placeholder - elegant neutral background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-px h-16 bg-border mx-auto mb-6" />
            <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase">
              禅香之道
            </p>
            <div className="w-px h-16 bg-border mx-auto mt-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
