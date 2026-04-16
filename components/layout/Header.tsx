"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 24;
      setShowMobileHeader(shouldShow);

      if (!shouldShow) {
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#start", label: "Start" },
    { href: "/Speisekarte_Grillhaus_Herscheid.pdf", label: "Speisekarte" },
    { href: "#bewertungen", label: "Bewertungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#standort", label: "Standort" },
    { href: "/foodtruck", label: "Foodtruck" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-sm border-b border-zinc-700 transition-transform duration-300 md:translate-y-0 ${
        showMobileHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors text-sm font-medium ${
                link.href === "/foodtruck"
                  ? "text-red-500"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="hidden md:flex bg-red-600 hover:bg-red-700 text-white"
        >
          <Link href="tel:023579289984">
            <Phone className="w-4 h-4 mr-2" />
            Jetzt anrufen
          </Link>
        </Button>

        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-700">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors text-base font-medium ${
                  link.href === "/foodtruck"
                    ? "text-red-600"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:023579289984"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-2"
            >
              <Phone className="w-4 h-4" /> Jetzt anrufen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
