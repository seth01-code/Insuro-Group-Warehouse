"use client";

import { useState, type FormEvent } from "react";

const businessTypes = [
  "E-commerce",
  "Retail",
  "Manufacturer",
  "Importer / exporter",
  "3PL",
  "Other",
];

const initialState = {
  companyName: "",
  businessType: "",
  typeOfGoods: "",
  estimatedVolume: "",
  email: "",
  preferredLocation: "",
  timeOfNeed: "",
  additionalInfo: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof typeof initialState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-blue/25 bg-white p-10 text-center">
        <h3 className="font-display text-2xl font-bold text-ink">
          Request received.
        </h3>
        <p className="mt-3 text-ink/65">
          Thank you -a member of our team will reach out shortly to take this
          further.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-blue underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name" required>
          <input
            required
            type="text"
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Business type" required>
          <select
            required
            value={form.businessType}
            onChange={(e) => update("businessType", e.target.value)}
            className="input"
          >
            <option value="" disabled>
              Select one
            </option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Type of goods" required>
          <input
            required
            type="text"
            placeholder="e.g. apparel, electronics, FMCG"
            value={form.typeOfGoods}
            onChange={(e) => update("typeOfGoods", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Estimated volume" required>
          <input
            required
            type="text"
            placeholder="e.g. 200 SKUs / 50 pallets"
            value={form.estimatedVolume}
            onChange={(e) => update("estimatedVolume", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Work email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Preferred storage location" required>
          <input
            required
            type="text"
            placeholder="e.g. Lagos"
            value={form.preferredLocation}
            onChange={(e) => update("preferredLocation", e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Time of need" required>
          <input
            required
            type="text"
            placeholder="e.g. Immediately, within 30 days"
            value={form.timeOfNeed}
            onChange={(e) => update("timeOfNeed", e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field label="Additional information (optional)">
        <textarea
          rows={4}
          value={form.additionalInfo}
          onChange={(e) => update("additionalInfo", e.target.value)}
          className="input resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Start your request"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink/80">
        {label}
        {required && <span className="text-bronze"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
