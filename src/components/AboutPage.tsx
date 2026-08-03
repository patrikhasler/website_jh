const achievements = [
  { value: "1X", label: "Olympia", detail: "3 disciplines: Halfpipe, Slopestyle, Big Air" },
  { value: "6+", label: "Top 10 World Cup Finishes" },
  { value: "3X", label: "Snow League" },
  { value: "2X", label: "Junior World Championship Halfpipe Podiums" },
  { value: "🏆", label: "European Cup Overall Halfpipe" },
  { value: "🏆", label: "Junior Athlete of the Year 2023" }
];

export function AboutPage() {
  return (
    <main className="relative z-20 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="w-full max-w-[1400px] rounded-md border border-white/10 bg-[#171a28]/72 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-7">
        <div className="grid gap-5 md:grid-cols-[280px_1fr] md:gap-7">
          <div className="overflow-hidden rounded-md bg-black/35">
            <picture>
              <source srcSet="/assets/1-about.avif" type="image/avif" />
              <img
                src="/assets/1.jpg"
                alt="Jonas Hasler portrait"
                width="1000"
                height="1499"
                className="h-full w-full object-cover object-center"
              />
            </picture>
          </div>

          <div>
            <h1 className="font-display text-[2.5rem] uppercase leading-[0.92] text-white sm:text-[3.25rem] md:text-[4.25rem]">
              Jonas Hasler
            </h1>

            <div className="mt-3 space-y-1 font-mono text-[12px] uppercase tracking-[0.05em] text-white/85 md:text-sm">
              <p>Birth: June 1, 2006</p>
              <p>Town: Laax, Switzerland</p>
              <p>National Team Member: Swiss Snowboard</p>
              <p>Disciplines: Halfpipe, Slopestyle, Big Air</p>
              <p>Hobbies: Videography, drone flying, aviation, ice hockey, MTB, surfing, gymnastics</p>
            </div>

            <div className="mt-7 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((item) => (
                <article key={`${item.value}-${item.label}`}>
                  <p className="font-display text-5xl leading-none text-[#CCFF00]">{item.value}</p>
                  <p className="mt-1 font-mono text-xs uppercase leading-snug tracking-[0.04em] text-white/85 md:text-sm">{item.label}</p>
                  {item.detail && (
                    <p className="mt-1 font-mono text-[10px] uppercase leading-snug tracking-[0.04em] text-white/55 md:text-xs">{item.detail}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
