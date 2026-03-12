import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { CategorySection } from "@/components/category-section"
import { HomeCollection } from "@/components/home-collection"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductSection />
      <CategorySection />
      <HomeCollection />
      <Footer />
      <ContactButton />
    </main>
  )
}
