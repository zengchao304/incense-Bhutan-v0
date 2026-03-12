"use client"

import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Nado 财神香",
    subtitle: "招财纳福 · 静心安神",
    category: "经典系列",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unwatermarked_%E8%B4%A2%E7%A5%9E%E9%A6%99.png-47bpSwistuFxWxyUylS6zV88Y54VkQ.jpeg",
  },
  {
    id: 2,
    name: "Poi 2015 25周年纪念香",
    subtitle: "传承经典 · 岁月醇香",
    category: "限定系列",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unwatermarked_poi.png-nij8g1dvBaL8vYFREb6q1Xv4l3iZwi.jpeg",
  },
  {
    id: 3,
    name: "Nado Happiness 黑明香",
    subtitle: "幸福安康 · 明心见性",
    category: "经典系列",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nado%20happiness-HEqLIREloNSJmDvdBkixOn2NcDdwhu.jpg",
  },
]

export function ProductSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      {/* Section Header */}
      <div className="text-center mb-20 md:mb-28 px-4">
        <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4">
          Nado Collection
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide text-foreground">
          Nado 系列
        </h2>
        <div className="w-12 h-px bg-foreground/20 mx-auto mt-8" />
        <p className="mt-8 text-sm md:text-base tracking-[0.15em] text-muted-foreground">
          禅意 · 书法 · 冥想 · 人生
        </p>
      </div>

      {/* Product Grid - Names above images */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group px-6 md:px-8 lg:px-12 ${
              index !== products.length - 1 ? "md:border-r border-border/50" : ""
            }`}
          >
            {/* Product Name - Above Image */}
            <div className="text-center mb-6 md:mb-8">
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                {product.category}
              </p>
              <h3 className="font-serif text-base md:text-lg lg:text-xl font-medium tracking-wide text-foreground leading-relaxed">
                {product.name}
              </h3>
              <p className="mt-2 text-xs tracking-[0.1em] text-muted-foreground">
                {product.subtitle}
              </p>
            </div>

            {/* Product Image */}
            <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Explore Link */}
            <div className="text-center mt-6 md:mt-8 pb-12 md:pb-0">
              <button className="text-xs tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase border-b border-transparent hover:border-foreground/30 pb-1">
                即刻探索
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
