const tiers = [
  {
    tier: "Tier 1",
    name: "Managed storage",
    desc: "Storage + tracking.",
    price: "Per sqm / month",
    featured: false,
  },
  {
    tier: "Tier 2",
    name: "Smart fulfilment",
    desc: "Storage + pick/pack + visibility.",
    price: "Per sqm / month + per order/item",
    featured: true,
  },
  {
    tier: "Tier 3",
    name: "Enterprise",
    desc: "Branded packaging + reverse fulfilment.",
    price: "Retainer + variable pricing",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-ink">
          Pricing framework
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className={`flex flex-col rounded-2xl p-8 ${
                t.featured
                  ? "border-2 border-blue bg-white shadow-[0_12px_40px_-14px_rgba(47,111,237,0.35)]"
                  : "border border-line bg-white"
              }`}
            >
              <span className="text-xs font-semibold tracking-wide text-blue">
                {t.tier}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                {t.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                {t.desc}
              </p>
              <p className="mt-6 border-t border-line pt-4 text-sm font-semibold text-ink">
                {t.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
