import type { Metadata } from "next";
import Link from "next/link";
import ToolCard, { type Tool } from "@/components/ToolCard";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Dashboard — WeebCoder Tools",
    description:
        "All WeebCoder tools in one place. Free, fast, and beautifully crafted calculators, visualisers, and learning aids.",
    alternates: {
        canonical: "https://www.weebcoder.com/dashboard",
    },
};

const tools: Tool[] = [
    {
        slug: "/percentage",
        emoji: "％",
        label: "New",
        labelColor: "#6366f1",
        labelBg: "rgba(99,102,241,0.12)",
        labelBorder: "rgba(99,102,241,0.3)",
        title: "Percentage Calculator",
        description:
            "Four calculators in one — percent of a number, what percent is X of Y, percent change, and find the total. Includes visual intuition and mental shortcuts.",
        tags: ["Math", "Finance", "Interactive"],
        accent: "#6366f1",
        glow: "rgba(99,102,241,0.18)",
    },
    {
        slug: null,
        emoji: "∫",
        label: "Coming Soon",
        labelColor: "#2dd4bf",
        labelBg: "rgba(45,212,191,0.08)",
        labelBorder: "rgba(45,212,191,0.25)",
        title: "Calculus Visualiser",
        description:
            "Interactive integration and differentiation explorer with SVG animations. See the area under the curve, not just the formula.",
        tags: ["Calculus", "SVG", "Visual"],
        accent: "#2dd4bf",
        glow: "rgba(45,212,191,0.15)",
    },
    {
        slug: null,
        emoji: "📐",
        label: "Coming Soon",
        labelColor: "#fbbf24",
        labelBg: "rgba(251,191,36,0.08)",
        labelBorder: "rgba(251,191,36,0.25)",
        title: "Geometry Toolkit",
        description:
            "Area, perimeter, volume and surface area — with live diagrams that update as you type. Every formula shown step-by-step.",
        tags: ["Geometry", "Visual", "Math"],
        accent: "#fbbf24",
        glow: "rgba(251,191,36,0.15)",
    },
    {
        slug: null,
        emoji: "📈",
        label: "Coming Soon",
        labelColor: "#34d399",
        labelBg: "rgba(52,211,153,0.08)",
        labelBorder: "rgba(52,211,153,0.25)",
        title: "Statistics Calculator",
        description:
            "Mean, median, mode, standard deviation, and more — with visual distributions and real-world examples for every concept.",
        tags: ["Stats", "Data", "Interactive"],
        accent: "#34d399",
        glow: "rgba(52,211,153,0.15)",
    },
];

export default function DashboardPage() {
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
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold"
                            style={{ background: "var(--accent)", color: "#fff" }}
                        >
                            W
                        </span>
                        <span
                            className="font-semibold text-sm tracking-tight"
                            style={{ color: "var(--text-primary)" }}
                        >
                            WeebCoder
                        </span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Link
                            href="/percentage"
                            className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Percentage
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20">

                {/* ── HERO ──────────────────────────────────────────── */}
                <header className="space-y-6 text-center">
                    <div className="inline-flex items-center gap-2">
                        <span
                            className="tag"
                            style={{
                                color: "var(--accent-soft)",
                                borderColor: "rgba(99,102,241,0.3)",
                                background: "var(--accent-glow)",
                            }}
                        >
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                            Free · No Sign-up · No Ads
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
                        <span className="gradient-text">WeebCoder</span>
                        <br />
                        <span style={{ color: "var(--text-primary)" }}>Tools Dashboard</span>
                    </h1>

                    <p
                        className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        A growing collection of free, beautifully crafted tools.
                        Each one is designed to help you understand the{" "}
                        <em>why</em>, not just get the answer.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap justify-center gap-8 pt-4">
                        {[
                            { value: "4", label: "Tools" },
                            { value: "100%", label: "Free" },
                            { value: "0", label: "Sign-ups needed" },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{ color: "var(--accent-soft)" }}
                                >
                                    {value}
                                </div>
                                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* ── TOOLS GRID ────────────────────────────────────── */}
                <section aria-labelledby="tools-heading" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <h2
                            id="tools-heading"
                            className="text-xl font-bold"
                            style={{ color: "var(--text-primary)" }}
                        >
                            All Tools
                        </h2>
                        <span
                            className="tag"
                            style={{
                                color: "var(--text-muted)",
                                borderColor: "var(--border)",
                                background: "rgba(255,255,255,0.03)",
                            }}
                        >
                            {tools.length} total
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {tools.map((tool) => (
                            <ToolCard key={tool.title} tool={tool} />
                        ))}
                    </div>
                </section>

                {/* ── ABOUT STRIP ───────────────────────────────────── */}
                <section
                    className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                    aria-label="About WeebCoder"
                >
                    <div
                        className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl font-bold"
                        style={{ background: "var(--accent)", color: "#fff" }}
                    >
                        W
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <h2
                            className="font-bold text-base"
                            style={{ color: "var(--text-primary)" }}
                        >
                            What is WeebCoder?
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            A collection of free, handcrafted web tools built for students,
                            engineers, and curious minds. No ads, no tracking, no fluff —
                            just genuinely useful tools that also teach you the <em>why</em>.
                        </p>
                    </div>
                </section>

                {/* ── FOOTER ────────────────────────────────────────── */}
                <footer
                    className="pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
                    style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                    <span>© 2026 WeebCoder · Built with care · No ads, no sign-up, no nonsense.</span>
                    <div className="flex gap-4">
                        <Link href="/dashboard" className="hover:text-white transition-colors">
                            Dashboard
                        </Link>
                        <Link href="/percentage" className="hover:text-white transition-colors">
                            Percentage
                        </Link>
                    </div>
                </footer>
            </main>
        </div>
    );
}
