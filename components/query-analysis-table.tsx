import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";

export function QueryAnalysisTable() {
  const queries = [
    {
      query:
        "Find retailers near me selling kids' athletic shoes for back-to-school.",
      type: "Non-Branded",
      intent: "Transactional",
      mentions: "Not Mentioned",
      category: "Athletic Footwear",
      sources: 0,
    },
    {
      query: "Where can I find official Nike stores near me in the US?",
      type: "Branded",
      intent: "Transactional",
      mentions: "Mentioned",
      category: "Athletic Footwear",
      sources: 3,
    },
    {
      query:
        "How do I transfer my rewards program from Under Armour to Nike if possible?",
      type: "Competitive",
      intent: "Transactional",
      mentions: "Mentioned",
      category: "Athletic Footwear",
      sources: 1,
    },
    {
      query: "Show me stores offering discounts on running shoes this weekend.",
      type: "Non-Branded",
      intent: "Transactional",
      mentions: "Mentioned",
      category: "Athletic Footwear",
      sources: 6,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Branded":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Non-Branded":
        return "bg-green-100 text-green-800 border-green-200";
      case "Competitive":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getMentionColor = (mention: string) => {
    if (mention.includes("Not"))
      return "bg-gray-100 text-gray-600 border-gray-200";
    if (mention.includes("5x"))
      return "bg-green-100 text-green-800 border-green-200";
    if (mention.includes("4x"))
      return "bg-orange-100 text-orange-800 border-orange-200";
    if (mention.includes("2x"))
      return "bg-blue-100 text-blue-800 border-blue-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-wavy-purple">
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
          <CardHeader className="p-6 sm:p-8 lg:p-12 pb-6 sm:pb-8">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Query Analysis
                </CardTitle>
                <p className="text-sm sm:text-base text-neutral-700 mt-2">
                  Detailed insights into how AI models respond to your queries
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-neutral-900">
                  500
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  Total Queries
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600">
                  365
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  Brand Mentions
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-blue-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  64
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  Avg. Sentiment
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-purple-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">
                  3
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  Categories
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
                <Input
                  placeholder="Search queries..."
                  className="pl-10 bg-white border-neutral-200 text-neutral-900 placeholder:text-neutral-500"
                />
              </div>
              <Select defaultValue="all-types">
                <SelectTrigger className="w-full md:w-40 bg-white border-neutral-200 text-neutral-900">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="branded">Branded</SelectItem>
                  <SelectItem value="non-branded">Non-Branded</SelectItem>
                  <SelectItem value="competitive">Competitive</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-intents">
                <SelectTrigger className="w-full md:w-40 bg-white border-neutral-200 text-neutral-900">
                  <SelectValue placeholder="All Intents" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-intents">All Intents</SelectItem>
                  <SelectItem value="transactional">Transactional</SelectItem>
                  <SelectItem value="informational">Informational</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                className="border-neutral-200 text-neutral-700 hover:bg-neutral-50"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            {/* Table - Hidden on mobile */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-2xl border border-neutral-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="text-left py-4 px-6 font-medium text-neutral-900">
                      Query
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-neutral-900">
                      Type
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-neutral-900">
                      Intent
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-neutral-900">
                      Brand Mentions
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-neutral-900">
                      Category
                    </th>
                    <th className="text-right py-4 px-6 font-medium text-neutral-900">
                      Sources
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {queries.map((query, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-100 hover:bg-neutral-50/50"
                    >
                      <td className="py-4 px-6">
                        <div className="max-w-md">
                          <p className="text-sm text-neutral-900 line-clamp-2">
                            {query.query}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={`border ${getTypeColor(query.type)}`}>
                          {query.type}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-neutral-600">
                          {query.intent}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <Badge
                          className={`border ${getMentionColor(query.mentions)}`}
                        >
                          {query.mentions}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-neutral-600">
                          {query.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-sm font-medium text-neutral-900">
                          {query.sources} sources
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {queries.map((query, index) => (
                <Card
                  key={index}
                  className="border border-neutral-200 shadow-sm"
                >
                  <CardContent className="p-4">
                    <p className="text-sm text-neutral-900 font-medium mb-3">
                      {query.query}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600">Type</span>
                        <Badge
                          className={`border text-xs ${getTypeColor(query.type)}`}
                        >
                          {query.type}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600">Intent</span>
                        <span className="text-xs text-neutral-900">
                          {query.intent}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600">
                          Mentions
                        </span>
                        <Badge
                          className={`border text-xs ${getMentionColor(query.mentions)}`}
                        >
                          {query.mentions}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600">
                          Category
                        </span>
                        <span className="text-xs text-neutral-900">
                          {query.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600">
                          Sources
                        </span>
                        <span className="text-xs font-medium text-neutral-900">
                          {query.sources} sources
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <p className="text-xs sm:text-sm text-neutral-600 text-center sm:text-left">
                Showing 1 to 20 of 500 results
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs sm:text-sm"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                <span className="text-xs sm:text-sm text-neutral-600">
                  Page 1 of 25
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
