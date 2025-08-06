import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="overview" className="relative overflow-hidden">
      {/* Professional gradient background matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-700 via-brand-purple-600 to-brand-blue-600" />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white/90 border border-white/20">
              <Zap className="h-4 w-4 text-brand-success" />
              AI Search Intelligence Platform
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-shadow-sm mb-8">
            GEO Advisor: Optimize Your Brand's Voice in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI Search
            </span>
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-white/90 sm:text-xl font-medium mb-12">
            Track, benchmark, and improve your mentions across ChatGPT, Gemini,
            Claude, and Perplexity with enterprise-grade analytics and
            actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-purple-700 hover:bg-gray-50 font-semibold px-8 py-4 text-base shadow-xl hover:shadow-2xl transition-all duration-200"
              asChild
            >
              <Link
                href="https://calendly.com/smirpuri-mba2026/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-purple-700 font-semibold px-8 py-4 text-base transition-all duration-200"
              asChild
            >
              <Link href="https://app.geoadvisor.io">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
