# MEC Google Ads Campaign Builder — AI Instructions
## Miami Elite Coaching | Repeatable Ad Build Process

---

## CONTEXT & PURPOSE

You are building Google Ads Responsive Search Ad (RSA) campaigns for **Miami Elite Coaching (MEC)**. Each campaign targets a specific MEC program. This document gives you the exact logic, rules, constraints, and fill-in structure to produce plug-and-play Google Ads output for any MEC program.

Follow every section in order. Do not skip steps. Output must be ready to copy-paste directly into the Google Ads interface.

---

## BRAND CONSTANTS (Apply to Every MEC Campaign)

| Field | Value |
|-------|-------|
| Business Name | `Miami Elite Coaching` (25 char max — fits) |
| Verified Advertiser | `Joe Sigona Fitness LLC` |
| Base Domain | `miamielitecoaching.com` |
| Location | Brickell, Miami, FL |
| Brand Voice | Authoritative. Data-driven. ROI-focused. Never generic wellness language. |
| Color/Aesthetic | Deep navy, charcoal, gold. Science + luxury. High contrast. |
| Core Audience | High-performing men 40+, CEOs/Founders/Managing Partners, Brickell + Downtown Miami |

---

## STEP 1 — COLLECT PROGRAM INPUTS

Before building any ad, gather these inputs for the specific program being advertised:

```
PROGRAM NAME: [e.g. CEO Performance Protocol]
PROGRAM DURATION: [e.g. 12 weeks]
PROGRAM PRICE: [e.g. $3,500]
KEY DIFFERENTIATORS: [e.g. DEXA scan, VO2 Max testing, Iyashi Dome recovery]
LANDING PAGE SLUG: [e.g. /ceo-protocol]
COHORT/URGENCY: [e.g. Q2, April 21 start, 4 spots remaining]
TARGET JOB TITLES: [e.g. CEO, Founder, Managing Partner, Managing Director]
TARGET AGE: [e.g. 40+]
PRIMARY RESULT/OUTCOME: [e.g. lower biological age, increase VO2 Max]
TESTIMONIAL (if available): [quote + attribution]
FACILITY REFERENCE: [e.g. RETO Brickell, Iyashi Dome]
```

---

## STEP 2 — BUILD FINAL URL + DISPLAY PATH

### Final URL
```
miamielitecoaching.com/[landing-page-slug]
```
Rule: The landing page must have ONE CTA above the fold — book the assessment. Nothing else.

### Display Path (2 fields, 15 chars each)
```
Field 1: [program-keyword]     (e.g. ceo-protocol)
Field 2: [location-keyword]    (e.g. brickell)
```
Full display example: `www.miamielitecoaching.com/ceo-protocol/brickell`

---

## STEP 3 — BUILD KEYWORDS

### Keyword Structure Rules
- Always include high-intent service keywords AND competitor/alternative keywords
- Default match type: start broad, then shift high-intent terms to exact match using [brackets]
- Keep keyword list between 20–30 terms per ad group
- One ad group = one program/theme

### Keyword Formula — Generate These Categories:

**Category 1: Program-Specific (High Intent)**
Pattern: `[program type] [location]`
Examples: `executive fitness miami`, `CEO health coach miami`, `12 week fitness program miami`

**Category 2: Service/Modality (High Intent)**
Pattern: `[specific service] [location]`
Examples: `DEXA scan fitness miami`, `VO2 max testing miami`, `biometric fitness testing miami`

**Category 3: Competitor/Alternative (Intercept)**
Pattern: `[what they're searching instead] [location]`
Examples: `best personal trainer brickell`, `concierge medicine miami`, `private trainer brickell`

**Category 4: Outcome/Goal (Intent)**
Pattern: `[desired result] [location]`
Examples: `biological age test miami`, `longevity clinic miami`, `longevity program miami`

### Exact Match — Always Pin These (Wrap in Brackets)
Apply exact match `[brackets]` to your 5 highest-intent keywords to protect budget:
```
[executive fitness miami]
[private trainer brickell]
[longevity clinic miami]
[CEO health coach miami]
[DEXA scan fitness miami]
```
Swap in program-specific equivalents for each new campaign.

### Negative Keywords — Always Add These
```
free
cheap
DIY
online only
weight loss surgery
gym membership
certification
how to
near me (if geo-targeting is already tight)
```

---

## STEP 4 — BUILD HEADLINES (15 total, 30 chars max each)

### Pinning Rules (Critical)
- **Pin H1 to Position 1**: Program name (brand anchor)
- **Pin H3 to Position 3**: CTA — always "Book Free Assessment"
- Leave H2 and H4–H15 unpinned so Google can A/B test combinations

### Headline Formula

