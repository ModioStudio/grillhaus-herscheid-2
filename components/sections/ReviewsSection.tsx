import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { reviews } from "@/data/reviews"

export default function ReviewsSection() {
  return (
 <section id="bewertungen" className="py-20 bg-neutral-900/50">
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
  )
}
