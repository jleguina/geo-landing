import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-gradient-to-br from-brand-purple-600 to-brand-blue-600"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white/90 border border-white/20">
              <Zap className="h-4 w-4 text-brand-success" />
              AI Search Intelligence Platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white text-shadow-sm mb-6 sm:mb-8 px-4 sm:px-0">
            Optimize Your Brand's Voice in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Search
            </span>
          </h1>

          <p className="mx-auto max-w-4xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-white/90 font-medium mb-8 sm:mb-12 px-4 sm:px-6 lg:px-0">
            Track, benchmark, and improve your mentions across ChatGPT, Gemini,
            Claude, and Perplexity with enterprise-grade analytics and
            actionable insights.
          </p>

          <div className="flex items-center justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-purple-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200"
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
          </div>
        </div>
      </div>
    </section>
  );
}
