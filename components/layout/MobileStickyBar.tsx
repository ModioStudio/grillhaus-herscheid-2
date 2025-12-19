import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-3 grid grid-cols-3 gap-2">
      <Button asChild variant="outline">
        <a href="tel:023579289984">
          <Phone className="w-4 h-4 mr-1" /> Anrufen
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href="#standort">
          <MapPin className="w-4 h-4 mr-1" /> Route
        </a>
      </Button>
      <Button asChild className="bg-red-600">
        <a href="/speisekarte">
          <Clock className="w-4 h-4 mr-1" /> Karte
        </a>
      </Button>
    </div>
  )
}
