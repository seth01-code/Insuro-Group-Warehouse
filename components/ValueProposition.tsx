const rows = [
  {
    pillar: "People",
    means: "Trained, emotionally intelligent operations team.",
    value: "Professionalism, reliability, accountability.",
  },
  {
    pillar: "Service",
    means: "Flexible pricing, defined SLAs and SOPs, swift turnaround.",
    value: "Cost effectiveness, efficiency, consistency.",
  },
  {
    pillar: "Technology",
    means: "Proprietary OMS with live dashboard and reports.",
    value: "Efficiency, visibility, and control.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 h-80 w-[320px] rounded-full bg-blue/6 blur-[110px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
          Our value proposition
        </h2>

        {/* Mobile (<sm): stacked cards - a 3-column table has no room to
            breathe under ~640px, so each row becomes its own card instead
            of forcing a horizontal scroll. */}
        <div className="mt-8 space-y-4 sm:hidden">
          {rows.map((r) => (
            <div key={r.pillar} className="rounded-2xl border border-line p-5">
              <span className="font-display text-lg font-bold text-blue">
                {r.pillar}
              </span>
              <dl className="mt-3 space-y-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                    What it means
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/70">
                    {r.means}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                    Value to client
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/70">
                    {r.value}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* sm and up: original table */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-line sm:block">
          <table className="w-full min-w-160 border-collapse text-left">
            <thead>
              <tr className="bg-paper-dim text-sm text-ink/50">
                <th className="w-40 px-6 py-4 font-semibold">Core pillar</th>
                <th className="px-6 py-4 font-semibold">What it means</th>
                <th className="px-6 py-4 font-semibold">Value to client</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.pillar}
                  className={i < rows.length - 1 ? "border-b border-line" : ""}
                >
                  <td className="px-6 py-5 align-top">
                    <span className="font-display text-lg font-bold text-blue">
                      {r.pillar}
                    </span>
                  </td>
                  <td className="px-6 py-5 align-top text-sm leading-relaxed text-ink/70">
                    {r.means}
                  </td>
                  <td className="px-6 py-5 align-top text-sm leading-relaxed text-ink/70">
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
