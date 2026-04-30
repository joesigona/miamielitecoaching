# Project TODO

- [x] Create 4 Stripe products via API (CEO Protocol $2400, Vitality Reset $1200, Longevity Duo $599, Drop-In $350)
- [x] Build server-side checkout session creation endpoint
- [x] Add webhook handler for payment events
- [x] Add Buy Now buttons to CEO Protocol, Vitality Reset, Longevity Duo, Data-First Drop-In pages
- [x] Add Book Now button to Longevity Blueprint (links to Typeform)
- [x] Test checkout flow end-to-end
- [x] Write vitest tests for Stripe integration

- [x] Task 1: Full-bleed hero photo on homepage (100vh, longevity-home.jpg, minimal transparent nav overlay)
- [x] Task 2: Gold/navy section dividers between all homepage sections
- [x] Task 3: Create LandingPageLayout, install react-helmet-async, isolate landing pages with noindex
- [x] Task 4: Rebuild Programs page as inquiry-only gallery (3 programs, no prices)
- [x] Task 5: Navigation cleanup — remove dropdown, simplify to single Programs link + About
- [x] Push all changes to GitHub and deploy to VPS (via Management UI > Settings > GitHub)
- [x] Add hero headline copy: "Your Chronological Age Is Just a Number. Your Biological Age Is the One We Change."
- [x] Add hero subtext copy about data-driven longevity practice
- [x] Add primary CTA "Book Your Biological Assessment" linking to /data-first-drop-in
- [x] Add secondary CTA "Explore All Programs" linking to /programs
- [x] Add dark overlay to hero image so text is clearly readable

- [x] Add golf article "Is Golf Actually a Workout? The Science-Backed Answer (2026)" to blog

- [x] Retire landing pages: Brickell, Coconut Grove, CEO Performance Protocol, Vitality Reset, Data-First Drop-In
- [x] Delete 5 page files (Brickell.tsx, CoconutGrove.tsx, CeoProtocol.tsx, VitalityReset.tsx, DataFirstDropIn.tsx)
- [x] Clean App.tsx routes and imports
- [x] Clean Footer.tsx (remove program links and Apply CTA)
- [x] Clean sitemap.xml (remove 5 retired page URLs)
- [x] Clean index.html (update meta description and JSON-LD)
- [x] Clean Programs.tsx (remove Drop-In card, update CTAs)
- [x] Clean MiamiPersonalTrainer.tsx (repoint neighborhood links)
- [x] Clean LongevityBlueprint.tsx (remove cross-promo cards)
- [x] Clean Article.tsx (remove cross-promo cards, repoint CTAs)
- [x] Clean data.ts (remove NEIGHBORHOODS, rewrite article links)
- [x] Clean server/products.ts (remove 3 products, keep 2)
- [x] Clean server/stripe.ts (remove 3 price entries)
- [x] Update server/stripe.test.ts (adjust product counts)
- [x] Update server/clerk.test.ts (update public paths)
- [x] Run verification checks (pnpm check, pnpm test, grep for leftover references)
- [x] Save checkpoint after cleanup

- [x] Create Contact/Inquiry form page at /contact with program pre-fill
- [x] Wire Programs page Inquire buttons to /contact with program name pre-fill
- [x] Add tRPC procedure to handle inquiry form submissions
- [x] Test form submission and email notification

- [x] Link homepage "Book Your Biological Assessment" buttons to /contact form with pre-fill
