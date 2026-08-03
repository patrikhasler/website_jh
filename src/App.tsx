import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FooterMarquee } from "./components/FooterMarquee";
import { Header } from "./components/Header";
import { AboutPage } from "./components/AboutPage";
import { SocialMediaPage } from "./components/SocialMediaPage";
import { MediaPage } from "./components/MediaPage";
import { GalleryPage } from "./components/GalleryPage";
import { CareerPage } from "./components/CareerPage";
import { AutographPage } from "./components/AutographPage";
import { WhyPage } from "./components/WhyPage";
import { InfoDrawer } from "./components/InfoDrawer";
import { ParticleBackground } from "./components/ParticleBackground";
import { ScrambleText } from "./components/ScrambleText";

const WORDS = ["AMPLITUDE", "STYLE", "CREATIVITY", "PRECISION", "PROGRESSION"];

const BIO =
  "I'm Jonas Hasler — professional snowboarder, olympian, national team member and halfpipe, slopestyle and big air rider. I craft bold runs that are intuitive, impactful, and built to stand out.";

export const SITE_ORIGIN = "https://jonashasler.ch";

export type SeoData = {
  title: string;
  description: string;
  canonicalPath: string;
};

export const SEO_BY_PATH: Record<string, SeoData> = {
  "/": {
    title: "Jonas Hasler | Official Website & Swiss Snowboard Athlete",
    description: "Offizielle Website von Jonas Hasler. News, Wettbewerbe, Halfpipe & Slopestyle Highlights sowie Sponsoring-Informationen.",
    canonicalPath: "/"
  },
  "/about": {
    title: "About Jonas Hasler | Professional Snowboarder",
    description: "Learn more about Jonas Hasler, Swiss national team member, olympian and freestyle snowboard athlete.",
    canonicalPath: "/about"
  },
  "/social-media": {
    title: "Jonas Hasler Social Media | Instagram & TikTok",
    description: "Follow Jonas Hasler on social media for updates, competition moments and behind-the-scenes freestyle snowboard content.",
    canonicalPath: "/social-media"
  },
  "/media": {
    title: "Media & Press | Jonas Hasler",
    description: "Explore press features, interviews, videos and official channels from professional snowboarder Jonas Hasler.",
    canonicalPath: "/media"
  },
  "/gallery": {
    title: "Gallery | Jonas Hasler",
    description: "Gallery of selected moments from Jonas Hasler's halfpipe, slopestyle and big air sessions.",
    canonicalPath: "/gallery"
  },
  "/career": {
    title: "Career | Jonas Hasler",
    description: "Career, achievements and timeline of Swiss snowboarder Jonas Hasler – Olympian, national team member and freestyle athlete.",
    canonicalPath: "/career"
  },
  "/autograph": {
    title: "Autograph Card | Jonas Hasler",
    description: "Request a free autograph card from Jonas Hasler – just send a stamped return envelope to Postfach 205, 7032 Laax, Switzerland.",
    canonicalPath: "/autograph"
  },
  "/why": {
    title: "Why Jonas Is Different | Jonas Hasler",
    description: "Discover what sets Jonas Hasler apart through style, progression, stoke, authentic connection and elite performance across snowboard disciplines.",
    canonicalPath: "/why"
  }
};

export const getSeoForPath = (path: string) => SEO_BY_PATH[path] ?? SEO_BY_PATH["/"];

function AnimatedBio({ remountKey }: { remountKey: number }) {
  const chars = useMemo(() => BIO.split(""), []);

  return (
    <motion.p
      key={remountKey}
      className="mt-5 max-w-[820px] text-center font-sans text-sm leading-relaxed text-white/80 md:text-lg"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05
          }
        }
      }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.14, delay: index * 0.004 } }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

type AppProps = {
  initialPath?: string;
};

