const galleryImages = [
  "/assets/2.jpeg",
  "/assets/3.jpeg",
  "/assets/4.jpeg",
  "/assets/5.jpeg",
  "/assets/6.jpeg",
  "/assets/7.jpeg",
  "/assets/12.jpeg",
  "/assets/556b9f89-2447-4df3-ba53-783f46d98d7d.jpeg",
  "/assets/DSC02431.jpeg",
  "/assets/IMG_0282.jpeg",
  "/assets/IMG_3911.jpeg",
  "/assets/IMG_3917.jpeg",
  "/assets/IMG_8595.jpeg",
  "/assets/IMG_9724.jpeg",
  "/assets/IMG_9807.jpeg",
  "/assets/IMG_9937.jpeg"
];

export function GalleryPage() {
  return (
    <main className="relative z-20 min-h-screen px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="mx-auto w-full max-w-[1600px] rounded-md border border-white/10 bg-[#34343a]/88 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:p-7">
        <header className="mb-6">
          <h1 className="font-display text-[2.4rem] uppercase leading-[0.92] text-white sm:text-[3.2rem] md:text-[4rem]">Gallery</h1>
          <p className="mt-2 max-w-[70ch] font-mono text-xs uppercase tracking-[0.08em] text-white/65 md:text-sm">
            Selected moments from halfpipe, slopestyle and big air sessions.
          </p>
        </header>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <figure key={`${src}-${index}`} className="mb-4 overflow-hidden rounded-md border border-white/10 bg-black/35">
              <img
                src={src}
                alt={`Jonas Hasler gallery image ${index + 1}`}
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
