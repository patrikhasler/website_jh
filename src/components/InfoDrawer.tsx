import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { FormEvent, useState } from "react";

type InfoDrawerProps = {
  open: boolean;
  currentPath: string;
  onClose: () => void;
  onNavigateAbout?: () => void;
  onNavigateHome?: () => void;
  onNavigateSocialMedia?: () => void;
  onNavigateMedia?: () => void;
  onNavigateGallery?: () => void;
  onNavigateCareer?: () => void;
  onNavigateAutograph?: () => void;
  onNavigateWhy?: () => void;
};

type DrawerView = "menu" | "contact";
const CONTACT_EMAIL = "management@jonashasler.ch";
const MENU_PATHS: Record<string, string> = {
  HOME: "/",
  ABOUT: "/about",
  "SOCIAL MEDIA": "/social-media",
  CAREER: "/career",
  "WHY ME": "/why",
  MEDIA: "/media",
  GALLARY: "/gallery",
  "AUTOGRAPH CARD": "/autograph"
};

export function InfoDrawer({ open, currentPath, onClose, onNavigateAbout, onNavigateHome, onNavigateSocialMedia, onNavigateMedia, onNavigateGallery, onNavigateCareer, onNavigateAutograph, onNavigateWhy }: InfoDrawerProps) {
  const [view, setView] = useState<DrawerView>("menu");

  const openContact = () => setView("contact");

  const backToMenu = () => setView("menu");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Get in Touch Inquiry${name ? ` - ${name}` : ""}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Project Type: ${projectType || "-"}`,
        "",
        "Message:",
        message || "-"
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 bg-black/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-full border-l border-white/10 bg-[#171a28]/92 sm:max-w-xl md:max-w-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 210, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-label="Info drawer"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-[#121523]/92 px-5 py-4 backdrop-blur-md">
              {view === "menu" ? (
                <button
                  type="button"
                  onClick={backToMenu}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-white/75"
                >
                  <Menu size={16} /> MENU
                </button>
              ) : (
                <button
                  type="button"
                  onClick={backToMenu}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-white/75 hover:text-white"
                >
                  <ArrowLeft size={16} /> BACK
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/30 p-2 text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
                aria-label="Close drawer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-[calc(100vh-69px)] overflow-y-auto px-6 pb-10 pt-6 md:px-8">
              {view === "menu" ? (
                <div className="space-y-3">
                  {[
                    "HOME",
                    "ABOUT",
                    "SOCIAL MEDIA",
                    "CAREER",
                    "WHY ME",
                    "MEDIA",
                    "GALLARY",
                    "AUTOGRAPH CARD",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      aria-current={currentPath === MENU_PATHS[item] ? "page" : undefined}
                      onClick={() => {
                        if (item === "HOME") {
                          onNavigateHome?.();
                          onClose();
                        }

                        if (item === "ABOUT") {
                          onNavigateAbout?.();
                          onClose();
                        }

                        if (item === "SOCIAL MEDIA") {
                          onNavigateSocialMedia?.();
                          onClose();
                        }

                        if (item === "MEDIA") {
                          onNavigateMedia?.();
                          onClose();
                        }

                        if (item === "WHY ME") {
                          onNavigateWhy?.();
                          onClose();
                        }

                        if (item === "GALLARY") {
                          onNavigateGallery?.();
                          onClose();
                        }

                        if (item === "CAREER") {
                          onNavigateCareer?.();
                          onClose();
                        }

                        if (item === "AUTOGRAPH CARD") {
                          onNavigateAutograph?.();
                          onClose();
                        }
                      }}
                      className={`block w-full border-b border-white/15 py-4 text-left font-display text-4xl tracking-[0.04em] transition hover:text-[#CCFF00] ${currentPath === MENU_PATHS[item] ? "text-[#CCFF00]" : "text-white"}`}
                    >
                      {item}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={openContact}
                    className="block w-full border-b border-white/15 py-4 text-left font-display text-4xl tracking-[0.04em] text-white transition hover:text-[#CCFF00]"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <h2 className="font-display text-5xl tracking-[0.03em] text-white">Get In Touch</h2>
                  <p className="font-mono text-xs tracking-[0.08em] text-white/70">
                    Contact: <a className="underline decoration-white/30 underline-offset-4 hover:text-[#CCFF00]" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>

                  <label className="block">
                    <span className="mb-2 block font-mono text-xs tracking-[0.12em] text-white/70">NAME</span>
                    <input
                      name="name"
                      required
                      className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none transition placeholder:text-white/30 focus:border-[#CCFF00]"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-mono text-xs tracking-[0.12em] text-white/70">EMAIL</span>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none transition placeholder:text-white/30 focus:border-[#CCFF00]"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-mono text-xs tracking-[0.12em] text-white/70">PROJECT TYPE</span>
                    <select name="projectType" className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none transition focus:border-[#CCFF00]">
                      <option value="">Select project type</option>
                      <option className="bg-[#171a28]" value="campaign">Campaign collaboration</option>
                      <option className="bg-[#171a28]" value="sponsor">Sponsor activation</option>
                      <option className="bg-[#171a28]" value="editorial">Editorial production</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-mono text-xs tracking-[0.12em] text-white/70">MESSAGE</span>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full resize-y border-0 border-b border-white/40 bg-transparent py-2 text-white outline-none transition placeholder:text-white/30 focus:border-[#CCFF00]"
                      placeholder="Tell me about your project"
                    />
                  </label>

                  <button
                    type="submit"
                    className="rounded-none bg-[#CCFF00] px-5 py-3 font-mono text-xs font-semibold tracking-[0.16em] text-black"
                  >
                    SEND REQUEST
                  </button>
                </form>
              )}
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
