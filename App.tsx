import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { GlobeHemisphereWestIcon } from '@phosphor-icons/react';
import { Reveal } from './components/Reveal';
import { ThreeHero } from './components/ThreeHero';
import { AnimatedGrid } from './components/AnimatedGrid';
import { DecisionGraph } from './components/DecisionGraph';

const fields = [
  {
    title: 'Decision Psychology',
    description: 'Warum Entscheidungen scheitern und wie man sie strukturell auslöst.',
  },
  {
    title: 'Concept Design',
    description: 'Strategischer Aufbau von Kommunikation, Angeboten und Positionierung.',
  },
  {
    title: 'Experience Design',
    description: 'Die Gestaltung von Kontaktpunkten, die Vertrauen erzeugen.',
  },
  {
    title: 'Lead Architecture',
    description: 'Systeme, die qualifizierte Anfragen zuverlässig generieren.',
  },
];

const projects = [
  {
    name: 'Maria Till Immobilienbewertung',
    category: 'Conversion System · Lead Architecture',
    quote: 'Zwei neue Mandanten innerhalb des ersten Monats ohne zusätzliche Werbekosten. Investment amortisiert sich.',
    bullets: [
      'Digitale Lead-Architektur mit klarer Entscheidungsführung',
      'Conversion-optimiertes Formular-System mit automatisierter Qualifizierung',
      'SEO-Strategie mit Fokus auf kaufbereite Zielgruppen in Leipzig',
    ],
    bg: 'linear-gradient(135deg, #f5f0eb 0%, #e8ddd0 100%)',
    accent: '#c47a3a',
    photo: '/maria-avatar.jpg',
  },
  {
    name: 'KampfIQ',
    category: 'Brand · Migration · Growth',
    quote: '400+ vorqualifizierte Leads im ersten Jahr — ohne bezahlte Werbung. Die Marke arbeitet.',
    bullets: [
      'Markenaufbau und visuelle Identität von Grund auf',
      'Technische Migration mit null Rankingverlust',
      'Organische Wachstumsstrategie: +340% Sichtbarkeit in 6 Monaten',
    ],
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    accent: '#e63946',
    photo: '/davo.png',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]" style={{ overflowX: 'clip' }}>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0a0a0a] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e4e4e7]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 hover:text-[#2a9d8f] transition-colors group"
          >
            <GlobeHemisphereWestIcon size={20} weight="bold" />
            <span className="font-bold text-sm tracking-tight">enjoyyourevolution</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Ansatz', id: 'fields' },
              { label: 'Projekte', id: 'projects' },
              { label: 'Kontakt', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-[#71717a] hover:text-[#0a0a0a] transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href="mailto:tobias@stephantobias.com"
              className="text-sm font-medium bg-[#0a0a0a] text-white px-4 py-2 rounded-full hover:bg-[#2a9d8f] transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              Schreiben
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-sm text-[#71717a]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-[#e4e4e7] bg-white overflow-hidden"
            >
              <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
                {[
                  { label: 'Ansatz', id: 'fields' },
                  { label: 'Projekte', id: 'projects' },
                  { label: 'Kontakt', id: 'contact' },
                ].map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="text-left text-sm text-[#71717a] hover:text-[#0a0a0a] transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href="mailto:tobias@stephantobias.com"
                  className="text-sm text-[#2a9d8f]"
                >
                  tobias@stephantobias.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO — sticky, content slides over it */}
        <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0 }}>
        <section id="hero" className="h-full relative pt-14 overflow-hidden">
          <AnimatedGrid />

          {/* Left: Identity — stays in container */}
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="min-h-[calc(100vh-56px)] flex items-center">
              <div className="flex flex-col justify-center py-20 md:py-0 w-full md:w-3/5">
                <Reveal>
                  <div className="text-xs font-medium tracking-[0.2em] uppercase text-[#2a9d8f] mb-5">
                    Decision & Experience Architect
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <h1 className="text-[clamp(1.6rem,6vw,3.75rem)] font-bold tracking-tight leading-[1.1] mb-5">
                    we don't design websites.<br />
                    <span>we design decisions.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mb-10 max-w-md">
                    <p className="text-sm font-bold text-[#0a0a0a] leading-relaxed mb-2">
                      Strategic Decision Architect & Immersive Concept Design.
                    </p>
                    <p className="text-sm text-[#71717a] leading-relaxed">
                      Fokussiert auf klare Entscheidungswege, digitale Systeme und Wachstum.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <a
                    href="mailto:tobias@stephantobias.com"
                    className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#2a9d8f] transition-all duration-300 hover:gap-4 w-fit"
                  >
                    Gespräch vereinbaren
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right: Three.js animation */}
          <div className="hidden md:block absolute top-14 bottom-0 right-0" style={{ left: '35%' }}>
            <ThreeHero />
          </div>

        </section>
        </div>{/* end sticky hero wrapper */}

        {/* Bottom-right stack: Let's Talk + Maria Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:flex flex-col gap-3 fixed bottom-8 right-8 z-40 items-end"
        >
          {/* Let's Talk Button */}
          <a
            href="mailto:tobias@stephantobias.com"
            className="group flex items-center gap-2.5 bg-[#0a0a0a] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2a9d8f] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            {/* Online dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Let's Talk
          </a>

          {/* Maria Card */}
          <button
            onClick={() => scrollTo('projects')}
            className="text-left group w-60"
          >
            <div className="bg-white border border-[#e4e4e7] rounded-2xl px-5 py-4 shadow-md hover:shadow-lg hover:border-[#0a0a0a] transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#71717a]">
                  Neueste Arbeit
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d4d8] group-hover:text-[#2a9d8f] transition-colors" />
              </div>
              <p className="font-bold text-sm text-[#0a0a0a] mb-1 leading-snug">
                Maria Till Immobilienbewertung
              </p>
              <p className="text-[11px] text-[#71717a]">
                Conversion System · Lead Architecture
              </p>
              <div className="mt-3 h-px bg-[#e4e4e7] group-hover:bg-[#2a9d8f] transition-colors duration-300" />
            </div>
          </button>
        </motion.div>

        {/* Content slides over sticky hero */}
        <div style={{ position: 'relative', zIndex: 1, background: '#ffffff' }}>

        {/* QUOTE / HOOK */}
        <section className="py-28 bg-[#fafafa] border-y border-[#e4e4e7]">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal width="100%">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-[#0a0a0a] max-w-3xl">
                Die meisten Probleme entstehen nicht durch fehlende Maßnahmen.<br className="hidden md:block" />{' '}
                <span style={{
                  background: 'linear-gradient(to bottom, transparent 30%, rgba(180,255,80,0.55) 30%)',
                  paddingBottom: '2px',
                }}>
                  Sondern weil potenzielle Kunden nicht klar entscheiden können.
                </span>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[#71717a] text-sm">
                Genau hier setzen wir an.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ABOUT — Strategic Decision Architect */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">

              {/* Portrait */}
              <Reveal width="100%">
                <div className="overflow-hidden rounded-2xl mx-auto md:ml-auto md:mr-0" style={{ background: '#b8732a', width: '70%' }}>
                  <img
                    src="/me.png"
                    alt="Tobias Stephan"
                    className="w-full h-auto block"
                    style={{ mixBlendMode: 'multiply', filter: 'sepia(0.3) contrast(1.05)' }}
                  />
                </div>
              </Reveal>

              {/* Content */}
              <div className="flex flex-col justify-start pt-2 md:pt-8">
                <Reveal>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                    Strategic Decision Architect
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[#3f3f46] leading-relaxed mb-4" style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    Ich entwickle digitale, high-performing Entscheidungsräume, die Klarheit schaffen und{' '}
                    <span style={{
                      background: 'linear-gradient(to bottom, transparent 30%, rgba(180,255,80,0.55) 30%)',
                      paddingBottom: '2px',
                    }}>
                      Aufmerksamkeit in Handlung konvertieren.
                    </span>
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="text-[#3f3f46] leading-relaxed mb-10" style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    Statt uns nur auf die Spitze des Eisbergs zu konzentrieren, schaffen wir für kleine und mittelständische Unternehmen visuell automatisierte Strukturen, die Interessenten{' '}
                    <span style={{
                      background: 'linear-gradient(to bottom, transparent 30%, rgba(180,255,80,0.55) 30%)',
                      paddingBottom: '2px',
                    }}>
                      systematisch in Käufer verwandeln.
                    </span>
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mb-3">Specialties</p>
                      <ul className="space-y-1.5">
                        {[
                          'Conversion-getriebene Webarchitektur',
                          'Digitale Lead- & Prozessautomatisierung',
                          'Entscheidungs- & Informationsarchitektur',
                          'Erlebbares Interface Design',
                        ].map((item) => (
                          <li key={item} className="text-xs text-[#3f3f46] flex items-start gap-1.5">
                            <span className="mt-1 shrink-0">·</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mb-3">Industries</p>
                      <ul className="space-y-1.5">
                        {[
                          'Mittelständische Unternehmen',
                          'Dienstleister mit erklärungsbedürftigen Leistungen',
                          'Praxen & Beratungsunternehmen',
                          'Wachstumsorientierte KMU',
                        ].map((item) => (
                          <li key={item} className="text-xs text-[#3f3f46] flex items-start gap-1.5">
                            <span className="mt-1 shrink-0">·</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2a9d8f] transition-colors duration-300"
                    >
                      Alle Projekte
                    </a>
                    <a
                      href="mailto:tobias@stephantobias.com"
                      className="inline-flex items-center gap-2 border border-[#0a0a0a] text-[#0a0a0a] px-6 py-3 rounded-full text-sm font-medium hover:border-[#2a9d8f] hover:text-[#2a9d8f] transition-colors duration-300"
                    >
                      Kontakt aufnehmen
                    </a>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* ANSATZ + ERGEBNIS — eine Sektion */}
        <section id="fields" className="py-28 bg-white">
          <div className="px-6 md:px-12">

            <Reveal>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#2a9d8f] mb-3">Ansatz & Ergebnis</p>
                <h2 className="text-3xl md:text-4xl font-bold">Wie wir Entscheidungen ermöglichen</h2>
                <p className="mt-3 text-[#71717a] text-sm">Vom ersten Kontakt bis zur klaren Handlung.</p>
              </div>
            </Reveal>

            {/* 5 Cards */}
            <div
              className="md:grid md:grid-cols-5 md:gap-3 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { step: '01', title: 'Klarheit kommt vor Optimierung.', text: 'Potenzielle Kunden entscheiden schneller — nicht weil mehr erklärt wurde, sondern weil sie die richtige Information zur richtigen Zeit bekommen haben.' },
                { step: '02', title: 'Konsistente Wege.', text: 'Jeder Touchpoint erzeugt dieselbe Erwartung — vom ersten Kontakt bis zur Anfrage. Kein Bruch, keine Verwirrung.' },
                { step: '03', title: 'Klare Entscheidungsräume.', text: 'Wer ankommt, weiß bereits ob er passt. Das Gespräch beginnt auf Augenhöhe — nicht bei null.' },
                { step: '04', title: 'Saubere digitale Abläufe.', text: 'Weniger Rückfragen. Mehr qualifizierte Anfragen. Der Fokus bleibt auf der eigentlichen Arbeit — nicht auf Kommunikation.' },
                { step: '05', title: 'Messbare Ergebnisse.', text: 'Kein Bauchgefühl. Jede Entscheidung im System ist nachvollziehbar — und gezielt optimierbar.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  animate={{
                    y: activeCard === idx ? -12 : 0,
                    boxShadow: activeCard === idx
                      ? '0 16px 36px rgba(42,157,143,0.22)'
                      : '0 0px 0px rgba(42,157,143,0)',
                  }}
                  transition={{
                    y: { type: 'spring', stiffness: 90, damping: 14, mass: 0.6 },
                    boxShadow: { duration: 0.45, ease: 'easeInOut' },
                  }}
                  className="snap-start shrink-0 w-[78vw] md:w-auto bg-white border border-[#e4e4e7] rounded-xl p-7 md:p-8 flex flex-col gap-5 cursor-default"
                >
                  <span className="text-xs font-mono text-[#2a9d8f] tracking-widest">[ {item.step} ]</span>
                  <h3 className="text-sm font-bold leading-snug text-[#0a0a0a]">{item.title}</h3>
                  <p className="text-xs text-[#71717a] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* DECISION GRAPH — visueller Übergang */}
        <section className="py-32 bg-white border-t border-[#e4e4e7]">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal width="100%">
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="md:w-2/5 shrink-0">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#2a9d8f] mb-3">Das System dahinter</p>
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                    Jede Entscheidung folgt einem Weg.
                  </h2>
                  <p className="text-sm text-[#71717a] leading-relaxed">
                    Ausgangslage, Annahmen, Wahrnehmung — erst wenn dieser Weg klar gestaltet ist, entsteht eine Entscheidung. Nicht zufällig.
                  </p>
                </div>
                <div className="w-full md:w-3/5" style={{ height: 'clamp(160px, 38vw, 234px)' }}>
                  <DecisionGraph />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 bg-[#fafafa] border-y border-[#e4e4e7]">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="mb-16">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#2a9d8f] mb-3">Referenzen</p>
                <h2 className="text-3xl md:text-4xl font-bold">Ausgewählte Projekte</h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-0">
              {projects.map((project, idx) => {
                const imageLeft = idx % 2 === 0;
                const imageBlock = (
                  <div
                    className="rounded-2xl overflow-hidden min-h-[320px] md:min-h-[400px] flex items-end p-8 relative"
                    style={{ background: project.bg }}
                  >
                    {project.photo && (
                      <img
                        src={project.photo}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    )}
                    <div className="relative z-10" style={{ textShadow: project.photo ? '0 1px 4px rgba(0,0,0,0.4)' : 'none' }}>
                      <p className="text-xs font-mono tracking-widest mb-2" style={{ color: project.photo ? '#fff' : project.accent }}>
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold" style={{ color: project.photo ? '#fff' : (idx === 1 ? '#fff' : '#0a0a0a') }}>
                        {project.name}
                      </h3>
                    </div>
                  </div>
                );
                const textBlock = (
                  <div className="flex flex-col justify-center py-6 md:py-0">
                    <blockquote className="text-lg md:text-xl font-bold leading-snug text-[#0a0a0a] mb-8 border-l-2 pl-5" style={{ borderColor: project.accent }}>
                      "{project.quote}"
                    </blockquote>
                    <ul className="flex flex-col gap-3">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-[#3f3f46] leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
                return (
                  <Reveal key={project.name} delay={0.1} width="100%">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 py-16 border-b border-[#e4e4e7] last:border-b-0 items-center">
                      {imageLeft ? imageBlock : textBlock}
                      {imageLeft ? textBlock : imageBlock}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="border-y border-[#e4e4e7] bg-white overflow-hidden py-4 relative">
          <style>{`
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-track { animation: ticker 80s linear infinite; display: flex; width: max-content; }
            .ticker-track:hover { animation-play-state: paused; }
          `}</style>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#2a9d8f] shrink-0 pl-6 pr-4 border-r border-[#e4e4e7]">
              System powered by
            </span>
            <div className="overflow-hidden flex-1">
              <div className="ticker-track">
                {[
                  'Decision Psychology',
                  'Conversion Architecture',
                  'Experience Design',
                  'Behavioral Design',
                  'Lead Architecture',
                  'Information Architecture',
                  'Interface Design',
                  'Digitale Automatisierung',
                  'Conversion Systems',
                  'Entscheidungsarchitektur',
                  'Decision Psychology',
                  'Conversion Architecture',
                  'Experience Design',
                  'Behavioral Design',
                  'Lead Architecture',
                  'Information Architecture',
                  'Interface Design',
                  'Digitale Automatisierung',
                  'Conversion Systems',
                  'Entscheidungsarchitektur',
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-4 pr-4">
                    <span className="text-sm font-medium text-[#0a0a0a] whitespace-nowrap">{item}</span>
                    <span className="text-[#d4d4d8]">·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        </div>{/* end content over hero */}
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="relative bg-white overflow-hidden z-10 border-t border-[#e4e4e7]">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 md:px-16 pt-10 pb-6 border-b border-[#e4e4e7]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2a9d8f] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#71717a]">Get in Touch</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs text-[#a1a1aa] tracking-wider">
            <Link to="/impressum" className="hover:text-[#0a0a0a] transition-colors uppercase">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-[#0a0a0a] transition-colors uppercase">Datenschutz</Link>
            <span>© {new Date().getFullYear()} Tobias Stephan</span>
          </div>
        </div>

        {/* Main contact */}
        <div className="px-8 md:px-16 pt-16 pb-8 relative z-10">
          <a
            href="mailto:tobias@stephantobias.com"
            className="block text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[#0a0a0a] leading-tight hover:text-[#2a9d8f] transition-colors duration-500 break-all"
          >
            tobias@stephantobias.com
          </a>
          <p className="text-[#a1a1aa] text-sm mt-4 italic">we design decisions.</p>

          {/* Social icons */}
          <div className="flex items-center gap-5 mt-10 flex-wrap">
            <a href="https://linkedin.com/in/tobias-stephan" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#e4e4e7] flex items-center justify-center text-[#a1a1aa] hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://instagram.com/byhagihacci" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#e4e4e7] flex items-center justify-center text-[#a1a1aa] hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>

          {/* Mobile legal links */}
          <div className="flex md:hidden items-center gap-6 mt-8 text-xs text-[#a1a1aa]">
            <Link to="/impressum" className="hover:text-[#0a0a0a] transition-colors uppercase tracking-wider">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-[#0a0a0a] transition-colors uppercase tracking-wider">Datenschutz</Link>
            <span>© {new Date().getFullYear()} Tobias Stephan</span>
          </div>
        </div>

        {/* Giant watermark text */}
        <div className="px-6 md:px-12 pb-0 overflow-hidden select-none pointer-events-none">
          <p
            className="font-black uppercase leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(80px, 18vw, 260px)',
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.06) 0%, rgba(10,10,10,0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TOBIAS
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;