| Position | Type | Formula | Example |
|----------|------|---------|---------|
| H1 (PIN) | Brand/Program | `[Program Name]` | `CEO Performance Protocol` |
| H2 | Location + Category | `Elite [Category] [City]` | `Elite Executive Fitness Miami` |
| H3 (PIN) | CTA | `Book Free Assessment` | `Book Free Assessment` |
| H4 | Outcome | `Optimize Your [Key Result]` | `Optimize Your Biological Age` |
| H5 | Audience + Method | `[Method] for [Audience]` | `Data-Driven Health for CEOs` |
| H6 | Duration + Program | `[X]-Week [Program Type]` | `12-Week Executive Protocol` |
| H7 | Outcome verb | `Lower Your [Key Metric]` | `Lower Your Biological Age` |
| H8 | Precision + Audience | `Precision [Goal] for [Title]` | `Precision Longevity for CEOs` |
| H9 | Facility | `Private Facility · [Location]` | `Private Facility · Brickell` |
| H10 | Key Services | `[Service 1] + [Service 2]` | `DEXA + VO2 Max Testing` |
| H11 | Authority | `Miami's [Title] [Category]` | `Miami's Executive Health Coach` |
| H12 | Urgency/Scarcity | `[X] Spots Left — [Cohort]` | `4 Spots Left — Q2 Cohort` |
| H13 | Insight/Hook | `Stop [Old Way]. Start [New Way].` | `Stop Guessing. Start Measuring.` |
| H14 | Audience Qualifier | `Built for [Audience] [Age]+` | `Built for High Performers 40+` |
| H15 | Method + Outcome | `[Method]. [Outcome].` | `Sports Science. Real Results.` |

### Character Count Check
After writing each headline, count characters. Google hard limit is **30 characters**.
Flag anything over 28 chars for review. Anything over 30 must be trimmed before upload.

---

## STEP 5 — BUILD DESCRIPTIONS (4 total, 90 chars max each)

### Description Formula

| # | Focus | Must Include | Formula |
|---|-------|-------------|---------|
| D1 | Core message | Core brand line + program type | `[Brand tagline]. [X]-week [method] program. [Location detail].` |
| D2 | Audience + Services | Specific audience + key services + urgency | `Built for [audience] in [location]. [Service 1], [Service 2]. [X] spots left for [cohort].` |
| D3 | Outcome + CTA | Key result + elite positioning + CTA | `Lower your [key metric] with [method] and elite coaching. Book free assessment.` |
| D4 | Differentiation | Competitive contrast + location + CTA | `Beyond a [competitor type]. The only [differentiator] in [location]. Apply now.` |

### Description Rules
- Always count characters. Hard limit: **90 characters**
- Never use quotes in descriptions (can trigger policy flags)
- End D1 and D4 with a period. End D2 and D3 with action words (Book free, Apply now)
- Include at least one urgency signal (spots remaining, cohort date, Q2) across the 4 descriptions

---

## STEP 6 — BUILD SITELINKS (6 recommended)

Each sitelink needs: Link Text + Description Line 1 (35 chars) + Description Line 2 (35 chars)

### Standard MEC Sitelink Template

| # | Sitelink Text | Description Line 1 | Description Line 2 |
|---|--------------|--------------------|--------------------|
| SL1 | `Book Free Assessment` | Schedule your complimentary | executive health assessment |
| SL2 | `[Facility Name]` | Train at our premium | [facility location] |
| SL3 | `[Program Name]` | [X]-week data-driven program | built for executives 40+ |
| SL4 | `View All Programs` | Explore our full suite | of executive coaching programs |
| SL5 | `Read Longevity Articles` | Science-backed insights on | biological age & performance |
| SL6 | `About Miami Elite Coaching` | Meet the team behind | Brickell's executive protocol |

Swap SL2 and SL3 text/descriptions to match the specific program being built.

---

## STEP 7 — BUILD CALLOUTS (8 recommended, 25 chars max each)

### Standard MEC Callout Bank
Pull 8 from this list, prioritizing those most relevant to the specific program:

```
12-Week Transformation
DEXA Body Composition
VO2 Max Testing
Sports Science Training
Advanced Recovery
Brickell Private Facility
Limited Q2 Spots
Data-Driven Protocol
Biometric Testing
Iyashi Dome Recovery
Expert Coaching Team
No Contracts Required
Results in 12 Weeks
Executive-Only Program
Precision Nutrition
HRV & Sleep Tracking
```

Rules: No punctuation. No quotes. Keep each under 25 chars. Mix program-specific and brand callouts.

---

## STEP 8 — IMAGE REQUIREMENTS

Google requires at least 4 images. Always provide:

| # | Shot Description | Aspect Ratio | Min Resolution |
|---|-----------------|--------------|----------------|
| 1 | Facility interior (RETO Brickell or program space) | 1.91:1 (landscape) | 1200×628px |
| 2 | Key technology (DEXA, VO2 Max equipment, or program-specific tool) | 1.91:1 (landscape) | 1200×628px |
| 3 | Executive in active/training context — high contrast, no stock look | 1:1 (square) | 1200×1200px |
| 4 | Recovery or results visual (Iyashi Dome, data charts, biometrics) | 1:1 (square) | 1200×1200px |

