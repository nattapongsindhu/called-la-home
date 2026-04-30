import assert from "node:assert/strict";
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

console.log("filterPrograms assertions passed");
