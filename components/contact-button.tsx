"use client"

import { MessageCircle } from "lucide-react"

export function ContactButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToContact}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-foreground text-background px-3 py-6 hover:bg-foreground/90 transition-colors duration-300 group"
      aria-label="联系我们"
    >
      <div className="flex flex-col items-center gap-3">
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs tracking-widest writing-vertical">
          联系我们
        </span>
      </div>
    </button>
  )
}
