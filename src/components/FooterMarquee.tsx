export function FooterMarquee() {
  const sponsors = [
    { src: "/assets/logo-burton.png", alt: "Burton", href: "http://www.burton.com" },
    { src: "/assets/logo-oakley.png", alt: "Oakley", href: "http://www.oakley.com" },
    { src: "/assets/logo-tsg.png", alt: "TSG", href: "http://www.ridetsg.com" },
    { src: "/assets/logo-laax.png", alt: "LAAX", href: "http://www.laax.com" },
    { src: "/assets/logo-schweizersporthilfe.png", alt: "Schweizer Sporthilfe", href: "https://sporthilfe.ch" },
    { src: "/assets/logo-swisssnowboard.png", alt: "Swiss Snowboard", href: "https://www.swiss-ski.ch/snowboard/" },
    { src: "/assets/logo-spitzensport-schweizer-armee.png", alt: "Spitzensport Schweizer Armee", href: "https://sinafrei.ch/spitzensport-schweizer-armee/", footerLabel: "Spitzensport Schweizer Armee" }
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 overflow-hidden border-t border-white/10 bg-[#030014]/45 py-[0.4rem]">
      <div className="footer-track flex w-max whitespace-nowrap">
        {[0, 1].map((row) => (
          <ul key={row} className="flex items-center gap-8 px-[1.2rem] md:gap-[2.8rem] md:px-[1.6rem]">
            {sponsors.map((sponsor) => (
              <li key={`${row}-${sponsor.alt}`} className="flex items-center justify-center">
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sponsor.alt} website`}
                  className="pointer-events-auto"
                >
                  {sponsor.footerLabel ? (
                    <span className="flex items-center gap-2 opacity-40 grayscale contrast-125 transition hover:opacity-80">
                      <span className="block h-4 w-4 overflow-hidden md:h-[1.4rem] md:w-[1.4rem]">
                        <img src={sponsor.src} alt="" className="h-full w-auto max-w-none object-contain object-left" />
                      </span>
                      <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.06em] text-white md:text-[10px]">
                        {sponsor.footerLabel}
                      </span>
                    </span>
                  ) : (
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      className="h-4 w-auto max-w-[112px] object-contain opacity-40 grayscale contrast-125 transition hover:opacity-80 md:h-[1.4rem] md:max-w-[152px]"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
