import {
  Shuffle,
  EyeOff,
  Building2,
  AlertCircle,
  ShieldAlert,
  Waves,
} from "lucide-react";

const reasons = [
  {
    icon: Shuffle,
    title: "Fragmented operations",
    body: "Businesses struggle with fragmented storage and fulfilment across multiple providers.",
  },
  {
    icon: EyeOff,
    title: "Poor visibility & speed",
    body: "Lack of real-time inventory visibility leads to slow turnaround times and fulfilment errors.",
  },
  {
    icon: Building2,
    title: "High CapEx barrier",
    body: "The high cost of building and maintaining leases, utilities, labour, equipment, and taxes.",
  },
  {
    icon: AlertCircle,
    title: "High error rates",
    body: "Manual inventory management compounds mistakes as volume grows.",
  },
  {
    icon: ShieldAlert,
    title: "Pilfering",
    body: "Uncontrolled access and weak audit trails put stock at risk.",
  },
  {
    icon: Waves,
    title: "Inconsistency",
    body: "Processes are often inconsistent and fail to adapt quickly to volume changes.",
  },
];

export default function WhyFail() {
  return (
    <section className="bg-white border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-md font-display text-3xl font-bold text-ink">
          Why businesses fail to scale
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-line p-6 transition-colors hover:border-blue/40"
            >
              <span className="icon-chip icon-chip-blue">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
