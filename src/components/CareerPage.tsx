type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  highlights?: string[];
};

const timeline: TimelineEntry[] = [
  {
    year: "2025/26",
    title: "Season Highlights",
    description: "A landmark season across all three freestyle snowboard disciplines.",
    highlights: [
      "Olympic Athlete Milano Cortina 2026",
      "Only snowboard athlete competing in Halfpipe, Slopestyle & Big Air",
      "World Cup Overall #10 Halfpipe",
      "World Cup Overall #10 Slopestyle",
      "World Cup Overall #10 Park & Pipe",
      "2 × 4th Place Halfpipe World Cup",
      "6th Place Slopestyle LAAX",
      "First European to land a Triple Cork in a Halfpipe",
      "Full Season Invite Snow League",
      "Only athlete selected for the Swiss Snowboard National Team in Slopestyle (2026/27)"
    ]
  },
  {
    year: "2023 – 2024",
    title: "World Cup Top-10 & Snow League",
    description:
      "Jonas establishes himself on the World Cup circuit with more than five top-10 finishes across halfpipe, slopestyle and big air, proving his versatility. He participates three times in the Snow League at elite level."
  },
  {
    year: "2022 – 2023",
    title: "Junior World Championships & Junior Athlete of the Year",
    description:
      "Two podium finishes at the Junior World Championships in halfpipe make a clear statement. Shortly after, Jonas is named Junior Athlete of the Year 2023 by Thurgau – an honour that recognises his remarkable development."
  },
  {
    year: "2021",
    title: "European Cup Overall Halfpipe – U15 Winner",
    description:
      "Jonas crowns his first major international season with the overall victory in the European Cup U15 category. The title underlines his dominant performance in the halfpipe and puts him on the radar of the global snowboard community."
  },
  {
    year: "2020 – 2021",
    title: "Selected for Swiss Snowboard Talent Structures",
    description:
      "Following consistently strong results at national level, Jonas is selected for the Swiss Snowboard talent structures and development programs. The selection confirms his exceptional potential and provides him with access to elite coaching and international competition opportunities."
  },
  {
    year: "2017 – 2019",
    title: "Early Titles & International Breakthrough",
    description:
      "Training at the Swiss Olympic Sport School and riding in LAAX laid the foundation for Jonas' rise from dominant Swiss junior champion to international podium contender.",
    highlights: [
      "Swiss Champion Halfpipe & Slopestyle U13 – national titles five and six in a row",
      "4th at the Burton US Open Junior Jam Halfpipe – best European rider",
      "3rd at the World Rookie Tour Finals Halfpipe U15",
      "2019 Freude herrscht Award – Best Swiss Junior Athlete"
    ]
  }
];

const sponsors = [
  "Burton",
  "Laax",
  "Oakley",
  "TSG",
  "Schweizer Sporthilfe",
  "Swiss Snowboard",
  "Armee Suisse"
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
            Born on June 1, 2006, Jonas Hasler grew up in Laax, one of the world's most iconic snowboard
            destinations. What began as a childhood passion on the Laax glacier has developed into a
            remarkable international career. At just 20 years old, Jonas is already Switzerland's
            most versatile freestyle snowboarder, competing at the highest level in halfpipe, slopestyle,
            and big air.
          </p>
        </header>

        {/* ── Highlights grid ── */}
        <section className="mb-16">
          <h2 className="mb-8 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Highlights at a Glance
          </h2>

          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { value: "1", suffix: "X", label: "Olympics" },
              { value: "5", suffix: "+", label: "Top 10 World Cup Finishes" },
              { value: "3", suffix: "X", label: "Snow League Participations" },
              { value: "2", suffix: "X", label: "Junior World Champ Podiums" },
              { value: "U15", suffix: "", label: "European Cup Overall Title" },
              { value: "2023", suffix: "", label: "Junior Athlete of the Year" }
            ].map(({ value, suffix, label }) => (
              <div
                key={label}
                className="border-l-[3px] border-l-[#CCFF00] pl-4"
              >
                <dd className="font-display text-6xl uppercase leading-none text-white">
                  {value}
                  {suffix === "X" ? <span className="ml-0.5 inline-block align-baseline text-[0.72em]">{suffix}</span> : null}
                  {suffix === "+" ? <span className="ml-0.5 align-top text-[0.9em]">{suffix}</span> : null}
                </dd>
                <dt className="mt-2 max-w-[18ch] font-mono text-[11px] uppercase leading-tight tracking-[0.08em] text-white/45">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Bio text block ── */}
        <section className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-4 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
              The Athlete
            </h2>
            <div className="space-y-4 font-sans text-[0.95rem] leading-relaxed text-white/70">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/90">
                Swiss Snowboard National Team Athlete
              </p>
              <p>
                Jonas Hasler is one of international freestyle snowboarding's most exciting young
                talents. Growing up riding the slopes of LAAX, Switzerland, he seamlessly blends
                technical precision with creative style across Halfpipe, Slopestyle, and Big Air.
              </p>
              <p>
                Known for massive amplitude, rock solid landings and inventive trick variations,
                Jonas continually pushes the limits on the mountain. Off the snow, his passion for
                videography, drone piloting and aviation fuels his creative approach to the sport,
                shaping a distinct visual identity both on and off the board.
              </p>
              <div className="pt-2">
                <h3 className="font-display text-xl uppercase tracking-[0.05em] text-white">Quick Stats</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2"><span className="text-[#CCFF00]" aria-hidden="true">•</span><span><strong className="font-semibold text-white/90">Home Mountain:</strong> LAAX (Crap Sogn Gion)</span></li>
                  <li className="flex gap-2"><span className="text-[#CCFF00]" aria-hidden="true">•</span><span><strong className="font-semibold text-white/90">Disciplines:</strong> Halfpipe | Slopestyle | Big Air</span></li>
                  <li className="flex gap-2"><span className="text-[#CCFF00]" aria-hidden="true">•</span><span><strong className="font-semibold text-white/90">Passions:</strong> Freestyle Snowboarding, Videography, Aviation</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
              Disciplines &amp; Style
            </h2>
            <div className="space-y-4 font-sans text-[0.95rem] leading-relaxed text-white/70">
              <p>
                <strong className="font-semibold text-white">Halfpipe</strong> is Jonas'
                core discipline. In the pipe he dominates with controlled rotations, sharp
                edge work and a pipe awareness rare for his age. He has repeatedly proven
                at World Cup level that he can compete with the best riders in the world.
              </p>
              <p>
                In <strong className="font-semibold text-white">Slopestyle</strong> he stands
                out through line selection and flow – linking jib features seamlessly into
                jumps to create a cohesive run that impresses both technically and visually.
              </p>
              <p>
                In <strong className="font-semibold text-white">Big Air</strong> Jonas makes
                full use of his hang time and height. Large rotations with clean grabs make
                him a competitive force that judges and rivals alike respect.
              </p>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="mb-16">
          <h2 className="mb-8 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Career Timeline
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
                {entry.highlights ? (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-8">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 font-sans text-[0.9rem] leading-relaxed text-white/80">
                        <span className="text-[#CCFF00]" aria-hidden="true">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        {/* ── Partners & Sponsors ── */}
        <section>
          <h2 className="mb-6 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Partners &amp; Sponsors
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
