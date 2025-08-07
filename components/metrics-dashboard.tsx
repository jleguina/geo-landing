import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Activity,
  BarChart3,
  Eye,
  Heart,
  Target,
  TrendingUp,
} from "lucide-react";

export function MetricsDashboard() {
  const metrics = [
    {
      title: "Brand Recall",
      value: "100%",
      description: "Direct brand queries",
      icon: Target,
      color: "text-brand-success",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      change: "+5.2%",
      trend: "up",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      title: "Organic Mentions",
      value: "46%",
      description: "Non-direct queries",
      icon: Eye,
      color: "text-brand-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      change: "+12.3%",
      trend: "up",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Sentiment Score",
      value: "85",
      description: "Average sentiment (0-100)",
      icon: Heart,
      color: "text-brand-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      change: "+8.1%",
      trend: "up",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Share of Voice",
      value: "27%",
      description: "vs tracked competitors",
      icon: BarChart3,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      change: "+3.7%",
      trend: "up",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="metrics"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-wavy-purple"
    >
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-purple-50 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-brand-purple-700 mb-6 sm:mb-8 border border-brand-purple-200">
                <Activity className="h-4 w-4 text-brand-success animate-pulse" />
                Live Analytics Dashboard
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Core Performance{" "}
                <span className="bg-gradient-to-r from-brand-purple-600 to-brand-blue-600 bg-clip-text text-transparent">
                  Metrics
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-700 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
                Real-time insights into your brand's AI search performance
                across all major platforms with enterprise-grade precision
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:gap-8 lg:grid-cols-4">
              {metrics.map((metric) => (
                <Card
                  key={metric.title}
                  className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:border-brand-purple-200 transition-all duration-500 group bg-white"
                >
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${metric.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-brand-success" />
                        <span className="text-sm font-bold text-brand-success">
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="text-3xl sm:text-4xl font-bold text-neutral-900">
                        {metric.value}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-neutral-800">
                        {metric.title}
                      </div>
                      <div className="text-sm text-neutral-600 font-medium">
                        {metric.description}
                      </div>
                    </div>
                    <div className="mt-6 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: metric.value.includes("%")
                            ? metric.value
                            : "85%",
                        }}
                      />
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
