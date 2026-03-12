"use client"

export function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-100">
      {/* Service Banner */}
      <div className="border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                Free Shipping
              </p>
              <p className="text-xs tracking-wide text-stone-300">
                全场免运费
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                Gift Wrapping
              </p>
              <p className="text-xs tracking-wide text-stone-300">
                精美礼盒包装
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                From Bhutan
              </p>
              <p className="text-xs tracking-wide text-stone-300">
                来自不丹的祝福
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg md:text-xl font-medium tracking-wide text-stone-100 mb-4">
              翔的禅香店铺
            </h4>
            <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400">
              Nado From Bhutan
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h5 className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              联系我们
            </h5>
            <div className="space-y-3">
              <p className="text-xs tracking-wide text-stone-300">
                <span className="text-stone-500">TEL</span>
                <span className="mx-2 text-stone-600">|</span>
                +86 138 8888 8888
              </p>
              <p className="text-xs tracking-wide text-stone-300">
                <span className="text-stone-500">Email</span>
                <span className="mx-2 text-stone-600">|</span>
                contact@nadoincense.com
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h5 className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              快速链接
            </h5>
            <div className="space-y-3">
              <a
                href="#products"
                className="block text-xs tracking-wide text-stone-300 hover:text-stone-100 transition-colors"
              >
                全系列产品
              </a>
              <a
                href="#about"
                className="block text-xs tracking-wide text-stone-300 hover:text-stone-100 transition-colors"
              >
                品牌故事
              </a>
              <a
                href="#gift"
                className="block text-xs tracking-wide text-stone-300 hover:text-stone-100 transition-colors"
              >
                献礼臻选
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
          <p className="text-center text-[10px] tracking-wide text-stone-500">
            © 2026 翔的禅香店铺. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
