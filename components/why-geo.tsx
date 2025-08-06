import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Target, TrendingUp, Shield } from 'lucide-react'

export function WhyGEO() {
  const benefits = [
    {
      icon: Zap,
      title: 'AI-First Approach',
      description: 'Built specifically for AI answer engines, not adapted from traditional SEO tools.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Target,
      title: 'Real-Time Monitoring',
      description: 'Track your brand mentions across ChatGPT, Claude, Gemini, and Perplexity in real-time.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Intelligence',
      description: 'Benchmark against competitors and identify opportunities for market share growth.',
      color: 'text-[#00C851]',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'Monitor sentiment and protect your brand reputation across all AI platforms.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why GEO Over Traditional SEO?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The future of search is AI-powered. While SEO optimizes for search engines, 
            GEO optimizes for AI answer engines that directly serve users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${benefit.bgColor}`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#4A4FE1] to-[#7E84FF] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Optimize Your AI Presence?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join leading brands who are already gaining competitive advantage 
            through Generative Engine Optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A4FE1] hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
