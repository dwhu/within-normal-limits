"use client";

export function SignIn({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bevel-out w-[560px] shadow-2xl">
        <div className="titlebar px-1.5 py-1">Veriscribe EDC 9.2 — Sign in</div>
        <div className="bevel-in m-0.5 p-6">
          <p className="font-mono text-[10px] tracking-widest text-neutral-600">
            AMGEN INC. · PROTOCOL 20210143 · ROCKET-HORIZON
          </p>
          <h1 className="mt-2 text-2xl font-normal">Site 1047 · Coordinator</h1>
          <p className="mt-4 max-w-[46ch] leading-relaxed">
            An eight-hour day, in half-hour blocks. A queue that does not care. An assistant who
            sounds exactly the same whether she is right or wrong.
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
