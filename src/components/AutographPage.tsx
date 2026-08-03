export function AutographPage() {
  return (
    <main className="relative z-20 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 font-sans md:px-8 md:pt-28">
      <section className="w-full max-w-[900px] rounded-md border border-white/10 bg-[#171a28]/72 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-7">

        <div className="grid gap-8 md:grid-cols-[1fr_300px] md:gap-10">

          {/* ── Left column: Content ── */}
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">
              Request
            </p>

            <h1 className="font-display text-[2.5rem] uppercase leading-[0.92] text-white sm:text-[3.25rem] md:text-[4rem]">
              Autograph Card?
            </h1>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                I'd love to send you a signed autograph card! Just follow the simple steps below.
              </p>
            </div>

            {/* ── Instructions ── */}
            <div className="mt-8 space-y-5">
              <div>
                <h2 className="mb-2 font-display text-lg uppercase tracking-[0.04em] text-[#CCFF00]">
                  How it works
                </h2>
                <ol className="space-y-3 font-sans text-[0.95rem] leading-relaxed text-white/65">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-[11px] font-bold text-black">1</span>
                    <span>Get a stamped envelope and send it to the address below</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-[11px] font-bold text-black">2</span>
                    <span>Include a note with your name if you'd like a personalized card</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-[11px] font-bold text-black">3</span>
                    <span>I'll sign it and mail it straight back to you</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* ── Right column: Address box ── */}
          <div className="rounded-md border border-white/15 bg-white/[0.03] p-5 md:p-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#CCFF00]">
              Mail to
            </p>

            <address className="font-sans text-[0.9rem] not-italic leading-relaxed text-white/85">
              <span className="block font-semibold text-white">Jonas Hasler</span>
              <span className="block text-white/70">Autograph Card</span>
              <span className="mt-2 block border-t border-white/10 pt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
                Postfach 205<br />
                7032 Laax<br />
                Switzerland
              </span>
            </address>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/50">
                💌 Include a stamped return envelope
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
