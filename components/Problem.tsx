import {
  Building2,
  EyeOff,
  ScanLine,
  Clock,
  Zap,
  Wallet,
  ActivitySquare,
  Rocket,
  Layers,
  Users,
  TrendingUp,
  Boxes,
} from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const problems = [
  { icon: Building2, text: "Rising warehouse rent and fixed overhead" },
  { icon: EyeOff, text: "Poor inventory visibility" },
  { icon: ScanLine, text: "Stock inaccuracies and reconciliation gaps" },
  { icon: Clock, text: "Slow order turnaround" },
  { icon: Zap, text: "E-commerce SLA pressure" },
  { icon: Wallet, text: "Working capital tied up in inefficiencies" },
  { icon: ActivitySquare, text: "Lack of real-time operational data" },
];

const drivers = [
  { icon: Rocket, text: "Rapid e-commerce expansion" },
  { icon: Layers, text: "Omnichannel retail growth" },
  { icon: Users, text: "Same-day customer expectations" },
  { icon: TrendingUp, text: "Increased supply chain volatility" },
  { icon: Building2, text: "Rising cost of logistics & real estate" },
  { icon: Boxes, text: "Demand for scalable infrastructure" },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-white text-navy">
      <NetworkBackground className="opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">
              The executive problem
            </h2>
            <ul className="mt-6 space-y-2">
              {problems.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 border-b border-white/10 py-3"
                >
                  <span className="icon-chip icon-chip-dark">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-navy/80">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">Market reality</h2>
            <ul className="mt-6 space-y-2">
              {drivers.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 border-b border-white/10 py-3"
                >
                  <span className="icon-chip icon-chip-dark">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-navy/80">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-xl font-semibold gradient-text">
              Businesses that scale must rethink storage and fulfilment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
