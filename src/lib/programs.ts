import type { HousingProgram } from "./types";
import housingProgramData from "../data/housing-programs.json" with { type: "json" };

export const housingPrograms = housingProgramData as HousingProgram[];

export const cities = ["all", "Los Angeles", "Glendale", "Burbank", "Pasadena", "LA County", "Statewide"] as const;
