# System Architecture

## Overview

Called LA Home uses a static data architecture for speed, auditability, and simple deployment. The app does not require Supabase, a hosted database, or database environment variables for the current release.

## Architecture Components

1. **Data Layer (`/src/data`)**  
   Static JSON files contain curated housing program records for Los Angeles 90029 and the surrounding 10-mile coverage area.

2. **Search Logic (`/src/lib`)**  
   TypeScript utilities provide deterministic keyword, city, category, and eligibility filtering. The current implementation uses simple filtering instead of Fuse.js to keep the release small and easy to audit.

3. **Frontend (`/src/app` and `/src/components`)**  
   Next.js App Router and React components render a minimalist search interface with fast client-side filtering.

4. **Deployment**  
   Vercel builds the static application from the `main` branch. No Supabase keys or database secrets are required.

## Data Policy

- Program data is reviewed manually before release.
- Each record includes `distanceFrom90029Miles` for coverage transparency.
- Each record includes `incomeLimits`; use `null` when a program requires manual review or uses non-comparable limits.
- Source links must point to official agency pages.
- Personal user data is not collected in this version.

## Future Extensions

- Scheduled source freshness checks.
- A static build-time ingestion script for official source snapshots.
- Optional search scoring if the dataset grows beyond simple filtering.
