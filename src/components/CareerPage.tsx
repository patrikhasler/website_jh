type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineEntry[] = [
  {
    year: "2017 – 2019",
    title: "The First Steps",
    description:
      "Jonas begins structured snowboard training at Caumasee and on the Laax glacier. His talent for halfpipe riding becomes evident early on. Training with Skiclub Flims lays the foundation for an international career."
  },
  {
    year: "2020 – 2021",
    title: "Selected for Swiss Snowboard Talent Structures",
    description:
      "Following consistently strong results at national level, Jonas is selected for the Swiss Snowboard talent structures and development programs. The selection confirms his exceptional potential and provides him with access to elite coaching and international competition opportunities."
  },
  {
    year: "2021",
    title: "European Cup Overall Halfpipe – U15 Winner",
    description:
      "Jonas crowns his first major international season with the overall victory in the European Cup U15 category. The title underlines his dominant performance in the halfpipe and puts him on the radar of the global snowboard community."
  },
  {
    year: "2022 – 2023",
    title: "Junior World Championships & Junior Athlete of the Year",
    description:
      "Two podium finishes at the Junior World Championships in halfpipe make a clear statement. Shortly after, Jonas is named Junior Athlete of the Year 2023 by Thurgau – an honour that recognises his remarkable development."
  },
  {
    year: "2023 – 2024",
    title: "World Cup Top-10 & Snow League",
    description:
      "Jonas establishes himself on the World Cup circuit with more than five top-10 finishes across halfpipe, slopestyle and big air, proving his versatility. He participates three times in the Snow League at elite level."
  },
  {
    year: "2026",
    title: "Olympic Games & National Team Promotion",
    description:
      "The pinnacle of his career so far: Jonas Hasler qualifies for the Winter Olympic Games and represents Switzerland on the world's biggest stage in winter sport. He is also promoted to the Swiss Snowboard National Team – a milestone built on years of hard work, sacrifice and passionate training."
  }
];

const sponsors = [
  "Burton",
  "Laax",
  "Oakley",
  "TSG",
  "Schweizer Sporthilfe",
  "Swiss Snowboard"
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
              <p>
                Jonas Hasler is a member of the Swiss Snowboard National Team and one of the
                most exciting young talents in international freestyle snowboarding. He combines
                technical precision with creative style – a blend that makes him a genuine
                threat across all three disciplines.
              </p>
              <p>
                Growing up at the foot of Crap Sogn Gion in Laax, Jonas treats the glacier as a
                second home, using every training session to push his tricks higher and his style
                sharper. His halfpipe riding is known for amplitude and clean grab positions;
                in slopestyle and big air he impresses with creative variations and consistent
                landings.
              </p>
              <p>
                Off the snow, Jonas is passionate about videography, drone flying and aviation –
                interests that shape his creative eye for the sport and help him build his own
                visual identity as an athlete.
              </p>
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
