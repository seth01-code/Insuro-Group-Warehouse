"use client";

import Image from "next/image";
import logo from "../assets/images/insuro.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#workflow", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#partnership", label: "Partnership" },
];

export default function Header() {
  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-2xl border border-white/10 bg-navy/70 px-5 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Insuro Africa Logo"
            width={160}
            height={80}
            className="h-9 w-auto object-contain brightness-0 invert"
            priority
          />
          <span className="hidden h-4 w-px bg-white/15 sm:block" />
          <span className="hidden text-sm text-white/50 sm:inline">
            Smart Fulfilment
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#request"
            className="flex items-center gap-1.5 rounded-full bg-linear-to-r from-blue-500 to-blue-700 px-5 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            Start your request
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </header>
    </div>
  );
}
