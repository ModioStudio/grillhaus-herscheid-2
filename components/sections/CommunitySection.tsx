export default function CommunitySection() {
  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Engagement für die Region seit 2016
            </h2>

            <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
              Als Sponsor lokaler Sportvereine engagieren wir uns aktiv in der
              Gemeinschaft von Herscheid und Umgebung.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed">
              Ob auf dem Sportplatz oder bei lokalen Veranstaltungen: Wir sind
              immer dabei und sorgen dafür, dass alle Gäste bestens verpflegt
              sind.
            </p>
          </div>

          <div className="order-2 md:order-1 rounded-lg overflow-hidden">
            <img
              src="/sponsor.jpeg"
              alt="Grillhaus Herscheid als Sponsor im lokalen Sport"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
