import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowRight, CheckCircle, Shield } from "lucide-react";

export function KeyInsights() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Insights */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Key Insights
              </CardTitle>
              <Badge variant="secondary">3 insights</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Strong Performance in ChatGPT
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Your brand has 27% share of voice in ChatGPT responses,
                      outperforming competitors by 8%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00C851] mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Sentiment Trending Positive
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Brand sentiment has improved by 12% over the last 30 days
                      across all AI models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Opportunity in Perplexity
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Low visibility in Perplexity responses presents a 15%
                      growth opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Safety */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00C851]" />
                Brand Safety
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-6 w-6 text-[#00C851]" />
                <div>
                  <p className="font-medium text-gray-900">
                    No reputation risks detected
                  </p>
                  <p className="text-sm text-gray-600">
                    across all analyzed responses.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Risk Assessment</span>
                  <Badge className="bg-green-100 text-green-800">
                    Low Risk
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Content Monitoring
                  </span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Sentiment Alerts
                  </span>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Risk Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
