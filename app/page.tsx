import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import MobileStickyBar from "@/components/layout/MobileStickyBar"

import HeroSection from "@/components/sections/HeroSection"
import ReviewsSection from "@/components/sections/ReviewsSection"
import SpecialtiesSection from "@/components/sections/SpecialtiesSection"
import AboutSection from "@/components/sections/AboutSection"
import LocationSection from "@/components/sections/LocationSection"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ReviewsSection />
        <SpecialtiesSection />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  )
}