function App({ initialPath }: AppProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [bioKey, setBioKey] = useState(0);
  const [path, setPath] = useState(() => initialPath ?? window.location.pathname);

  const isAboutPage = path === "/about";
  const isSocialMediaPage = path === "/social-media";
  const isMediaPage = path === "/media";
  const isGalleryPage = path === "/gallery";
  const isCareerPage = path === "/career";
  const isAutographPage = path === "/autograph";
  const isWhyPage = path === "/why";

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % WORDS.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBioKey((current) => current + 1);
    }, 7000);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigateToAbout = () => {
    if (window.location.pathname !== "/about") {
      window.history.pushState({}, "", "/about");
      setPath("/about");
    }
  };

  const navigateToHome = () => {
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      setPath("/");
    }
  };

  const navigateToSocialMedia = () => {
    if (window.location.pathname !== "/social-media") {
      window.history.pushState({}, "", "/social-media");
      setPath("/social-media");
    }
  };

  const navigateToMedia = () => {
    if (window.location.pathname !== "/media") {
      window.history.pushState({}, "", "/media");
      setPath("/media");
    }
  };

  const navigateToGallery = () => {
    if (window.location.pathname !== "/gallery") {
      window.history.pushState({}, "", "/gallery");
      setPath("/gallery");
    }
  };

  const navigateToCareer = () => {
    if (window.location.pathname !== "/career") {
      window.history.pushState({}, "", "/career");
      setPath("/career");
    }
  };

  const navigateToAutograph = () => {
    if (window.location.pathname !== "/autograph") {
      window.history.pushState({}, "", "/autograph");
      setPath("/autograph");
    }
  };

  const navigateToWhy = () => {
    if (window.location.pathname !== "/why") {
      window.history.pushState({}, "", "/why");
      setPath("/why");
    }
  };

  useEffect(() => {
    const seo = getSeoForPath(path);
    document.title = seo.title;

    const setMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:url"]', "property", "og:url", `${SITE_ORIGIN}${seo.canonicalPath}`);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_ORIGIN}${seo.canonicalPath}`);
  }, [path]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#030014] text-white">
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 z-[15] bg-[#02000f]/65" aria-hidden="true" />

      <Header onOpenDrawer={() => setDrawerOpen(true)} onNavigateHome={navigateToHome} />

      {isAboutPage ? (
        <AboutPage />
      ) : isSocialMediaPage ? (
        <SocialMediaPage />
      ) : isMediaPage ? (
        <MediaPage />
      ) : isGalleryPage ? (
        <GalleryPage />
      ) : isCareerPage ? (
        <CareerPage />
      ) : isAutographPage ? (
        <AutographPage />
      ) : isWhyPage ? (
        <WhyPage />
      ) : (
        <>
          <main className="relative z-20 flex min-h-screen flex-1 items-center justify-center px-4 pb-32 pt-24 md:px-8 md:pt-28">
            <div className="relative z-20 flex w-full max-w-[1600px] flex-col items-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:text-xs">Halfpipe / Slopestyle / Big Air</p>

              <h1 className="mt-4 text-center">
                <span className="outline-text block font-display text-[17px] uppercase leading-[0.92] tracking-[0.06em] sm:text-[24px] md:text-[40px] lg:text-[56px] xl:text-[70px]">
                  Built For
                </span>
                <span className="mt-0.5 block font-display text-[50px] uppercase leading-[0.86] tracking-[0.04em] text-[#CCFF00] sm:mt-1 sm:text-[78px] md:mt-2 md:text-[120px] lg:text-[150px] xl:text-[180px]">
                  <ScrambleText text={WORDS[wordIndex]} />
                </span>
              </h1>

              <AnimatedBio remountKey={bioKey} />
            </div>
          </main>

          <div className="pointer-events-none absolute inset-0 z-10">
            <picture className="block h-full w-full">
              <source srcSet="/assets/14-hero.avif" type="image/avif" />
              <img
                src="/assets/14.jpg"
                alt="Jonas Hasler snowboarding in a freestyle action sequence"
                aria-hidden="true"
                width="2400"
                height="1600"
                className="hero-bg-base h-full w-full brightness-[0.55] grayscale contrast-125"
              />
            </picture>
            <picture className="pointer-events-auto absolute inset-0 block h-full w-full">
              <source srcSet="/assets/14-hero.avif" type="image/avif" />
              <img
                src="/assets/14.jpg"
                alt="Jonas Hasler performing a freestyle snowboard trick"
                width="2400"
                height="1600"
                fetchPriority="high"
                className="hero-bg-animated hero-bg-foreground h-full w-full brightness-95 grayscale contrast-125"
              />
            </picture>
          </div>
        </>
      )}

      <FooterMarquee />

      <InfoDrawer
        open={drawerOpen}
        currentPath={path}
        onClose={() => setDrawerOpen(false)}
        onNavigateAbout={navigateToAbout}
        onNavigateHome={navigateToHome}
        onNavigateSocialMedia={navigateToSocialMedia}
        onNavigateMedia={navigateToMedia}
        onNavigateGallery={navigateToGallery}
        onNavigateCareer={navigateToCareer}
        onNavigateAutograph={navigateToAutograph}
        onNavigateWhy={navigateToWhy}
      />
    </div>
  );
}

export default App;
