import { ExternalLink } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/jonashasler";

export function MediaPage() {
  return (
    <main className="relative z-20 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="grid w-full max-w-[1100px] overflow-hidden rounded-md border border-white/10 bg-[#171a28]/72 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:grid-cols-[0.8fr_1.2fr]">
        <figure className="min-h-[360px] bg-black/40 md:min-h-[620px]">
          <picture>
            <source srcSet="/assets/IMG_9937-media.avif" type="image/avif" />
            <img
              src="/assets/IMG_9937.jpeg"
              alt="Jonas Hasler at The Snow League"
              width="1600"
              height="1066"
              className="h-full w-full object-cover object-[72%_center] grayscale"
            />
          </picture>
        </figure>

        <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#CCFF00]">Media</p>
          <h1 className="mt-3 font-display text-[3rem] uppercase leading-[0.9] text-white sm:text-[4rem] lg:text-[5.5rem]">
            Jonas Hasler
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.08em] text-white/60">@jonashasler</p>
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-white/80 md:text-base">
            A curated collection of media coverage featuring interviews, videos, TV appearances, newspaper stories, partner features and magazine profiles from Jonas' journey on and beyond the snow.
          </p>

          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-between gap-4 border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white transition hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CCFF00] sm:w-auto"
          >
            Open Linktree
            <ExternalLink size={17} aria-hidden="true" />
          </a>

          <p className="mt-3 font-mono text-[10px] tracking-[0.04em] text-white/35">linktr.ee/jonashasler</p>
        </div>
      </section>
    </main>
  );
}