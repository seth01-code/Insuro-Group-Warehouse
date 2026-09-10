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
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-blue/[0.06] blur-[110px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-ink">
          Our value proposition
        </h2>
        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left">
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
