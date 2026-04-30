# Called LA Home

Called LA Home is a practical web app for finding housing programs around Los Angeles 90029 within roughly 10 miles, including Glendale, Burbank, and Pasadena.

The first release uses reviewed seed data from official program sources. Later phases can add automated ingestion, scheduled checks, and AI-assisted eligibility guidance.

## Scope

- First-time homebuyer programs
- Down payment assistance
- Affordable housing resources
- Rental assistance and Section 8 links
- City and agency filters for Los Angeles, Glendale, Burbank, Pasadena, LA County, and California statewide programs

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Node built-in assertions for utility tests
- GitHub Actions for CI

Official source tracking lives in `docs/SOURCES.md`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Gates

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Roadmap

1. Version 1: manual reviewed dataset, search, filters, and official links.
2. Version 2: scheduled source freshness checks with Vercel Cron.
3. Version 3: Supabase storage and structured admin review workflow.
4. Version 4: eligibility questionnaire for income, household size, credit score, and savings.

## Data Disclaimer

This project is an informational directory, not legal, financial, or housing advice. Program rules change often. Users should confirm eligibility and deadlines on the linked official agency websites.
