import NetworkBackground from "./NetworkBackground";

const systems = [
  "Warehousing",
  "Logistics",
  "Credit facilitation",
  "Insurance",
];

export default function GroupBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <NetworkBackground className="opacity-30" />
      <div
        aria-hidden
        className="absolute -bottom-32 right-0 h-105 w-105 rounded-full bg-blue/20 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <span className="pill-badge">Insuro Africa Group</span>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-snug md:text-4xl">
          A business may need storage today, logistics tomorrow, financing for
          its next transaction, and protection for the goods in between.
        </h2>
        <p className="mt-5 max-w-xl text-white/70">
          Insuro Africa is building the systems that bring these needs together
          -one ecosystem, built around the businesses moving Africa forward.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {systems.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/15 bg-white/4 px-4 py-1.5 text-sm font-medium text-white/85"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-10 font-display text-xl font-semibold gradient-text">
          Building the systems. Empowering Africa.
        </p>
      </div>
    </section>
  );
}
