# Contributing

This repository follows a small-slice workflow:

1. `/spec` define the change and constraints.
2. `/plan` break work into atomic tasks.
3. `/build` implement one slice.
4. `/test` verify with evidence.
5. `/review` audit readability, security, and performance.
6. `/ship` document rollout and rollback.

Pull requests should include:

- What changed
- How it was tested
- Any data source updates
- Rollback notes

Before submitting:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Do not commit secrets, `.env` files, or personal user data.
