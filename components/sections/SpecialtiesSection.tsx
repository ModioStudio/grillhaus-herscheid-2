import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SpecialtiesSection() {
  return (
    <section id="speisekarte" className="py-20 bg-neutral-900/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Unsere Spezialitäten
          </h2>
          <p className="text-xl text-zinc-400 text-pretty">
            Klassiker und Highlights aus unserer Küche
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              name: "Gyros Pita",
              description:
                "Saftig mariniertes Schweinegyros mit Tzatziki, Tomaten, Zwiebeln und Pommes",
              price: "7,50 €",
              image: "gyros+pita+greek+street+food+dark+background",
            },
            {
              name: "Grillteller",
              description:
                "Gemischte Grillplatte mit Schweinesteak und Gyros, dazu Reis und Salat",
              price: "14,90 €",
              image: "mixed+greek+grill+plate+meat+dark+background",
            },
            {
              name: "Souvlaki Spieß",
              description:
                "Zwei marinierte Schweinefleischspieße mit Tzatziki und Beilage nach Wahl",
              price: "8,90 €",
              image: "souvlaki+skewers+greek+meat+dark+background",
            },
            {
              name: "Bifteki",
              description:
                "Gefülltes Hacksteak mit Feta, dazu Pommes und frischer Salat",
              price: "9,50 €",
              image: "bifteki+greek+stuffed+meat+dark+background",
            },
          ].map((dish, i) => (
            <Card
              key={i}
              className="bg-zinc-900 border-zinc-800 group hover:border-red-600/50 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {dish.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">
                    {dish.price}
                  </span>
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
            <a href="/Speisekarte_Grillhaus_Herscheid.pdf">
              Zur kompletten Speisekarte
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
