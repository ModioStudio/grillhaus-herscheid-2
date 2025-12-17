import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {

const openingHours = [
  { days: "Mo", closed: true },
  { days: "Di–Do", from: "11:30", to: "14:00", from2: "17:00", to2: "21:00" },
  { days: "Fr–So", from: "12:00", to: "21:00" },
];



  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">GRILLHAUS</span>
              <span className="text-red-600 text-xs tracking-wider">HERSCHEID</span>
            </div>
          </div>

          {/* Desktop Navigation */}
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
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:flex bg-red-600 hover:bg-red-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Jetzt anrufen
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="start" className="relative min-h-screen flex items-center pt-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />
        <div className="absolute inset-0 z-0">
          <img
            src="/greek-grilled-meat-gyros-on-dark-background-high-c.jpg"
            alt="Griechische Grillspezialitäten"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                ))}
              </div>
              <span className="text-white font-semibold">4,8 von 5</span>
              <span className="text-zinc-400 text-sm">· über 500 Bewertungen</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Griechischer Imbiss in Herscheid
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-8 text-pretty leading-relaxed">
              Gyros, Grill & Klassiker – frisch, schnell, ehrlich. Seit Jahren bewertet mit 4,8 Sternen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <a href="/#speisekarte">
                Speisekarte ansehen
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 bg-transparent"
              >
                <a href="#standort">
                <MapPin className="w-5 h-5 mr-2" />
                Route starten
              </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="bewertungen" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-red-600 text-red-600" />
                ))}
              </div>
              <span className="text-6xl font-bold text-white">4,8</span>
            </div>
            <p className="text-xl text-zinc-400">Basierend auf über 500 Google-Bewertungen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Bestes Gyros in der Gegend! Immer frisch und mega lecker. Kommen seit Jahren hierher.",
                author: "Michael K.",
                rating: 5,
              },
              {
                text: "Super freundliches Personal und das Essen schmeckt fantastisch. Absolute Empfehlung!",
                author: "Sarah M.",
                rating: 5,
              },
              {
                text: "Qualität hat hier Priorität. Man schmeckt die Frische in jedem Bissen.",
                author: "Thomas B.",
                rating: 5,
              },
            ].map((review, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 p-6">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4 leading-relaxed">{review.text}</p>
                <p className="text-zinc-500 font-medium">— {review.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="speisekarte" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Unsere Spezialitäten</h2>
            <p className="text-xl text-zinc-400 text-pretty">Klassiker und Highlights aus unserer Küche</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Gyros Pita",
                description: "Saftig mariniertes Schweinegyros mit Tzatziki, Tomaten, Zwiebeln und Pommes",
                price: "7,50 €",
                image: "gyros+pita+greek+street+food+dark+background",
              },
              {
                name: "Grillteller",
                description: "Gemischte Grillplatte mit Suzuki, Schweinesteak und Gyros, dazu Reis und Salat",
                price: "14,90 €",
                image: "mixed+greek+grill+plate+meat+dark+background",
              },
              {
                name: "Souvlaki Spieß",
                description: "Zwei marinierte Schweinefleischspieße mit Tzatziki und Beilage nach Wahl",
                price: "8,90 €",
                image: "souvlaki+skewers+greek+meat+dark+background",
              },
              {
                name: "Bifteki",
                description: "Gefülltes Hacksteak mit Feta, dazu Pommes und frischer Salat",
                price: "9,50 €",
                image: "bifteki+greek+stuffed+meat+dark+background",
              },
            ].map((dish, i) => (
              <Card
                key={i}
                className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-red-600/50 transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=400&query=${dish.image}`}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{dish.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <a href="/speisekarte">
                Zur kompletten Speisekarte
                </a>
              </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-uns" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Qualität seit Jahren</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Unser Grillhaus steht für authentische griechische Küche und ehrliche Handwerkskunst. Seit Jahren
                vertrauen uns Stammkunden aus Herscheid und Umgebung.
              </p>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Wir verwenden nur frische Zutaten und bereiten jedes Gericht mit Sorgfalt zu. Keine Kompromisse bei der
                Qualität – das ist unser Versprechen.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">4,8★</div>
                  <div className="text-zinc-400">Google Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-zinc-400">Bewertungen</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
                  <div className="text-zinc-400">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/greek-restaurant-kitchen-grilling-meat-professiona.jpg"
                alt="Unsere Küche"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="standort" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Besuchen Sie uns</h2>
            <p className="text-xl text-zinc-400">Wir freuen uns auf Ihren Besuch in Herscheid</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-zinc-900 border-zinc-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Öffnungszeiten</h3>
                <dl className="space-y-4">
                {openingHours.map((entry, i) => (
                    <div
                    key={entry.days}
                    className="flex justify-between items-center py-3 border-b border-zinc-800 last:border-0"
                    >
                    <dt className="text-zinc-300 font-medium">
                        {entry.days}
                    </dt>

                    <dd className="text-white font-semibold text-right">
                        {entry.closed ? (
                        "Geschlossen"
                        ) : entry.from2 ? (
                        <>
                            {entry.from} – {entry.to} Uhr
                            <br />
                            {entry.from2} – {entry.to2} Uhr
                        </>
                        ) : (
                        <>
                            {entry.from} – {entry.to} Uhr
                        </>
                        )}
                    </dd>
                    </div>
                ))}
                </dl>



              <div className="mt-8 pt-8 border-t border-zinc-800">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-1">Adresse</div>
                    <div className="text-zinc-400">
                      Wiesenstraße 1
                      <br />
                      58849 Herscheid
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-1">Telefon</div>
                    <div className="text-zinc-400">02357 / 9289984</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Anrufen
                </Button>
                <Button className="flex-1 bg-transparent" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Route planen
                </Button>
              </div>
            </Card>

            <div className="aspect-square md:aspect-auto rounded-lg overflow-hidden bg-zinc-900">
              <img
                src="/map-location-pin-street-view.jpg"
                alt="Standort Karte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
              <p className="text-zinc-400 text-sm">
                Ihr griechischer Imbiss in Herscheid für authentische Grillspezialitäten.
              </p>
            </div>

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
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm">
                <div className="text-zinc-400">Wiesenstraße 1</div>
                <div className="text-zinc-400">58849 Herscheid</div>
                <div className="text-zinc-400">Tel: 02357 / 9289984</div>
              </div>
            </div>

            <section aria-labelledby="opening-hours">
            <h4 id="opening-hours" className="text-white font-semibold mb-4">
                Öffnungszeiten
            </h4>

            <dl className="space-y-2 text-sm text-zinc-400">
                {openingHours.map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                    <dt className="text-zinc-400">{item.days}</dt>
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

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-zinc-800 z-50">
        <div className="grid grid-cols-3 gap-2 p-3">
          <Button 
          asChild
          size="sm"
          variant="outline"
          className="border-zinc-700 bg-transparent">
              <a href="tel:023579289984">
            <Phone className="w-4 h-4 mr-1" />
                Anrufen
                </a>
          </Button>

          <Button 
          asChild
          size="sm"
          variant="outline"
          className="border-zinc-700 bg-transparent">
           <a href="#standort">
            <MapPin className="w-4 h-4 mr-1" />
            Route
           </a>
          </Button>

            <Button
            asChild
            size="sm"
            className="bg-red-600 hover:bg-red-700"
            >
            <a href="/speisekarte">
                <Clock className="w-4 h-4 mr-1" />
                Karte
            </a>
            </Button>
        </div>
      </div>
    </div>
  )
}
