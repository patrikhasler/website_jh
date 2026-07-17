export function AutographPage() {
  return (
    <main className="relative z-20 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 md:px-8 md:pt-28">
      <div className="w-full max-w-xl">

        {/* ── Purple card ── */}
        <div className="rounded-2xl bg-[#7B3FE4] px-8 py-10 shadow-[0_30px_80px_rgba(123,63,228,0.45)] md:px-12 md:py-14">

          <h1 className="font-display text-[3rem] uppercase leading-[0.9] text-white sm:text-[4rem] md:text-[5rem]">
            Autograph card?
          </h1>

          <p className="mt-5 font-mono text-[12px] uppercase leading-relaxed tracking-[0.08em] text-white/90 md:text-[13px]">
            Just send a stamped return envelope to the address below,<br />
            I'd love to send you one back!
          </p>

          <address className="mt-8 border-t border-white/20 pt-6 font-sans text-[0.95rem] not-italic leading-relaxed text-white/85">
            Jonas Hasler<br />
            – Autograph card –<br />
            Postfach 205<br />
            7032 Laax<br />
            Switzerland
          </address>
        </div>

      </div>
    </main>
  );
}
