// AssessmentLandingPage — The MEC Assessment
// Generic, brand-wide landing page for /assessment.
// Destination for Core Health partnership flyer QR code, Google Ads,
// Brickell-area searches, partner referrals, and direct prospects.
//
// Design: Self-contained scoped CSS using brand tokens (Navy/Gold/Rose/Ivory).
// Fonts (Barlow Condensed + Source Serif 4) are already loaded site-wide.
// Wrapped in LandingPageLayout (no main nav, noindex, minimal header/footer).

import React from "react";
import { Helmet } from "react-helmet-async";
import LandingPageLayout from "@/components/LandingPageLayout";

// ⚠️  REPLACE WITH THE LIVE TYPEFORM URL
const BOOKING_URL = "https://form.typeform.com/to/REPLACE_ME";

const AssessmentLandingPage: React.FC = () => {
  return (
    <LandingPageLayout>
      <Helmet>
        <title>The MEC Assessment | Miami Elite Coaching</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The Miami Elite Coaching initial assessment — DEXA, VO2 Max, and structured strength testing. A custom 12-week program designed by Sports Scientists. Train smarter. Move better. Perform stronger."
        />
      </Helmet>

      <div className="mec-assessment">
        <style>{`
          .mec-assessment {
            --navy: #0A1F3D;
            --navy-deep: #061325;
            --gold: #C9A352;
            --gold-light: #E5C87A;
            --rose: #993556;
            --ivory: #FAF7EF;
            --cream: #F3EDDD;
            --ink: #1A1A1A;
            --muted: #5C5C5C;
            --muted-on-dark: rgba(232, 229, 220, 0.78);
            --rule: rgba(217, 207, 184, 0.45);

            font-family: 'Source Serif 4', Georgia, serif;
            color: var(--ink);
            background: var(--ivory);
            line-height: 1.55;
            font-size: 17px;
          }
          .mec-assessment * { box-sizing: border-box; }

          .mec-assessment .container {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 32px;
          }

          .mec-assessment .eyebrow {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 13px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--gold);
          }
          .mec-assessment .eyebrow.rose { color: var(--rose); }

          .mec-assessment h1, .mec-assessment h2, .mec-assessment h3 {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            color: var(--navy);
            line-height: 1.05;
            letter-spacing: 0.005em;
          }
          .mec-assessment .on-dark h1,
          .mec-assessment .on-dark h2,
          .mec-assessment .on-dark h3 { color: #FFFFFF; }

          .mec-assessment em.rose {
            font-family: 'Source Serif 4', serif;
            font-style: italic;
            font-weight: 400;
            color: var(--rose);
          }
          .mec-assessment .on-dark em.rose { color: var(--gold-light); }

          /* ---------- HERO ---------- */
          .mec-assessment .hero {
            background:
              radial-gradient(ellipse 80% 60% at 70% 20%, rgba(201, 163, 82, 0.12) 0%, transparent 60%),
              linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%);
            color: var(--ivory);
            padding: 120px 0 110px 0;
            position: relative;
            overflow: hidden;
          }
          .mec-assessment .hero::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--gold) 0%, var(--rose) 100%);
          }
          .mec-assessment .hero .eyebrow { margin-bottom: 22px; }
          .mec-assessment .hero h1 {
            font-size: clamp(44px, 6vw, 76px);
            margin-bottom: 26px;
            max-width: 18ch;
          }
          .mec-assessment .hero .sub {
            font-size: clamp(17px, 1.4vw, 20px);
            color: var(--muted-on-dark);
            max-width: 60ch;
            margin-bottom: 38px;
          }
          .mec-assessment .hero .sub strong {
            color: #FFFFFF;
            font-weight: 600;
          }

          /* CTA buttons */
          .mec-assessment .cta-row {
            display: flex;
            gap: 18px;
            flex-wrap: wrap;
            align-items: center;
          }
          .mec-assessment .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: var(--gold);
            color: var(--navy-deep);
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            padding: 18px 36px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            transition: transform 0.15s ease, background 0.15s ease;
          }
          .mec-assessment .btn-primary:hover {
            background: var(--gold-light);
            transform: translateY(-1px);
          }
          .mec-assessment .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'Barlow Condensed', sans-serif;
            color: var(--ivory);
            font-size: 15px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid rgba(201, 163, 82, 0.4);
            padding-bottom: 4px;
            transition: border-color 0.15s ease, color 0.15s ease;
          }
          .mec-assessment .btn-secondary:hover {
            border-color: var(--gold);
            color: var(--gold-light);
          }
          .mec-assessment .btn-secondary b {
            color: var(--gold);
            font-weight: 600;
            letter-spacing: 0.04em;
          }

          /* ---------- INTRO ---------- */
          .mec-assessment .intro {
            background: var(--ivory);
            padding: 110px 0;
            text-align: center;
          }
          .mec-assessment .intro .eyebrow { margin-bottom: 18px; }
          .mec-assessment .intro h2 {
            font-size: clamp(34px, 4.2vw, 52px);
            margin-bottom: 28px;
            max-width: 22ch;
            margin-left: auto;
            margin-right: auto;
          }
          .mec-assessment .intro .lead {
            font-size: 19px;
            line-height: 1.6;
            max-width: 64ch;
            margin: 0 auto;
            color: var(--ink);
          }
          .mec-assessment .intro .lead + .lead { margin-top: 18px; }

          /* ---------- INCLUDED (3 cards) ---------- */
          .mec-assessment .included {
            background: var(--navy);
            color: var(--ivory);
            padding: 110px 0;
          }
          .mec-assessment .included .header { text-align: center; margin-bottom: 64px; }
          .mec-assessment .included .header .eyebrow { margin-bottom: 14px; }
          .mec-assessment .included .header h2 {
            font-size: clamp(34px, 4.2vw, 52px);
            color: #fff;
            max-width: 22ch;
            margin: 0 auto;
          }

          .mec-assessment .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }
          @media (max-width: 880px) {
            .mec-assessment .cards { grid-template-columns: 1fr; }
          }
          .mec-assessment .card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--rule);
            border-top: 3px solid var(--gold);
            padding: 36px 32px;
            position: relative;
          }
          .mec-assessment .card .num {
            font-family: 'Barlow Condensed', sans-serif;
            color: var(--gold);
            font-size: 12px;
            letter-spacing: 0.32em;
            font-weight: 600;
            margin-bottom: 14px;
          }
          .mec-assessment .card h3 {
            font-size: 26px;
            color: #fff;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }
          .mec-assessment .card .tagline {
            font-family: 'Source Serif 4', serif;
            font-style: italic;
            color: var(--gold-light);
            font-size: 14px;
            margin-bottom: 18px;
          }
          .mec-assessment .card p {
            font-size: 15px;
            line-height: 1.6;
            color: var(--muted-on-dark);
            margin-bottom: 14px;
          }
          .mec-assessment .card .why {
            margin-top: 18px;
            padding-top: 16px;
            border-top: 1px solid var(--rule);
            font-size: 14px;
            color: var(--muted-on-dark);
          }
          .mec-assessment .card .why strong {
            display: block;
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            color: var(--gold);
            font-size: 11px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            margin-bottom: 8px;
          }

          /* ---------- WHAT TO EXPECT ---------- */
          .mec-assessment .expect {
            background: var(--cream);
            padding: 110px 0;
          }
          .mec-assessment .expect .header { text-align: center; margin-bottom: 64px; }
          .mec-assessment .expect .header h2 { font-size: clamp(34px, 4.2vw, 52px); margin-top: 14px; }
          .mec-assessment .expect .header p {
            margin-top: 16px;
            color: var(--muted);
            max-width: 56ch;
            margin-left: auto;
            margin-right: auto;
            font-size: 17px;
          }

          .mec-assessment .timeline {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            position: relative;
          }
          @media (max-width: 880px) {
            .mec-assessment .timeline { grid-template-columns: 1fr 1fr; gap: 32px; }
          }
          @media (max-width: 540px) {
            .mec-assessment .timeline { grid-template-columns: 1fr; }
          }
          .mec-assessment .step {
            background: #fff;
            border: 1px solid var(--rule);
            padding: 28px 24px;
            position: relative;
          }
          .mec-assessment .step .step-num {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 38px;
            color: var(--gold);
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0.02em;
            margin-bottom: 6px;
          }
          .mec-assessment .step .step-time {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 11px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: var(--rose);
            font-weight: 600;
            margin-bottom: 14px;
          }
          .mec-assessment .step h3 {
            font-size: 19px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }
          .mec-assessment .step p {
            font-size: 14.5px;
            color: var(--muted);
            line-height: 1.55;
          }

          /* ---------- WHAT YOU LEAVE WITH ---------- */
          .mec-assessment .outcomes {
            background: var(--ivory);
            padding: 110px 0;
          }
          .mec-assessment .outcomes-grid {
            display: grid;
            grid-template-columns: 1.05fr 1fr;
            gap: 64px;
            align-items: center;
          }
          @media (max-width: 880px) {
            .mec-assessment .outcomes-grid { grid-template-columns: 1fr; gap: 40px; }
          }
          .mec-assessment .outcomes h2 {
            font-size: clamp(34px, 4.2vw, 52px);
            margin-bottom: 20px;
          }
          .mec-assessment .outcomes p {
            color: var(--muted);
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .mec-assessment .outcomes ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .mec-assessment .outcomes li {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 18px 0;
            border-bottom: 1px solid var(--rule);
          }
          .mec-assessment .outcomes li:last-child { border-bottom: none; }
          .mec-assessment .outcomes li::before {
            content: "";
            width: 10px;
            height: 10px;
            background: var(--gold);
            transform: rotate(45deg);
            margin-top: 8px;
            flex-shrink: 0;
          }
          .mec-assessment .outcomes li strong {
            display: block;
            font-family: 'Barlow Condensed', sans-serif;
            color: var(--navy);
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            margin-bottom: 4px;
          }
          .mec-assessment .outcomes li span {
            color: var(--muted);
            font-size: 15px;
            line-height: 1.5;
          }

          /* ---------- PRICING / FINAL CTA ---------- */
          .mec-assessment .final {
            background: linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%);
            color: var(--ivory);
            padding: 110px 0;
            text-align: center;
            position: relative;
          }
          .mec-assessment .final::before {
            content: "";
            position: absolute;
            top: 0; left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: var(--gold);
          }
          .mec-assessment .final .eyebrow { margin-bottom: 18px; }
          .mec-assessment .final h2 {
            font-size: clamp(38px, 4.6vw, 60px);
            color: #fff;
            margin-bottom: 24px;
            max-width: 22ch;
            margin-left: auto;
            margin-right: auto;
          }
          .mec-assessment .price-line {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 22px;
            color: var(--gold-light);
            letter-spacing: 0.04em;
            margin-bottom: 38px;
          }
          .mec-assessment .price-line b {
            color: #fff;
            font-weight: 600;
          }
          .mec-assessment .price-line .partner-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: var(--muted-on-dark);
            font-style: italic;
            font-family: 'Source Serif 4', serif;
            letter-spacing: 0;
          }
          .mec-assessment .final .cta-row { justify-content: center; }
          .mec-assessment .final .fine-print {
            margin-top: 38px;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 12px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            color: var(--muted-on-dark);
          }
        `}</style>

        {/* ============== HERO ============== */}
        <section className="hero on-dark">
          <div className="container">
            <div className="eyebrow">— THE MIAMI ELITE COACHING ASSESSMENT</div>
            <h1>
              Train Smarter. Move Better.<br />
              <em className="rose">Perform Stronger.</em>
            </h1>
            <p className="sub">
              The 90-minute foundation behind every program we build. Full diagnostics,
              expert analysis, and a custom plan — engineered by <strong>Sports Scientists</strong>.
            </p>
            <div className="cta-row">
              <a
                className="btn-primary"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Assessment
              </a>
              <a className="btn-secondary" href="tel:+17326183056">
                Or call <b>(732) 618-3056</b>
              </a>
            </div>
          </div>
        </section>

        {/* ============== INTRO ============== */}
        <section className="intro">
          <div className="container">
            <div className="eyebrow rose">— WHY THIS ASSESSMENT</div>
            <h2>
              Most training plans are guesses.<br />
              <em className="rose">Yours won&apos;t be.</em>
            </h2>
            <p className="lead">
              The MEC Assessment uses gold-standard diagnostics — DEXA, VO<sub>2</sub> Max, and
              a structured strength evaluation — to map exactly where your body is today,
              and exactly what we need to do to take it where you want to go.
            </p>
            <p className="lead">
              Whether you&apos;re optimizing for longevity, breaking through a plateau, or
              preparing for performance, the data we capture in this 90-minute session is
              the same data sports scientists use with elite athletes.
            </p>
          </div>
        </section>

        {/* ============== WHAT'S INCLUDED ============== */}
        <section className="included on-dark">
          <div className="container">
            <div className="header">
              <div className="eyebrow">— WHAT&apos;S INCLUDED</div>
              <h2>Three diagnostics. One complete picture.</h2>
            </div>
            <div className="cards">
              <article className="card">
                <div className="num">— 01</div>
                <h3>DEXA Scan</h3>
                <div className="tagline">Body composition, region by region.</div>
                <p>
                  The medical gold standard for body composition. Precise measurements of
                  fat mass, lean muscle, bone density, and visceral fat — broken down by region.
                </p>
                <div className="why">
                  <strong>Why it matters</strong>
                  Lean muscle is the single most protective tissue against aging, injury, and
                  metabolic decline. We need to know how much you have — and where.
                </div>
              </article>

              <article className="card">
                <div className="num">— 02</div>
                <h3>VO<sub>2</sub> Max</h3>
                <div className="tagline">The strongest predictor of healthspan.</div>
                <p>
                  A cardiopulmonary test that quantifies your aerobic engine — the
                  capacity of your heart and lungs to deliver oxygen under load.
                </p>
                <div className="why">
                  <strong>Why it matters</strong>
                  VO<sub>2</sub> Max is the most reliable predictor of all-cause mortality
                  known to medical science — and it&apos;s improvable at any age.
                </div>
              </article>

              <article className="card">
                <div className="num">— 03</div>
                <h3>Strength Assessment</h3>
                <div className="tagline">Functional baseline across the four pillars.</div>
                <p>
                  A structured evaluation of pushing, pulling, hinging, and lower-body
                  strength using protocols drawn from Olympic prep and rehabilitation science.
                </p>
                <div className="why">
                  <strong>Why it matters</strong>
                  Muscle quality is the foundation of every other physical capacity. We
                  can&apos;t build a program without knowing where you stand.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============== WHAT TO EXPECT ============== */}
        <section className="expect">
          <div className="container">
            <div className="header">
              <div className="eyebrow rose">— WHAT TO EXPECT</div>
              <h2>Ninety minutes. Four steps.</h2>
              <p>
                A focused, professional session. No fluff, no upsells — just the data and
                the strategy you came for.
              </p>
            </div>
            <div className="timeline">
              <div className="step">
                <div className="step-num">01</div>
                <div className="step-time">15 MINUTES</div>
                <h3>Intake &amp; Review</h3>
                <p>Goals, history, current training, and any medical considerations or protocols you&apos;re working with.</p>
              </div>
              <div className="step">
                <div className="step-num">02</div>
                <div className="step-time">45 MINUTES</div>
                <h3>Full Diagnostics</h3>
                <p>DEXA scan, VO<sub>2</sub> Max test, and a structured strength assessment — administered back-to-back.</p>
              </div>
              <div className="step">
                <div className="step-num">03</div>
                <div className="step-time">15 MINUTES</div>
                <h3>Data Review</h3>
                <p>A walk-through of your numbers with a Sports Scientist. What they mean, and what they don&apos;t.</p>
              </div>
              <div className="step">
                <div className="step-num">04</div>
                <div className="step-time">15 MINUTES</div>
                <h3>Program Design</h3>
                <p>A custom 12-week training framework, designed for your body, your goals, and your schedule.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== OUTCOMES ============== */}
        <section className="outcomes">
          <div className="container">
            <div className="outcomes-grid">
              <div>
                <div className="eyebrow rose">— WHAT YOU LEAVE WITH</div>
                <h2>
                  A baseline, a plan,<br />
                  <em className="rose">and a path forward.</em>
                </h2>
                <p>
                  You won&apos;t walk out with a generic recommendation. You&apos;ll walk
                  out knowing exactly where you stand and exactly what to do about it —
                  with the data to track every win along the way.
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <div>
                      <strong>Comprehensive Baseline Report</strong>
                      <span>Full DEXA, VO<sub>2</sub> Max, and strength data — formatted for clarity, easy to share with your physician.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>Custom 12-Week Program</strong>
                      <span>Built around your numbers, your goals, and the time you actually have to train.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>Format-Flexible Delivery</strong>
                      <span>Train in-person at our private studio near Coconut Grove, in your home, or fully online.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>Optional Physician Reports</strong>
                      <span>Progress notes back to your doctor or longevity practice on request.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA / PRICING ============== */}
        <section id="book" className="final on-dark">
          <div className="container">
            <div className="eyebrow">— READY TO BEGIN</div>
            <h2>
              Stop guessing.<br />
              <em className="rose">Start training with data.</em>
            </h2>
            <div className="price-line">
              <b>$900</b> &nbsp;·&nbsp; The MEC Assessment
              <span className="partner-note">
                Complimentary for select partner program members. Mention your referral when booking.
              </span>
            </div>
            <div className="cta-row">
              <a
                className="btn-primary"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Assessment
              </a>
              <a className="btn-secondary" href="tel:+17326183056">
                Or call <b>(732) 618-3056</b>
              </a>
            </div>
            <div className="fine-print">MIAMIELITECOACHING.COM</div>
          </div>
        </section>
      </div>
    </LandingPageLayout>
  );
};

export default AssessmentLandingPage;
