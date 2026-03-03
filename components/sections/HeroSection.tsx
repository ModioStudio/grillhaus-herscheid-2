import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { Star } from "lucide-react"

export default function HeroSection() {
  return (
<section id="start" className="relative min-h-screen flex items-center pt-16 bg-neutral-900/50">
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-black z-0" />
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.jpeg"
            alt="Griechische Grillspezialitäten"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                ))}
              </div>
              <span className="text-white font-semibold">4,8 von 5</span>
              <span className="text-zinc-400 text-sm">· über 500 Bewertungen</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
             Seit fast 40 Jahren Ihr griechischer Genuss in Herscheid
            </h1>


          <p className="text-xl text-zinc-300 mb-6">
           Familie Gabrelas heißt Sie herzlich willkommen – genießen Sie frisch gegrillte Spezialitäten in gemütlicher Atmosphäre.
          </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <a href="/Speisekarte_Grillhaus_Herscheid.pdf">
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
          <p className="mt-2 text-sm text-zinc-400">
            ✓ Kartenzahlung möglich · EC & Kreditkarte
          </p>
          </div>
        </div>
      </section>
  )
}
