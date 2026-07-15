export function FooterMarquee() {
  const sponsors = [
    { src: "/assets/logo-burton.png", alt: "Burton" },
    { src: "/assets/logo-oakley.png", alt: "Oakley" },
    { src: "/assets/logo-tsg.png", alt: "TSG" },
    { src: "/assets/logo-laax.png", alt: "LAAX" },
    { src: "/assets/logo-schweizersporthilfe.png", alt: "Schweizer Sporthilfe" },
    { src: "/assets/logo-swisssnowboard.png", alt: "Swiss Snowboard" }
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 overflow-hidden border-t border-white/10 bg-[#030014]/45 py-[0.4rem]">
      <div className="footer-track flex w-max whitespace-nowrap">
        {[0, 1].map((row) => (
          <ul key={row} className="flex items-center gap-8 px-[1.2rem] md:gap-[2.8rem] md:px-[1.6rem]">
            {sponsors.map((sponsor) => (
              <li key={`${row}-${sponsor.alt}`} className="flex items-center justify-center">
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-4 w-auto max-w-[112px] object-contain opacity-40 grayscale contrast-125 md:h-[1.4rem] md:max-w-[152px]"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
