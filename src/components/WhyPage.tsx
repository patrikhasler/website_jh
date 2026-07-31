const differentiators = [
  "One of few athletes competing internationally in both Halfpipe and Slopestyle",
  "Elite World Cup Top 10 in both disciplines",
  "Authentic personality with exceptional fan engagement",
  "Proven global media reach",
  "Premium lifestyle content all year round",
  "Long-term Olympic medal potential"
];

const pillars = [
  {
    title: "Style.",
    paragraphs: [
      "Jonas isn't just another snowboard athlete. He is redefining what is possible by competing at the highest level across multiple disciplines while building one of the fastest-growing personal brands in winter sports.",
      "Style isn't just about how Jonas rides - it's how he connects. Whether on snow or on camera, his personality shines through. No script, no persona, no filters. Just genuine passion for snowboarding and the people he shares it with."
    ]
  },
  {
    title: "Progression.",
    paragraphs: [
      "Progression has always defined Jonas' journey. From overcoming injuries to becoming the first European to land a Triple Cork in the halfpipe, he continues to push the boundaries of what's possible. Competing successfully in both Halfpipe and Slopestyle requires constant evolution, creativity, and the willingness to take risks.",
      "Jonas doesn't chase trends. He helps shape the future of the sport."
    ]
  },
  {
    title: "Stoke.",
    paragraphs: [
      "Snowboarding has always been about more than results. For Jonas, it's about the feeling of riding, laughing with friends, chasing new challenges, and creating memories that last far beyond the podium.",
      "That passion is contagious. His content inspires people to get outside, try something new, and experience the joy that snowboarding brings."
    ]
  },
  {
    title: "Connection.",
    paragraphs: [
      "Jonas doesn't just share highlights - he shares the journey. The excitement before a contest. The frustration after a missed run. The hard work behind every trick. The small victories that nobody else sees.",
      "His audience doesn't just watch - they ride every high and every low with him. People don't connect with perfection. They connect with honesty.",
      "The tricks may capture attention. His authenticity is what earns lasting trust. People don't just follow Jonas - they trust him. And that's what turns an audience into a community."
    ]
  }
];

export function WhyPage() {
  return (
    <main className="relative z-20 min-h-screen px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="grid items-end gap-8 border-b border-white/15 pb-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45 md:text-xs">
              Beyond Results
            </p>
            <h1 className="font-display text-[3.2rem] uppercase leading-[0.88] text-white sm:text-[4.8rem] md:text-[6.5rem]">
              Why Jonas<br />
              <span className="text-[#CCFF00]">Is Different</span>
            </h1>
          </div>
          <figure className="aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-black/30">
            <img
              src="/assets/14.jpeg"
              alt="Jonas Hasler performing a snowboard trick"
              className="h-full w-full object-cover grayscale contrast-125"
            />
          </figure>
        </header>

        <section className="py-12 md:py-16" aria-labelledby="different-title">
          <h2 id="different-title" className="sr-only">What makes Jonas different</h2>
          <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <li key={item} className="border-l-2 border-[#CCFF00] pl-4">
                <p className="font-mono text-[10px] tracking-[0.14em] text-[#CCFF00]/65">0{index + 1}</p>
                <p className="mt-2 text-base leading-relaxed text-white/85">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-white/15">
          {pillars.map((pillar, index) => (
            <section
              key={pillar.title}
              className="grid gap-5 border-b border-white/15 py-10 md:grid-cols-[0.38fr_0.62fr] md:gap-12 md:py-14"
              aria-labelledby={`pillar-${index}`}
            >
              <h2 id={`pillar-${index}`} className="font-display text-4xl uppercase leading-none text-[#CCFF00] md:text-5xl">
                {pillar.title}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
                {pillar.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}