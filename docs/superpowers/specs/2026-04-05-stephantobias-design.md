# stephantobias.com — Design Spec
**Date:** 2026-04-05  
**Status:** Approved

## Purpose
Credibility anchor for cold outreach to lawyers. When a lawyer receives an email from tobias@stephantobias.com and googles the domain, they land on a professional, authoritative personal brand site — not a sales pitch.

**Primary goal:** Autorität zuerst, Kontakt als logischer Schluss.

## Stack
- Vite + React + TypeScript (identical to enjoyyourevolution)
- Framer Motion — scroll animations
- Lenis — smooth scroll
- Tailwind CDN — utility classes
- Geist + Inter fonts via Google Fonts

## Visual Design
- **Theme:** Light (BigIdeasDB-inspiriert)
- **Background:** #ffffff / #fafafa
- **Text:** #0a0a0a
- **Muted text:** #71717a
- **Borders:** #e4e4e7
- **Accent:** #2a9d8f (türkis, sparsam)
- **No dark mode toggle** — immer hell

## Sections (One-Pager)
1. **Navbar** — "TS" links, email rechts
2. **Hero** — Name, Titel, Bold Statement, CTA
3. **Quote/Hook** — "Unternehmen haben kein Marketingproblem. Sie haben ein Entscheidungsproblem."
4. **4 Felder (2×2 Grid)** — Decision Psychology · Concept Design · Experience Design · Lead Architecture
5. **3 Referenzprojekte** — Maria Till · Helmsauer Gruppe · KampfIQ
6. **Kontakt/Footer** — ruhiger CTA, Email-Link

## Content (DE only, no language toggle)

### Hero
- Name: "Tobias Stephan"
- Titel: "Decision & Experience Architect"
- Tagline: "We design decisions."
- Body: "Ich helfe Unternehmen, Entscheidungen zu designen — nicht nur Maßnahmen umzusetzen."
- CTA: "Gespräch vereinbaren →" → mailto:tobias@stephantobias.com

### Quote
"Unternehmen haben kein Marketingproblem. Sie haben ein Entscheidungsproblem."

### 4 Felder
- Decision Psychology — "Warum Entscheidungen scheitern und wie man sie strukturell auslöst."
- Concept Design — "Strategischer Aufbau von Kommunikation, Angeboten und Positionierung."
- Experience Design — "Die Gestaltung von Kontaktpunkten, die Vertrauen erzeugen."
- Lead Architecture — "Systeme, die qualifizierte Anfragen zuverlässig generieren."

### Referenzprojekte
- Maria Till Immobilienbewertung — "Conversion-System und digitale Lead-Architektur."
- Helmsauer Gruppe — "Website-Redesign und strategische Positionierung."
- KampfIQ — "Brand, Migration und organische Wachstumsstrategie."

### Kontakt
"Wenn Sie nach jemandem suchen, der Entscheidungen nicht nur berät sondern designt — schreiben Sie mir."  
tobias@stephantobias.com

## Animations
- Scroll-triggered reveals (same Reveal component as enjoyyourevolution)
- Subtle progress bar (schwarz, kein bunter Gradient)
- Lenis smooth scroll
- Keine übertriebenen Effekte — ruhig, kontrolliert
