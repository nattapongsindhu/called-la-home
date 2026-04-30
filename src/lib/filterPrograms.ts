import type { HousingProgram, ProgramFilters } from "./types";

const normalize = (value: string) => value.trim().toLowerCase();

export function filterPrograms(programs: HousingProgram[], filters: ProgramFilters) {
  const query = normalize(filters.query ?? "");
  const city = filters.city ?? "all";
  const category = filters.category ?? "all";

  return programs.filter((program) => {
    const matchesCity = city === "all" || program.city === city;
    const matchesCategory = category === "all" || program.category === category;
    const searchableText = [
      program.agency,
      program.city,
      program.serviceArea,
      program.programName,
      program.benefit,
      program.eligibility,
      ...program.keywords
    ]
      .join(" ")
      .toLowerCase();

    return matchesCity && matchesCategory && (query === "" || searchableText.includes(query));
  });
}

export function formatCategory(category: HousingProgram["category"]) {
  const labels: Record<HousingProgram["category"], string> = {
    "first-time-buyer": "First-time buyer",
    "down-payment": "Down payment",
    "rental-assistance": "Rental assistance",
    "affordable-housing": "Affordable housing",
    "tenant-support": "Tenant support"
  };

  return labels[category];
}

export function formatStatus(status: HousingProgram["status"]) {
  const labels: Record<HousingProgram["status"], string> = {
    active: "Active",
    "check-availability": "Check availability",
    waitlist: "Waitlist",
    seasonal: "Seasonal"
  };

  return labels[status];
}
