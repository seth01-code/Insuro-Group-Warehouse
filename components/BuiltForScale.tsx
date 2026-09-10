import { Boxes, Building2, Cpu } from "lucide-react";

const pillars = [
  "Flexible space allocation without CAPEX",
  "Real-time inventory visibility",
  "Structured SOP execution",
  "Scalable infrastructure",
  "Usage-based pricing",
  "SLA-driven operations",
  "Data-backed performance tracking",
];

const infrastructure = [
  "Fulfilment centres, pan-Lagos",
  "Secure facilities, controlled access",
  "Racked storage systems",
  "Structured receiving & dispatch zones",
  "Dedicated operational teams",
  "Daily processing capacity, scalable to demand",
];

const tech = [
  "Real-time inventory dashboard",
  "SKU-level tracking",
  "Sub-account capability",
  "Pick–pack–ship visibility",
  "Cycle count monitoring",
  "GRN automation",
  "Performance reporting",
  "Audit trail transparency",
];

function Column({
  icon: Icon,
  eyebrow,
  title,
  items,
}: {
  icon: typeof Boxes;
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-14px_rgba(47,111,237,0.3)]">
      <span className="icon-chip icon-chip-blue">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <p className="mt-4 text-xs font-semibold tracking-wide text-blue">
        {eyebrow}
      </p>
      <h3 className="mt-1 font-display text-xl font-bold text-ink">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-t border-line pt-3 text-sm leading-relaxed text-ink/70 first:border-t-0 first:pt-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BuiltForScale() {
  return (
    <section className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink">
            Smart fulfilment, built for institutional clients
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            You don&apos;t lose visibility when you outsource to Insuro. You
            gain it.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Column icon={Boxes} eyebrow="Smart fulfilment" title="What you get" items={pillars} />
          <Column
            icon={Building2}
            eyebrow="Our infrastructure"
            title="Where it happens"
            items={infrastructure}
          />
          <Column
            icon={Cpu}
            eyebrow="Our technology advantage"
            title="Proprietary order management system"
            items={tech}
          />
        </div>
      </div>
    </section>
  );
}
