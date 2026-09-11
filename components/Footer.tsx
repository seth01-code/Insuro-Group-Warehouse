import Image from "next/image";
import logo from "../assets/images/insuro.png";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#workflow", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#partnership", label: "Partnership" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src={logo}
            alt="Insuro Africa Logo"
            width={200}
            height={100}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
            Warehousing, fulfilment, and distribution infrastructure for
            businesses building across Africa.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/40">
            Headquarters, Lagos
            <br />
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-blue-light">Navigate</p>
          <ul className="mt-4 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-blue-light">Company</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://www.insuro.africa"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Insuro Africa Group
              </a>
            </li>
            <li>
              <a
                href="#request"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Start your request
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Insuro Africa Group. All rights
            reserved.
          </p>
          <p>Lagos, Nigeria. Pan-African operations.</p>
        </div>
      </div>
    </footer>
  );
}
