"use client"

const products = [
  {
    id: 1,
    title: "Nado 财神香",
    image: null,
  },
  {
    id: 2,
    title: "Poi 2015 25周年纪念香",
    image: null,
  },
  {
    id: 3,
    title: "Nado Happiness 黑明香",
    image: null,
  },
]

export function ProductSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 md:py-32 lg:py-40">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide text-foreground">
          Nado 系列
        </h2>
        <p className="mt-6 text-sm md:text-base tracking-[0.2em] text-muted-foreground">
          禅意 · 书法 · 冥想 · 人生
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Product Image */}
            <div className="relative aspect-square bg-muted overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-12 bg-border" />
              </div>
            </div>
            {/* Product Title */}
            <h3 className="text-center font-sans text-sm md:text-base tracking-wide text-foreground">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
