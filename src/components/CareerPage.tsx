type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineEntry[] = [
  {
    year: "2017 – 2019",
    title: "Die ersten Schritte",
    description:
      "Jonas beginnt mit dem organisierten Snowboardtraining am Caumasee und auf dem Laaxer Gletscher. Schon früh zeigt sich sein Talent im Halfpipe-Riding. Die Trainings im Skiclub Flims legen das Fundament für eine internationale Karriere."
  },
  {
    year: "2020 – 2021",
    title: "Aufnahme in den Swiss Snowboard Nationalkader",
    description:
      "Nach konstant starken Resultaten auf nationaler Ebene wird Jonas in den Swiss Snowboard Nationalkader aufgenommen. Die Aufnahme bestätigt sein ausserordentliches Talent und ebnet den Weg für internationale Wettkämpfe im Weltcup-Zirkus."
  },
  {
    year: "2021",
    title: "Europacup Overall Halfpipe – Sieg U15",
    description:
      "Jonas krönt seine erste grosse internationale Saison mit dem Gesamtsieg im Europacup in der Kategorie U15. Der Titel unterstreicht seine überragende Leistungsfähigkeit in der Halfpipe und macht international auf ihn aufmerksam."
  },
  {
    year: "2022 – 2023",
    title: "Junior World Championships & Nachwuchsathlet des Jahres",
    description:
      "Mit zwei Podestplätzen an den Junior Weltmeisterschaften in der Halfpipe setzt Jonas ein deutliches Zeichen. Wenig später wird er zum Junior Nachwuchsathlet des Jahres 2023 ausgezeichnet – eine Ehrung, die seine aussergewöhnliche Entwicklung würdigt."
  },
  {
    year: "2023 – 2024",
    title: "Weltcup Top-10 & Snow League",
    description:
      "Jonas etabliert sich im Weltcup-Zirkus: Mehr als fünf Top-10-Platzierungen in Halfpipe, Slopestyle und Big Air belegen seine Vielseitigkeit. Zusätzlich zählt er in der Snow League zu den stärksten Athleten und sammelt drei Podeste."
  },
  {
    year: "2026",
    title: "Olympische Spiele",
    description:
      "Der Höhepunkt seiner bisherigen Karriere: Jonas Hasler qualifiziert sich für die Olympischen Winterspiele und repräsentiert die Schweiz auf der weltgrössten Bühne des Wintersports. Ein Meilenstein, auf den Jahre harter Arbeit, Entbehrung und leidenschaftliches Training hingeführt haben."
  }
];

const sponsors = [
  "Swiss Snowboard",
  "Red Bull",
  "Laax / Rocksresort",
  "Burton",
  "Roxy",
  "Anon",
  "Vans"
];

