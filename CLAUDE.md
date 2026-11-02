# Projektanweisungen: Portfolio

## Kontext
Ich baue mein persönliches Portfolio als UX/UI Designer mit Fokus auf Product Design.
Antworte mir auf Deutsch. Alle Inhalte der Website sind auf Englisch.
Ziel des Portfolios: einen neuen Job finden und später private Kunden als Freelancer gewinnen.

## Designrichtung
- Clean und minimalistisch: wenige Elemente, viel Weißraum, klare Hierarchie
- Spacing, Paddings und Margins sollten an Best Practices angehalten sein
- Ausschließlich Dark Mode, kein Light Mode
- Schriftart: ausschließlich Inter
- Grün ist die einzige Akzentfarbe. Setze sie sparsam und gezielt ein, z. B. für Links, Hover-States, aktive Zustände und wichtige Highlights.
- Keine Verläufe, starken Schatten, Glassmorphism oder dekorativen Elemente, außer sie sind in den Framer-Bildern zu sehen
- Animationen nur dezent und funktional; `prefers-reduced-motion` respektieren

## Quellen und Prioritäten
1. **Framer-Bilder (`design/framer/`):** Sie sind die verbindliche Designvorlage für Layout, Abstände, Typografie und Farben.
2. **.md-Dateien im GitHub-Repo (`website/`):** Sie sind die Quelle für die Inhalte der Bereiche, die Claude gestaltet.
3. **Diese Anweisungen:** Sie gelten überall dort, wo Bilder und .md-Dateien nichts festlegen.
4. **Informationshierarchie:** Sie wird über die Ordnerstruktur im GitHub-Repo vorgegeben

## Umsetzung der Framer-Bilder
- Baue die Bilder so genau wie möglich nach und ändere das Design nicht eigenmächtig.
- Leite Farben, Schriftgrößen und Abstände aus den Bildern ab und halte sie zentral als Design Tokens fest (`src/styles/tokens.css`).
- Kennzeichne geschätzte Werte (z. B. exakte Hex-Werte) und frage bei wichtigen Unklarheiten nach.
- Ergänze fehlende Zustände und Breakpoints (Hover, Fokus, Mobile) passend zum bestehenden Design und weise kurz darauf hin.

## Inhalte aus .md-Dateien
- Übernimm Texte unverändert. Kürze, ergänze oder formuliere nichts um, außer ich bitte darum.
- Erfinde keine Inhalte, Kennzahlen oder Projektdetails.
- Gestalte die Inhalte auf Basis ihrer Struktur (Überschriften, Listen, Zitate, Bilder) und mit den bestehenden Design Tokens und Komponenten.
- Wähle für jeden Bereich das Layout, das den Inhalt am besten trägt, und bleib dabei im Stil der Framer-Bilder.
- Trenne Inhalt und Layout sauber: Eine Änderung in der .md-Datei muss ohne Codeänderung auf der Website erscheinen.
- Prüfe die aktuelle Version der Datei im Repo, bevor du damit arbeitest.

## Technische Qualität
- Semantisches HTML, wiederverwendbare Komponenten und responsives Layout (mobile bis Desktop)
- Barrierefreiheit: Kontrast mindestens WCAG AA 2.2, sichtbare Fokus-Zustände, Tastaturbedienung und Alt-Texte
- Gute Performance: optimierte Bilder und keine unnötigen Abhängigkeiten
- Führe keine neuen Farben, Schriftgrößen oder Abstände außerhalb der Tokens ein.

## Arbeitsweise
- Frage nach, bevor du größere Designentscheidungen triffst.
- Halte Antworten kurz und nenne nur, was du geändert hast und welche Annahmen du getroffen hast.
- Gib mir Feedback als Senior Product Designer, wenn etwas die Klarheit oder Nutzerführung verschlechtert. Setze es aber nicht ohne meine Zustimmung um.

## Technik
- Astro, statische Ausgabe. `npm run dev` startet die Vorschau, `npm run build` baut nach `dist/`.
- `src/lib/content.ts` liest die Inhalte aus `website/`; `src/lib/links.ts` enthält Linkziele, die nicht in den .md-Dateien stehen.
