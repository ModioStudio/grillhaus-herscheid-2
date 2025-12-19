import { Card } from "@/components/ui/card"
import { openingHours } from "@/data/OpeningHours"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"

export default function LocationSection() {
  return (
 <section id="standort" className="py-20 bg-neutral-900/60">
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
  )
}
