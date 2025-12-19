import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

const openingHours = [
  { days: "Mo", closed: true },
  { days: "Di–Do", from: "11:30", to: "14:00", from2: "17:00", to2: "21:00" },
  { days: "Fr–So", from: "12:00", to: "21:00" },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        
        {/* Top */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo + Text + Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold leading-none">GRILLHAUS</span>
                <span className="text-red-600 text-xs tracking-wider">HERSCHEID</span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm mb-4">
              Griechisches Grill-Restaurant in Herscheid – Familie Gabrelas,
              seit fast 40 Jahren.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link href="#start" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Startseite
              </Link>
              <Link href="#speisekarte" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Speisekarte
              </Link>
              <Link href="#bewertungen" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Bewertungen
              </Link>
              <Link href="#ueber-uns" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Über uns
              </Link>
              <Link href="#standort" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Standort
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <div>Wiesenstraße 1</div>
              <div>58849 Herscheid</div>
              <div>Tel: 02357 / 9289984</div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <section aria-labelledby="opening-hours">
            <h4 id="opening-hours" className="text-white font-semibold mb-4">
              Öffnungszeiten
            </h4>

            <dl className="space-y-2 text-sm text-zinc-400">
              {openingHours.map((item) => (
                <div key={item.days} className="flex justify-between gap-4">
                  <dt>{item.days}</dt>
                  <dd className="text-right">
                    {item.closed ? (
                      "Geschlossen"
                    ) : item.from2 ? (
                      <>
                        {item.from}–{item.to}
                        <br />
                        {item.from2}–{item.to2}
                      </>
                    ) : (
                      `${item.from}–${item.to}`
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <div>© 2025 Grillhaus Herscheid. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
