"use client"

const categories = [
  {
    id: 1,
    title: "居家香氛系列",
    subtitle: "Home Fragrance",
    description: "营造静谧空间",
  },
  {
    id: 2,
    title: "身体护理系列",
    subtitle: "Body Care",
    description: "身心合一的呵护",
  },
]

export function CategorySection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-3">
            Explore
          </p>
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-foreground">
            探索系列
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-background overflow-hidden"
            >
              {/* Category Name - Above Image */}
              <div className="p-6 md:p-8 text-center border-b border-border/30">
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
                  {category.subtitle}
                </p>
                <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Category Image */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs tracking-[0.2em] text-stone-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 text-center">
                <button className="text-xs tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase border-b border-transparent hover:border-foreground/30 pb-1">
                  即刻探索
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
