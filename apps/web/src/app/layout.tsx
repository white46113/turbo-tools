import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.weebcoder.com";

export const metadata: Metadata = {
  title: "Percentage Calculator — Fast Mental Math & Visual Intuition",
  description:
    "Calculate percentages instantly and build real intuition for how they work. Interactive calculator, visual explanations, and the mental shortcuts that make percentages click.",
  keywords: ["percentage calculator", "how to calculate percentage", "percent change calculator"],
  authors: [{ name: "WeebCoder" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Percentage Calculator — Fast Mental Math & Visual Intuition",
    description:
      "Not just a calculator. A tool that shows you the why behind percentages.",
    siteName: "WeebCoder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator — Fast Mental Math & Visual Intuition",
    description:
      "Not just a calculator. A tool that shows you the why behind percentages.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Percentage Calculator",
  url: SITE_URL,
  description:
    "A free percentage calculator with four modes: percent of a number, what percent is X of Y, percent change, and finding the total from a part.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "WeebCoder",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {/* Inline theme init — runs before paint to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try{
    var s=localStorage.getItem('wc-theme');
    if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);return;}
    if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}
  }catch(e){}
})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
