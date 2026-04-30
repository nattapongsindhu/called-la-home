import type { EligibilityResult, HousingProgram } from "./types";

type EligibilityInput = {
  annualIncome: number;
  householdSize: number;
};

export function checkEligibility(
  annualIncome: number,
  incomeLimits: HousingProgram["incomeLimits"],
  householdSize: number
): EligibilityResult {
  if (!Number.isFinite(annualIncome) || annualIncome <= 0 || !Number.isFinite(householdSize) || householdSize <= 0) {
    return {
      status: "not-checked",
      maxIncome: null,
      householdSizeUsed: null,
      message: "Enter household size and annual income to check eligibility."
    };
  }

  if (!incomeLimits) {
    return {
      status: "manual-review",
      maxIncome: null,
      householdSizeUsed: null,
      message: "Income limits vary by program. Review the official source."
    };
  }

  const availableSizes = Object.keys(incomeLimits)
    .map(Number)
    .sort((a, b) => a - b);
  const largestSize = availableSizes[availableSizes.length - 1];
  const requestedSize = Math.floor(householdSize);
  const householdSizeUsed = availableSizes.includes(requestedSize) ? requestedSize : largestSize;
  const maxIncome = incomeLimits[String(householdSizeUsed)];
  const usesLargestSize = requestedSize > largestSize;

  if (annualIncome <= maxIncome) {
    return {
      status: "eligible",
      maxIncome,
      householdSizeUsed,
      message: usesLargestSize
        ? `Likely income-eligible using the largest listed household size (${largestSize}).`
        : "Likely income-eligible based on the listed income limit."
    };
  }

  return {
    status: "not-eligible",
    maxIncome,
    householdSizeUsed,
    message: usesLargestSize
      ? `Income is above the largest listed household-size limit (${largestSize}).`
      : "Income is above the listed income limit."
  };
}

export function filterEligiblePrograms(programs: HousingProgram[], input: EligibilityInput) {
  return programs.filter((program) => {
    const result = checkEligibility(input.annualIncome, program.incomeLimits, input.householdSize);

    return result.status === "eligible" || result.status === "manual-review";
  });
}
