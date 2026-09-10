import { Target, CheckCircle2, Clock3 } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import warehouseImage from "@/assets/images/warehouse.png";
import Image from "next/image";

const tags = ["Warehousing", "Fulfilment", "Distribution", "Inventory Tech"];

const stats = [
  { icon: CheckCircle2, value: "99.5%", label: "Inventory accuracy" },
  { icon: Target, value: "99%", label: "Order accuracy" },
  { icon: Clock3, value: "OTIF", label: "On time, in full" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <NetworkBackground className="opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-blue/25 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="grid items-center gap-20 md:grid-cols-2 md:gap-24">
          {/* Left: copy */}
          <div>
            {/* <span className="pill-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-light" />
              Warehousing &amp; fulfilment for institutional clients
            </span> */}

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              Fulfilment made easy.
              <br />
              <span className="gradient-text">Built for scale.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              You focus on growth. We manage the complexity of storage,
              inventory, and order fulfilment -with real-time visibility, not
              less of it.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a href="#request" className="btn-primary">
                Start your request
              </a>
              <a href="#services" className="btn-secondary">
                See what we do
              </a>
            </div>

            <div className="mt-20 flex flex-wrap gap-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-20 grid max-w-xl grid-cols-3 gap-10 border-t border-white/10 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <s.icon
                    size={16}
                    strokeWidth={1.75}
                    className="text-blue-light"
                  />
                  <div className="mt-3 font-display text-3xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual panel */}
          <div className="relative hidden md:block md:pl-4">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              {/* Swap this img for your composited warehousing shot */}
              <Image
                src={warehouseImage}
                alt="Warehouse fulfilment operations"
                width={500}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/0 to-navy/10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-navy/80 px-6 py-5 backdrop-blur-md shadow-xl">
              <CheckCircle2
                size={20}
                strokeWidth={1.75}
                className="text-blue-light"
              />
              <div>
                <div className="font-display text-lg font-bold text-white">
                  99.5%
                </div>
                <div className="text-xs text-white/50">Inventory accuracy</div>
              </div>
            </div>

            {/* Floating secondary card */}
            <div className="absolute -top-8 -right-6 rounded-2xl border border-white/10 bg-navy/80 px-5 py-4 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2.5 text-xs text-white/70">
                <Clock3
                  size={14}
                  strokeWidth={1.75}
                  className="text-blue-light"
                />
                OTIF fulfilment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
