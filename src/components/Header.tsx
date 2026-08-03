import { Instagram, Music2 } from "lucide-react";

type HeaderProps = {
  onOpenDrawer: () => void;
  onNavigateHome: () => void;
};

export function Header({ onOpenDrawer, onNavigateHome }: HeaderProps) {
  return (
    <header className="pointer-events-auto fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#030014]/60 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between px-4 md:px-8">
        <button
          type="button"
          onClick={onNavigateHome}
          className="group inline-flex items-center gap-2 whitespace-nowrap"
          aria-label="Go to home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#CCFF00] font-display text-[10px] tracking-[0.04em] text-[#0A071A] transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10 sm:text-[13px]">
            JH
          </span>
          <span className="font-display text-[0.9rem] tracking-[0.14em] text-white sm:text-xl sm:tracking-[0.2em] md:text-2xl">JONAS HASLER</span>
        </button>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Social Media">
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white/80 transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
            href="https://www.instagram.com/j0.nash"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @j0.nash"
            title="Instagram @j0.nash"
          >
            <Instagram size={18} />
          </a>
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white/80 transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
            href="https://www.tiktok.com/@jonas.hasler"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok @jonas.hasler"
            title="TikTok @jonas.hasler"
          >
            <Music2 size={18} />
          </a>
        </nav>

        <button
          type="button"
          onClick={onOpenDrawer}
          className="rounded-full border border-white/40 px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
        >
          MENU
        </button>
      </div>
    </header>
  );
}
