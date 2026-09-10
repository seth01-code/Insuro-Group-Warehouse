import {
  PackageCheck,
  Warehouse,
  ClipboardList,
  Sparkles,
  Truck,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: PackageCheck,
    name: "Smart fulfilment",
    body: "Order processing by SLA, barcoded scanning for over 98% accuracy, packaging aligned with brand standards.",
  },
  {
    icon: Warehouse,
    name: "Flexible storage",
    body: "Pay-as-you-use space across rack, floor, or pallet -safe, insured, and accessible facilities.",
  },
  {
    icon: ClipboardList,
    name: "Inventory management",
    body: "Real-time tracking, cycle counts, SKU variance reporting, and client visibility dashboards.",
  },
  {
    icon: Sparkles,
    name: "Value-added services",
    body: "Branded packaging, reverse logistics, and analytics subscription.",
  },
  {
    icon: Truck,
    name: "Product distribution",
    body: "Nationwide 3PL partnerships across bike, van, and truck options, with SLA-based delivery performance.",
  },
  {
    icon: GraduationCap,
    name: "Training & consultancy",
    body: "Specialised training and consultancy programs that develop people, systems, and processes aligned with global best practices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-ink">Services</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, body }) => (
            <div
              key={name}
              className="rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-14px_rgba(47,111,237,0.35)]"
            >
              <span className="icon-chip icon-chip-blue">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
