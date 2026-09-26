# Login Demo

Intentionally buggy mini app for **DevResolve AI** testing.

## Bug
Login email comparison is case-sensitive.

**Expected:** User@Example.com should match user@example.com.

**Actual:** Login fails when letter casing differs.

## Run
```bash
npm install
npm run dev
```

## Reproduce with tests
```bash
npm test
```
The failing test is intentional. The repository should be fixed by the coding agent later.

## Deploy
Import this repository into Vercel and deploy with the default Next.js settings.
