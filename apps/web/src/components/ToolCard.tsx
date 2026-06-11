"use client";

import Link from "next/link";

export interface Tool {
    slug: string | null;
    emoji: string;
    label: string;
    labelColor: string;
    labelBg: string;
    labelBorder: string;
    title: string;
    description: string;
    tags: string[];
    accent: string;
    glow: string;
}

export default function ToolCard({ tool }: { tool: Tool }) {
    const inner = (
        <div
            className="group relative rounded-2xl p-6 space-y-4 transition-all duration-300"
            style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = tool.accent + "66";
                el.style.boxShadow = `0 0 32px ${tool.glow}`;
                el.style.background = "var(--bg-card-hover)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.background = "var(--bg-card)";
            }}
        >
            {/* Disabled overlay for coming-soon */}
            {!tool.slug && (
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: "rgba(9,9,11,0.45)", zIndex: 1 }}
                />
            )}

            {/* Top row */}
            <div className="flex items-start justify-between">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold select-none"
                    style={{
                        background: `${tool.accent}18`,
                        border: `1px solid ${tool.accent}33`,
                    }}
                >
                    {tool.emoji}
                </div>
                <span
                    className="tag text-xs"
                    style={{
                        color: tool.labelColor,
                        background: tool.labelBg,
                        borderColor: tool.labelBorder,
                    }}
                >
                    {tool.label}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3
                    className="font-semibold text-base leading-snug"
                    style={{ color: "var(--text-primary)" }}
                >
                    {tool.title}
                </h3>
                <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {tool.description}
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{
                            color: "var(--text-muted)",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid var(--border-subtle)",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA */}
            <div className="pt-1">
                {tool.slug ? (
                    <span
                        className="inline-flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: tool.accent }}
                    >
                        Open tool
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 7h8M7 3l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                ) : (
                    <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-muted)" }}
                    >
                        In development…
                    </span>
                )}
            </div>
        </div>
    );

    if (tool.slug) {
        return (
            <Link href={tool.slug} className="block no-underline">
                {inner}
            </Link>
        );
    }

    return (
        <div className="cursor-not-allowed select-none">
            {inner}
        </div>
    );
}
