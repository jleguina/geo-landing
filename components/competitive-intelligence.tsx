import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

export function CompetitiveIntelligence() {
  const competitors = [
    {
      name: "Adidas",
      organicMentions: 44,
      sentiment: 70,
      sentimentTrend: "up",
      winRate: 20,
      shareOfVoice: 26,
      comparisons: 5,
    },
    {
      name: "New Balance",
      organicMentions: 28,
      sentiment: 80,
      sentimentTrend: "up",
      winRate: 0,
      shareOfVoice: 16,
      comparisons: 5,
    },
    {
      name: "Asics",
      organicMentions: 18,
      sentiment: 63,
      sentimentTrend: "up",
      winRate: 0,
      shareOfVoice: 11,
      comparisons: 4,
    },
    {
      name: "Under Armour",
      organicMentions: 14,
      sentiment: 90,
      sentimentTrend: "up",
      winRate: 0,
      shareOfVoice: 8,
      comparisons: 5,
    },
    {
      name: "Puma",
      organicMentions: 12,
      sentiment: 70,
      sentimentTrend: "up",
      winRate: 40,
      shareOfVoice: 7,
      comparisons: 5,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Competitive Intelligence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Deep dive into how your competitors perform across AI models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map((competitor) => (
            <Card
              key={competitor.name}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {competitor.name}
                </CardTitle>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Organic Mentions */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Organic Mentions</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {competitor.organicMentions}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Sentiment</p>
                    <div className="flex items-center gap-1">
                      <p className="text-2xl font-bold text-[#00C851]">
                        {competitor.sentiment}
                      </p>
                      <TrendingUp className="h-4 w-4 text-[#00C851]" />
                    </div>
                  </div>
                </div>

                {/* Nike Win Rate */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Nike Win Rate</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {competitor.winRate}%
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-red-600">
                    {competitor.comparisons} comparisons
                  </Badge>
                </div>

                {/* Sentiment Details */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Nike sentiment:</span>
                    <span className="font-medium text-[#00C851]">80</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {competitor.name} sentiment:
                    </span>
                    <span className="font-medium text-[#00C851]">
                      {competitor.sentiment}
                    </span>
                  </div>
                </div>

                {/* Share of Voice */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Share of Voice
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {competitor.shareOfVoice}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-[#4A4FE1] to-[#7E84FF] rounded-full transition-all duration-500"
                      style={{ width: `${competitor.shareOfVoice}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
