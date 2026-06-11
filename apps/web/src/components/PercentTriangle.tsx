// SVG Diagram: The Percentage Triangle (Part / Rate / Base)
// Static server component — no JS needed
export default function PercentTriangle() {
    return (
        <div
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
            <div className="space-y-1">
                <h3 className="font-semibold text-sm" style={{ color: "var(--text-secondary)" }}>
                    The Triangle Model
                </h3>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Cover the value you want — the remaining two tell you how to find it.
                </p>
            </div>

            <svg
                viewBox="0 0 300 220"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Percentage triangle: Part on top, Rate and Base on bottom"
                className="w-full max-w-xs mx-auto"
                role="img"
            >
                {/* Triangle outline */}
                <polygon
                    points="150,20 280,190 20,190"
                    fill="rgba(99,102,241,0.06)"
                    stroke="rgba(99,102,241,0.3)"
                    strokeWidth="1.5"
                />

                {/* Divider line */}
                <line
                    x1="20"
                    y1="130"
                    x2="280"
                    y2="130"
                    stroke="rgba(99,102,241,0.3)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                />

                {/* Part — top */}
                <rect x="110" y="55" width="80" height="36" rx="8" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.5)" strokeWidth="1" />
                <text x="150" y="73" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="700" fontFamily="JetBrains Mono, monospace">PART</text>
                <text x="150" y="85" textAnchor="middle" fill="#6366f1" fontSize="8.5" fontFamily="JetBrains Mono, monospace">= Rate × Base</text>

                {/* Rate — bottom left */}
                <rect x="35" y="145" width="80" height="36" rx="8" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.4)" strokeWidth="1" />
                <text x="75" y="162" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700" fontFamily="JetBrains Mono, monospace">RATE</text>
                <text x="75" y="174" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">= Part ÷ Base</text>

                {/* Base — bottom right */}
                <rect x="185" y="145" width="80" height="36" rx="8" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                <text x="225" y="162" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="700" fontFamily="JetBrains Mono, monospace">BASE</text>
                <text x="225" y="174" textAnchor="middle" fill="rgba(45,212,191,0.6)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">= Part ÷ Rate</text>

                {/* Operator labels */}
                <text x="150" y="125" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="Inter, sans-serif">÷</text>
            </svg>

            <div
                className="text-xs rounded-xl px-4 py-3 space-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)" }}
            >
                <div className="flex gap-2">
                    <span style={{ color: "#a5b4fc" }}>●</span>
                    <span style={{ color: "var(--text-secondary)" }}><strong className="text-white">Part</strong> — the specific portion (e.g. 15, 45, 300)</span>
                </div>
                <div className="flex gap-2">
                    <span style={{ color: "#fbbf24" }}>●</span>
                    <span style={{ color: "var(--text-secondary)" }}><strong className="text-white">Rate</strong> — the percentage as a decimal (e.g. 0.20 for 20%)</span>
                </div>
                <div className="flex gap-2">
                    <span style={{ color: "#2dd4bf" }}>●</span>
                    <span style={{ color: "var(--text-secondary)" }}><strong className="text-white">Base</strong> — the total (what you&apos;re taking a percentage of)</span>
                </div>
            </div>
        </div>
    );
}
