import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "GEO Advisor - AI Search Intelligence Platform | Track ChatGPT, Claude & Perplexity Rankings",
  description:
    "Analytics platform that measures and improves your brand's visibility in AI-powered search engines. Track AI mentions, sentiment analysis, competitor benchmarking, and content gaps across ChatGPT, Claude, Perplexity, Gemini, and Grok.",
  keywords:
    "GEO, Generative Engine Optimization, AI search analytics, AI visibility tracking, ChatGPT optimization, Claude optimization, Perplexity SEO, AI-powered search, brand monitoring AI, AI sentiment analysis, competitor intelligence AI, AI content optimization, share of voice AI, AI search rankings, generative AI SEO, LLM optimization, AI discovery platform",
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
  alternates: {
    canonical: "https://geoadvisor.io",
  },
  openGraph: {
    title: "GEO Advisor - AI Search Intelligence for Brands",
    description:
      "Track and optimize your brand's visibility across AI search engines. Monitor ChatGPT, Claude, Perplexity mentions with sentiment analysis and competitive benchmarking.",
    url: "https://geoadvisor.io",
    siteName: "GEO Advisor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEO Advisor - AI Search Intelligence Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Advisor - AI Search Intelligence for Brands",
    description:
      "Track and optimize your brand's visibility across AI search engines. Monitor ChatGPT, Claude, Perplexity mentions.",
    images: ["/og-image.png"],
    creator: "@geoadvisor",
  },
  verification: {
    google: "your-google-verification-code",
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
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Analytics platform that measures and improves your brand's visibility in AI-powered search engines like ChatGPT, Claude, and Perplexity.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
      url: "https://geoadvisor.io",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "AI Visibility Analytics",
      "Automated Testing at Scale",
      "Competitive Intelligence",
      "Sentiment Analysis",
      "Share of Voice Tracking",
      "Content Gap Analysis",
      "Multi-AI Platform Support",
      "Real-time Performance Metrics",
    ],
    screenshot: "https://geoadvisor.io/screenshots/dashboard.png",
    softwareVersion: "2.0",
    publisher: {
      "@type": "Organization",
      name: "GEO Advisor",
      url: "https://geoadvisor.io",
      logo: {
        "@type": "ImageObject",
        url: "https://geoadvisor.io/logo.png",
        width: 600,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "sales@geoadvisor.io",
        url: "https://geoadvisor.io/contact",
      },
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GEO Advisor",
    url: "https://geoadvisor.io",
    logo: "https://geoadvisor.io/logo.png",
    description: "AI Search Intelligence platform for enterprise brands",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/geoadvisor",
      "https://linkedin.com/company/geoadvisor",
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GEO Advisor - AI Search Intelligence Platform",
    description:
      "Track and optimize your brand's visibility across AI search engines",
    url: "https://geoadvisor.io",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://geoadvisor.io",
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is GEO (Generative Engine Optimization)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO is the practice of optimizing your brand's visibility in AI-powered search engines like ChatGPT, Claude, and Perplexity. It's the evolution of SEO for the AI era.",
        },
      },
      {
        "@type": "Question",
        name: "How does GEO Advisor track AI mentions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO Advisor automatically generates hundreds of relevant queries and tests them across multiple AI models simultaneously, tracking when and how your brand appears in AI-generated responses.",
        },
      },
      {
        "@type": "Question",
        name: "Which AI platforms does GEO Advisor support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO Advisor tracks visibility across ChatGPT, Claude, Perplexity, Gemini, and Grok - covering all major AI search engines.",
        },
      },
      {
        "@type": "Question",
        name: "Who should use GEO Advisor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO Advisor is designed for marketing teams, SEO professionals, content strategists, brand managers, and agencies who want to track and improve their brand's presence in AI search results.",
        },
      },
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
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
