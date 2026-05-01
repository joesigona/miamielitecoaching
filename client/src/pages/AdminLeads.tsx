// AdminLeads — Lead management dashboard at /admin/leads
//
// - Auth: requires login (Manus OAuth) AND `users.role === 'admin'`.
//   The owner's openId is auto-promoted to admin on first login (see server/db.ts).
// - Reads from tRPC `assessment.list` + `assessment.stats`.
// - Inline status changes, notes editor, delete, CSV export.
// - All copy + colors match the brand (Navy / Gold / Rose / Ivory).

import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";

type Status = "new" | "contacted" | "booked" | "closed";
const STATUS_OPTIONS: Status[] = ["new", "contacted", "booked", "closed"];

const STATUS_LABEL: Record<Status, string> = {
  new: "New",
  contacted: "Contacted",
  booked: "Booked",
  closed: "Closed",
};

const STATUS_COLOR: Record<Status, { bg: string; fg: string; border: string }> = {
  new:       { bg: "rgba(201,163,82,0.15)",  fg: "#C9A352", border: "#C9A352" },
  contacted: { bg: "rgba(153,53,86,0.15)",   fg: "#E5C87A", border: "#993556" },
  booked:    { bg: "rgba(80,160,120,0.18)",  fg: "#A3E4BD", border: "#50A078" },
  closed:    { bg: "rgba(255,255,255,0.06)", fg: "#9CA3AF", border: "#4B5563" },
};

