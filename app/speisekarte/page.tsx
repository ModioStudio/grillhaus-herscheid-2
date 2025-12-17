import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  const categories = [
    {
      name: "Gyros Spezialitäten",
      description: "Klassiker mit unserem saftig marinierten Schweinegyros",
      items: [
        {
          name: "Gyros Pita",
          description: "Mit Tzatziki, Tomaten, Zwiebeln und Pommes im Fladenbrot",
          price: "7,50 €",
        },
        {
          name: "Gyros Teller",
          description: "Mit Tzatziki, Reis, Pommes und Salat",
          price: "9,90 €",
        },
        {
          name: "Gyros Metaxa",
          description: "Überbacken mit Metaxa-Sauce und Käse, dazu Reis und Pommes",
          price: "11,50 €",
        },
        {
          name: "Gyros Spezial",
          description: "Mit Paprika, Zwiebeln, Champignons, überbacken mit Käse",
          price: "12,50 €",
        },
      ],
    },
    {
      name: "Vom Grill",
      description: "Frisch gegrillte Spezialitäten",
      items: [
        {
          name: "Souvlaki Spieß",
          description: "Zwei marinierte Schweinefleischspieße mit Tzatziki und Beilage",
          price: "8,90 €",
        },
        {
          name: "Bifteki",
          description: "Gefülltes Hacksteak mit Feta, Pommes und Salat",
          price: "9,50 €",
        },
        {
          name: "Suzuki",
          description: "Schweinesteak gegrillt, mit Tzatziki, Reis und Salat",
          price: "10,90 €",
        },
        {
          name: "Grillteller",
          description: "Gemischte Grillplatte: Suzuki, Schweinesteak, Gyros, Reis und Salat",
          price: "14,90 €",
        },
        {
          name: "Lammkoteletts",
          description: "Drei zarte Lammkoteletts mit Reis, Pommes und Salat",
          price: "16,90 €",
        },
      ],
    },
    {
      name: "Vorspeisen & Salate",
      description: "Frische Vorspeisen und knackige Salate",
      items: [
        {
          name: "Tzatziki",
          description: "Griechischer Joghurt mit Gurken und Knoblauch",
          price: "4,50 €",
        },
        {
          name: "Taramosalata",
          description: "Griechischer Fischrogensalat",
          price: "4,90 €",
        },
        {
          name: "Griechischer Salat",
          description: "Tomaten, Gurken, Paprika, Zwiebeln, Oliven und Feta",
          price: "6,90 €",
        },
        {
          name: "Bauernsalat",
          description: "Gurken, Tomaten, Paprika, Zwiebeln, Peperoni und Feta",
          price: "7,50 €",
        },
      ],
    },
    {
      name: "Pizza & Pasta",
      description: "Italienische Klassiker",
      items: [
        {
          name: "Pizza Margherita",
          description: "Tomatensauce und Käse",
          price: "6,50 €",
        },
        {
          name: "Pizza Salami",
          description: "Tomatensauce, Käse und Salami",
          price: "7,50 €",
        },
        {
          name: "Pizza Gyros",
          description: "Tomatensauce, Käse, Gyros und Zwiebeln",
          price: "8,90 €",
        },
        {
          name: "Spaghetti Bolognese",
          description: "Mit Hackfleischsauce",
          price: "7,90 €",
        },
        {
          name: "Spaghetti Carbonara",
          description: "Mit Sahnesauce, Speck und Ei",
          price: "8,50 €",
        },
      ],
    },
    {
      name: "Burger & Pommes",
      description: "Schnell und lecker",
      items: [
        {
          name: "Hamburger",
          description: "Rindfleisch, Salat, Tomaten, Zwiebeln",
          price: "5,50 €",
        },
        {
          name: "Cheeseburger",
          description: "Mit Käse überbacken",
          price: "6,00 €",
        },
        {
          name: "Gyros Burger",
          description: "Mit Gyros, Tzatziki und frischem Gemüse",
          price: "7,50 €",
        },
        {
          name: "Pommes Frites",
          description: "Klassisch oder mit Ketchup/Mayo",
          price: "3,50 €",
        },
        {
          name: "Pommes Spezial",
          description: "Mit Gyros, Tzatziki und Käse überbacken",
          price: "6,90 €",
        },
      ],
    },
    {
      name: "Getränke",
      description: "Erfrischende Getränke",
      items: [
        {
          name: "Cola / Fanta / Sprite",
          description: "0,33l",
          price: "2,50 €",
        },
        {
          name: "Cola / Fanta / Sprite",
          description: "1,0l",
          price: "4,50 €",
        },
        {
          name: "Wasser",
          description: "0,5l",
          price: "2,00 €",
        },
        {
          name: "Griechischer Kaffee",
          description: "Traditionell zubereitet",
          price: "2,80 €",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">GRILLHAUS</span>
              <span className="text-red-600 text-xs tracking-wider">HERSCHEID</span>
            </div>
          </Link>

          <Link href="/">
            <Button variant="outline" size="sm" className="border-zinc-700 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Unsere Speisekarte</h1>
          <p className="text-xl text-zinc-400 text-pretty">
            Entdecken Sie unsere vielfältige Auswahl an griechischen Spezialitäten und internationalen Klassikern
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h2>
                  <p className="text-zinc-400">{category.description}</p>
                </div>

                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="bg-zinc-900 border-zinc-800 p-6 hover:border-red-600/50 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="text-2xl font-bold text-red-600 whitespace-nowrap">{item.price}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-zinc-900 border-red-600/30 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Jetzt bestellen oder vorbeikommen</h3>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                Rufen Sie uns an oder besuchen Sie uns direkt in Herscheid. Wir freuen uns auf Sie!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Jetzt anrufen: 02357 / 9289984
                </Button>
                <Link href="/#standort">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    Standort ansehen
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-400 text-sm">
          <p>© 2025 Grillhaus Herscheid. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  )
}
