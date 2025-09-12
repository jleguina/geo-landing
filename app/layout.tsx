import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "GEO Advisor - AI Visibility Analytics Platform | Track ChatGPT, Claude & Perplexity Rankings",
  description:
    "Track and optimize your brand's visibility in AI search engines. Monitor mentions in ChatGPT, Claude, Perplexity responses. Measure sentiment, track competitors, identify content gaps. The Ahrefs for AI search.",
  keywords:
    "GEO, Generative Engine Optimization, AI search analytics, ChatGPT SEO, Claude optimization, Perplexity visibility, AI brand monitoring, AI search rankings, generative AI SEO, AI mentions tracking, competitive intelligence AI, brand recall AI, AI sentiment analysis, share of voice AI",
  authors: [{ name: "GEO Advisor" }],
  creator: "GEO Advisor",
  publisher: "GEO Advisor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GEO Advisor - Track Your Brand in AI Search Results",
    description:
      "Just as SEO tools help you rank in Google, GEO Advisor helps you appear in AI-generated answers. Track visibility across ChatGPT, Claude, Perplexity, and more.",
    url: "https://geoadvisor.io",
    siteName: "GEO Advisor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEO Advisor - AI Search Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Advisor - AI Visibility Analytics Platform",
    description:
      "Track how often your brand appears in AI responses. Monitor competitors, measure sentiment, identify opportunities.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://geoadvisor.io",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GEO Advisor",
    description:
      "Analytics platform that measures and improves your brand's visibility in AI-powered search engines like ChatGPT, Claude, and Perplexity.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
    creator: {
      "@type": "Organization",
      name: "GEO Advisor",
      url: "https://geoadvisor.io",
    },
    featureList: [
      "AI Visibility Analytics",
      "Automated Testing at Scale",
      "Competitive Intelligence",
      "Sentiment Analysis",
      "Brand Recall Tracking",
      "Share of Voice Metrics",
      "Content Gap Analysis",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GEO Advisor",
    url: "https://geoadvisor.io",
    logo: "https://geoadvisor.io/logo.png",
    description:
      "The leading Generative Engine Optimization platform for tracking and improving brand visibility in AI search.",
    sameAs: [
      "https://twitter.com/geoadvisor",
      "https://linkedin.com/company/geoadvisor",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
