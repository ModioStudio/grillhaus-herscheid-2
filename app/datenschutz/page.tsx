import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-black/70">Stand: 16. April 2026</p>
        </header>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">
            1. Datenschutz auf einen Blick
          </h2>
          <p className="leading-relaxed text-black/85">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
            behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">2. Verantwortliche Stelle</h2>
          <p className="leading-relaxed text-black/85">
            Grillhaus Herscheid
            <br />
            Wiesenstraße 1<br />
            58849 Herscheid
            <br />
            Deutschland
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">3. Hosting</h2>
          <p className="leading-relaxed text-black/85">
            Diese Website wird bei einem externen Anbieter gehostet.
            Personenbezogene Daten (z. B. IP-Adressen in Server-Logs) werden
            verarbeitet.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">4. SSL-/TLS-Verschlüsselung</h2>
          <p className="leading-relaxed text-black/85">
            Diese Seite nutzt aus Sicherheitsgründen eine
            SSL-/TLS-Verschlüsselung.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">5. Cookies</h2>
          <p className="leading-relaxed text-black/85">
            Diese Website verwendet keine Tracking-Cookies.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">6. Kontaktaufnahme</h2>
          <p className="leading-relaxed text-black/85">
            Bei Kontaktaufnahme per E-Mail werden die übermittelten Daten zur
            Bearbeitung gespeichert.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">7. Cloudflare</h2>
          <p className="leading-relaxed text-black/85">
            Wir nutzen Cloudflare als Content Delivery Network (CDN) und
            Sicherheitsdienst. Anbieter ist die Cloudflare Inc., 101 Townsend
            St, San Francisco, CA 94107, USA.
          </p>
          <p className="leading-relaxed text-black/85">
            Cloudflare verarbeitet insbesondere IP-Adressen und technische
            Zugriffsdaten zur Auslieferung und Absicherung der Website.
          </p>
          <p className="leading-relaxed text-black/85">
            Die Datenübertragung in die USA erfolgt auf Grundlage der
            Standardvertragsklauseln der EU-Kommission.
          </p>
        </section>
        <div>
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-black/20 px-3 py-1.5 text-xs font-medium tracking-wide text-black/75 transition-colors hover:bg-black hover:text-white"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
