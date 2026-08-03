"use client";

export function SignIn({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bevel-out w-[560px] shadow-2xl">
        <div className="titlebar px-1.5 py-1">Veriscribe EDC 9.2 — Sign in</div>
        <div className="bevel-in m-0.5 p-6">
          <p className="-mx-6 -mt-6 mb-6 flex items-start gap-2 border-b border-neutral-400 bg-amber-100/70 px-3 py-2 text-[11px] leading-relaxed text-neutral-800">
            <span aria-hidden="true" className="text-[13px] leading-none">
              ⚠
            </span>
            <span>
              This is a validated system. Entries made under your credentials are attributable to
              you and retained permanently in the audit trail.
            </span>
          </p>
          <p className="font-mono text-[10px] tracking-widest text-neutral-600">
            MERIDIAN BIOTHERAPEUTICS · PROTOCOL 20210143 · ROCKET-HORIZON
          </p>
          <h1 className="mt-2 text-2xl font-normal">Site 1047 · Coordinator Login</h1>
          <p className="mt-4 max-w-[60ch] leading-relaxed">
            A phase 3 study of rocatinlimab (MER 451) in moderate-to-severe atopic dermatitis
          </p>
          <dl className="mt-6 grid grid-cols-[80px_1fr] gap-2 items-center">
            <dt>User</dt>
            <dd className="bevel-in px-2 py-1">RAGHUNATHAN, P. (CRC)</dd>
            <dt>Password</dt>
            <dd className="bevel-in px-2 py-1">••••••••••••</dd>
          </dl>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-neutral-600">
              4 DAYS · 19 SITUATIONS · RANDOMIZATION CLOSES 12-JAN-2024
            </span>
            <button type="button" className="bevel-out px-6 py-1.5" onClick={onSignIn}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
