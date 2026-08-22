const socialImpact = [
  "$4.0M Earned Media Value",
  "Ranked #2 globally during the Olympic Games",
  "48k Instagram",
  "98k TikTok",
  "75+ million Olympic views",
  "“Tiramisu Man” viral Olympic story",
  "Audience far beyond core snowboard fans"
];

const trustedPartners = [
  { name: "Zalando", logo: "/assets/partners/zalando.svg", href: "https://www.zalando.ch/" },
  { name: "Migros", logo: "/assets/partners/migros.png", href: "https://www.migros.ch/" },
  { name: "EF Education First", logo: "/assets/partners/ef.png", href: "https://www.efswiss.ch/" },
  { name: "Mentos", logo: "/assets/partners/mentos.svg", href: "https://www.mentos.ch/" },
  { name: "Stiftung Integral", logo: "/assets/partners/stiftung-integral.png", href: "https://integral.swiss/" },
  { name: "Betty Bossi", logo: "/assets/partners/betty-bossi.jpg", href: "https://www.bettybossi.ch/" },
  { name: "Sunrise", logo: "/assets/partners/sunrise.svg", href: "http://www.sunrise.ch" },
  { name: "WPP Media", logo: "/assets/partners/wpp-media.png", href: "https://www.wppmedia.com/" },
  { name: "Insta360", logo: "/assets/partners/insta360.png", href: "https://www.insta360.com/de/" },
  { name: "Sensolar", logo: "/assets/partners/sensolar.png", href: "https://sensolar.ch/" },
  { name: "The Snow League", logo: "/assets/partners/snow-league.svg", href: "https://thesnowleague.com/", preserveLightLogo: true },
  { name: "Sony", logo: "https://www.google.com/s2/favicons?sz=128&domain_url=www.sony.com", href: "https://www.sony.com/en/", textLogo: true },
  { name: "Netzwerk Sport", logo: "https://www.google.com/s2/favicons?sz=128&domain_url=netzwerksport.ch", href: "https://netzwerksport.ch/", preserveLightLogo: true },
  { name: "Bruno's", logo: "https://www.google.com/s2/favicons?sz=128&domain_url=brunos.ch", href: "http://brunos.ch/", preserveLightLogo: true, largeLogo: true },
  { name: "ESN", logo: "https://www.google.com/s2/favicons?sz=128&domain_url=www.esn.com", href: "https://www.esn.com", preserveLightLogo: true, largeLogo: true },
  {
    name: "Blutstammzellenspende Schweizerisches Rotes Kreuz",
    logo: "/assets/partners/blutspende-srk.svg",
    href: "https://www.blutstammzellenspende.ch/"
  }
];

export function SocialMediaPage() {
  return (
    <main className="relative z-20 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="w-full max-w-[1400px] rounded-md border border-white/10 bg-[#171a28]/72 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-7">
        <div className="grid gap-5 md:grid-cols-[500px_1fr] md:gap-8 lg:grid-cols-[620px_1fr]">
          <figure className="min-h-[480px] overflow-hidden rounded-md border border-white/10 bg-black/45 p-2 md:min-h-[640px] lg:min-h-[760px]">
            <img src="/assets/EMV.jpg" alt="Social media portrait of snowboard athlete Jonas Hasler" width="1400" height="1897" className="h-full w-full object-contain object-center" />
          </figure>

          <div>
            <h1 className="font-display text-[2.4rem] uppercase leading-[0.92] text-white sm:text-[3.2rem] md:text-[4rem]">Social Media</h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.09em] text-white/70 md:text-sm">Instagram @j0.nash / TikTok @jonas.hasler</p>

            <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-white/85 md:text-base">
              Daily updates, competition moments and training highlights. Explore the reach and impact Jonas creates across social media and beyond the snowboard community.
            </p>

            <section className="mt-6 rounded-md border border-white/15 bg-[#2d2d33]/80 p-5" aria-labelledby="social-impact-title">
              <h2 id="social-impact-title" className="font-display text-3xl uppercase tracking-[0.04em] text-[#CCFF00]">
                Social Impact
              </h2>
              <ul className="mt-4 grid gap-3">
                {socialImpact.map((item, index) => (
                  <li key={item} className={`flex gap-3 text-sm leading-relaxed text-white/85 md:text-base ${index < 2 ? "font-black [-webkit-text-stroke:0.5px_currentColor]" : ""}`}>
                    <span className="text-[#CCFF00]" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>

        <section className="mt-8 border-t border-white/15 pt-7" aria-labelledby="trusted-partners-title">
          <h2 id="trusted-partners-title" className="font-display text-3xl uppercase tracking-[0.04em] text-[#CCFF00]">
            Trusted Partners
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustedPartners.map((partner) => (
              <li key={partner.name} className="flex min-h-20 items-center justify-center">
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${partner.name} website`}
                  className="flex h-20 w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CCFF00]"
                >
                  {partner.textLogo ? (
                    <span className="font-display text-3xl font-black uppercase tracking-[-0.03em] text-white/45 transition hover:text-white/80">
                      {partner.name}
                    </span>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} partner logo for snowboard athlete Jonas Hasler`}
                      className={`object-contain opacity-40 grayscale contrast-125 mix-blend-screen transition hover:opacity-80 ${partner.largeLogo ? "max-h-[52px] max-w-[170px]" : "max-h-[29px] max-w-[108px]"} ${partner.preserveLightLogo ? "" : "invert"}`}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
