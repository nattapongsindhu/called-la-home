export type ProgramCategory =
  | "first-time-buyer"
  | "down-payment"
  | "rental-assistance"
  | "affordable-housing"
  | "tenant-support";

export type ProgramStatus = "active" | "check-availability" | "waitlist" | "seasonal";

export type HousingProgram = {
  id: string;
  agency: string;
  city: string;
  serviceArea: string;
  programName: string;
  category: ProgramCategory;
  benefit: string;
  eligibility: string;
  status: ProgramStatus;
  url: string;
  lastReviewed: string;
  keywords: string[];
};

export type ProgramFilters = {
  query?: string;
  city?: string;
  category?: ProgramCategory | "all";
};
