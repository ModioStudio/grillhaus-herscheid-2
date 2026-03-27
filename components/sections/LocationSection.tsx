import { Card } from "@/components/ui/card";
import { openingHours } from "@/data/OpeningHours";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function LocationSection() {
  const longitude = 7.753286124495013;
  const latitude = 51.17273700460451;
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const mapboxStaticMapUrl = mapboxToken
    ? `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-s+dc2626(${longitude},${latitude})/${longitude},${latitude},15,0/1200x1200?access_token=${mapboxToken}`
    : "/aussen-ansicht.jpeg";

  return (
    <section id="standort" className="py-20 bg-neutral-900/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Besuchen Sie uns
          </h2>
          <p className="text-xl text-zinc-400">
            Wir freuen uns auf Ihren Besuch in Herscheid
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Öffnungszeiten
            </h3>
            <dl className="space-y-4">
              {openingHours.map((entry, i) => (
                <div
                  key={entry.days}
                  className="flex justify-between items-center py-3 border-b border-zinc-800 last:border-0"
                >
                  <dt className="text-zinc-300 font-medium">{entry.days}</dt>

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
                  <a
                    href="tel:023579289984"
                    className="text-zinc-400 hover:text-white transition-colors underline"
                  >
                    02357 / 9289984
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button
                asChild
                className="flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              >
                <Link href="tel:023579289984">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </Link>
              </Button>
              <Button
                asChild
                className="flex-1 bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 cursor-pointer"
                variant="outline"
              >
                <a
                  href="https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KY807xXVTblHMew11b5QCtqm&daddr=Wiesenstra%C3%9Fe+1,+58849+Herscheid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center  w-full h-full"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Route planen
                </a>
              </Button>
            </div>
          </Card>

          <div className="aspect-square md:aspect-auto rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 relative">
            <img
              src={mapboxStaticMapUrl}
              alt="Karte zum Standort in der Wiesenstraße 1, 58849 Herscheid"
              className="w-full h-full object-cover contrast-100"
            />
            <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/10 bg-black/65 backdrop-blur-sm p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-red-400 mb-2">
                Standort
              </div>
              <div className="text-white font-semibold">
                Wiesenstraße 1, 58849 Herscheid
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
