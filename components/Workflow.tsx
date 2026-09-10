import { Link2, PackageCheck, Truck } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const steps = [
  {
    icon: Link2,
    n: "01",
    title: "Connect",
    body: "Connect your store and send us your inventory.",
  },
  {
    icon: PackageCheck,
    n: "02",
    title: "Store",
    body: "Your inventory is categorised and securely stored.",
  },
  {
    icon: Truck,
    n: "03",
    title: "Ship",
    body: "Once a customer places an order, we pick, pack, and ship.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-navy text-white">
      <NetworkBackground className="opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold">Our workflow</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, n, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-blue-light/40"
            >
              <div className="flex items-center justify-between">
                <span className="icon-chip icon-chip-dark">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="font-display text-sm font-semibold text-white/40">
                  {n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
