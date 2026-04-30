# Miami Elite Coaching

> Miami's only data-driven longevity practice built for high performers. Private personal training, precision medicine, and cutting-edge biological protocols.

## Quick Start

```bash
pnpm install
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm start      # Run production build
```

## Deployment

Code is automatically deployed to the Hostinger VPS via GitHub Actions when pushed to `main`.

**DO NOT use Manus hosting.** This project is self-hosted on a Hostinger KVM VPS.

See `instructions/AGENT_INSTRUCTIONS.md` for full architecture documentation.

## Tech Stack

- **Frontend**: React 19 + Tailwind CSS 4 + shadcn/ui + Wouter
- **Backend**: Express 4 + tRPC 11 + Drizzle ORM
- **Database**: MySQL/TiDB
- **Hosting**: Hostinger VPS (Nginx + PM2)
- **CI/CD**: GitHub Actions
- **Analytics**: Google Analytics 4 + Meta Pixel
- **Payments**: Stripe (test mode)

## Key Files

| File | Purpose |
|------|---------|
| `instructions/AGENT_INSTRUCTIONS.md` | Full system architecture and agent instructions |
| `credentials.md` | All credentials (SSH, API keys, etc.) |
| `.github/workflows/deploy.yml` | CI/CD deployment pipeline |
| `client/src/lib/data.ts` | Blog articles data |
| `server/routers.ts` | Backend API procedures |

## Domain

- **Production**: https://miamielitecoaching.com
- **Server**: 187.124.213.21

## License

Private — All rights reserved.
