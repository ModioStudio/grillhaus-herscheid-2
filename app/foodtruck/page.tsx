import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Phone, MapPin, Clock, Calendar, Truck } from "lucide-react"
import Link from "next/link"

export default function FoodtruckPage() {
  const upcomingEvents = [
    {
      date: "Samstag, 25. Januar",
      location: "Stadtfest Herscheid",
      address: "Marktplatz, 58849 Herscheid",
      time: "11:00 - 20:00 Uhr",
    },
    {
      date: "Sonntag, 2. Februar",
      location: "Wochenmarkt Lüdenscheid",
      address: "Sternplatz, Lüdenscheid",
      time: "10:00 - 16:00 Uhr",
    },
    {
      date: "Freitag, 7. Februar",
      location: "Firmenveranstaltung",
      address: "Privat (buchbar)",
      time: "Nach Vereinbarung",
    },
    {
      date: "Samstag, 15. Februar",
      location: "Sportplatz Herscheid",
      address: "Sportplatzweg, Herscheid",
      time: "12:00 - 18:00 Uhr",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900/30">

      <header className="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-sm border-b border-zinc-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          <Link href="/">
            <Button variant="outline" size="sm" className="border-zinc-700 bg-transparent hover:cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </Link>
        </div>
      </header>

      <section className="relative min-h-[60vh] flex items-center pt-16 bg-zinc-900/30 w-full">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70 z-0" />
        <div className="absolute inset-0 z-0">
          <img
            src="/Foodtruck.jpeg"
            alt="Unser Foodtruck"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative py-20 bg-zinc-900/30 rounded-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <Truck className="w-4 h-4 text-red-600" />
              <span className="text-white font-semibold">Mobil unterwegs</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Unser Foodtruck kommt zu Ihnen
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-8 text-pretty leading-relaxed">
              Griechische Grillspezialitäten auf Events, Märkten und privaten Veranstaltungen. Frisch zubereitet,
              überall genießbar.
            </p>

             <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <a href="tel:02357123456">
                Kontaktieren Sie uns
                </a>
              </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Wo Sie uns finden</h2>
            <p className="text-xl text-zinc-300 text-pretty">Kommende Termine unseres Foodtrucks</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {upcomingEvents.map((event, i) => (
              <Card key={i} className="bg-zinc-800 border-zinc-700 p-6 hover:border-red-600/50 transition-colors">
                <div className="grid md:grid-cols-[1fr,auto] gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-red-600 font-semibold mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.location}</h3>
                    <div className="flex flex-col gap-2 text-zinc-300">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 shrink-0" />
                        <span>{event.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:items-center">
                    <Button
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Route
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Was wir bieten</h2>
              <p className="text-xl text-zinc-300 text-pretty">Perfekt für jede Veranstaltung</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-800 border-zinc-700 p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Vollausgestattet</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Professionelle Küche on Wheels mit allem Equipment für frische Zubereitung vor Ort
                </p>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Flexibel buchbar</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Für Firmenfeiern, Geburtstage, Hochzeiten, Sportevents und alle privaten Anlässe
                </p>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Einfache Buchung</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Kontaktieren Sie uns für ein individuelles Angebot – wir beraten Sie gerne
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                Unsere Foodtruck-Klassiker
              </h2>
              <p className="text-xl text-zinc-300 text-pretty">Die beliebtesten Gerichte für unterwegs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Gyros Pita XXL",
                  description: "Extra großes Fladenbrot mit saftigem Gyros, Tzatziki, Tomaten, Zwiebeln und Pommes",
                  price: "8,50 €",
                },
                {
                  name: "Souvlaki Box",
                  description: "Zwei Fleischspieße mit Tzatziki, Reis, Salat und Fladenbrot in der Box",
                  price: "10,90 €",
                },
                {
                  name: "Bifteki-Burger",
                  description: "Gefülltes Hacksteak mit Feta im Burger-Bun, dazu Pommes",
                  price: "9,50 €",
                },
                {
                  name: "Grill-Mix-Teller",
                  description: "Gemischte Grillplatte mit Gyros, Suzuki und Souvlaki",
                  price: "13,90 €",
                },
              ].map((dish, i) => (
                <Card key={i} className="bg-zinc-800 border-zinc-700 p-6 hover:border-red-600/50 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                      <p className="text-zinc-300 text-sm leading-relaxed">{dish.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-red-600 whitespace-nowrap">{dish.price}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <Card className="bg-zinc-800 border-red-600/30 p-8 md:p-16 max-w-4xl mx-auto text-center">
            <Truck className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Buchen Sie unseren Foodtruck
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Planen Sie eine Veranstaltung? Wir bringen griechische Grillspezialitäten direkt zu Ihnen. Kontaktieren
              Sie uns für ein individuelles Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <Link href="tel:02357123456" className="flex items-center">
                   <Phone className="w-5 h-5 mr-2" />
                   Kontaktieren Sie uns
                </Link>
              </Button>
              <Link href="/#standort">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent text-lg px-8 hover:cursor-pointer"
                >
                  Restaurant besuchen
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-zinc-900/50 border-t border-zinc-700 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-300 text-sm">
          <p>© 2025 Grillhaus Herscheid. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  )
}
