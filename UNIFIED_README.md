
# HomiFi Unified (Desktop + Mobile)

This project combines your Desktop layout (homifi-apple-main) and your Mobile layout (Option B, modularized) into a single Next.js App Router app.

## Routing Behavior
- **Desktop (≥ 1024px)** → `app/layouts/Desktop/page.tsx`
- **Mobile (< 1024px)** → `app/layouts/Mobile/page.tsx`
- Router lives in `app/page.tsx` and switches client-side.

## Fonts
- Inter variable font is configured via `@fontsource/inter/variable.css` in `app/globals.css`.
- Tailwind `fontFamily.sans` is mapped to `var(--font-sans)`.

## Where things live
- Desktop: `app/layouts/Desktop/`
- Mobile:  `app/layouts/Mobile/`
- Shared UI: `components/ui/`

## Install & Run
```bash
npm i
npm run dev
```

## Notes
- No palette/blur changes were made to Desktop tokens.
- Mobile uses the same tokens through Tailwind + globals.
- You can adjust the breakpoint in `app/page.tsx` (default 1024).
