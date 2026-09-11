import Image from "next/image";
import teamPhoto from "@/assets/images/who-we-are.jpg";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-navy text-white">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="15%"
          x2="100%"
          y2="0%"
          stroke="var(--color-blue-light)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="70%"
          stroke="var(--color-blue-light)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Who we are
          </h2>
          <p className="text-sm text-white/50">Lagos, Nigeria. Founded 2024.</p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <figure>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <Image
                src={teamPhoto}
                alt="Insuro Africa team and operations"
                placeholder="blur"
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 35vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-white/40">
              Headquarters, Lagos
            </figcaption>
          </figure>

          <div>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Insuro Africa is a tech-driven fulfilment and logistics company
              headquartered in Lagos, Nigeria, founded in 2024 by an industry
              leader in logistics and supply chain.
            </p>

            <dl className="mt-12 divide-y divide-white/10 border-t border-white/10">
              <div className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                <dt className="text-sm font-semibold text-blue-light">
                  Mission
                </dt>
                <dd className="text-white/70">
                  To design, build, and operate systems that solve structural
                  inefficiencies across Africa&apos;s key economic sectors.
                </dd>
              </div>
              <div className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-8">
                <dt className="text-sm font-semibold text-blue-light">
                  Vision
                </dt>
                <dd className="text-white/70">
                  An Africa where industries function efficiently because the
                  systems supporting them are reliable, scalable, and effective.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
