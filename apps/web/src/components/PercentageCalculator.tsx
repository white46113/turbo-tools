"use client";

import { useState, useCallback } from "react";

type CalcMode =
    | "whatPercent"    // X is what % of Y?
    | "percentOf"      // What is X% of Y?
    | "percentChange"  // % change from X to Y?
    | "findWhole";     // X is P%, what is 100%?

interface CalcResult {
    value: string;
    formula: string;
    explanation: string;
}

function computeResult(
    mode: CalcMode,
    a: string,
    b: string
): CalcResult | null {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (mode === "whatPercent") {
        if (!a || !b || isNaN(numA) || isNaN(numB) || numB === 0) return null;
        const res = (numA / numB) * 100;
        return {
            value: +res.toFixed(4) + "%",
            formula: `(${numA} ÷ ${numB}) × 100`,
            explanation: `${numA} is ${res.toFixed(2)}% of ${numB}`,
        };
    }

    if (mode === "percentOf") {
        if (!a || !b || isNaN(numA) || isNaN(numB)) return null;
        const res = (numA / 100) * numB;
        return {
            value: String(+res.toFixed(4)),
            formula: `(${numA} ÷ 100) × ${numB}`,
            explanation: `${numA}% of ${numB} = ${res.toFixed(4)}`,
        };
    }

    if (mode === "percentChange") {
        if (!a || !b || isNaN(numA) || isNaN(numB) || numA === 0) return null;
        const res = ((numB - numA) / Math.abs(numA)) * 100;
        const dir = res >= 0 ? "increase" : "decrease";
        return {
            value: (res >= 0 ? "+" : "") + (+res.toFixed(4)) + "%",
            formula: `((${numB} − ${numA}) ÷ |${numA}|) × 100`,
            explanation: `A ${Math.abs(res).toFixed(2)}% ${dir} from ${numA} to ${numB}`,
        };
    }

    if (mode === "findWhole") {
        if (!a || !b || isNaN(numA) || isNaN(numB) || numB === 0) return null;
        const res = (numA / numB) * 100;
        return {
            value: String(+res.toFixed(4)),
            formula: `(${numA} ÷ ${numB}) × 100`,
            explanation: `If ${numA} is ${numB}%, the total is ${res.toFixed(4)}`,
        };
    }

    return null;
}

const MODES: { key: CalcMode; label: string; emoji: string; aLabel: string; bLabel: string; placeholder1: string; placeholder2: string }[] = [
    {
        key: "percentOf",
        label: "% of Number",
        emoji: "🎯",
        aLabel: "Percentage",
        bLabel: "of Number",
        placeholder1: "e.g. 20",
        placeholder2: "e.g. 350",
    },
    {
        key: "whatPercent",
        label: "X is what % of Y?",
        emoji: "🔍",
        aLabel: "Part (X)",
        bLabel: "Whole (Y)",
        placeholder1: "e.g. 45",
        placeholder2: "e.g. 200",
    },
    {
        key: "percentChange",
        label: "% Change",
        emoji: "📈",
        aLabel: "From",
        bLabel: "To",
        placeholder1: "e.g. 80",
        placeholder2: "e.g. 100",
    },
    {
        key: "findWhole",
        label: "Find Total",
        emoji: "🧮",
        aLabel: "Part",
        bLabel: "is what % ?",
        placeholder1: "e.g. 75",
        placeholder2: "e.g. 25",
    },
];

