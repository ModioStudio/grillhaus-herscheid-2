import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Clock, Calendar, Truck } from "lucide-react";
import Link from "next/link";

export default function FoodtruckPage() {
  const upcomingEvents = [
    {
      date: "30. April – 1. Mai",
      location: "Tanz in den Mai",
      address: "Öster Halle, 58840 Plettenberg",
      time: "Ab 20:00 Uhr",
      bold: false,
    },
    {
      date: "8.–10. Mai",
      location: "Frühlingsfest Lüdenscheid",
      address: "Sternplatz, 58507 Lüdenscheid",
      time: "11:00–20:00 Uhr",
      bold: false,
    },
    {
      date: "29.–31. Mai",
      location: "Schützenfest Östertahl",
      address: "Östertahl, 58840 Plettenberg",
      time: "Nach Programm",
      bold: false,
    },
    {
      date: "20. Juni",
      location: "Sommerfest – Griechenland trifft Italien",
      address: "Herscheid, 58849 Herscheid",
      time: "Nach Vereinbarung",
      bold: true,
    },
    {
      date: "26.–27. Juni",
      location: "Dösselner Scheunenfestival",
      address: "Dössel, 58791 Werdohl",
      time: "Nach Programm",
      bold: false,
    },
  ];

  const foodtruckClassics = [
    {
      name: "Gyros Bowl",
      description:
        "Saftiges Gyros nach Spezialrezept mit knusprigen Pommes, frischem Salat, Tomaten und roten Zwiebeln.",
      highlights: [
        "Wahlweise mit Tzatziki oder Sauce Hollandaise",
        "Auch als vegetarische Variante erhältlich",
      ],
    },
    {
      name: "Pita Gyros",
      description:
        "Frisch gefüllte Pita mit Gyros, Pommes, Tomaten und Zwiebeln direkt aus dem Foodtruck.",
      highlights: [
        "Klassisch mit Tzatziki",
        "Alternativ mit Ketchup und Senf oder Hollandaise",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900/30">
      <header className="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-sm border-b border-zinc-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-700 bg-transparent hover:cursor-pointer"
            >
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

        <div className="container mx-auto px-4 z-10 relative pt-14 pb-12 md:pt-20 md:pb-16 bg-zinc-900/30 rounded-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <Truck className="w-4 h-4 text-red-600" />
              <span className="text-white font-semibold">Mobil unterwegs</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">
              Unser Foodtruck kommt zu Ihnen
            </h1>

            <p className="text-md md:text-xl text-zinc-300 mb-3 text-pretty leading-relaxed">
              Griechischer Genuss auf Rädern, frisch zubereitet und direkt zu
              Ihrem Event gebracht. egal ob Firmenfeier, Geburtstag oder
              Stadtfest, wir sorgen für das kulinarische Highlight vor Ort.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8"
            >
              <a href="tel:02357123456">Kontaktieren Sie uns</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Wo Sie uns finden
            </h2>
            <p className="text-xl text-zinc-300 text-pretty">
              Kommende Termine unseres Foodtrucks
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {upcomingEvents.map((event, i) => (
              <Card
                key={i}
                className="bg-zinc-800 border-zinc-700 p-6 hover:border-red-600/50 transition-colors"
              >
                <div className="grid md:grid-cols-[1fr,auto] gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-red-600 font-semibold mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3
                      className={`text-2xl text-white mb-3 ${
                        event.bold ? "font-black" : "font-bold"
                      }`}
                    >
                      {event.location}
                    </h3>
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
                      asChild
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Route
                      </a>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                Was wir bieten
              </h2>
              <p className="text-xl text-zinc-300 text-pretty">
                Perfekt für jede Veranstaltung
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-800 border-zinc-700 p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Vollausgestattet
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Professionelle Küche on Wheels mit allem Equipment für frische
                  Zubereitung vor Ort
                </p>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Flexibel buchbar
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Für Firmenfeiern, Geburtstage, Hochzeiten, Sportevents und
                  alle privaten Anlässe
                </p>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 p-8 text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Einfache Buchung
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Kontaktieren Sie uns für ein individuelles Angebot
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                Unsere Foodtruck-Klassiker
              </h2>
              <p className="text-xl text-zinc-300 text-pretty">
                Die beliebtesten Gerichte für unterwegs
              </p>
            </div>

            <div className="grid xl:grid-cols-[1.2fr,0.8fr] gap-6 mb-6">
              <Card className="relative overflow-hidden border-red-600/30 bg-zinc-950 min-h-105">
                <img
                  src="/bowlundpita.jpeg"
                  alt="Gyros Bowl und Pita direkt am Foodtruck"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/20" />

                <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                  <div className="inline-flex w-fit items-center rounded-full border border-red-500/40 bg-red-600/15 px-4 py-2 text-sm font-semibold text-red-100 mb-5">
                    Foodtruck-Favoriten
                  </div>
                  <h3 className="max-w-xl text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                    Zwei Klassiker, die am Truck am häufigsten bestellt werden
                  </h3>
                  <p className="max-w-2xl text-zinc-200 text-base md:text-lg leading-relaxed mb-6">
                    Gyros Bowl und Pita Gyros sind die schnelle Kombination aus
                    frischer Zubereitung, saftigem Fleisch und den typischen
                    Grillhaus-Aromen für Events, Feste und spontane Stopps.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.24em] text-zinc-400 mb-1">
                        Highlight 01
                      </div>
                      <div className="text-lg font-semibold text-white">
                        Gyros Bowl
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.24em] text-zinc-400 mb-1">
                        Highlight 02
                      </div>
                      <div className="text-lg font-semibold text-white">
                        Pita Gyros
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-zinc-700 bg-zinc-800/90">
                <div className="grid h-full sm:grid-rows-[240px,1fr]">
                  <div className="relative overflow-hidden">
                    <img
                      src="/bowlss.jpeg"
                      alt="Zwei frisch angerichtete Gyros Bowls"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                    <div className="absolute left-5 bottom-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                      Frisch am Truck angerichtet
                    </div>
                  </div>

                  <div className="p-7 md:p-8 flex flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-500 mb-3">
                      Foodtruck Qualität
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-3 text-balance">
                      Knusprig, frisch und für unterwegs gemacht
                    </h3>
                    <p className="text-zinc-300 leading-relaxed mb-5">
                      Die Bowls liefern das volle Grillhaus-Gefühl in einer
                      kompakten Portion. Zusammen mit der Pita entsteht eine
                      Karte, die schnell serviert wird und trotzdem satt macht.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-zinc-700 px-3 py-1 text-sm text-zinc-200">
                        Frisch belegt
                      </span>
                      <span className="rounded-full bg-zinc-700 px-3 py-1 text-sm text-zinc-200">
                        Perfekt für Events
                      </span>
                      <span className="rounded-full bg-zinc-700 px-3 py-1 text-sm text-zinc-200">
                        Schnell serviert
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {foodtruckClassics.map((dish, i) => (
                <Card
                  key={i}
                  className="border-zinc-700 bg-zinc-800/80 p-7 md:p-8 hover:border-red-600/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 mb-2">
                        Klassiker {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {dish.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-zinc-300 leading-relaxed mb-6">
                    {dish.description}
                  </p>

                  <div className="space-y-3">
                    {dish.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-zinc-700/80 bg-zinc-900/40 px-4 py-3"
                      >
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                        <span className="text-sm text-zinc-200 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
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
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8"
              >
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
  );
}
