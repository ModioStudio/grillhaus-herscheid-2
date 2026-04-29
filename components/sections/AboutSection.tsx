export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Tradition und Qualität aus Herscheid
            </h2>

            <p className="text-lg text-zinc-300 mb-2 leading-relaxed">
              Unser Grillhaus ist mehr als ein Restaurant, es ist ein
              Familienbetrieb mit Geschichte. Seit über drei Jahrzehnten stehen
              wir in Herscheid für ehrliche griechische Küche.
            </p>

            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Was als kleiner Familienbetrieb begann, führen wir bis heute mit
              derselben Leidenschaft, mit frischen Zutaten und sorgfältiger
              Zubereitung.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">#1</div>
                <div className="text-zinc-400">in Herscheid</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-zinc-400">Gästestimmen</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
                <div className="text-zinc-400">Jahre Erfahrung</div>
              </div>
            </div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/Foodtruck.jpeg"
              alt="Familiengeführte Küche mit Tradition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
