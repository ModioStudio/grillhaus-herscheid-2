import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Impressum</h1>
          <p className="text-sm text-black/70">
            Angaben gemäß den gesetzlichen Vorgaben
          </p>
        </header>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
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
          <h2 className="text-lg font-semibold">Vertreten durch</h2>
          <p className="leading-relaxed text-black/85">
            Inhaber: Georgio Gabrelas
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">Kontakt</h2>
          <p className="leading-relaxed text-black/85">
            E-Mail: info@grillhaus-herscheid.de
          </p>
          <p className="leading-relaxed text-black/85">
            Telefon: 02357 9289984
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">Umsatzsteuer</h2>
          <p className="leading-relaxed text-black/85">
            USt-IdNr.: nicht vorhanden / ggf. ergänzen
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-lg font-semibold">
            Verantwortlich für den Inhalt
          </h2>
          <p className="leading-relaxed text-black/85">
            Inhaber gemäß oben genannten Angaben
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