export function CareerPage() {
  return (
    <main className="relative z-20 min-h-screen px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* ── Page header ── */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45 md:text-xs">
            Athlete Profile
          </p>
          <h1 className="font-display text-[3rem] uppercase leading-[0.9] text-white sm:text-[4.5rem] md:text-[6rem]">
            Career
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/65 md:text-lg">
            Jonas Hasler wurde am 1. Juni 2006 in Laax geboren – einem der bekanntesten Snowboard-Hotspots
            der Welt. Was als Kindheitsleidenschaft auf dem Laaxer Gletscher begann, hat sich zu einer
            beeindruckenden internationalen Karriere entwickelt. Mit gerade einmal 20 Jahren zählt Jonas
            bereits zu den vielseitigsten Freestyle-Snowboardern der Schweiz – konkurrenzfähig in
            Halfpipe, Slopestyle und Big Air gleichzeitig.
          </p>
        </header>

        {/* ── Bio text block ── */}
        <section className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-4 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
              Der Athlet
            </h2>
            <div className="space-y-4 font-sans text-[0.95rem] leading-relaxed text-white/70">
              <p>
                Jonas Hasler ist Mitglied des Schweizer Snowboard Nationalkaders und einer der
                aufregendsten Nachwuchstalente des internationalen Freestyle-Snowboardings. Er
                verbindet technische Präzision mit kreativem Stil – eine Kombination, die ihn in
                allen drei Disziplinen gefährlich macht.
              </p>
              <p>
                Aufgewachsen am Fuss des Crap Sogn Gion in Laax hat Jonas den Gletscher als
                zweites Zuhause und nutzt jede Trainingsstunde, um neue Tricks zu erlernen und
                bestehende Moves auf ein höheres Niveau zu bringen. Sein Halfpipe-Riding ist
                bekannt für hohe Amplituden und saubere Grab-Positionen; im Slopestyle und
                Big Air überzeugt er mit Variationen und konsistenten Landungen.
              </p>
              <p>
                Neben dem Schnee gilt Jonas' Leidenschaft der Videografie, dem Drohnenfliegen
                und der Luftfahrt – Interessen, die seinen kreativen Blick auf den Sport prägen
                und ihm helfen, seine eigene visuelle Identität als Athlet aufzubauen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
              Disziplinen &amp; Stil
            </h2>
            <div className="space-y-4 font-sans text-[0.95rem] leading-relaxed text-white/70">
              <p>
                <strong className="font-semibold text-white">Halfpipe</strong> ist Jonas'
                Kerndisziplin. In der Pipe dominiert er mit kontrollierten Rotationen,
                scharfen Kanten und einer für sein Alter ungewöhnlichen Pipe-Awareness.
                Mehrfach bewies er auf Weltcup-Niveau, dass er mit den besten Fahrern
                der Welt mithalten kann.
              </p>
              <p>
                Im <strong className="font-semibold text-white">Slopestyle</strong> überzeugt
                er durch Line-Auswahl und Flow: Jib-Elemente verknüpft er nahtlos mit
                Jumps zu einem kohärenten Run, der sowohl technisch als auch optisch
                beeindruckt.
              </p>
              <p>
                Im <strong className="font-semibold text-white">Big Air</strong> bringt Jonas
                seine Luftzeit und Höhe voll zum Einsatz. Grosse Rotationen mit sauberen
                Grabs machen ihn zu einem Wettkampf-Faktor, den Juroren und Gegner
                gleichermassen respektieren.
              </p>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="mb-16">
          <h2 className="mb-8 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Karriere-Timeline
          </h2>

          <ol className="relative border-l border-white/15">
            {timeline.map((entry) => (
              <li key={entry.year} className="mb-10 ml-6 last:mb-0">
                <span
                  className="absolute -left-[9px] mt-1 h-[18px] w-[18px] rounded-full border-2 border-[#CCFF00] bg-[#030014]"
                  aria-hidden="true"
                />
                <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#CCFF00]/80">
                  {entry.year}
                </p>
                <h3 className="mb-2 font-display text-xl uppercase leading-snug text-white sm:text-2xl">
                  {entry.title}
                </h3>
                <p className="font-sans text-[0.9rem] leading-relaxed text-white/60">
                  {entry.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Highlights grid ── */}
        <section className="mb-16">
          <h2 className="mb-8 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Highlights auf einen Blick
          </h2>

          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { dt: "Olympia", dd: "1× Olympionike" },
              { dt: "Weltcup Top-10", dd: "Mehr als 5 Platzierungen" },
              { dt: "Snow League", dd: "3× Podest" },
              { dt: "Junior WM Halfpipe", dd: "2× Podest" },
              { dt: "Europacup U15", dd: "Gesamtsieg Halfpipe" },
              { dt: "Nachwuchsathlet 2023", dd: "Swiss Snowboard Award" }
            ].map(({ dt, dd }) => (
              <div
                key={dt}
                className="rounded-md border border-white/10 bg-white/[0.04] p-4"
              >
                <dt className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">{dt}</dt>
                <dd className="font-display text-2xl uppercase text-white">{dd}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Partners & Sponsors ── */}
        <section>
          <h2 className="mb-6 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Partner &amp; Sponsoren
          </h2>
          <ul className="flex flex-wrap gap-3">
            {sponsors.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/20 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-white/70"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
