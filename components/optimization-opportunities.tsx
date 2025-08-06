import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Zap, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react'

export function OptimizationOpportunities() {
  const opportunities = [
    {
      title: 'Quick Wins',
      value: '10',
      description: 'easy opportunities',
      icon: Zap,
      color: 'text-[#00C851]',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Content Gaps',
      value: '0',
      description: 'identified gaps',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Potential Impact',
      value: '+10%',
      description: 'visibility gain',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Optimization Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Actionable insights to improve your AI presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.title} className={`border-2 ${opportunity.borderColor} ${opportunity.bgColor} shadow-lg`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <opportunity.icon className={`h-8 w-8 ${opportunity.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    Updated
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-600">
                    {opportunity.title}
                  </div>
                  <div className={`text-3xl font-bold ${opportunity.color}`}>
                    {opportunity.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {opportunity.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Recommended Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00C851] rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900">Optimize product descriptions for AI crawlers</p>
                    <p className="text-sm text-gray-600">Expected impact: +3% visibility gain</p>
                  </div>
                </div>
                <Button size="sm" className="bg-[#00C851] hover:bg-green-600">
                  Start
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900">Improve citation sources quality</p>
                    <p className="text-sm text-gray-600">Expected impact: +4% visibility gain</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900">Enhance brand mention context</p>
                    <p className="text-sm text-gray-600">Expected impact: +3% visibility gain</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Analyze
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
