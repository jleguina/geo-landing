import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ShareOfVoiceChart() {
  const models = [
    { name: 'ChatGPT', percentage: 27, color: 'bg-[#00C851]' },
    { name: 'Claude', percentage: 23, color: 'bg-blue-500' },
    { name: 'Perplexity', percentage: 19, color: 'bg-purple-500' },
    { name: 'Gemini', percentage: 16, color: 'bg-orange-500' },
    { name: 'Google AI', percentage: 15, color: 'bg-red-500' }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Share of Voice by AI Model
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Your brand's visibility across different AI platforms
              </p>
            </div>
            <Button variant="outline" size="sm">
              <Badge variant="secondary" className="mr-2">5</Badge>
              Models
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {models.map((model) => (
              <div key={model.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${model.color}`} />
                    <span className="font-medium text-gray-900">{model.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {model.percentage}% of organic mentions
                    </span>
                    <span className="font-bold text-lg text-gray-900">
                      {model.percentage}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${model.color} transition-all duration-500`}
                    style={{ width: `${model.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
