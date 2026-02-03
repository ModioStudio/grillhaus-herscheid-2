import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-red-600 to-red-700 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">GRILLHAUS</span>
              <span className="text-red-600 text-xs tracking-wider">HERSCHEID</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#start" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
              Start
            </Link>
            <Link href="#speisekarte" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
              Speisekarte
            </Link>
            <Link href="#bewertungen" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
              Bewertungen
            </Link>
            <Link href="#ueber-uns" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
              Über uns
            </Link>
            <Link href="#standort" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
              Standort
            </Link>
            <Link href="/foodtruck" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
              Foodtruck
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden md:flex bg-red-600 hover:bg-red-700 text-white">
            <Link href="tel:023579289984">
              <Phone className="w-4 h-4 mr-2" />
              Jetzt anrufen
            </Link>
          </Button>
        </div>
      </header>
  )
}
