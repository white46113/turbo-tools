"use client";

import { useState } from "react";

const SHORTCUTS = [
    {
        id: "ten-percent",
        shortcut: "Find 10%",
        trick: "Divide by 10",
        example: "10% of 380 → 38",
        detail: "Shift the decimal one place left. Always. No calculator needed.",
        color: "#6366f1",
    },
    {
        id: "five-percent",
        shortcut: "Find 5%",
        trick: "Half of 10%",
        example: "5% of 380 → 38 ÷ 2 = 19",
        detail: "Get 10% first, then halve it. Two-step but lightning fast.",
        color: "#8b5cf6",
    },
    {
        id: "twenty-percent",
        shortcut: "Find 20%",
        trick: "Double the 10%",
        example: "20% of 380 → 38 × 2 = 76",
        detail: "Tip calculators live here. 10% × 2.",
        color: "#2dd4bf",
    },
    {
        id: "twenty-five-percent",
        shortcut: "Find 25%",
        trick: "Divide by 4",
        example: "25% of 380 → 380 ÷ 4 = 95",
        detail: "A quarter. Division by 4 is division by 2, twice.",
        color: "#fbbf24",
    },
    {
        id: "one-percent",
        shortcut: "Find 1%",
        trick: "Divide by 100",
        example: "1% of 380 → 3.80",
        detail: "Your atomic unit. Scale any other % from here by multiplying.",
        color: "#34d399",
    },
    {
        id: "flip-trick",
        shortcut: "The Flip Trick",
        trick: "X% of Y = Y% of X",
        example: "8% of 25 = 25% of 8 = 2",
        detail: "Commutative property of percentages. Pick whichever is easier to compute.",
        color: "#fb7185",
    },
];

export default function MentalMathShortcuts() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="space-y-3">
            {SHORTCUTS.map((s) => (
                <button
                    key={s.id}
                    id={`shortcut-${s.id}`}
                    onClick={() => setActive(active === s.id ? null : s.id)}
                    className="w-full text-left rounded-xl p-4 transition-all duration-200 cursor-pointer"
                    style={{
                        background: active === s.id ? "rgba(255,255,255,0.04)" : "transparent",
                        border: `1px solid ${active === s.id ? s.color + "40" : "var(--border)"}`,
                    }}
                    aria-expanded={active === s.id}
                    aria-controls={`shortcut-detail-${s.id}`}
                >
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-2 h-2 rounded-full shrink-0 mt-0.5"
                                style={{ background: s.color }}
                            />
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                                        {s.shortcut}
                                    </span>
                                    <span
                                        className="text-xs font-mono px-2 py-0.5 rounded"
                                        style={{ background: s.color + "20", color: s.color }}
                                    >
                                        {s.trick}
                                    </span>
                                </div>
                                <div className="text-xs mt-0.5 font-mono" style={{ color: "var(--text-muted)" }}>
                                    {s.example}
                                </div>
                            </div>
                        </div>
                        <svg
                            className="shrink-0 transition-transform duration-200"
                            style={{ transform: active === s.id ? "rotate(180deg)" : "rotate(0)", color: "var(--text-muted)" }}
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {active === s.id && (
                        <div
                            id={`shortcut-detail-${s.id}`}
                            className="mt-3 pl-5 text-sm animate-fade-in-up"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {s.detail}
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
}
