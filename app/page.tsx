import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

import HeroSection from "@/components/sections/HeroSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import AboutSection from "@/components/sections/AboutSection";
import LocationSection from "@/components/sections/LocationSection";
import RestaurantGuruSection from "@/components/sections/RestaurantGuru";
import CommunitySection from "@/components/sections/CommunitySection";
import TerraceSection from "@/components/sections/TerraceSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ReviewsSection />
        <RestaurantGuruSection />
        <AboutSection />
        <CommunitySection />
        <TerraceSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
