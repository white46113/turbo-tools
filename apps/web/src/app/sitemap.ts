import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.weebcoder.com/dashboard",
            lastModified: new Date("2026-06-11"),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://www.weebcoder.com/percentage",
            lastModified: new Date("2026-06-10"),
            changeFrequency: "monthly",
            priority: 1.0,
        },
    ];
}