Image Rules (Google Policy):
- No logo overlays on images
- No text overlays on images
- No GIFs
- No blurry or poorly cropped images
- Images must not be sexually suggestive or contain prohibited content

---

## STEP 9 — CAMPAIGN SETTINGS

| Setting | Value |
|---------|-------|
| Campaign type | Search |
| Campaign goal | Conversions |
| Conversion action | Assessment booking (form submit or calendar booking) |
| Bidding strategy | Target CPA — start at $75–$100 |
| Daily budget | Set by client (minimum recommended: $25/day) |
| Location | Miami, FL — radius targeting around Brickell + Downtown |
| Language | English |
| Ad schedule | Mon–Fri 7am–8pm, Sat 9am–3pm (when executives are researching) |
| Search partners | Disabled (keep traffic on Google only at launch) |
| Display Network | Disabled |

---

## STEP 10 — BUDGET & CPA GUIDANCE

| Daily Budget | Expected Monthly Spend | Est. Assessment Bookings/Month | Recommended Target CPA |
|-------------|----------------------|-------------------------------|------------------------|
| $25/day | ~$750 | 2–4 (learning phase) | $75–$100 |
| $50/day | ~$1,500 | 5–10 | $75–$100 |
| $100/day | ~$3,000 | 12–20 | $60–$80 |

Learning Phase: First 30–45 days. Expect high CPA. Do not adjust bids until 15–20 conversions are recorded.
After learning phase: Review CPA data, tighten to actual average, scale budget on best-performing RSA variant.

---

## STEP 11 — RSA VARIANT STRATEGY

Build 3 RSA variants per ad group. Each targets a different user intent:

| Variant | Intent | Headline 2 Focus | Description Focus |
|---------|--------|-----------------|-------------------|
| RSA 1 — Primary | High-intent service search | Location + category | Core message + services + urgency |
| RSA 2 — Longevity/Outcome | Biological age / longevity searches | Outcome-focused headline | Key metric + method + CTA |
| RSA 3 — Competitor intercept | Searching for alternatives | Differentiation headline | Contrast vs. alternatives + location |

---

## OUTPUT FORMAT INSTRUCTIONS

When generating a completed campaign for a new MEC program, output in this exact order:

```
1. FINAL URL
2. DISPLAY PATH (Field 1 / Field 2)
3. KEYWORD LIST (one per line, exact match flagged with [brackets])
4. NEGATIVE KEYWORDS
5. HEADLINES H1–H15 (with character count and pin notes)
6. DESCRIPTIONS D1–D4 (with character count)
7. SITELINKS SL1–SL6 (with description lines)
8. CALLOUTS (8 selected)
9. IMAGE BRIEF (4 shots described)
10. CAMPAIGN SETTINGS SUMMARY
```

---

## QUALITY CHECKS — Run Before Finalizing

- [ ] All headlines ≤ 30 characters
- [ ] All descriptions ≤ 90 characters
- [ ] All sitelink texts ≤ 25 characters
- [ ] All callouts ≤ 25 characters
- [ ] H1 pinned to Position 1
- [ ] H3 "Book Free Assessment" pinned to Position 3
- [ ] At least 5 headlines contain a keyword from the keyword list
- [ ] At least 1 description contains urgency (spots, cohort, date)
- [ ] Business name matches verified advertiser name
- [ ] Final URL slug matches the actual live landing page
- [ ] Negative keywords list is attached to the campaign

---

## EXAMPLE: CEO Performance Protocol (Completed Reference)

**Final URL:** `miamielitecoaching.com/ceo-protocol`
**Display Path:** `ceo-protocol` / `brickell`

**Headlines:**
H1 (PIN P1): CEO Performance Protocol — 23 chars
H2: Elite Executive Fitness Miami — 30 chars
H3 (PIN P3): Book Free Assessment — 21 chars
H4: Optimize Your Biological Age — 29 chars
H5: Data-Driven Health for CEOs — 28 chars
H6: 12-Week Executive Protocol — 27 chars
H7: Lower Your Biological Age — 26 chars
H8: Precision Longevity for CEOs — 29 chars
H9: Private Facility · Brickell — 28 chars
H10: DEXA + VO2 Max Testing — 22 chars
H11: Miami's Executive Health Coach — 30 chars
H12: 4 Spots Left — Q2 Cohort — 25 chars
H13: Stop Guessing. Start Measuring — 30 chars
H14: Built for High Performers 40+ — 30 chars
H15: Sports Science. Real Results. — 30 chars

**Descriptions:**
D1 (89): You optimize your business. It's time to optimize the asset running it. 12-week data-driven program.
D2 (87): Built for men 40+ in Brickell. DEXA, VO2 Max & sports science. 4 spots left for Q2.
D3 (79): Lower your biological age with precision testing & elite coaching. Book free.
D4 (71): The only biometric-driven CEO health protocol in Brickell. Apply now.

---

*Document version: Q2 2026 | Miami Elite Coaching | For AI-assisted campaign builds only*
