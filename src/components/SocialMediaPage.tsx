const comments = [
  {
    platform: "Instagram",
    handle: "@j0.nash",
    text: "Strong style and clean execution. This run had full control from takeoff to landing."
  },
  {
    platform: "TikTok",
    handle: "@jonas.hasler",
    text: "Behind the scenes from training days in Laax. More clips, more progression, more consistency."
  },
  {
    platform: "Community",
    handle: "@fans",
    text: "Your creativity on feature lines is next level. Keep pushing the sport forward."
  }
];

export function SocialMediaPage() {
  return (
    <main className="relative z-20 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="w-full max-w-[1400px] rounded-md border border-white/10 bg-[#34343a]/88 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:p-7">
        <div className="grid gap-5 md:grid-cols-[500px_1fr] md:gap-8 lg:grid-cols-[620px_1fr]">
          <figure className="min-h-[480px] overflow-hidden rounded-md border border-white/10 bg-black/45 p-2 md:min-h-[640px] lg:min-h-[760px]">
            <img src="/assets/EMV.jpg" alt="Jonas Hasler social media portrait" className="h-full w-full object-contain object-center" />
          </figure>

          <div>
            <h1 className="font-display text-[2.4rem] uppercase leading-[0.92] text-white sm:text-[3.2rem] md:text-[4rem]">Social Media</h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.09em] text-white/70 md:text-sm">Instagram @j0.nash / TikTok @jonas.hasler</p>

            <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-white/85 md:text-base">
              Daily updates, competition moments and training highlights. This page collects social content context and quick comments for media partners and fans.
            </p>

            <div className="mt-6 grid gap-4">
              {comments.map((item) => (
                <article key={`${item.platform}-${item.handle}`} className="rounded-md border border-white/15 bg-[#2d2d33]/80 p-4">
                  <p className="font-display text-2xl leading-none text-[#CCFF00]">{item.platform}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-white/65">{item.handle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
