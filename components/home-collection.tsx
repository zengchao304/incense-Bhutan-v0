"use client"

import Image from "next/image"

const homeProducts = [
  {
    id: 1,
    name: "经典居家系列",
    subtitle: "Classic Home",
    image: "/images/classic-home.jpg",
  },
  {
    id: 2,
    name: "馥郁居家系列",
    subtitle: "Intense Home",
    image: "/images/intense-home.jpg",
  },
  {
    id: 3,
    name: "幻夜系列",
    subtitle: "Night Collection",
    image: "/images/night-collection.jpg",
  },
  {
    id: 4,
    name: "白陶居家系列",
    subtitle: "Ceramic Collection",
    image: "/images/ceramic-collection.jpg",
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
              <div className="relative aspect-square bg-stone-50 overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
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
