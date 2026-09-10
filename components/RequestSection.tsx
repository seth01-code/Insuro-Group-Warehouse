import LeadForm from "./LeadForm";

export default function RequestSection() {
  return (
    <section id="request" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <span className="pill-badge !border-blue/25 !bg-blue/[0.07] !text-blue">
            Get started
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink">
            Need storage? Let&apos;s get your business moving.
          </h2>
          <p className="mt-5 text-ink/65">
            Tell us what you need and our team will take it from there —
            whether that&apos;s a facility tour or a tailored, costed
            proposal built around your exact requirements.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-paper-dim p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
