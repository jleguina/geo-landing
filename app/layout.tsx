import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEO Advisor | Generative Engine Optimization Platform for Brands",
  description:
    "Monitor and optimize your brand's citations across AI-generated answers. Track share-of-voice, sentiment, competitors, query insights and actionable growth opportunities.",
  keywords:
    "GEO, Generative Engine Optimization, AI search, brand monitoring, ChatGPT, Claude, Perplexity, Gemini",
  openGraph: {
    title: "GEO Advisor | Generative Engine Optimization Platform for Brands",
    description:
      "Monitor and optimize your brand's citations across AI-generated answers. Track share-of-voice, sentiment, competitors, query insights and actionable growth opportunities.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
