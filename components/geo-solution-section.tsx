import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowRight, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

export function GEOSolutionSection() {
  const problems = [
    {
      title: "AI Search is Growing",
      description:
        "Search is moving from keyword queries in Google to conversations in AI assistants",
      stat: "85%+ of LLM search volume handled by ChatGPT",
      icon: TrendingUp,
      color: "text-red-600",
    },
    {
      title: "SEO Tactics No Longer Work",
      description:
        "Meta tags, backlinks, and keyword stuffing don't influence how LLMs respond",
      stat: "58%+ of US searches are now zero-click",
      icon: Search,
      color: "text-amber-600",
    },
    {
      title: "Brands Are Falling Behind",
      description:
        "There is currently no way to track or optimize LLM visibility with existing SEO tools",
      stat: "Competitors may be recommended more often",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
  ];

  return (
    <section
      id="why-geo"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-wavy-purple"
    >
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            {/* Problem Section */}
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 text-sm font-semibold mb-6">
                Market Shift Alert
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
                Why SEO No Longer Works Alone
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-700 max-w-3xl mx-auto font-medium px-4 sm:px-0">
                A major shift in search behavior is underway. Traditional SEO
                tactics are becoming obsolete as AI search platforms reshape how
                users discover information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {problems.map((problem, _index) => (
                <Card
                  key={problem.title}
                  className="border-0 bg-white hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  <CardContent className="p-6 sm:p-8 text-center relative overflow-hidden">
                    <problem.icon
                      className={`h-10 w-10 sm:h-12 sm:w-12 ${problem.color} mx-auto mb-4 sm:mb-6`}
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 mb-4 sm:mb-6 leading-relaxed">
                      {problem.description}
                    </p>
                    <Badge className="bg-red-100 text-red-800 border border-red-200 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                      {problem.stat}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section - Matching the provided image */}
            <div className="bg-gradient-to-r from-brand-purple-600 to-brand-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Define the New Era of Search?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
                GEO Advisor gives marketing and growth teams visibility,
                control, and leverage in the age of AI-powered search.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-white text-brand-purple-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
