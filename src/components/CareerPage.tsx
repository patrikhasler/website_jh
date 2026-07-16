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
    title: "Selected for the Swiss Snowboard National Team",
    description:
      "Following consistently strong results at national level, Jonas is selected for the Swiss Snowboard National Team. The call-up confirms his exceptional talent and opens the door to international competition on the World Cup circuit."
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
    title: "Olympic Games",
    description:
      "The pinnacle of his career so far: Jonas Hasler qualifies for the Winter Olympic Games and represents Switzerland on the world's biggest stage in winter sport – a milestone built on years of hard work, sacrifice and passionate training."
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
            Jonas Hasler was born on June 1, 2006 in Laax – one of the world's most iconic snowboard
            destinations. What started as a childhood passion on the Laax glacier has grown into a
            remarkable international career. At just 20 years old, Jonas is already one of Switzerland's
            most versatile freestyle snowboarders, competing at the highest level in halfpipe, slopestyle
            and big air simultaneously.
          </p>
        </header>

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

        {/* ── Highlights grid ── */}
        <section className="mb-16">
          <h2 className="mb-8 font-display text-2xl uppercase tracking-[0.06em] text-[#CCFF00]">
            Highlights at a Glance
          </h2>

          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { dt: "Olympics", dd: "1× Olympian" },
              { dt: "World Cup Top-10", dd: "5+ Finishes" },
              { dt: "Snow League", dd: "3 Participations" },
              { dt: "Junior World Champs", dd: "2× Halfpipe Podium" },
              { dt: "European Cup U15", dd: "Overall Halfpipe Win" },
              { dt: "Junior Athlete 2023", dd: "Thurgau Award" }
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
