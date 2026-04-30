# /ship - Release Checklist

## Production Rollout

1. Run all quality gates locally.
2. Push `main` to GitHub.
3. Connect the repo to Vercel.
4. Add branch protection for `main`.
5. Require CI before merge.

## Rollback Plan

- Keep the initial manual dataset release as the stable baseline.
- If a future scraper or cron job fails, disable scheduled sync and continue serving the last reviewed seed data.
- Revert the failing pull request or redeploy the previous Vercel deployment.

## Future Feature Flags

- `NEXT_PUBLIC_ENABLE_SYNC_STATUS`
- `NEXT_PUBLIC_ENABLE_ELIGIBILITY_QUIZ`
- `NEXT_PUBLIC_ENABLE_SUPABASE`
