import { Button } from "@/components/ui/button";
import { ArrowRight, SunMedium } from "lucide-react";

export default function TerraceSection() {
  return (
    <section className="py-20 bg-neutral-950/80">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/15 px-4 py-2 mb-6">
              <SunMedium className="w-4 h-4 text-red-500" />
              <span className="text-white font-semibold">Neue Terrasse</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Mehr Platz draußen für entspannte Abende in Herscheid
            </h2>

            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Unsere neue Terrasse bietet mehr Raum für Gäste, die ihr Essen
              gern unter freiem Himmel genießen. Ideal für sonnige Nachmittage,
              warme Sommerabende und den schnellen Besuch zwischendurch.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Direkt am Grillhaus, modern gestaltet und nah am Geschehen.
              Perfekt, wenn Sie draußen sitzen und trotzdem den vollen
              Grillhaus-Charakter mitnehmen wollen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                <a href="#standort">Standort ansehen</a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent px-8"
              >
                <a href="/Speisekarte_Grillhaus_Herscheid.pdf">
                  Speisekarte ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <img
                src="/aussen-ansicht.jpeg"
                alt="Neue Terrasse des Grillhaus Herscheid"
                className="w-full h-full object-cover aspect-4/5 md:aspect-5/4"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-white/10 bg-black/55 backdrop-blur-sm p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-red-400 mb-2">
                  Außenbereich
                </div>
                <p className="text-white text-lg font-semibold text-balance">
                  Neue Sitzplätze mit Blick auf das Grillhaus und mehr Platz für
                  gemütliche Runden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
