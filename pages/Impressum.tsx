import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { GlobeHemisphereWestIcon } from '@phosphor-icons/react';

export function Impressum() {
  useEffect(() => {
    document.title = 'Impressum — Tobias Stephan';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, follow';
    document.head.appendChild(meta);
    return () => {
      document.title = 'Tobias Stephan — Decision & Experience Architect';
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Navbar */}
      <header className="border-b border-[#e4e4e7]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#71717a] hover:text-[#0a0a0a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>
          <Link to="/" className="hover:text-[#2a9d8f] transition-colors">
            <GlobeHemisphereWestIcon size={20} weight="bold" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 pb-32">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#2a9d8f] mb-4">Rechtliches</p>
        <h1 className="text-4xl font-bold mb-12">Impressum</h1>

        <div className="prose-like space-y-10 text-[#0a0a0a]">

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p className="font-semibold">Tobias Stephan</p>
              <p>Schönbachstraße 88</p>
              <p>04299 Leipzig</p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">Kontakt</h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p>Telefon: 0163 68 19 333</p>
              <p>
                E-Mail:{' '}
                <a href="mailto:tobias@stephantobias.com" className="text-[#2a9d8f] hover:underline">
                  tobias@stephantobias.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-base leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE343473962
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="text-base leading-relaxed">
              Tätigkeitsbereich: Strategie- und Konzeptberatung, Experience Design, Unternehmensberatung.<br />
              Freiberufliche Tätigkeit ohne gesetzlich geregelte Berufspflichten.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p className="font-semibold">Tobias Stephan</p>
              <p>Schönbachstraße 88, 04299 Leipzig</p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              EU-Streitschlichtung
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a9d8f] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Meine E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Ich nehme nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              Haftung für Links
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
              Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werde ich
              derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">Urheberrecht</h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-[#e4e4e7] py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#71717a]">
          <span>© {new Date().getFullYear()} Tobias Stephan</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-[#0a0a0a] transition-colors font-medium text-[#0a0a0a]">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-[#0a0a0a] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
