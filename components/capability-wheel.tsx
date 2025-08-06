import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, Eye, Zap, PenTool } from 'lucide-react'

export function CapabilityWheel() {
  const capabilities = [
    {
      title: 'Visibility Intelligence',
      subtitle: 'Sources & Benchmarking',
      description: 'Track brand mentions across AI platforms, analyze mention sources, and benchmark performance against competitors with comprehensive visibility metrics.',
      features: ['Brand Mention Tracking', 'Mention Source Analysis', 'Competitor Benchmarking', 'Sentiment Monitoring'],
      color: 'text-brand-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Eye
    },
    {
      title: 'Performance Optimization',
      subtitle: 'AI Algorithm Enhancement',
      description: 'Identify content gaps, optimize for AI algorithms, and implement data-driven strategies to improve brand visibility and search rankings.',
      features: ['Content Gap Analysis', 'AI Algorithm Optimization', 'Performance Insights', 'Strategic Recommendations'],
      color: 'text-brand-success',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      gradient: 'from-emerald-500 to-green-500',
      icon: Zap
    },
    {
      title: 'Content Influence',
      subtitle: 'AI-Optimized Creation',
      description: 'Generate AI-optimized content blocks, structured markup, and automated content tailored for maximum visibility across AI platforms.',
      features: ['AI-Optimized Content', 'Structured Markup', 'Automated Generation', 'Platform Optimization'],
      color: 'text-brand-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      gradient: 'from-purple-500 to-pink-500',
      icon: PenTool
    }
  ]

  return (
    <section id="capabilities" className="py-24 px-6 bg-wavy-purple">
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            <div className="text-center mb-20">
              <Badge className="bg-brand-purple-50 text-brand-purple-700 border border-brand-purple-200 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
                Platform Capabilities
              </Badge>
              <h2 className="text-5xl font-bold text-neutral-900 mb-8 leading-tight">
                Complete AI Search{' '}
                <span className="bg-gradient-to-r from-brand-purple-600 to-brand-blue-600 bg-clip-text text-transparent">
                  Intelligence Platform
                </span>
              </h2>
              <p className="text-xl text-neutral-700 max-w-4xl mx-auto font-medium leading-relaxed">
                Three core capabilities that give you complete control and optimization power over your AI search presence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={capability.title} className="relative border-0 hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-8 relative z-10 text-center">
                    <div className="mb-8">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${capability.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <capability.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-purple-600 mb-4">
                        {capability.subtitle}
                      </p>
                      <p className="text-neutral-700 font-medium leading-relaxed mb-6">
                        {capability.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3 text-center">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${capability.gradient} flex-shrink-0`} />
                          <span className="text-sm font-medium text-neutral-700">{feature}</span>
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
  )
}
