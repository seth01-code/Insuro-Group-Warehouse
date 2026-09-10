const steps = [
  {
    n: "01",
    title: "Needs assessment",
    body: "Detailed analysis of your current volumes, SKUs, and distribution requirements.",
  },
  {
    n: "02",
    title: "Space allocation & zone setup",
    body: "Dedicated space is allocated and optimised for your inventory flow.",
  },
  {
    n: "03",
    title: "OMS integration & access granted",
    body: "We integrate systems and grant you real-time access to the OMS dashboard.",
  },
  {
    n: "04",
    title: "Operations onboarding",
    body: "Teams are trained, and live operations -pick, pack, dispatch -commence under strict SLAs.",
  },
  {
    n: "05",
    title: "Monthly reporting & review",
    body: "Continuous performance review and strategic planning.",
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-md font-display text-3xl font-bold text-ink">
          Partnership model, and how it works
        </h2>
        <div className="mt-14 space-y-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="grid items-start gap-2 rounded-2xl border border-line bg-white p-6 sm:grid-cols-[60px_1fr_2fr] sm:items-center sm:gap-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 font-display text-sm font-bold text-blue">
                {s.n}
              </span>
              <h3 className="font-display font-bold text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
