# /spec - Called LA Home

## Problem

Housing assistance information around Los Angeles is spread across city, county, and state websites. A first-time buyer or renter near 90029 must search multiple agencies to compare programs.

## Goal

Build a production-minded portfolio web app that aggregates housing program information for:

- Los Angeles 90029, East Hollywood, Los Feliz, Silver Lake, and nearby LA neighborhoods
- Glendale
- Burbank
- Pasadena
- LA County programs
- California statewide programs

## Version 1 Scope

- Manual seed data for key official programs
- Search by keyword
- Filter by city and category
- Program cards with benefit, status, eligibility notes, and official links
- Simple, minimal, mobile-first UI
- CI checks for lint, typecheck, test, and build

## Out of Scope for Version 1

- Automated scraping
- User accounts
- Saved searches
- AI recommendations
- Mortgage affordability calculations

## Constraints

- Keep data source URLs official.
- Do not store personal financial information in Version 1.
- Avoid over-engineered abstractions.
- Make program data easy to audit and update.

## Success Criteria

- A user can find buy, rent, affordable housing, and assistance programs in under one minute.
- A developer can run the app locally with `npm install` and `npm run dev`.
- CI can prove lint, typecheck, tests, and build pass.
