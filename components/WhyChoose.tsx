import { CheckCircle2, Gauge } from "lucide-react";

const reasons = [
  "Convenience",
  "Enhanced operational efficiency",
  "Cost effective solution",
  "Seamless integration with existing systems",
  "Flexible scaling options",
  "Trust -proven track record with leading brands in the Nigerian market",
];

const kpis = [
  "OTIF (on time, in full)",
  "≥99.5% inventory accuracy",
  "≥99% order accuracy",
  "Structured inbound SLAs",
  "Same-day e-commerce processing, cut-off dependent",
  "Monthly performance reviews, full transparency",
];

export default function WhyChoose() {
  return (
    <section className="bg-white border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              Why clients choose us
            </h2>
            <p className="mt-2 text-sm text-ink/45">Our competitive edge</p>
            <ul className="mt-8 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.75}
                    className="shrink-0 text-blue"
                  />
                  <span className="text-sm leading-relaxed text-ink/70">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h2 className="font-display text-2xl font-bold">
              Operational performance
            </h2>
            <p className="mt-2 text-sm text-white/50">
              We operate on measurable KPIs
            </p>
            <ul className="mt-6 space-y-3">
              {kpis.map((k) => (
                <li
                  key={k}
                  className="flex items-center gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                >
                  <Gauge
                    size={18}
                    strokeWidth={1.75}
                    className="shrink-0 text-blue-light"
                  />
                  <span className="text-sm leading-relaxed text-white/75">
                    {k}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
