"use client"

const homeProducts = [
  {
    id: 1,
    name: "经典居家系列",
    subtitle: "Classic Home",
  },
  {
    id: 2,
    name: "馥郁居家系列",
    subtitle: "Intense Home",
  },
  {
    id: 3,
    name: "幻夜系列",
    subtitle: "Night Collection",
  },
  {
    id: 4,
    name: "白陶居家系列",
    subtitle: "Ceramic Collection",
  },
]

export function HomeCollection() {
  return (
    <section className="py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-3">
            Home Collection
          </p>
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-foreground">
            居家全系列
          </h2>
          <div className="w-8 h-px bg-foreground/20 mx-auto mt-6" />
        </div>

        {/* Four Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {homeProducts.map((product) => (
            <div key={product.id} className="group">
              {/* Product Name - Above Image */}
              <div className="text-center mb-4">
                <p className="text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-1.5">
                  {product.subtitle}
                </p>
                <h3 className="font-serif text-sm md:text-base font-medium tracking-wide text-foreground leading-relaxed">
                  {product.name}
                </h3>
              </div>

              {/* Product Image */}
              <div className="relative aspect-square bg-stone-50 overflow-hidden transition-all duration-500 group-hover:bg-stone-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border border-stone-200 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="text-xs tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase border-b border-foreground/30 hover:border-foreground pb-1">
            居家全系列即刻探索
          </button>
        </div>
      </div>
    </section>
  )
}
