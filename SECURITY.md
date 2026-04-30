# Security Policy

## Supported Version

The `main` branch is the supported production branch.

## Reporting a Vulnerability

Please do not open public issues for security vulnerabilities. Use GitHub private vulnerability reporting if available, or contact the maintainer through the repository owner profile.

Include:

- A clear description of the issue.
- Steps to reproduce.
- Impact and affected files.
- Suggested fix, if known.

## Data and Privacy Model

Called LA Home does not require user accounts, server-side storage, Supabase, or database secrets. Eligibility inputs are processed locally in the browser session and are not intentionally persisted.

## Secret Handling

- Do not commit `.env` files.
- Do not place secrets in `NEXT_PUBLIC_*` variables.
- Keep future API credentials server-only.
