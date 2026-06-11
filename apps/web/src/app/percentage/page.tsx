import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Percentage Calculator — Fast Mental Math & Visual Intuition",
  description:
    "Calculate percentages instantly and build real intuition for how they work. Interactive calculator, visual explanations, and the mental shortcuts that make percentages click.",
  alternates: {
    canonical: "https://www.weebcoder.com/percentage",
  },
};

import PercentageCalculator from "@/components/PercentageCalculator";
import VisualSplit from "@/components/VisualSplit";
import MentalMathShortcuts from "@/components/MentalMathShortcuts";
import PercentTriangle from "@/components/PercentTriangle";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── NAV ──────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 px-6 py-4"
        style={{
          background: "rgba(9,9,11,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              W
            </span>
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              WeebCoder
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
              style={{
                color: "var(--text-muted)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
              }}
            >
              ← All Tools
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-24">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <header className="space-y-5">
          <div className="flex items-center gap-2">
            <span
              className="tag"
              style={{ color: "var(--accent-soft)", borderColor: "rgba(99,102,241,0.3)", background: "var(--accent-glow)" }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="4" /></svg>
              Free & No Sign-up
            </span>
            <span
              className="tag"
              style={{ color: "var(--green)", borderColor: "rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.08)" }}
            >
              4 Calculators
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="gradient-text">Percentage</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Calculator</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Four calculators in one. Calculate instantly, understand visually,
            and learn the mental shortcuts that make percentages feel obvious.
          </p>

          {/* Quick nav anchors */}
          <nav className="flex gap-3 flex-wrap" aria-label="Page sections">
            {[
              { href: "#calculator", label: "Calculator" },
              { href: "#intuition", label: "Intuition" },
              { href: "#shortcuts", label: "Shortcuts" },
              { href: "#real-world", label: "Real World" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                style={{
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                }}
              >
                {label} →
              </a>
            ))}
          </nav>
        </header>

        {/* ── CALCULATOR ───────────────────────────────────────── */}
        <section id="calculator" className="space-y-6" aria-labelledby="calc-heading">
          <div className="space-y-1">
            <h2
              id="calc-heading"
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              The Calculator
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Pick the mode that matches your question. Formula shown with result.
            </p>
          </div>
          <PercentageCalculator />
        </section>

        {/* ── INTUITION ────────────────────────────────────────── */}
        <section id="intuition" className="space-y-8" aria-labelledby="intuition-heading">
          <div className="space-y-2">
            <h2
              id="intuition-heading"
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              The Actual Mental Model
            </h2>
            <p className="text-sm max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Most people memorize the formula. This is what makes it click instead.
            </p>
          </div>

          {/* The core analogy */}
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(251,191,36,0.1)", color: "var(--amber)", border: "1px solid rgba(251,191,36,0.2)" }}
            >
              💡 Core Analogy
            </div>
            <blockquote className="text-lg font-medium leading-relaxed" style={{ color: "var(--text-primary)" }}>
              &ldquo;Per cent&rdquo; literally means <em>per hundred</em>.
              A percentage is <strong>a ratio expressed in hundredths</strong>.
            </blockquote>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Imagine a crowd of exactly 100 people. If 30% like coffee, that means 30 of those 100 people do.
              Now scale the crowd: 500 people? 30% = 150 people. 1000 people? 300.
              Percentages are just a consistent <em>scale-invariant ratio</em> — the &quot;/100&quot; is baked in so you can compare things of different sizes fairly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PercentTriangle />
            <VisualSplit />
          </div>

          {/* The confusing part */}
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "rgba(251, 113, 133, 0.05)", border: "1px solid rgba(251,113,133,0.2)" }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(251,113,133,0.1)", color: "var(--rose)", border: "1px solid rgba(251,113,133,0.25)" }}
            >
              🤯 The Part That Trips Everyone Up
            </div>
            <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
              Percentage <em>of</em> vs. Percentage <em>change</em>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4 space-y-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="text-xs font-medium" style={{ color: "var(--rose)" }}>Common Mistake</div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;The price went from $80 to $100, so it increased by 20%.&rdquo;
                </p>
                <div
                  className="text-xs font-mono rounded px-2 py-1"
                  style={{ background: "rgba(251,113,133,0.1)", color: "var(--rose)" }}
                >
                  ✗ Wrong — that&apos;s a $20 increase
                </div>
              </div>
              <div
                className="rounded-xl p-4 space-y-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="text-xs font-medium" style={{ color: "var(--green)" }}>Correct Thinking</div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  % change = (new − old) ÷ old × 100
                  = (100 − 80) ÷ 80 × 100
                </p>
                <div
                  className="text-xs font-mono rounded px-2 py-1"
                  style={{ background: "rgba(52,211,153,0.1)", color: "var(--green)" }}
                >
                  ✓ 25% increase (relative to 80)
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              The base matters. 20% of the new value ≠ % change from the old value. Always divide by the <em>starting</em> number.
            </p>
          </div>
        </section>

        {/* ── SHORTCUTS ────────────────────────────────────────── */}
        <section id="shortcuts" className="space-y-6" aria-labelledby="shortcuts-heading">
          <div className="space-y-1">
            <h2
              id="shortcuts-heading"
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Mental Math Shortcuts
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              The tricks that become second nature. Tap any to expand.
            </p>
          </div>
          <MentalMathShortcuts />

          {/* Memorable insight */}
          <div
            className="rounded-2xl p-6 space-y-3"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(99,102,241,0.1)", color: "var(--accent-soft)", border: "1px solid rgba(99,102,241,0.25)" }}
            >
              ⚡ Memorable Insight
            </div>
            <p className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
              Every percentage problem reduces to: <span className="font-mono" style={{ color: "var(--accent-soft)" }}>multiply or divide by (x/100)</span>
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              There&apos;s really only one formula hiding behind all percentage questions.
              Convert the percentage to a decimal (÷100), then multiply or divide depending on what you know.
              The four calculator modes above are just different ways of rearranging the same equation:
              <span className="font-mono" style={{ color: "var(--accent-soft)" }}> Part = Rate × Base</span>.
            </p>
          </div>
        </section>

        {/* ── REAL WORLD ───────────────────────────────────────── */}
        <section id="real-world" className="space-y-6" aria-labelledby="realworld-heading">
          <h2
            id="realworld-heading"
            className="text-xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Where This Actually Matters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "🛒",
                title: "Discounts",
                body: "A 30% off tag. ₹2,400 × 0.70 = ₹1,680. You pay the complement, not the discount.",
                color: "#6366f1",
              },
              {
                emoji: "📊",
                title: "Data & Metrics",
                body: "Conversion rates, growth rates, error rates — all percentage changes. The base always matters.",
                color: "#2dd4bf",
              },
              {
                emoji: "💰",
                title: "Interest & Finance",
                body: "GST, income tax slabs, loan interest — all percentages of different bases. Know which base.",
                color: "#fbbf24",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-5 space-y-3"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <span className="text-2xl" role="img" aria-label={card.title}>{card.emoji}</span>
                <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHEAT SHEET ──────────────────────────────────────── */}
        <section aria-labelledby="cheatsheet-heading" className="space-y-4">
          <h2
            id="cheatsheet-heading"
            className="text-xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Quick Reference
          </h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <table className="w-full text-sm" aria-label="Percentage formulas reference table">
              <thead>
                <tr style={{ background: "#0d0d0f", borderBottom: "1px solid var(--border)" }}>
                  <th className="text-left px-5 py-3 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Question</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Formula</th>
                  <th className="hidden sm:table-cell text-left px-5 py-3 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    q: "What is 15% of 200?",
                    f: "(15 / 100) × 200",
                    e: "= 30",
                  },
                  {
                    q: "45 is what % of 180?",
                    f: "(45 / 180) × 100",
                    e: "= 25%",
                  },
                  {
                    q: "80 → 100, % change?",
                    f: "((100 − 80) / 80) × 100",
                    e: "= 25%",
                  },
                  {
                    q: "60 is 40%, find total",
                    f: "(60 / 40) × 100",
                    e: "= 150",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <td className="px-5 py-3.5 text-sm" style={{ color: "var(--text-secondary)" }}>{row.q}</td>
                    <td className="px-5 py-3.5 font-mono text-xs" style={{ color: "var(--accent-soft)" }}>{row.f}</td>
                    <td className="hidden sm:table-cell px-5 py-3.5 font-mono text-sm font-semibold" style={{ color: "var(--green)" }}>{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <footer
          className="pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <span>Built with care · No ads, no sign-up, no nonsense.</span>
          <div className="flex gap-4">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <a href="#calculator" className="hover:text-white transition-colors">Calculator</a>
            <a href="#intuition" className="hover:text-white transition-colors">Intuition</a>
            <a href="#shortcuts" className="hover:text-white transition-colors">Shortcuts</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