function formatDate(value: Date | string | null | undefined): string {
  if (!value) return "—";
  const d = typeof value === "string" ? new Date(value) : value;
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function csvEscape(value: unknown): string {
  if (value === null || value === undefined) return "";
  const s = String(value);
  if (/[",\n]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export default function AdminLeads() {
  const me = trpc.auth.me.useQuery();
  const stats = trpc.assessment.stats.useQuery(undefined, {
    enabled: !!me.data && me.data.role === "admin",
  });
  const [filter, setFilter] = useState<Status | "all">("all");
  const list = trpc.assessment.list.useQuery(
    filter === "all" ? undefined : { status: filter },
    { enabled: !!me.data && me.data.role === "admin" },
  );

  const utils = trpc.useUtils();
  const updateStatus = trpc.assessment.updateStatus.useMutation({
    onSuccess: () => {
      utils.assessment.list.invalidate();
      utils.assessment.stats.invalidate();
    },
  });
  const updateNotes = trpc.assessment.updateNotes.useMutation({
    onSuccess: () => utils.assessment.list.invalidate(),
  });
  const deleteLead = trpc.assessment.delete.useMutation({
    onSuccess: () => {
      utils.assessment.list.invalidate();
      utils.assessment.stats.invalidate();
    },
  });

  const [expanded, setExpanded] = useState<number | null>(null);
  const [notesDraft, setNotesDraft] = useState<string>("");

  useEffect(() => {
    document.title = "Lead Dashboard | Miami Elite Coaching";
  }, []);

  const rows = list.data ?? [];
  const filteredRows = useMemo(() => rows, [rows]);

  const exportCsv = () => {
    const headers = [
      "id",
      "createdAt",
      "name",
      "email",
      "phone",
      "ageRange",
      "primaryGoal",
      "activityLevel",
      "referralSource",
      "source",
      "status",
      "message",
      "notes",
    ];
    const lines = [headers.join(",")];
    for (const r of rows) {
      lines.push(
        headers
          .map((h) =>
            h === "createdAt"
              ? csvEscape(formatDate(r.createdAt as Date))
              : csvEscape((r as Record<string, unknown>)[h]),
          )
          .join(","),
      );
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mec-assessment-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ---- Auth gate ----
  if (me.isLoading) {
    return (
      <DashboardShell>
        <div style={{ color: "#FAF7EF", padding: 60 }}>Loading…</div>
      </DashboardShell>
    );
  }

  if (!me.data) {
    return (
      <DashboardShell>
        <div style={{ color: "#FAF7EF", padding: 60, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, marginBottom: 16 }}>
            Sign in required
          </h2>
          <p style={{ color: "#9CA3AF", marginBottom: 24 }}>
            You need to sign in to view the lead dashboard.
          </p>
          <a
            href={getLoginUrl()}
            style={{
              display: "inline-block",
              background: "#C9A352",
              color: "#061325",
              padding: "14px 32px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Sign in
          </a>
        </div>
      </DashboardShell>
    );
  }

  if (me.data.role !== "admin") {
    return (
      <DashboardShell>
        <div style={{ color: "#FAF7EF", padding: 60, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, marginBottom: 16 }}>
            Admin access required
          </h2>
          <p style={{ color: "#9CA3AF" }}>
            This page is restricted to the account owner.
          </p>
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <Helmet>
        <title>Lead Dashboard | Miami Elite Coaching</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <div className="dash-header">
        <div>
          <div className="eyebrow">— ADMIN</div>
          <h1>MEC Assessment Leads</h1>
          <p className="sub">
            All inquiries submitted via <Link href="/assessment" className="link">/assessment</Link>.
            Status and notes save instantly.
          </p>
        </div>
        <div className="header-actions">
          <button type="button" className="btn-ghost" onClick={() => list.refetch()}>
            Refresh
          </button>
          <button type="button" className="btn-primary" onClick={exportCsv}>
            Export CSV
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="stat-grid">
        <StatCard label="Total Leads"  value={stats.data?.total ?? 0}     />
        <StatCard label="New"          value={stats.data?.new ?? 0}        accent="#C9A352" />
        <StatCard label="Contacted"    value={stats.data?.contacted ?? 0}  accent="#E5C87A" />
        <StatCard label="Booked"       value={stats.data?.booked ?? 0}     accent="#50A078" />
        <StatCard label="Closed"       value={stats.data?.closed ?? 0}     accent="#9CA3AF" />
      </div>

      {/* Filter pills */}
      <div className="filter-row">
        <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterPill>
        {STATUS_OPTIONS.map((s) => (
          <FilterPill
            key={s}
            active={filter === s}
            onClick={() => setFilter(s)}
            color={STATUS_COLOR[s].border}
          >
            {STATUS_LABEL[s]}
          </FilterPill>
        ))}
      </div>

      {/* Table */}
      <div className="table-wrap">
        {list.isLoading ? (
          <div className="empty">Loading leads…</div>
        ) : filteredRows.length === 0 ? (
          <div className="empty">No leads yet. Submissions will appear here in real time.</div>
        ) : (
          <table className="leads-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Goal</th>
                <th>Source</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => {
                const isExpanded = expanded === row.id;
                const status = row.status as Status;
                const color = STATUS_COLOR[status];
                return (
                  <React.Fragment key={row.id}>
                    <tr
                      className={isExpanded ? "row expanded" : "row"}
                      onClick={() => {
                        if (isExpanded) {
                          setExpanded(null);
                        } else {
                          setExpanded(row.id);
                          setNotesDraft(row.notes ?? "");
                        }
                      }}
                    >
                      <td className="td-date">{formatDate(row.createdAt as Date)}</td>
                      <td className="td-name">{row.name}</td>
                      <td className="td-contact">
                        <a
                          href={`mailto:${row.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="link"
                        >
                          {row.email}
                        </a>
                        <div className="muted">
                          <a
                            href={`tel:${row.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="link"
                          >
                            {row.phone}
                          </a>
                        </div>
                      </td>
                      <td>{row.primaryGoal || "—"}</td>
                      <td className="muted">{row.referralSource || row.source || "Direct"}</td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <select
                          value={row.status}
                          onChange={(e) =>
                            updateStatus.mutate({
                              id: row.id,
                              status: e.target.value as Status,
                            })
                          }
                          className="status-select"
                          style={{
                            background: color.bg,
                            color: color.fg,
                            borderColor: color.border,
                          }}
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s} style={{ background: "#0A1F3D" }}>
                              {STATUS_LABEL[s]}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="td-toggle">
                        <span className="chevron">{isExpanded ? "▾" : "▸"}</span>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="row-detail">
                        <td colSpan={7}>
                          <div className="detail-grid">
                            <div>
                              <div className="detail-label">Age Range</div>
                              <div className="detail-value">{row.ageRange || "—"}</div>
                            </div>
                            <div>
                              <div className="detail-label">Activity Level</div>
                              <div className="detail-value">{row.activityLevel || "—"}</div>
                            </div>
                            <div>
                              <div className="detail-label">Source Tag</div>
                              <div className="detail-value">{row.source}</div>
                            </div>
                            <div>
                              <div className="detail-label">Last Update</div>
                              <div className="detail-value">{formatDate(row.updatedAt as Date)}</div>
                            </div>
                          </div>
                          {row.message && (
                            <div className="message-block">
                              <div className="detail-label">Message from prospect</div>
                              <div className="message-text">{row.message}</div>
                            </div>
                          )}
                          <div className="notes-block">
                            <div className="detail-label">Internal notes</div>
                            <textarea
                              className="notes-textarea"
                              value={notesDraft}
                              onChange={(e) => setNotesDraft(e.target.value)}
                              placeholder="Call notes, scheduling info, follow-up reminders…"
                              rows={3}
                            />
                            <div className="notes-actions">
                              <button
                                type="button"
                                className="btn-primary small"
                                onClick={() =>
                                  updateNotes.mutate({ id: row.id, notes: notesDraft })
                                }
                                disabled={updateNotes.isPending}
                              >
                                {updateNotes.isPending ? "Saving…" : "Save Notes"}
                              </button>
                              <button
                                type="button"
                                className="btn-danger small"
                                onClick={() => {
                                  if (
                                    confirm(
                                      `Delete lead from ${row.name}? This cannot be undone.`,
                                    )
                                  ) {
                                    deleteLead.mutate({ id: row.id });
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </DashboardShell>
  );
}

/* ---------- Layout shell ---------- */
function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-root">
      <style>{`
        .dash-root {
          --navy: #0A1F3D;
          --navy-deep: #061325;
          --gold: #C9A352;
          --gold-light: #E5C87A;
          --rose: #993556;
          --ivory: #FAF7EF;
          --ink: #1A1A1A;
          --rule: rgba(217, 207, 184, 0.18);
          min-height: 100vh;
          background: var(--navy-deep);
          color: var(--ivory);
          font-family: 'Source Serif 4', Georgia, serif;
        }
        .dash-root .topbar {
          background: var(--navy);
          border-bottom: 1px solid var(--rule);
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .dash-root .topbar-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--ivory);
          text-decoration: none;
        }
        .dash-root .topbar-brand .dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--gold);
          color: var(--navy-deep);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
        }
        .dash-root .topbar-link {
          color: rgba(232,229,220,0.7);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          margin-left: 24px;
        }
        .dash-root .topbar-link:hover { color: var(--gold); }

        .dash-root .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 36px 32px 80px;
        }

        .dash-root .eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .dash-root h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          color: #fff;
          font-size: clamp(32px, 4vw, 44px);
          letter-spacing: 0.005em;
          line-height: 1.05;
          margin-bottom: 8px;
        }
        .dash-root .sub {
          color: rgba(232,229,220,0.7);
          font-size: 15px;
        }
        .dash-root .link { color: var(--gold); text-decoration: none; }
        .dash-root .link:hover { text-decoration: underline; }
        .dash-root .muted { color: rgba(232,229,220,0.55); font-size: 13px; }

        .dash-root .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .dash-root .header-actions {
          display: flex;
          gap: 10px;
        }

        .dash-root .btn-primary {
          background: var(--gold);
          color: var(--navy-deep);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 12px 22px;
          border: none;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .dash-root .btn-primary.small { padding: 9px 18px; font-size: 12px; }
        .dash-root .btn-primary:hover:not(:disabled) {
          background: var(--gold-light);
          transform: translateY(-1px);
        }
        .dash-root .btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }
        .dash-root .btn-ghost {
          background: transparent;
          color: var(--ivory);
          border: 1px solid var(--rule);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 12px 22px;
          cursor: pointer;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .dash-root .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
        .dash-root .btn-danger {
          background: transparent;
          color: var(--rose);
          border: 1px solid rgba(153,53,86,0.5);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 9px 18px;
          cursor: pointer;
        }
        .dash-root .btn-danger:hover { background: rgba(153,53,86,0.12); }

        .dash-root .stat-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          margin-bottom: 28px;
        }
        @media (max-width: 880px) {
          .dash-root .stat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .dash-root .stat-card {
          background: var(--navy);
          border: 1px solid var(--rule);
          border-top: 2px solid var(--gold);
          padding: 20px 22px;
        }
        .dash-root .stat-card .stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(232,229,220,0.55);
          margin-bottom: 10px;
        }
        .dash-root .stat-card .stat-value {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 36px;
          font-weight: 600;
          line-height: 1;
          color: #fff;
        }

        .dash-root .filter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .dash-root .pill {
          background: transparent;
          color: rgba(232,229,220,0.7);
          border: 1px solid var(--rule);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 8px 16px;
          cursor: pointer;
        }
        .dash-root .pill.active {
          background: var(--gold);
          color: var(--navy-deep);
          border-color: var(--gold);
        }

        .dash-root .table-wrap {
          background: var(--navy);
          border: 1px solid var(--rule);
        }
        .dash-root .empty {
          padding: 40px;
          text-align: center;
          color: rgba(232,229,220,0.55);
        }
        .dash-root .leads-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .dash-root .leads-table th {
          text-align: left;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(232,229,220,0.55);
          padding: 14px 16px;
          border-bottom: 1px solid var(--rule);
          background: rgba(0,0,0,0.15);
        }
        .dash-root .leads-table td {
          padding: 14px 16px;
          border-bottom: 1px solid var(--rule);
          vertical-align: top;
        }
        .dash-root .leads-table .row { cursor: pointer; transition: background 0.1s ease; }
        .dash-root .leads-table .row:hover { background: rgba(255,255,255,0.02); }
        .dash-root .leads-table .row.expanded { background: rgba(201,163,82,0.05); }
        .dash-root .leads-table .td-date {
          color: rgba(232,229,220,0.7);
          font-size: 13px;
          white-space: nowrap;
        }
        .dash-root .leads-table .td-name { font-weight: 600; color: #fff; }
        .dash-root .leads-table .td-contact { font-size: 13px; }
        .dash-root .leads-table .td-toggle { width: 30px; text-align: right; }
        .dash-root .leads-table .chevron { color: var(--gold); }

        .dash-root .status-select {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 6px 10px;
          border: 1px solid;
          background: transparent;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }

        .dash-root .row-detail td {
          background: rgba(0,0,0,0.18);
          padding: 22px 22px 26px;
        }
        .dash-root .detail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 18px;
        }
        @media (max-width: 720px) {
          .dash-root .detail-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .dash-root .detail-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(232,229,220,0.55);
          margin-bottom: 6px;
        }
        .dash-root .detail-value { color: #fff; font-size: 14px; }
        .dash-root .message-block {
          background: rgba(0,0,0,0.25);
          padding: 14px 16px;
          margin-bottom: 16px;
          border-left: 2px solid var(--gold);
        }
        .dash-root .message-text {
          color: rgba(232,229,220,0.85);
          font-size: 14px;
          line-height: 1.55;
          white-space: pre-wrap;
        }
        .dash-root .notes-block { margin-top: 4px; }
        .dash-root .notes-textarea {
          width: 100%;
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--rule);
          color: var(--ivory);
          padding: 12px 14px;
          font-family: 'Source Serif 4', serif;
          font-size: 14px;
          margin-top: 6px;
          resize: vertical;
          min-height: 72px;
        }
        .dash-root .notes-textarea:focus { outline: none; border-color: var(--gold); }
        .dash-root .notes-actions {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
      `}</style>

      <header className="topbar">
        <Link href="/" className="topbar-brand">
          <span className="dot">ME</span>
          <span>Miami Elite Coaching</span>
        </Link>
        <nav>
          <Link href="/assessment" className="topbar-link">View Landing</Link>
          <Link href="/" className="topbar-link">Site Home</Link>
        </nav>
      </header>
      <main className="container">{children}</main>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: string;
}) {
  return (
    <div
      className="stat-card"
      style={accent ? { borderTopColor: accent } : undefined}
    >
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      type="button"
      className={active ? "pill active" : "pill"}
      onClick={onClick}
      style={active && color ? { background: color, borderColor: color, color: "#061325" } : undefined}
    >
      {children}
    </button>
  );
}
