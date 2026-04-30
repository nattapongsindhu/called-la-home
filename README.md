# Called LA Home

[![CI](https://github.com/nattapongsindhu/called-la-home/actions/workflows/ci.yml/badge.svg)](https://github.com/nattapongsindhu/called-la-home/actions/workflows/ci.yml)
![Vercel Deployment](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/next.js-16-black?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-6-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)

> A practical web application for discovering housing programs within a 10-mile radius of Los Angeles 90029, covering **Burbank**, **Glendale**, and **Pasadena**.

Called LA Home is an integrated housing resource platform for the Los Angeles 90029 area and its 10-mile radius. It aggregates reviewed official housing resources into a fast, searchable interface for first-time buyers, renters, and people comparing affordable housing assistance across nearby cities.

## Goal

Provide a fast, minimalist, and production-ready search interface for first-time homebuyers and renters seeking housing assistance programs.

## Coverage

- **Center:** Los Angeles, CA 90029
- **Radius:** Approximately 10 miles
- **Cities:** Los Angeles, Burbank, Glendale, Pasadena, and surrounding LA County areas
- **Program Types:** First-time buyer, down payment assistance, rental assistance, affordable housing, and tenant support

## Key Features

- **Centralized Program Directory:** Curated records for LAHD, HACLA, LACDA, CalHFA, Burbank, Glendale, and Pasadena.
- **Local JSON Ingestion:** Static housing program data ships from `/src/data` with no database dependency.
- **Minimalist Search:** Instant keyword, city, and category filtering without account signup.
- **Official Source Links:** Each program card links back to the responsible agency.
- **Production-Minded Workflow:** Spec, plan, build, test, review, and ship documentation are tracked in the repository.
- **Quality Gates:** CI runs lint, typecheck, tests, and production build checks.

## Project Structure

```text
src/app/              Next.js App Router pages and global styles
src/components/       Reusable UI components
src/data/             Curated local JSON housing program datasets
src/lib/              Program data, filtering utilities, and TypeScript types
docs/                 Technical specification, plan, source review notes, and ship checklist
.github/workflows/    GitHub Actions CI
```

## Documentation

- [Technical Specification](docs/SPEC.md)
- [System Architecture](docs/SYSTEM_ARCHITECTURE.md)
- [Implementation Plan](docs/PLAN.md)
- [Official Sources](docs/SOURCES.md)
- [Ship Checklist](docs/SHIP.md)
- [Contributing Guide](CONTRIBUTING.md)

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

1. Version 1: Manual reviewed dataset, search, filters, and official links.
2. Version 2: Scheduled source freshness checks with Vercel Cron.
3. Version 3: Static build-time ingestion and source freshness checks.
4. Version 4: Eligibility questionnaire for income, household size, credit score, and savings.

## Data Disclaimer

This project is an informational directory, not legal, financial, or housing advice. Program rules change often. Users should confirm eligibility and deadlines on the linked official agency websites.
