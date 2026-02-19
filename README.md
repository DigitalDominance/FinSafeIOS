# FinSafe iOS-first Frontend (TypeScript)

This repository now contains a TypeScript React Native starter for **FinSafe** using Expo + Expo Router.

## Why this stack for iOS first

- TypeScript frontend with fast iteration.
- iOS builds via `expo run:ios`.
- Clear domain engines separated from UI for runway/goals/loan logic.

## MVP included

- Dashboard with:
  - Safety Engine card (`Safe Days`, status, risk projection)
  - Closest Goal card (`Freedom Date`, progress)
  - Loan summary card (interest and payoff horizon)
- Domain modules you can expand for Plaid-backed real data.
- Unit tests for core engines.

## Run

```bash
npm install
npm run start
npm run ios
```

## Test

```bash
npm run test
npm run typecheck
```

## Suggested next steps

1. Add onboarding flow and Apple Sign-In.
2. Replace sample data with backend APIs.
3. Add What-If simulator controls.
4. Add StoreKit 2 paywall/trial integration on native side.
