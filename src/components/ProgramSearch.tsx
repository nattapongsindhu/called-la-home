"use client";

import { Building2, ExternalLink, Filter, Home, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { cities, housingPrograms } from "@/lib/programs";
import { filterPrograms, formatCategory, formatStatus } from "@/lib/filterPrograms";
import type { ProgramCategory } from "@/lib/types";

const categories: Array<ProgramCategory | "all"> = [
  "all",
  "first-time-buyer",
  "down-payment",
  "rental-assistance",
  "affordable-housing",
  "tenant-support"
];

const categoryLabels: Record<ProgramCategory | "all", string> = {
  all: "All",
  "first-time-buyer": "Buy",
  "down-payment": "Down payment",
  "rental-assistance": "Rent help",
  "affordable-housing": "Affordable",
  "tenant-support": "Tenant"
};

export function ProgramSearch() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("all");
  const [category, setCategory] = useState<ProgramCategory | "all">("all");

  const results = useMemo(
    () => filterPrograms(housingPrograms, { query, city, category }),
    [category, city, query]
  );

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 border-b border-line pb-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-sage">LA housing program finder</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">Called LA Home</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Search practical homebuyer, rental assistance, affordable housing, and tenant support programs around 90029,
            Glendale, Burbank, and Pasadena.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded border border-line bg-white p-4">
          <Metric label="Programs" value={housingPrograms.length.toString()} />
          <Metric label="Radius" value="10 mi" />
          <Metric label="Mode" value="V1" />
        </div>
      </div>

      <div className="grid gap-3 rounded border border-line bg-white p-4 shadow-sm lg:grid-cols-[1fr_180px_220px]">
        <label className="flex min-h-12 items-center gap-3 rounded border border-line bg-paper px-3">
          <Search aria-hidden="true" className="h-5 w-5 text-trust" />
          <span className="sr-only">Search programs</span>
          <input
            className="w-full bg-transparent text-base text-ink outline-none placeholder:text-slate-400"
            placeholder="Search 90029, Pasadena, down payment..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <label className="flex min-h-12 items-center gap-3 rounded border border-line bg-paper px-3">
          <Building2 aria-hidden="true" className="h-5 w-5 text-trust" />
          <span className="sr-only">Filter city</span>
          <select
            className="w-full bg-transparent text-sm font-medium text-ink outline-none"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            {cities.map((option) => (
              <option key={option} value={option}>
                {option === "all" ? "All cities" : option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-h-12 items-center gap-3 rounded border border-line bg-paper px-3">
          <Filter aria-hidden="true" className="h-5 w-5 text-trust" />
          <span className="sr-only">Filter category</span>
          <select
            className="w-full bg-transparent text-sm font-medium text-ink outline-none"
            value={category}
            onChange={(event) => setCategory(event.target.value as ProgramCategory | "all")}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {categoryLabels[option]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          Showing <span className="font-semibold text-ink">{results.length}</span> of {housingPrograms.length} programs
        </p>
        <p className="text-sm text-slate-500">Last reviewed: Apr 30, 2026</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {results.map((program) => (
          <article key={program.id} className="rounded border border-line bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-sage">{program.agency}</p>
                <h2 className="mt-2 text-xl font-semibold leading-tight text-ink">{program.programName}</h2>
              </div>
              <Home aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-trust" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{program.city}</Badge>
              <Badge>{formatCategory(program.category)}</Badge>
              <Badge>{formatStatus(program.status)}</Badge>
              <Badge>{program.distanceFrom90029Miles} mi from 90029</Badge>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-700">{program.benefit}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{program.eligibility}</p>
            <p className="mt-3 text-sm text-slate-500">{program.serviceArea}</p>

            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-trust hover:text-sage"
              href={program.url}
              target="_blank"
              rel="noreferrer"
            >
              Official source
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="rounded border border-line bg-white p-8 text-center text-slate-600">
          No programs matched this search. Try a city, agency, or phrase like Section 8, CalHFA, or buyer.
        </div>
      ) : null}
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-ink">{value}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded border border-line bg-paper px-2.5 py-1 text-xs font-medium text-slate-700">{children}</span>;
}
