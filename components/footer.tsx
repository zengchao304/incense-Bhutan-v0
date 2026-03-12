"use client"

export function Footer() {
  return (
    <footer id="contact" className="px-4 md:px-8 lg:px-16 py-16 md:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          <h4 className="font-serif text-lg md:text-xl font-medium tracking-wide text-foreground mb-8">
            联系我们
          </h4>
          <div className="space-y-3">
            <p className="text-sm tracking-wide text-muted-foreground">
              <span className="text-foreground">TEL:</span>{" "}
              +86 138 8888 8888
            </p>
            <p className="text-sm tracking-wide text-muted-foreground">
              <span className="text-foreground">Email:</span>{" "}
              contact@nadoincense.com
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs tracking-wide text-muted-foreground">
            © 2026 翔的禅香店铺. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
