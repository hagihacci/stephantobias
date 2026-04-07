import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { GlobeHemisphereWestIcon } from '@phosphor-icons/react';

export function Datenschutz() {
  useEffect(() => {
    document.title = 'Datenschutzerklärung — Tobias Stephan';
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
        <h1 className="text-4xl font-bold mb-3">Datenschutzerklärung</h1>
        <p className="text-[#71717a] text-sm mb-12">Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-10 text-[#0a0a0a]">

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-base leading-relaxed">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="mt-3 space-y-1 text-base leading-relaxed border-l-2 border-[#e4e4e7] pl-4">
              <p className="font-semibold">Tobias Stephan</p>
              <p>Schönbachstraße 88</p>
              <p>04299 Leipzig</p>
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
              2. Grundsätze der Datenverarbeitung
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Diese Website verarbeitet personenbezogene Daten nur in dem Umfang, der für den Betrieb der Website
              technisch notwendig ist. Es werden keine Tracking-Tools, Analyse-Dienste oder Werbenetzwerke eingesetzt.
              Es werden keine Nutzungsprofile erstellt.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              3. Hosting und Server-Logs
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Diese Website wird gehostet bei <strong className="text-[#0a0a0a]">Hostinger International UAB</strong>,
              Švitrigailos g. 34, Vilnius 03230, Litauen (<a href="https://www.hostinger.de" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">www.hostinger.de</a>).
              Die Server befinden sich innerhalb der EU. Beim Aufruf der Website werden
              automatisch folgende Daten in Server-Logfiles gespeichert:
            </p>
            <ul className="mt-3 space-y-1 text-[#71717a] text-sm pl-4 list-disc list-inside">
              <li>IP-Adresse des anfragenden Geräts (anonymisiert nach 7 Tagen)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="mt-3 text-[#71717a] text-sm">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
              Die Daten werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              4. Cookies und lokaler Speicher
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Diese Website setzt ausschließlich einen technisch notwendigen Eintrag im <strong className="text-[#0a0a0a]">localStorage</strong> des
              Browsers, um Ihre Cookie-Einwilligung zu speichern. Dabei handelt es sich nicht um ein Cookie im
              klassischen Sinne, sondern um einen lokalen Browserspeicher-Eintrag (kein Ablaufdatum, kein Server-Transfer).
            </p>
            <div className="mt-4 bg-[#fafafa] border border-[#e4e4e7] rounded-xl p-4 text-sm font-mono text-[#71717a]">
              Schlüssel: <span className="text-[#0a0a0a]">ts-cookie-consent</span><br />
              Wert: <span className="text-[#0a0a0a]">accepted</span> oder <span className="text-[#0a0a0a]">declined</span><br />
              Zweck: Speicherung Ihrer Einwilligung<br />
              Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)
            </div>
            <p className="mt-3 text-[#71717a] text-sm">
              Sie können diesen Eintrag jederzeit löschen: Browser-Einstellungen → Websitedaten löschen → stephantobias.com.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              5. Schriftarten (Web Fonts)
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Diese Website verwendet die Schriftart <strong className="text-[#0a0a0a]">Inter Variable</strong>, die lokal
              auf dem Webserver gespeichert ist. Es findet kein Aufruf externer Server (z.B. Google Fonts CDN) statt.
              Beim Laden der Schriftart werden keine Daten an Dritte übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              6. Kontaktaufnahme per E-Mail
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Wenn Sie mir per E-Mail schreiben, werden die von Ihnen übermittelten Daten (Name, E-Mail-Adresse,
              Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet und gespeichert. Eine
              Weitergabe dieser Daten an Dritte findet nicht statt.
            </p>
            <p className="mt-2 text-[#71717a] text-sm">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO (berechtigtes
              Interesse an der Beantwortung von Anfragen). Die Daten werden nach abschließender Bearbeitung gelöscht,
              soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              7. Keine Weitergabe an Dritte
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Ihre personenbezogenen Daten werden nicht an Dritte verkauft, vermietet oder weitergegeben — es sei
              denn, dies ist zur Erfüllung einer gesetzlichen Verpflichtung erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              8. Ihre Rechte (DSGVO Art. 15–21)
            </h2>
            <p className="text-base leading-relaxed text-[#71717a] mb-4">
              Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <div className="space-y-3">
              {[
                { right: 'Auskunft', desc: 'Art. 15 DSGVO — Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen.' },
                { right: 'Berichtigung', desc: 'Art. 16 DSGVO — Sie können die Berichtigung unrichtiger Daten verlangen.' },
                { right: 'Löschung', desc: 'Art. 17 DSGVO — Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht.' },
                { right: 'Einschränkung', desc: 'Art. 18 DSGVO — Sie können die Einschränkung der Verarbeitung verlangen.' },
                { right: 'Datenübertragbarkeit', desc: 'Art. 20 DSGVO — Sie können Ihre Daten in einem maschinenlesbaren Format herausverlangen.' },
                { right: 'Widerspruch', desc: 'Art. 21 DSGVO — Sie können der Verarbeitung auf Grundlage berechtigter Interessen jederzeit widersprechen.' },
              ].map(({ right, desc }) => (
                <div key={right} className="flex gap-4 text-sm">
                  <span className="font-bold text-[#0a0a0a] w-36 shrink-0">{right}</span>
                  <span className="text-[#71717a]">{desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#71717a]">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
              <a href="mailto:tobias@stephantobias.com" className="text-[#2a9d8f] hover:underline">
                tobias@stephantobias.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              9. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige
              Behörde für Sachsen ist:
            </p>
            <div className="mt-3 space-y-1 text-sm text-[#71717a] border-l-2 border-[#e4e4e7] pl-4">
              <p className="font-semibold text-[#0a0a0a]">Sächsischer Datenschutzbeauftragter</p>
              <p>Devrientstraße 5</p>
              <p>01067 Dresden</p>
              <p>
                <a href="https://www.saechsdsb.de" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">
                  www.saechsdsb.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#71717a] mb-4">
              10. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-base leading-relaxed text-[#71717a]">
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung dieser Website oder aufgrund
              geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern. Die jeweils aktuelle Version finden Sie stets unter{' '}
              <Link to="/datenschutz" className="text-[#2a9d8f] hover:underline">stephantobias.com/datenschutz</Link>.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-[#e4e4e7] py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#71717a]">
          <span>© {new Date().getFullYear()} Tobias Stephan</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-[#0a0a0a] transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-[#0a0a0a] transition-colors font-medium text-[#0a0a0a]">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
