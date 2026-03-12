"use client"

import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-100 py-2.5 px-4">
        <p className="text-center text-[10px] md:text-xs tracking-[0.2em]">
          全场免运费 · 精美礼盒包装 · 来自不丹的祝福
        </p>
      </div>

      {/* Main Header */}
      <div className="py-6 md:py-8 lg:py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Navigation Left */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              全系列
            </a>
            <a
              href="#about"
              className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              品牌故事
            </a>
          </nav>

          {/* Logo */}
          <div className="text-center flex-1 md:flex-none flex flex-col items-center">
            <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2">
              <Image
                src="/images/logo.jpg"
                alt="翔的禅香店铺 Logo"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <h1 className="font-serif text-lg md:text-xl lg:text-2xl font-medium tracking-wide text-foreground">
              翔的禅香店铺
            </h1>
            <p className="mt-0.5 text-[9px] md:text-[10px] font-sans tracking-[0.25em] text-muted-foreground uppercase">
              Nado From Bhutan
            </p>
          </div>

          {/* Navigation Right */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#gift"
              className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              献礼臻选
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              联系我们
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -mr-3 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center touch-manipulation"
            aria-label="菜单"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={`w-5 h-px bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <div
              className={`w-5 h-px bg-foreground mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="py-4 px-4 border-t border-border/30 bg-background">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("products")}
              className="text-left text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase py-2"
            >
              全系列
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase py-2"
            >
              品牌故事
            </button>
            <button
              onClick={() => scrollToSection("gift")}
              className="text-left text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase py-2"
            >
              献礼臻选
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase py-2"
            >
              联系我们
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
