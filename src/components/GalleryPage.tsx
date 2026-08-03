const galleryImages = [
  { src: "/assets/2.jpeg", alt: "Jonas Hasler performing a handplant on a snowboard halfpipe wall" },
  { src: "/assets/3.jpeg", alt: "Jonas Hasler grabbing his snowboard high above a mountain halfpipe" },
  { src: "/assets/4.jpeg", alt: "Jonas Hasler performing an inverted snowboard aerial against a blue sky" },
  { src: "/assets/5.jpeg", alt: "Jonas Hasler rotating above the snowboard halfpipe with his red Burton board" },
  { src: "/assets/6.jpeg", alt: "Jonas Hasler launching a snowboard trick above the clouds in Laax" },
  { src: "/assets/7.jpeg", alt: "Jonas Hasler holding a snowboard grab during a halfpipe run" },
  { src: "/assets/12.jpeg", alt: "Jonas Hasler performing an inverted snowboard trick in the halfpipe" },
  { src: "/assets/556b9f89-2447-4df3-ba53-783f46d98d7d.jpeg", alt: "Jonas Hasler sliding a snowboard rail in the terrain park" },
  { src: "/assets/DSC02431.jpeg", alt: "Jonas Hasler captured in a snowboard action sequence above spectators" },
  { src: "/assets/IMG_0282.jpeg", alt: "Jonas Hasler wearing a competition bib during a snowboard event" },
  { src: "/assets/IMG_3911.jpeg", alt: "Portrait of Swiss snowboard athlete Jonas Hasler in winter gear" },
  { src: "/assets/IMG_3917.jpeg", alt: "Jonas Hasler preparing for a professional snowboard competition" },
  { src: "/assets/IMG_8595.jpeg", alt: "Jonas Hasler standing on his red snowboard at The Snow League" },
  { src: "/assets/IMG_9724.jpeg", alt: "Jonas Hasler competing in snowboard halfpipe at The Snow League" },
  { src: "/assets/IMG_9807.jpeg", alt: "Jonas Hasler giving an SRF interview after a snowboard competition" },
  { src: "/assets/IMG_9937.jpeg", alt: "Jonas Hasler holding his snowboard during a Snow League media interview" }
];

export function GalleryPage() {
  return (
    <main className="relative z-20 min-h-screen px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="mx-auto w-full max-w-[1600px] rounded-md border border-white/10 bg-[#171a28]/72 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-7">
        <header className="mb-6">
          <h1 className="font-display text-[2.4rem] uppercase leading-[0.92] text-white sm:text-[3.2rem] md:text-[4rem]">Gallery</h1>
          <p className="mt-2 max-w-[70ch] font-mono text-xs uppercase tracking-[0.08em] text-white/65 md:text-sm">
            Selected moments from halfpipe, slopestyle and big air sessions.
          </p>
        </header>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <figure key={image.src} className="mb-4 overflow-hidden rounded-md border border-white/10 bg-black/35">
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover transition duration-500 ease-out hover:scale-[1.02]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
