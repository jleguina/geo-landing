import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, PenTool, Zap } from "lucide-react";

export function CapabilityWheel() {
  const capabilities = [
    {
      title: "Visibility Intelligence",
      subtitle: "Sources & Benchmarking",
      description:
        "Track brand mentions across AI platforms, analyze mention sources, and benchmark performance against competitors with comprehensive visibility metrics.",
      features: [
        "Brand Mention Tracking",
        "Mention Source Analysis",
        "Competitor Benchmarking",
        "Sentiment Monitoring",
      ],
      color: "text-brand-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradient: "from-blue-500 to-cyan-500",
      icon: Eye,
    },
    {
      title: "Performance Optimization",
      subtitle: "AI Algorithm Enhancement",
      description:
        "Identify content gaps, optimize for AI algorithms, and implement data-driven strategies to improve brand visibility and search rankings.",
      features: [
        "Content Gap Analysis",
        "AI Algorithm Optimization",
        "Performance Insights",
        "Strategic Recommendations",
      ],
      color: "text-brand-success",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      gradient: "from-emerald-500 to-green-500",
      icon: Zap,
    },
    {
      title: "Content Influence",
      subtitle: "AI-Optimized Creation",
      description:
        "Generate AI-optimized content blocks, structured markup, and automated content tailored for maximum visibility across AI platforms.",
      features: [
        "AI-Optimized Content",
        "Structured Markup",
        "Automated Generation",
        "Platform Optimization",
      ],
      color: "text-brand-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradient: "from-purple-500 to-pink-500",
      icon: PenTool,
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-wavy-purple"
    >
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <Badge className="bg-brand-purple-50 text-brand-purple-700 border border-brand-purple-200 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 rounded-full">
                Platform Capabilities
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Complete AI Search{" "}
                <span className="bg-gradient-to-r from-brand-purple-600 to-brand-blue-600 bg-clip-text text-transparent">
                  Intelligence Platform
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-700 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
                Three core capabilities that give you complete control and
                optimization power over your AI search presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {capabilities.map((capability, _index) => (
                <Card
                  key={capability.title}
                  className="relative border-0 hover:shadow-2xl hover:border-brand-purple-200 transition-all duration-500 group overflow-hidden bg-white shadow-xl"
                >
                  <CardContent className="p-6 sm:p-8 relative z-10 text-center">
                    <div className="mb-6 sm:mb-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${capability.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <capability.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-purple-600 mb-3 sm:mb-4">
                        {capability.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed mb-4 sm:mb-6">
                        {capability.description}
                      </p>
                    </div>

                    <div className="space-y-3 text-center">
                      {capability.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center justify-center gap-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${capability.gradient} flex-shrink-0`}
                          />
                          <span className="text-xs sm:text-sm font-medium text-neutral-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
