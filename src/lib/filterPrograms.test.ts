import assert from "node:assert/strict";
import { checkEligibility, filterEligiblePrograms } from "./eligibility.ts";
import { filterPrograms } from "./filterPrograms.ts";
import { housingPrograms } from "./programs.ts";

const cityResults = filterPrograms(housingPrograms, { city: "Glendale" });
assert.equal(cityResults.length, 1);
assert.equal(cityResults[0].city, "Glendale");

const categoryResults = filterPrograms(housingPrograms, { category: "down-payment" });
assert.ok(categoryResults.map((program) => program.id).includes("calhfa-myhome"));
assert.equal(categoryResults.every((program) => program.category === "down-payment"), true);

const searchResults = filterPrograms(housingPrograms, { query: "section 8" });
assert.equal(searchResults.length, 1);
assert.equal(searchResults[0].agency, "Housing Authority of the City of Los Angeles");

assert.equal(
  housingPrograms.every((program) => typeof program.distanceFrom90029Miles === "number"),
  true
);

assert.equal(
  housingPrograms.every((program) => program.incomeLimits === null || typeof program.incomeLimits === "object"),
  true
);

const lahdProgram = housingPrograms.find((program) => program.id === "lahd-low-income-purchase-assistance");
assert.ok(lahdProgram);
assert.equal(checkEligibility(85000, lahdProgram.incomeLimits, 2).status, "eligible");
assert.equal(checkEligibility(170000, lahdProgram.incomeLimits, 9).status, "not-eligible");
assert.equal(checkEligibility(90000, null, 2).status, "manual-review");

const eligiblePrograms = filterEligiblePrograms(housingPrograms, {
  annualIncome: 85000,
  householdSize: 2
});
assert.ok(eligiblePrograms.some((program) => program.id === "lahd-low-income-purchase-assistance"));

console.log("filterPrograms assertions passed");
