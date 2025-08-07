import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function AIModelsSection() {
  const platforms = [
    {
      name: "ChatGPT",
      logo: "/images/chatgpt-logo-correct.png",
      description: "Leading conversational AI platform",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Claude",
      logo: "/images/claude-logo-new.png",
      description: "Advanced AI assistant by Anthropic",
      bgColor: "bg-orange-50",
    },
    {
      name: "Gemini",
      logo: "/images/gemini-logo-new.png",
      description: "Google's multimodal AI system",
      bgColor: "bg-blue-50",
    },
    {
      name: "Perplexity",
      logo: "/images/perplexity-logo-new.png",
      description: "AI-powered search engine",
      bgColor: "bg-teal-50",
    },
    {
      name: "Grok",
      logo: "/images/chatgpt-logo-new.png",
      description: "xAI's conversational AI assistant",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <section id="models" className="py-16 sm:py-20 px-4 sm:px-6 bg-wavy-purple">
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8 lg:p-16">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-purple-50 border border-brand-purple-200/50 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-purple-500 animate-pulse"></div>
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-brand-purple-700 tracking-wide uppercase">
                  Enterprise AI Platform Integration
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                AI Platform{" "}
                <span className="bg-gradient-to-r from-brand-purple-600 to-brand-blue-600 bg-clip-text text-transparent">
                  Monitoring
                </span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto font-medium leading-relaxed mb-4 px-4 sm:px-0">
                Track, analyze, and optimize your brand's visibility across the
                world's leading AI platforms with enterprise-grade precision and
                real-time intelligence.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm lg:text-base text-neutral-500 font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-success"></div>
                  <span>Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-success"></div>
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-success"></div>
                  <span>Advanced Analytics</span>
                </div>
              </div>
            </div>

            {/* Platform Cards Grid - 5 Platforms with Beautiful Backgrounds */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {platforms.map((platform, _index) => (
                <Card
                  key={platform.name}
                  className="group border-0 hover:shadow-2xl hover:border-brand-purple-200 transition-all duration-500 bg-white rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-4 sm:p-5 lg:p-6 text-center relative">
                    {/* Logo Container with Purple Gradient Background */}
                    <div className="relative mb-4 sm:mb-5 lg:mb-6">
                      <div
                        className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto flex items-center justify-center rounded-2xl shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300 ${platform.bgColor} group-hover:scale-105`}
                      >
                        <Image
                          src={platform.logo || "/placeholder.svg"}
                          alt={`${platform.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 relative z-10 group-hover:scale-110 transition-transform duration-300"
                          priority
                        />
                      </div>
                    </div>

                    {/* Platform Info */}
                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-neutral-900 mb-1 sm:mb-2 group-hover:text-brand-purple-700 transition-colors duration-300">
                        {platform.name}
                      </h3>
                      <p className="text-xs sm:text-xs text-neutral-600 leading-relaxed hidden sm:block">
                        {platform.description}
                      </p>
                    </div>

                    {/* Subtle Border Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-purple-200/50 transition-all duration-300"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Enhancement */}
            <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
              <p className="text-xs sm:text-sm text-neutral-500 font-medium px-4 sm:px-0">
                Monitor your brand across all major AI platforms with real-time
                insights
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
