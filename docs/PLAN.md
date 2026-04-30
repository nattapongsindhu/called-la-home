# /plan - Implementation Plan

## Slice 1: Repository Foundation

Definition of Done:

- Next.js project structure exists.
- README, spec, plan, ship checklist, and contribution guide exist.
- CI workflow is configured.

## Slice 2: Data Model and Seed Data

Definition of Done:

- `HousingProgram` type exists.
- Reviewed JSON seed records exist in `/src/data` for LAHD, HACLA, LACDA, CalHFA, Burbank, Glendale, and Pasadena.
- Each record includes `distanceFrom90029Miles`.
- Filtering utilities are tested.

## Slice 3: Search UI

Definition of Done:

- Home page includes search input, city filter, category filter, and result cards.
- UI works on mobile and desktop.
- Official links are visible.

## Slice 4: Verification

Definition of Done:

- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run test` passes.
- `npm run build` passes.

## Slice 5: Ship

Definition of Done:

- Remote is set to `https://github.com/nattapongsindhu/called-la-home.git`.
- Main branch is ready to push.
- Rollback plan is documented.
