// CoreHealth — Core Health Partnership Landing Page
// Path: /corehealth
// Audience: Core Health (longevity-medicine clinic) members who scan the
// flyer QR code or are referred by their physician.
//
// Design: Brand-matched to the MEC × Core Health flyer (MEC_CoreHealth_Flyer_v4).
// Cream background, deep navy hero card, brushed gold + burgundy accents,
// serif headline (Source Serif 4) + condensed sans (Barlow Condensed).
//
// Lead capture: native intake form posts to the existing tRPC
// `assessment.create` endpoint with source = "corehealth-page" and
// referralSource = "Core Health Partnership". All Core Health leads land
// in the same admin dashboard as the rest of the assessment funnel.

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LandingPageLayout from "@/components/LandingPageLayout";
import { trpc } from "@/lib/trpc";

const PHONE_DISPLAY = "(732) 618-3056";
const PHONE_HREF = "tel:+17326183056";

const DELIVERY_FORMATS = [
  "In-Person (Coconut Grove studio)",
  "In-Home (we come to you)",
  "Online (programming delivered remotely)",
] as const;

const TIME_OF_DAY = [
  "Early morning (before 9am)",
  "Late morning (9am–12pm)",
  "Afternoon (12pm–4pm)",
  "Evening (after 4pm)",
  "Flexible",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  isCoreHealthPatient: string;
  preferredFormat: string;
  preferredTime: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  isCoreHealthPatient: "",
  preferredFormat: "",
  preferredTime: "",
  message: "",
};

