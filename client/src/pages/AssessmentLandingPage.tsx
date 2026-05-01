// AssessmentLandingPage — The MEC Assessment
// Generic, brand-wide landing page for /assessment.
// Destination for Core Health partnership flyer QR code, Google Ads,
// Brickell-area searches, partner referrals, and direct prospects.
//
// Lead capture is fully native: an inline modal intake form posts to the
// tRPC `assessment.create` endpoint which (1) stores the lead in MySQL,
// (2) sends a Manus owner notification, and (3) emails the owner.

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LandingPageLayout from "@/components/LandingPageLayout";
import { trpc } from "@/lib/trpc";

const PHONE_DISPLAY = "(732) 618-3056";
const PHONE_HREF = "tel:+17326183056";

const AGE_RANGES = ["25-34", "35-44", "45-54", "55-64", "65+"] as const;
const PRIMARY_GOALS = [
  "Longevity / Anti-Aging",
  "Fat Loss",
  "Muscle Building",
  "Energy & Performance",
  "General Health",
] as const;
const ACTIVITY_LEVELS = [
  "Sedentary",
  "1-2x per week",
  "3-4x per week",
  "5+ per week",
] as const;
const REFERRAL_SOURCES = [
  "Core Health Partnership",
  "Google Search",
  "Google Ads",
  "Friend / Word of Mouth",
  "Social Media",
  "Other",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  ageRange: string;
  primaryGoal: string;
  activityLevel: string;
  referralSource: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  ageRange: "",
  primaryGoal: "",
  activityLevel: "",
  referralSource: "",
  message: "",
};

const AssessmentLandingPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const createLead = trpc.assessment.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setErrorMsg(null);
    },
    onError: (err) => {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    },
  });

  // Lock body scroll while modal is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const openForm = () => {
    setSubmitted(false);
    setErrorMsg(null);
    setOpen(true);
  };
  const closeForm = () => {
    setOpen(false);
    // Reset shortly after the close animation feels finished.
    setTimeout(() => {
      setForm(EMPTY_FORM);
      setSubmitted(false);
      setErrorMsg(null);
    }, 200);
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg("Name, email, and phone are required.");
      return;
    }
    createLead.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      ageRange: form.ageRange || undefined,
      primaryGoal: form.primaryGoal || undefined,
      activityLevel: form.activityLevel || undefined,
      referralSource: form.referralSource || undefined,
      message: form.message.trim() || undefined,
      source: "assessment-page",
    });
  };

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

          /* ---------- INTAKE MODAL ---------- */
          .mec-assessment .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(6, 19, 37, 0.78);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            z-index: 1000;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 60px 16px 40px;
            overflow-y: auto;
            animation: mec-fade 0.2s ease-out;
          }
          @keyframes mec-fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .mec-assessment .modal {
            background: var(--ivory);
            color: var(--ink);
            border-top: 4px solid var(--gold);
            max-width: 580px;
            width: 100%;
            padding: 40px clamp(20px, 5vw, 48px) 36px;
            position: relative;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          }
          .mec-assessment .modal .close {
            position: absolute;
            top: 12px;
            right: 16px;
            background: none;
            border: none;
            font-size: 28px;
            line-height: 1;
            color: var(--muted);
            cursor: pointer;
            padding: 6px 10px;
          }
          .mec-assessment .modal .close:hover { color: var(--rose); }
          .mec-assessment .modal h3 {
            font-size: clamp(26px, 3vw, 32px);
            color: var(--navy);
            margin-bottom: 8px;
          }
          .mec-assessment .modal .modal-sub {
            color: var(--muted);
            font-size: 15px;
            margin-bottom: 24px;
          }
          .mec-assessment .modal .field {
            margin-bottom: 16px;
          }
          .mec-assessment .modal label {
            display: block;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 12px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--navy);
            margin-bottom: 6px;
          }
          .mec-assessment .modal label .req { color: var(--rose); margin-left: 3px; }
          .mec-assessment .modal input,
          .mec-assessment .modal select,
          .mec-assessment .modal textarea {
            width: 100%;
            font-family: 'Source Serif 4', serif;
            font-size: 16px;
            padding: 12px 14px;
            border: 1px solid var(--rule);
            background: #FFFFFF;
            color: var(--ink);
            border-radius: 0;
            -webkit-appearance: none;
            appearance: none;
          }
          .mec-assessment .modal select {
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%235C5C5C' d='M6 8L0 0h12z'/></svg>");
            background-repeat: no-repeat;
            background-position: right 14px center;
            padding-right: 36px;
          }
          .mec-assessment .modal input:focus,
          .mec-assessment .modal select:focus,
          .mec-assessment .modal textarea:focus {
            outline: none;
            border-color: var(--gold);
            box-shadow: 0 0 0 2px rgba(201, 163, 82, 0.18);
          }
          .mec-assessment .modal textarea {
            min-height: 88px;
            resize: vertical;
          }
          .mec-assessment .modal .row-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          @media (max-width: 520px) {
            .mec-assessment .modal .row-2 { grid-template-columns: 1fr; }
          }
          .mec-assessment .modal .submit {
            width: 100%;
            margin-top: 8px;
            background: var(--gold);
            color: var(--navy-deep);
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            padding: 16px 28px;
            border: none;
            cursor: pointer;
            transition: background 0.15s ease, transform 0.15s ease;
          }
          .mec-assessment .modal .submit:hover:not(:disabled) {
            background: var(--gold-light);
            transform: translateY(-1px);
          }
          .mec-assessment .modal .submit:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          .mec-assessment .modal .err {
            color: var(--rose);
            font-size: 14px;
            margin-bottom: 10px;
          }
          .mec-assessment .modal .privacy {
            margin-top: 14px;
            font-size: 12px;
            color: var(--muted);
            text-align: center;
          }

          /* Success state */
          .mec-assessment .modal .success {
            text-align: center;
            padding: 12px 0 8px;
          }
          .mec-assessment .modal .success .check {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--gold);
            color: var(--navy-deep);
            font-size: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
          }
          .mec-assessment .modal .success h3 { margin-bottom: 12px; }
          .mec-assessment .modal .success p {
            color: var(--muted);
            font-size: 16px;
            margin-bottom: 26px;
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
              <button type="button" className="btn-primary" onClick={openForm}>
                Book Your Assessment
              </button>
              <a className="btn-secondary" href={PHONE_HREF}>
                Or call <b>{PHONE_DISPLAY}</b>
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
              <button type="button" className="btn-primary" onClick={openForm}>
                Book Your Assessment
              </button>
              <a className="btn-secondary" href={PHONE_HREF}>
                Or call <b>{PHONE_DISPLAY}</b>
              </a>
            </div>
            <div className="fine-print">MIAMIELITECOACHING.COM</div>
          </div>
        </section>

        {/* ============== INTAKE MODAL ============== */}
        {open && (
          <div
            className="modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeForm();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Book your MEC Assessment"
          >
            <div className="modal">
              <button
                type="button"
                className="close"
                onClick={closeForm}
                aria-label="Close"
              >
                ×
              </button>

              {submitted ? (
                <div className="success">
                  <div className="check">✓</div>
                  <h3>You&apos;re on the list.</h3>
                  <p>
                    Thanks, {form.name.split(" ")[0] || "—"}. A Miami Elite Coaching
                    advisor will reach out within 24 hours to confirm your assessment.
                  </p>
                  <button
                    type="button"
                    className="submit"
                    onClick={closeForm}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3>Book Your Assessment</h3>
                  <p className="modal-sub">
                    Tell us a bit about yourself — we&apos;ll reach out within 24 hours
                    to confirm your appointment.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    {errorMsg && <div className="err">{errorMsg}</div>}

                    <div className="field">
                      <label htmlFor="mec-name">
                        Full Name<span className="req">*</span>
                      </label>
                      <input
                        id="mec-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor="mec-email">
                          Email<span className="req">*</span>
                        </label>
                        <input
                          id="mec-email"
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="mec-phone">
                          Phone<span className="req">*</span>
                        </label>
                        <input
                          id="mec-phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          placeholder="(305) 555-0000"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor="mec-age">Age Range</label>
                        <select
                          id="mec-age"
                          value={form.ageRange}
                          onChange={(e) => update("ageRange", e.target.value)}
                        >
                          <option value="">Select…</option>
                          {AGE_RANGES.map((v) => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="mec-activity">Activity Level</label>
                        <select
                          id="mec-activity"
                          value={form.activityLevel}
                          onChange={(e) => update("activityLevel", e.target.value)}
                        >
                          <option value="">Select…</option>
                          {ACTIVITY_LEVELS.map((v) => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="mec-goal">Primary Goal</label>
                      <select
                        id="mec-goal"
                        value={form.primaryGoal}
                        onChange={(e) => update("primaryGoal", e.target.value)}
                      >
                        <option value="">Select…</option>
                        {PRIMARY_GOALS.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="mec-source">How did you hear about us?</label>
                      <select
                        id="mec-source"
                        value={form.referralSource}
                        onChange={(e) => update("referralSource", e.target.value)}
                      >
                        <option value="">Select…</option>
                        {REFERRAL_SOURCES.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="mec-msg">Anything we should know? (optional)</label>
                      <textarea
                        id="mec-msg"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Goals, injuries, scheduling preferences…"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit"
                      disabled={createLead.isPending}
                    >
                      {createLead.isPending ? "Submitting…" : "Submit"}
                    </button>

                    <div className="privacy">
                      Your information is private. We&apos;ll only use it to contact you
                      about your assessment.
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </LandingPageLayout>
  );
};

export default AssessmentLandingPage;
