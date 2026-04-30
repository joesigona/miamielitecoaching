# Miami Elite Coaching — Agent Instructions & System Architecture

> **CRITICAL: DO NOT use Manus hosting. This project is hosted on a Hostinger VPS and deployed via GitHub Actions. All code lives in this GitHub repository.**

---

## System Architecture Overview

Miami Elite Coaching is a React + Express application running on a Hostinger KVM VPS. The architecture is:

```
GitHub (joesigona/miamielitecoaching)
    ↓ push to main
GitHub Actions CI/CD (.github/workflows/deploy.yml)
    ↓ SSH into VPS
Hostinger VPS (187.124.213.21)
    ├── Nginx (reverse proxy, SSL termination)
    ├── PM2 (process manager, cluster mode)
    └── Node.js app (Express + Vite SSR build)
         ├── Frontend: React 19 + Tailwind 4 + shadcn/ui
         └── Backend: Express + tRPC + Drizzle ORM
```

---

## Hosting & Deployment

| Component | Details |
|-----------|---------|
| **Hosting Provider** | Hostinger KVM VPS |
| **Server IP** | 187.124.213.21 |
| **OS** | Ubuntu 22.04 LTS |
| **Domain** | miamielitecoaching.com / www.miamielitecoaching.com |
| **SSL** | Let's Encrypt via Certbot (auto-renew) |
| **Reverse Proxy** | Nginx → localhost:3000 |
| **Process Manager** | PM2 (cluster mode, app name: `miamielitecoaching`) |
| **App Directory** | `/var/www/miamielitecoaching` |
| **Build Output** | `/var/www/miamielitecoaching/dist/` |
| **Node.js Version** | 22.x |
| **Package Manager** | pnpm 10.x |

### Deployment Flow

1. Push code to `main` branch on GitHub
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers automatically
3. Workflow SSHs into VPS and runs: `git pull → pnpm install → pnpm build → pm2 restart`
4. Site is live within ~2 minutes

### Manual Deployment (if GitHub Actions fails)

```bash
ssh root@187.124.213.21
cd /var/www/miamielitecoaching
git pull origin main
pnpm install
pnpm build
pm2 restart miamielitecoaching
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | React 19 |
| Routing | Wouter |
| Styling | Tailwind CSS 4 + shadcn/ui |
| State/Data | tRPC + React Query |
| Backend | Express 4 + tRPC 11 |
| Database | MySQL/TiDB (via Drizzle ORM) |
| Auth | Manus OAuth (session cookies) |
| Payments | Stripe (test mode) |
| Analytics | Google Analytics 4 (G-FG3ZL23MP3) + Meta Pixel (917076967810543) |
| SEO | react-helmet-async |
| Process Manager | PM2 |
| CI/CD | GitHub Actions |

---

## File Structure

```
client/
  index.html          ← Main HTML (GA4, Meta Pixel, fonts)
  public/             ← Static files (sitemap.xml, robots.txt, favicon)
  src/
    pages/            ← Page components (Home, Programs, Contact, Blog, etc.)
    components/       ← Reusable UI (Navigation, Footer, SectionDivider, etc.)
    lib/data.ts       ← Blog articles data (static, no CMS)
    App.tsx           ← Route definitions
    main.tsx          ← App entry point with tRPC/React Query providers
    index.css         ← Global styles and Tailwind theme
server/
  routers.ts          ← tRPC procedures (contact form, auth, stripe)
  products.ts         ← Stripe product definitions
  stripe.ts           ← Stripe checkout/webhook handlers
  db.ts               ← Database query helpers
  storage.ts          ← S3 file storage helpers
  _core/              ← Framework internals (DO NOT EDIT)
drizzle/
  schema.ts           ← Database schema
shared/
  const.ts            ← Shared constants
.github/
  workflows/deploy.yml ← CI/CD pipeline
