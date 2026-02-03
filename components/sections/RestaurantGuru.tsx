import { Star } from "lucide-react"

export default function RestaurantGuruSection() {
  return (
    <section className="py-16 bg-neutral-900/50 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <div className="flex flex-col items-center">
            <div className="bg-zinc-500/0 rounded-lg p-8 mb-4 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">

                <img src={"/restaurantguru.png"} alt="Restaurant Guru Logo" className="w-24 h-auto mb-3" />

                <div className="text-2xl font-bold text-red-600 mb-1">Restaurant Guru</div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-red-600 text-red-600" />
                  ))}
                </div>
                <div className="text-lg font-semibold text-zinc-400">Empfohlen 2022</div>
              </div>
            </div>
            <a
              href="https://de.restaurantguru.com/Grillhaus-Herscheid-Herscheid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-red-600 transition-colors text-sm"
            >
              Auf Restaurant Guru ansehen
            </a>
          </div>

          <div className="hidden md:block w-px h-32 bg-zinc-700 mx-auto" />

          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-3 tracking-wide border-b-2 border-red-600 inline-block pb-1">
              Ausgezeichnet auf Restaurant Guru
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Wir sind stolz darauf, von Restaurant Guru als empfohlenes Restaurant ausgezeichnet zu werden. 
              Diese Anerkennung basiert auf authentischen Kundenbewertungen und bestätigt unseren Anspruch an Qualität.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