export default function PercentageCalculator() {
    const [mode, setMode] = useState<CalcMode>("percentOf");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [copied, setCopied] = useState(false);

    const currentMode = MODES.find((m) => m.key === mode)!;
    const result = computeResult(mode, a, b);

    const isNegativeChange = mode === "percentChange" && result && result.value.startsWith("-");
    const isPositiveChange = mode === "percentChange" && result && result.value.startsWith("+");

    const copyResult = useCallback(() => {
        if (!result) return;
        navigator.clipboard.writeText(result.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }, [result]);

    const handleReset = () => {
        setA("");
        setB("");
    };

    return (
        <section
            id="calculator"
            aria-label="Percentage Calculator"
            className="rounded-2xl overflow-hidden"
            style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
            }}
        >
            {/* Mode tabs */}
            <div
                className="flex gap-1 p-2"
                style={{ borderBottom: "1px solid var(--border)", background: "#0d0d0f" }}
                role="tablist"
                aria-label="Calculator modes"
            >
                {MODES.map((m) => (
                    <button
                        key={m.key}
                        role="tab"
                        aria-selected={mode === m.key}
                        onClick={() => {
                            setMode(m.key);
                            handleReset();
                        }}
                        className="flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer"
                        style={{
                            background: mode === m.key ? "var(--accent-glow)" : "transparent",
                            color: mode === m.key ? "var(--accent-soft)" : "var(--text-muted)",
                            border: mode === m.key ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                        }}
                    >
                        <span className="text-base">{m.emoji}</span>
                        <span className="hidden sm:block text-center" style={{ fontSize: "0.65rem" }}>{m.label}</span>
                    </button>
                ))}
            </div>

            {/* Input area */}
            <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label
                            htmlFor="calc-input-a"
                            className="block text-xs font-medium mb-2"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {currentMode.aLabel}
                        </label>
                        <input
                            id="calc-input-a"
                            type="number"
                            value={a}
                            onChange={(e) => setA(e.target.value)}
                            placeholder={currentMode.placeholder1}
                            className="calc-input"
                            aria-label={currentMode.aLabel}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="calc-input-b"
                            className="block text-xs font-medium mb-2"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {currentMode.bLabel}
                        </label>
                        <input
                            id="calc-input-b"
                            type="number"
                            value={b}
                            onChange={(e) => setB(e.target.value)}
                            placeholder={currentMode.placeholder2}
                            className="calc-input"
                            aria-label={currentMode.bLabel}
                        />
                    </div>
                </div>

                {/* Result display */}
                <div
                    className="rounded-xl p-5 min-h-[120px] flex flex-col justify-center transition-all duration-300"
                    style={{
                        background: result ? "rgba(99,102,241,0.06)" : "#0d0d0f",
                        border: result
                            ? "1px solid rgba(99,102,241,0.25)"
                            : "1px solid var(--border-subtle)",
                    }}
                    aria-live="polite"
                    aria-label="Calculation result"
                >
                    {result ? (
                        <div className="animate-fade-in-up space-y-2">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div
                                        className="text-3xl font-bold font-mono tracking-tight"
                                        style={{
                                            color: isNegativeChange
                                                ? "var(--rose)"
                                                : isPositiveChange
                                                    ? "var(--green)"
                                                    : "var(--accent-soft)",
                                        }}
                                    >
                                        {result.value}
                                    </div>
                                    <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                                        {result.explanation}
                                    </div>
                                </div>
                                <button
                                    onClick={copyResult}
                                    title="Copy result"
                                    className="shrink-0 mt-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer"
                                    style={{
                                        background: copied ? "rgba(52, 211, 153, 0.15)" : "rgba(255,255,255,0.05)",
                                        border: copied ? "1px solid rgba(52,211,153,0.3)" : "1px solid var(--border)",
                                        color: copied ? "var(--green)" : "var(--text-secondary)",
                                    }}
                                    aria-label="Copy result to clipboard"
                                >
                                    {copied ? "✓ Copied" : "Copy"}
                                </button>
                            </div>
                            <div
                                className="text-xs font-mono px-3 py-1.5 rounded-lg inline-block"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    color: "var(--text-muted)",
                                    border: "1px solid var(--border-subtle)",
                                }}
                            >
                                {result.formula}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center" style={{ color: "var(--text-muted)" }}>
                            <div className="text-2xl mb-1">—</div>
                            <div className="text-xs">Enter values above</div>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleReset}
                    className="w-full py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer"
                    style={{
                        background: "transparent",
                        border: "1px dashed var(--border)",
                        color: "var(--text-muted)",
                    }}
                    aria-label="Reset calculator"
                >
                    Reset
                </button>
            </div>
        </section>
    );
}
