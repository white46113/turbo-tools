"use client";

import { useState } from "react";

interface BarProps {
    percent: number;
    label: string;
    color: string;
}

function AnimatedBar({ percent, label, color }: BarProps) {
    const clampedPercent = Math.min(Math.max(percent, 0), 100);
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs" style={{ color: "var(--text-secondary)" }}>
                <span>{label}</span>
                <span className="font-mono font-medium" style={{ color }}>{clampedPercent}%</span>
            </div>
            <div className="h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${clampedPercent}%`, background: color }}
                />
            </div>
        </div>
    );
}

export default function VisualSplit() {
    const [percent, setPercent] = useState(30);

    const rest = 100 - percent;

    return (
        <div
            className="rounded-2xl p-6 space-y-6"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
            <div className="space-y-1">
                <h3 className="font-semibold text-sm" style={{ color: "var(--text-secondary)" }}>
                    Visual Intuition
                </h3>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    See the part-vs-whole relationship in real time.
                </p>
            </div>

            {/* Big visual split */}
            <div className="relative h-8 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div
                    className="absolute inset-y-0 left-0 flex items-center justify-center text-xs font-mono font-semibold transition-all duration-500"
                    style={{ width: `${percent}%`, background: "var(--accent)", color: "#fff", minWidth: percent > 8 ? "auto" : "0" }}
                >
                    {percent > 12 && `${percent}%`}
                </div>
                <div
                    className="absolute inset-y-0 right-0 flex items-center justify-center text-xs font-mono font-semibold transition-all duration-500"
                    style={{ width: `${rest}%`, color: "var(--text-muted)" }}
                >
                    {rest > 12 && `${rest}%`}
                </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={percent}
                    onChange={(e) => setPercent(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                    style={{ accentColor: "var(--accent)" }}
                    aria-label="Adjust percentage visually"
                />
                <div className="flex justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>
            </div>

            <div className="space-y-3 pt-1">
                <AnimatedBar percent={percent} label="Part" color="var(--accent)" />
                <AnimatedBar percent={rest} label="Remainder" color="var(--text-muted)" />
            </div>

            {/* Quick insight */}
            <div
                className="text-xs rounded-xl px-4 py-3"
                style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)", color: "var(--text-secondary)" }}
            >
                {percent === 50 && "Exactly half — the simplest percentage anchor."}
                {percent === 10 && "10% is the king of mental math — all others are multiples of it."}
                {percent === 1 && "1% is your base unit. Any percentage is just scaled from here."}
                {percent === 100 && "100% = the whole. No more, no less."}
                {percent === 0 && "0% — nothing at all. The absence of a part."}
                {percent === 25 && "25% = ¼. Easier to think of as a quarter."}
                {percent === 75 && "75% = ¾. Three quarters — think of it as 100% minus 25%."}
                {percent === 20 && "20% = ⅕. Five of these make the whole."}
                {![0, 1, 10, 20, 25, 50, 75, 100].includes(percent) && (
                    <span>
                        {percent}% of any number N = <span className="font-mono" style={{ color: "var(--accent-soft)" }}>N × {(percent / 100).toFixed(2)}</span>
                    </span>
                )}
            </div>
        </div>
    );
}