const CoreHealth: React.FC = () => {
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

    // Compose a human-readable message from the Core Health-specific fields
    // so they land in the existing assessment lead table without schema changes.
    const messageLines: string[] = [];
    if (form.isCoreHealthPatient) {
      messageLines.push(`Core Health patient: ${form.isCoreHealthPatient}`);
    }
    if (form.preferredFormat) {
      messageLines.push(`Preferred format: ${form.preferredFormat}`);
    }
    if (form.preferredTime) {
      messageLines.push(`Preferred time: ${form.preferredTime}`);
    }
    if (form.message.trim()) {
      messageLines.push("");
      messageLines.push(form.message.trim());
    }

    createLead.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      referralSource: "Core Health Partnership",
      message: messageLines.length ? messageLines.join("\n") : undefined,
      source: "corehealth-page",
    });
  };

  return (
    <LandingPageLayout>
      <Helmet>
        <title>Core Health × Miami Elite Coaching | Complimentary Assessment</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Core Health members: claim your complimentary $900 initial assessment with Miami Elite Coaching. DEXA, VO2 Max, and structured strength testing — paired with a custom 12-week program built around your diagnostics."
        />
      </Helmet>

      <div className="mec-corehealth">
        <style>{`
          .mec-corehealth {
            --cream: #F5EFE0;
            --cream-deep: #EBE3CF;
            --navy: #0F1B3C;
            --navy-deep: #0A1330;
            --burgundy: #7B2C3B;
            --burgundy-soft: #9A3A4B;
            --gold: #C9A24B;
            --gold-light: #E2BF6F;
            --ink: #1A1A1A;
            --muted: #5C5C5C;
            --muted-on-dark: rgba(245, 239, 224, 0.78);
            --rule: rgba(15, 27, 60, 0.14);
            --rule-on-dark: rgba(201, 162, 75, 0.32);

            font-family: 'Source Serif 4', Georgia, serif;
            color: var(--ink);
            background: var(--cream);
            line-height: 1.55;
            font-size: 17px;
          }
          .mec-corehealth * { box-sizing: border-box; }

          .mec-corehealth .container {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 32px;
          }

          .mec-corehealth .eyebrow {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 13px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--gold);
          }
          .mec-corehealth .eyebrow.burgundy { color: var(--burgundy); }

          .mec-corehealth h1, .mec-corehealth h2, .mec-corehealth h3 {
            font-family: 'Source Serif 4', Georgia, serif;
            font-weight: 600;
            color: var(--navy);
            line-height: 1.08;
            letter-spacing: -0.005em;
            margin: 0;
          }
          .mec-corehealth .on-dark h1,
          .mec-corehealth .on-dark h2,
          .mec-corehealth .on-dark h3 { color: var(--cream); }

          .mec-corehealth em.burgundy {
            font-style: italic;
            font-weight: 500;
            color: var(--burgundy);
          }
          .mec-corehealth .on-dark em.burgundy { color: var(--gold-light); }

          /* gold rule */
          .mec-corehealth .gold-rule {
            display: inline-block;
            width: 56px;
            height: 2px;
            background: var(--gold);
            margin-bottom: 22px;
          }

          /* ---------- HERO ---------- */
          .mec-corehealth .hero {
            background: var(--cream);
            padding: 96px 0 72px;
            position: relative;
            overflow: hidden;
          }
          .mec-corehealth .hero::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--gold) 0%, var(--burgundy) 100%);
          }
          .mec-corehealth .hero .partner-line {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 13px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--burgundy);
            margin-bottom: 28px;
          }
          .mec-corehealth .hero .partner-line span.divider {
            display: inline-block;
            width: 18px;
            height: 1px;
            background: var(--gold);
            vertical-align: middle;
            margin: 0 12px 4px;
          }
          .mec-corehealth .hero h1 {
            font-size: clamp(42px, 6vw, 72px);
            margin-bottom: 28px;
            max-width: 18ch;
          }
          .mec-corehealth .hero .sub {
            font-size: clamp(17px, 1.4vw, 20px);
            color: #2F3A4F;
            max-width: 60ch;
            margin-bottom: 36px;
            line-height: 1.55;
          }
          .mec-corehealth .hero .sub strong { color: var(--navy); font-weight: 600; }

          /* CTA buttons */
          .mec-corehealth .cta-row {
            display: flex;
            gap: 18px;
            flex-wrap: wrap;
            align-items: center;
          }
          .mec-corehealth .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: var(--navy);
            color: var(--cream);
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            padding: 18px 36px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            transition: transform 0.15s ease, background 0.15s ease;
          }
          .mec-corehealth .btn-primary:hover {
            background: var(--navy-deep);
            transform: translateY(-1px);
          }
          .mec-corehealth .btn-primary.gold {
            background: var(--gold);
            color: var(--navy-deep);
          }
          .mec-corehealth .btn-primary.gold:hover { background: var(--gold-light); }
          .mec-corehealth .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'Barlow Condensed', sans-serif;
            color: var(--navy);
            font-size: 15px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid var(--gold);
            padding-bottom: 4px;
            transition: opacity 0.15s ease;
          }
          .mec-corehealth .btn-secondary:hover { opacity: 0.7; }
          .mec-corehealth .btn-secondary b {
            color: var(--burgundy);
            font-weight: 600;
            letter-spacing: 0.04em;
          }
          .mec-corehealth .on-dark .btn-secondary {
            color: var(--cream);
            border-bottom-color: var(--gold);
          }
          .mec-corehealth .on-dark .btn-secondary b { color: var(--gold-light); }

          /* ---------- THREE PILLARS ---------- */
          .mec-corehealth .pillars {
            background: var(--cream);
            padding: 32px 0 80px;
          }
          .mec-corehealth .pillars-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            border-top: 1px solid var(--rule);
            border-bottom: 1px solid var(--rule);
          }
          @media (max-width: 880px) {
            .mec-corehealth .pillars-grid { grid-template-columns: 1fr; }
          }
          .mec-corehealth .pillar {
            padding: 44px 28px;
            text-align: center;
            border-right: 1px solid var(--rule);
          }
          .mec-corehealth .pillar:last-child { border-right: none; }
          @media (max-width: 880px) {
            .mec-corehealth .pillar { border-right: none; border-bottom: 1px solid var(--rule); }
            .mec-corehealth .pillar:last-child { border-bottom: none; }
          }
          .mec-corehealth .pillar .pill-icon {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 14px;
          }
          .mec-corehealth .pillar h3 {
            font-family: 'Source Serif 4', serif;
            font-size: 30px;
            font-weight: 600;
            color: var(--navy);
            margin-bottom: 10px;
            letter-spacing: -0.01em;
          }
          .mec-corehealth .pillar .pill-tag {
            font-family: 'Source Serif 4', serif;
            font-style: italic;
            color: var(--burgundy);
            font-size: 15px;
            margin-bottom: 14px;
          }
          .mec-corehealth .pillar p {
            font-size: 15px;
            color: var(--muted);
            line-height: 1.55;
            max-width: 28ch;
            margin: 0 auto;
          }

          /* ---------- HERO OFFER CARD (NAVY) ---------- */
          .mec-corehealth .offer {
            background: var(--cream);
            padding: 0 0 96px;
          }
          .mec-corehealth .offer-card {
            background: var(--navy);
            color: var(--cream);
            padding: 72px 48px;
            text-align: center;
            position: relative;
            border-top: 3px solid var(--gold);
          }
          .mec-corehealth .offer-card::before,
          .mec-corehealth .offer-card::after {
            content: "";
            position: absolute;
            width: 28px;
            height: 28px;
            border: 1px solid var(--gold);
          }
          .mec-corehealth .offer-card::before {
            top: 14px; left: 14px;
            border-right: none; border-bottom: none;
          }
          .mec-corehealth .offer-card::after {
            bottom: 14px; right: 14px;
            border-left: none; border-top: none;
          }
          .mec-corehealth .offer-card .eyebrow {
            color: var(--gold);
            margin-bottom: 22px;
          }
          .mec-corehealth .offer-card h2 {
            font-size: clamp(34px, 4.4vw, 54px);
            color: var(--cream);
            margin-bottom: 28px;
            max-width: 22ch;
            margin-left: auto;
            margin-right: auto;
          }
          .mec-corehealth .offer-card .price-line {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 26px;
            letter-spacing: 0.04em;
            color: var(--cream);
            margin-bottom: 12px;
          }
          .mec-corehealth .offer-card .price-line .strike {
            text-decoration: line-through;
            color: var(--muted-on-dark);
            margin-right: 14px;
            font-weight: 400;
          }
          .mec-corehealth .offer-card .price-line .free {
            color: var(--gold-light);
            font-weight: 600;
            letter-spacing: 0.08em;
          }
          .mec-corehealth .offer-card .qualifier {
            font-family: 'Source Serif 4', serif;
            font-style: italic;
            font-size: 15px;
            color: var(--muted-on-dark);
            margin-bottom: 36px;
          }
          .mec-corehealth .offer-card .cta-row { justify-content: center; }

          /* ---------- LEAD FORM (inline) ---------- */
          .mec-corehealth .lead-form-section {
            background: var(--cream-deep);
            padding: 96px 0;
            border-top: 1px solid var(--rule);
            border-bottom: 1px solid var(--rule);
          }
          .mec-corehealth .lead-form-section .header {
            text-align: center;
            margin-bottom: 48px;
          }
          .mec-corehealth .lead-form-section .header .eyebrow { margin-bottom: 14px; }
          .mec-corehealth .lead-form-section .header h2 {
            font-size: clamp(32px, 4vw, 48px);
            margin-bottom: 14px;
            max-width: 22ch;
            margin-left: auto;
            margin-right: auto;
          }
          .mec-corehealth .lead-form-section .header p {
            color: var(--muted);
            font-size: 17px;
            max-width: 56ch;
            margin: 0 auto;
          }

          .mec-corehealth .lead-form {
            background: var(--cream);
            padding: 44px 40px;
            max-width: 720px;
            margin: 0 auto;
            border: 1px solid var(--rule);
            border-top: 3px solid var(--gold);
          }
          @media (max-width: 600px) {
            .mec-corehealth .lead-form { padding: 32px 22px; }
          }
          .mec-corehealth .field { margin-bottom: 18px; }
          .mec-corehealth .row-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          @media (max-width: 600px) {
            .mec-corehealth .row-2 { grid-template-columns: 1fr; gap: 0; }
          }
          .mec-corehealth label {
            display: block;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 12px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--navy);
            font-weight: 600;
            margin-bottom: 8px;
          }
          .mec-corehealth label .req { color: var(--burgundy); margin-left: 4px; }
          .mec-corehealth input,
          .mec-corehealth select,
          .mec-corehealth textarea {
            width: 100%;
            padding: 12px 14px;
            background: #fff;
            border: 1px solid var(--rule);
            font-family: 'Source Serif 4', serif;
            font-size: 16px;
            color: var(--ink);
            border-radius: 0;
            transition: border-color 0.15s ease;
          }
          .mec-corehealth input:focus,
          .mec-corehealth select:focus,
          .mec-corehealth textarea:focus {
            outline: none;
            border-color: var(--gold);
          }
          .mec-corehealth textarea { min-height: 90px; resize: vertical; }
          .mec-corehealth .err {
            color: var(--burgundy);
            font-size: 14px;
            margin-bottom: 14px;
          }
          .mec-corehealth .submit {
            width: 100%;
            background: var(--navy);
            color: var(--cream);
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            padding: 18px 28px;
            border: none;
            cursor: pointer;
            margin-top: 8px;
            transition: background 0.15s ease, transform 0.15s ease;
          }
          .mec-corehealth .submit:hover:not(:disabled) {
            background: var(--navy-deep);
            transform: translateY(-1px);
          }
          .mec-corehealth .submit:disabled { opacity: 0.6; cursor: not-allowed; }
          .mec-corehealth .privacy {
            margin-top: 14px;
            font-size: 12px;
            color: var(--muted);
            text-align: center;
          }
          .mec-corehealth .success {
            text-align: center;
            padding: 28px 0;
          }
          .mec-corehealth .success .check {
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
          .mec-corehealth .success h3 {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .mec-corehealth .success p {
            color: var(--muted);
            font-size: 16px;
            max-width: 44ch;
            margin: 0 auto;
          }

          /* ---------- DELIVERY FORMATS ---------- */
          .mec-corehealth .formats {
            background: var(--cream);
            padding: 96px 0;
          }
          .mec-corehealth .formats .header {
            text-align: center;
            margin-bottom: 56px;
          }
          .mec-corehealth .formats .header .eyebrow { margin-bottom: 14px; }
          .mec-corehealth .formats .header h2 {
            font-size: clamp(32px, 4vw, 48px);
          }
          .mec-corehealth .format-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }
          @media (max-width: 880px) {
            .mec-corehealth .format-grid { grid-template-columns: 1fr; }
          }
          .mec-corehealth .format-card {
            background: #fff;
            border: 1px solid var(--rule);
            border-top: 3px solid var(--gold);
            padding: 36px 28px;
            text-align: center;
          }
          .mec-corehealth .format-card .label {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 12px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--gold);
            margin-bottom: 10px;
          }
          .mec-corehealth .format-card h3 {
            font-size: 26px;
            color: var(--navy);
            margin-bottom: 12px;
          }
          .mec-corehealth .format-card p {
            font-size: 15px;
            color: var(--muted);
            line-height: 1.55;
          }

          /* ---------- ABOUT JOE ---------- */
          .mec-corehealth .about {
            background: var(--cream-deep);
            padding: 96px 0;
            border-top: 1px solid var(--rule);
          }
          .mec-corehealth .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 56px;
            align-items: center;
          }
          @media (max-width: 880px) {
            .mec-corehealth .about-grid { grid-template-columns: 1fr; gap: 32px; }
          }
          .mec-corehealth .about h2 {
            font-size: clamp(30px, 3.6vw, 44px);
            margin-bottom: 18px;
          }
          .mec-corehealth .about p {
            color: #2F3A4F;
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 18px;
          }
          .mec-corehealth .creds {
            list-style: none;
            padding: 0;
            margin: 18px 0 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px 24px;
          }
          @media (max-width: 540px) {
            .mec-corehealth .creds { grid-template-columns: 1fr; }
          }
          .mec-corehealth .creds li {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 14px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--navy);
            font-weight: 600;
            padding-left: 18px;
            position: relative;
          }
          .mec-corehealth .creds li::before {
            content: "";
            position: absolute;
            left: 0; top: 7px;
            width: 8px;
            height: 8px;
            background: var(--gold);
            transform: rotate(45deg);
          }

          /* ---------- FINAL CTA ---------- */
          .mec-corehealth .final {
            background: var(--navy);
            color: var(--cream);
            padding: 96px 0;
            text-align: center;
            position: relative;
          }
          .mec-corehealth .final::before {
            content: "";
            position: absolute;
            top: 0; left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: var(--gold);
          }
          .mec-corehealth .final .eyebrow { color: var(--gold); margin-bottom: 18px; }
          .mec-corehealth .final h2 {
            color: var(--cream);
            font-size: clamp(36px, 4.6vw, 56px);
            margin-bottom: 20px;
            max-width: 22ch;
            margin-left: auto;
            margin-right: auto;
          }
          .mec-corehealth .final p {
            color: var(--muted-on-dark);
            font-size: 18px;
            max-width: 56ch;
            margin: 0 auto 36px;
          }
          .mec-corehealth .final .cta-row { justify-content: center; }
          .mec-corehealth .final .fine-print {
            margin-top: 40px;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 12px;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            color: var(--muted-on-dark);
          }
        `}</style>

        {/* ============== HERO ============== */}
        <section className="hero">
          <div className="container">
            <div className="partner-line">
              Core Health <span className="divider"></span> Miami Elite Coaching
            </div>
            <span className="gold-rule" aria-hidden="true"></span>
            <h1>
              Train Smarter. Move Better.<br />
              <em className="burgundy">Perform Stronger.</em>
            </h1>
            <p className="sub">
              Expert-level training programs designed by <strong>Sports Scientists</strong>.
              We bridge the gap between longevity medicine and strength training —
              building a custom program around your diagnostics, alongside your
              doctor&apos;s protocol.
            </p>
            <div className="cta-row">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById("claim");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Claim My Complimentary Assessment
              </button>
              <a className="btn-secondary" href={PHONE_HREF}>
                Or call <b>{PHONE_DISPLAY}</b>
              </a>
            </div>
          </div>
        </section>

        {/* ============== THREE PILLARS ============== */}
        <section className="pillars">
          <div className="container">
            <div className="pillars-grid">
              <div className="pillar">
                <div className="pill-icon">— 01</div>
                <h3>DEXA</h3>
                <div className="pill-tag">Body composition.</div>
                <p>
                  Lean mass, fat mass, bone density, and visceral fat — the medical
                  gold standard, region by region.
                </p>
              </div>
              <div className="pillar">
                <div className="pill-icon">— 02</div>
                <h3>VO<sub>2</sub> Max</h3>
                <div className="pill-tag">Cardio capacity.</div>
                <p>
                  The strongest predictor of healthspan known to medical science —
                  improvable at any age.
                </p>
              </div>
              <div className="pillar">
                <div className="pill-icon">— 03</div>
                <h3>Strength</h3>
                <div className="pill-tag">Functional baseline.</div>
                <p>
                  A structured push, pull, hinge, and lower-body evaluation drawn from
                  Olympic prep and rehab science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== HERO OFFER CARD ============== */}
        <section className="offer">
          <div className="container">
            <div className="offer-card on-dark">
              <div className="eyebrow">— EXCLUSIVELY FOR CORE HEALTH MEMBERS</div>
              <h2>
                Your Initial Assessment.<br />
                <em className="burgundy">Complimentary.</em>
              </h2>
              <div className="price-line">
                <span className="strike">$900</span>
                <span className="free">FREE</span> for Core Health patients
              </div>
              <div className="qualifier">
                A 90-minute session of full diagnostics, expert analysis, and a custom
                12-week program — paired with your physician&apos;s protocol.
              </div>
              <div className="cta-row">
                <button
                  type="button"
                  className="btn-primary gold"
                  onClick={() => {
                    const el = document.getElementById("claim");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Claim Your Assessment
                </button>
                <a className="btn-secondary" href={PHONE_HREF}>
                  Or call <b>{PHONE_DISPLAY}</b>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============== LEAD FORM ============== */}
        <section id="claim" className="lead-form-section">
          <div className="container">
            <div className="header">
              <div className="eyebrow burgundy">— CLAIM YOUR ASSESSMENT</div>
              <h2>
                One short form.<br />
                <em className="burgundy">We&apos;ll handle the rest.</em>
              </h2>
              <p>
                Tell us a little about yourself. A Miami Elite Coaching advisor will
                reach out within 24 hours to confirm your appointment.
              </p>
            </div>

            <div className="lead-form">
              {submitted ? (
                <div className="success">
                  <div className="check">✓</div>
                  <h3>You&apos;re on the list.</h3>
                  <p>
                    Thanks, {form.name.split(" ")[0] || "—"}. A Miami Elite Coaching
                    advisor will reach out within 24 hours to confirm your
                    complimentary assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {errorMsg && <div className="err">{errorMsg}</div>}

                  <div className="field">
                    <label htmlFor="ch-name">
                      Full Name<span className="req">*</span>
                    </label>
                    <input
                      id="ch-name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>

                  <div className="row-2">
                    <div className="field">
                      <label htmlFor="ch-email">
                        Email<span className="req">*</span>
                      </label>
                      <input
                        id="ch-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="ch-phone">
                        Phone<span className="req">*</span>
                      </label>
                      <input
                        id="ch-phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="(305) 555-0000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="ch-patient">
                      Are you a current Core Health patient?
                    </label>
                    <select
                      id="ch-patient"
                      value={form.isCoreHealthPatient}
                      onChange={(e) => update("isCoreHealthPatient", e.target.value)}
                    >
                      <option value="">Select…</option>
                      <option value="Yes">Yes — I&apos;m a Core Health patient</option>
                      <option value="No, but referred by Core Health">No, but referred by Core Health</option>
                      <option value="Considering Core Health">Considering Core Health</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="ch-format">Preferred Delivery Format</label>
                    <select
                      id="ch-format"
                      value={form.preferredFormat}
                      onChange={(e) => update("preferredFormat", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {DELIVERY_FORMATS.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="ch-time">Preferred Time of Day</label>
                    <select
                      id="ch-time"
                      value={form.preferredTime}
                      onChange={(e) => update("preferredTime", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {TIME_OF_DAY.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="ch-msg">Anything we should know? (optional)</label>
                    <textarea
                      id="ch-msg"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Goals, your physician's protocol, scheduling notes…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit"
                    disabled={createLead.isPending}
                  >
                    {createLead.isPending ? "Submitting…" : "Claim My Complimentary Assessment"}
                  </button>

                  <div className="privacy">
                    Your information is private. We&apos;ll only use it to contact you
                    about your assessment.
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ============== DELIVERY FORMATS ============== */}
        <section className="formats">
          <div className="container">
            <div className="header">
              <div className="eyebrow">— THREE WAYS TO TRAIN</div>
              <h2>Designed around your life.</h2>
            </div>
            <div className="format-grid">
              <div className="format-card">
                <div className="label">— IN-PERSON</div>
                <h3>Coconut Grove Studio</h3>
                <p>Train one-on-one in our private studio near Coconut Grove — discreet, equipped, and built for serious work.</p>
              </div>
              <div className="format-card">
                <div className="label">— AT HOME</div>
                <h3>We Come to You</h3>
                <p>A coach trains you in your home, condo gym, or building&apos;s fitness center — no commute, full programming.</p>
              </div>
              <div className="format-card">
                <div className="label">— ONLINE</div>
                <h3>Programming Delivered</h3>
                <p>A custom program delivered to your phone, with weekly check-ins and form review — for travelers and self-starters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== ABOUT JOE ============== */}
        <section className="about">
          <div className="container">
            <div className="about-grid">
              <div>
                <div className="eyebrow burgundy">— ABOUT THE COACH</div>
                <h2>Joe Sigona, M.S.</h2>
                <p>
                  Joe is a Sports Scientist and the founder of Miami Elite Coaching.
                  His work bridges the worlds of longevity medicine and strength
                  training — translating diagnostics, lab work, and physician protocols
                  into programs that produce measurable change.
                </p>
                <p>
                  Core Health members work directly with Joe and his hand-picked team —
                  every program is engineered around your numbers and reviewed against
                  your physician&apos;s plan.
                </p>
              </div>
              <div>
                <ul className="creds">
                  <li>M.S. Kinesiology</li>
                  <li>NASM Certified</li>
                  <li>TPI Certified</li>
                  <li>Sports Scientist</li>
                  <li>Longevity Specialist</li>
                  <li>15+ Years Coaching</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className="final on-dark">
          <div className="container">
            <div className="eyebrow">— READY TO BEGIN</div>
            <h2>
              Stop guessing.<br />
              <em className="burgundy">Start training with data.</em>
            </h2>
            <p>
              Claim the complimentary $900 assessment Core Health has secured for you.
              One short form, one 90-minute session, and a custom program built around
              your physician&apos;s plan.
            </p>
            <div className="cta-row">
              <button
                type="button"
                className="btn-primary gold"
                onClick={() => {
                  const el = document.getElementById("claim");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Claim My Assessment
              </button>
              <a className="btn-secondary" href={PHONE_HREF}>
                Or call <b>{PHONE_DISPLAY}</b>
              </a>
            </div>
            <div className="fine-print">MIAMIELITECOACHING.COM / COREHEALTH</div>
          </div>
        </section>
      </div>
    </LandingPageLayout>
  );
};

export default CoreHealth;
