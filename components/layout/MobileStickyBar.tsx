"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export default function MobileStickyBar() {
  const [showOnMobile, setShowOnMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("start");

      if (!heroSection) {
        setShowOnMobile(window.scrollY > 120);
        return;
      }

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setShowOnMobile(heroBottom <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-3 grid grid-cols-3 gap-2 transition-all duration-300 ${
        showOnMobile
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Button asChild variant="outline">
        <a href="tel:023579289984">
          <Phone className="w-4 h-4 mr-1" /> Anrufen
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href="#standort">
          <MapPin className="w-4 h-4 mr-1" /> Route
        </a>
      </Button>
      <Button asChild className="bg-red-600">
        <a href="/Speisekarte_Grillhaus_Herscheid.pdf">
          <Clock className="w-4 h-4 mr-1" /> Karte
        </a>
      </Button>
    </div>
  );
}
