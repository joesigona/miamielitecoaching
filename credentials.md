# Miami Elite Coaching — Credentials & Access

> **SECURITY NOTE**: This file contains sensitive credentials. Keep this repository private.

---

## Server (Hostinger KVM VPS)

| Field | Value |
|-------|-------|
| IP Address | 187.124.213.21 |
| OS | Ubuntu 22.04 LTS |
| SSH User | root |
| SSH Password | R2y6+sSi2DaPpG; |
| App Directory | /var/www/miamielitecoaching |
| Deploy Script | /var/www/miamielitecoaching/deploy.sh |

**To deploy manually:**
```bash
ssh root@187.124.213.21
cd /var/www/miamielitecoaching
bash deploy.sh
```

---

## GitHub Repository

| Field | Value |
|-------|-------|
| Repo URL | https://github.com/joesigona/miamielitecoaching |
| Username | joesigona |
| Personal Access Token | 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 |

**GitHub Actions Secrets set:**
- `VPS_HOST` = 187.124.213.21
- `VPS_USER` = root
- `VPS_PASSWORD` = R2y6+sSi2DaPpG;

> Note: GitHub Actions auto-deploy requires a token with `workflow` scope. Current token lacks this scope. Deploy manually via SSH or update the token.

---

## Stripe

| Field | Value |
|-------|-------|
| Account Email | joesigonafitness@gmail.com |
| Password | Carolina1997!!@ |
| Mode | Test (sandbox) |
| Secret Key | sk_test_51TJkJiGgjRVkK2ZkoSbCMD2MjLAw6sZYACC72tONJoQgcBo8a2HZZm0RJjYwgunXKUg1e1gN04TXOdwQDGacy9xW00GLSJqRYL |
| Publishable Key | pk_test_51TJkJiGgjRVkK2ZkTqvnxmCSFXU2vMfCsY8GQBR6Swi1aTGLIKVhjjQkS65qbLxtoeScoc6KB8UaYAqhLFOPqWy400oW7fgaui |
| Webhook Secret | whsec_9FZTf6rsXwyT8dgUaBy5CWBvFp9P0GIM |
| Webhook URL (Manus) | https://miamicoach-83tywcbk.manus.space/api/stripe/webhook |
| Webhook URL (VPS) | http://187.124.213.21/api/stripe/webhook (update to domain when DNS propagates) |

**Stripe Price IDs:**
- CEO Performance Protocol ($2,400): `price_1TJlQvGgjRVkK2Zk1krLCna6`
- Vitality Reset ($1,200): `price_1TJlQvGgjRVkK2ZkladuMSRM`
- Longevity Duo ($599): `price_1TJlQwGgjRVkK2Zk9r9TLdiK`
- Data-First Drop-In ($350): `price_1TJlQwGgjRVkK2Zky2Nee9Cq`

---

## Clerk Authentication

| Field | Value |
|-------|-------|
| Publishable Key | pk_test_c21vb3RoLWdsb3d3b3JtLTg5LmNsZXJrLmFjY291bnRzLmRldiQ |
| Secret Key | sk_test_VCAgByrREcrbg5QpJ7IfTUkauzfXAVYgD11sCQPFkT |
| Usage | Admin/dashboard routes only; public pages are open |

---

## Typeform

| Field | Value |
|-------|-------|
| Account Email | joesigonafitness@gmail.com |
| Password | Miamielitecoaching1! |

**Forms:**
- Longevity Blueprint: `https://q5lhjxf6lyg.typeform.com/to/GjjmWBrN`
- CEO Performance Protocol: `https://q5lhjxf6lyg.typeform.com/to/CqpamnE1`
- Vitality Reset: `https://q5lhjxf6lyg.typeform.com/to/mUElqlHh`
- Longevity Duo: `https://q5lhjxf6lyg.typeform.com/to/fe89pL85`
- Data-First Drop-In: `https://q5lhjxf6lyg.typeform.com/to/fKybxD1d`

---

## Meta Pixel

| Field | Value |
|-------|-------|
| Pixel ID | 917076967810543 |
| Account | joesigonafitness@gmail.com |
| Status | Installed in index.html, fires PageView on all pages |

---

## Domain

| Field | Value |
|-------|-------|
| Domain | miamielitecoaching.com |
| DNS Target | 187.124.213.21 |
| Status | Point A record to 187.124.213.21 |

**DNS Setup:**
1. Log into your domain registrar
2. Set A record: `@` → `187.124.213.21`
3. Set A record: `www` → `187.124.213.21`
4. Wait for propagation (up to 24-48 hours)

---

## Manus Hosting (Original)

| Field | Value |
|-------|-------|
| URL | https://miamicoach-83tywcbk.manus.space |
| Project ID | 83tywCBKrbukToGzWmD9PC |
| Status | Active (backup while VPS is primary) |

---

## Server Environment Variables (set in ecosystem.config.cjs)

```
NODE_ENV=production
PORT=3000
STRIPE_SECRET_KEY=sk_test_51TJkJiGgjRVkK2ZkoSbCMD2MjLAw6sZYACC72tONJoQgcBo8a2HZZm0RJjYwgunXKUg1e1gN04TXOdwQDGacy9xW00GLSJqRYL
STRIPE_WEBHOOK_SECRET=whsec_9FZTf6rsXwyT8dgUaBy5CWBvFp9P0GIM
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51TJkJiGgjRVkK2ZkTqvnxmCSFXU2vMfCsY8GQBR6Swi1aTGLIKVhjjQkS65qbLxtoeScoc6KB8UaYAqhLFOPqWy400oW7fgaui
VITE_CLERK_PUBLISHABLE_KEY=pk_test_c21vb3RoLWdsb3d3b3JtLTg5LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_VCAgByrREcrbg5QpJ7IfTUkauzfXAVYgD11sCQPFkT
JWT_SECRET=miami-elite-coaching-jwt-secret-2024
VITE_META_PIXEL_ID=917076967810543
```