instructions/         ← Agent instructions and campaign docs
credentials.md        ← All credentials (SSH, Stripe, Clerk, etc.)
```

---

## Current Site Pages

| Route | Page | Status |
|-------|------|--------|
| `/` | Homepage (full-bleed hero, philosophy, pillars, protocol, team) | Active |
| `/programs` | Programs gallery (2 cards: CEO Protocol, Longevity Duo) | Active |
| `/contact` | Inquiry form (pre-fill via `?program=` param) | Active |
| `/about` | About page (placeholder) | Active |
| `/blog` | Blog listing page | Active |
| `/blog/:slug` | Individual article pages | Active |
| `/longevity-blueprint` | Longevity Blueprint landing page (isolated, noindex) | Active |
| `/longevity-duo` | Longevity Duo landing page (isolated, noindex) | Active |
| `/miami-personal-trainer` | SEO article page | Active |
| `/biohacking-miami-summer` | SEO article page | Active |

### Retired Pages (DO NOT recreate)

These pages were intentionally retired and all references cleaned:
- `/brickell` — Brickell neighborhood page
- `/coconut-grove` — Coconut Grove neighborhood page
- `/ceo-performance-protocol` — CEO Protocol landing page
- `/vitality-reset` — Vitality Reset landing page
- `/data-first-drop-in` — Data-First Drop-In landing page

---

## Key Design Decisions

1. **No Manus hosting** — Site runs on Hostinger VPS only. Manus is used for development workspace only.
2. **Landing pages are isolated** — They use `LandingPageLayout` (no main nav/footer, noindex meta tag, minimal logo header, subtle back link).
3. **No prices shown publicly** — Programs page shows inquiry buttons only, no pricing.
4. **Navigation is simplified** — Home | Programs | About | Articles | Book Assessment (no dropdown menus).
5. **All CTAs route to /contact** — The contact form is the central lead capture mechanism.
6. **Blog articles are static** — Stored in `client/src/lib/data.ts` as a TypeScript array (no CMS).
7. **Dark luxury aesthetic** — Deep navy/charcoal backgrounds, gold accents (oklch(0.72 0.12 75)), Barlow Condensed headings.

---

## Environment Variables (VPS)

Set via PM2 environment (stored in PM2 dump):

```
NODE_ENV=production
PORT=3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
JWT_SECRET=miami-elite-coaching-jwt-secret-2024
VITE_META_PIXEL_ID=917076967810543
OWNER_OPEN_ID=m5AjDjJfZHbQrZcGTCAtSE
OWNER_NAME=Joseph Sigona
VITE_APP_TITLE=Miami Elite Coaching
BUILT_IN_FORGE_API_URL=https://forge.manus.ai
BUILT_IN_FORGE_API_KEY=YTMRuFZvfpytAk6HqQCFhD
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.ai
VITE_FRONTEND_FORGE_API_KEY=4fGbHqQUftYHnQRLQWdzkN
```

---

## GitHub Actions Secrets

| Secret | Purpose |
|--------|---------|
| `VPS_HOST` | 187.124.213.21 |
| `VPS_USER` | root |
| `VPS_PASSWORD` | SSH password for VPS |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key for frontend build |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for frontend build |
| `VITE_META_PIXEL_ID` | Meta Pixel ID for frontend build |

---

## Common Tasks

### Adding a New Blog Article

1. Open `client/src/lib/data.ts`
2. Add a new object to the `ARTICLES` array at the beginning (newest first)
3. Follow the existing article structure (slug, title, excerpt, content with HTML, category, readTime, date)
4. Push to main — GitHub Actions will auto-deploy

### Adding a New Program

1. Add program card to `client/src/pages/Programs.tsx`
2. Add program option to the dropdown in `client/src/pages/Contact.tsx`
3. Optionally create a landing page using `LandingPageLayout`
4. Update `client/public/sitemap.xml` if the page should be indexed

### Updating the Contact Form

The contact form is at `client/src/pages/Contact.tsx`. It accepts a `?program=` URL parameter to pre-fill the program dropdown. The form submission calls `trpc.contact.submit` which notifies the owner.

---

## What NOT to Do

1. **DO NOT use Manus hosting** — All hosting is on Hostinger VPS
2. **DO NOT recreate retired landing pages** — They were intentionally removed
3. **DO NOT show prices on the public site** — Programs page is inquiry-only
4. **DO NOT add dropdown menus to navigation** — Keep it flat and simple
5. **DO NOT store images in `client/public/`** — Use CDN URLs from `manus-upload-file --webdev`
6. **DO NOT edit files in `server/_core/`** — Framework internals, hands off

---

## Credentials Reference

All credentials are stored in `credentials.md` in this repository. That file contains:
- Hostinger VPS SSH access
- GitHub PAT
- Stripe keys (test mode)
- Clerk authentication keys
- Typeform account and form URLs
- Meta Pixel ID
- Domain DNS configuration

---

## Contact/Support

- **Owner**: Joseph Sigona (joesigonafitness@gmail.com)
- **Domain Registrar**: Check DNS settings for miamielitecoaching.com
- **Stripe Dashboard**: https://dashboard.stripe.com (test mode)
- **Google Analytics**: https://analytics.google.com (Property: G-FG3ZL23MP3)
