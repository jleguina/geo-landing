import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Search, AlertTriangle } from 'lucide-react'

export function WhySEOSection() {
  const problems = [
    {
      title: 'AI Search is Growing',
      description: 'Search is moving from keyword queries in Google to conversations in AI assistants',
      stat: '85%+ of LLM search volume handled by ChatGPT',
      icon: TrendingUp,
      color: 'text-red-600'
    },
    {
      title: 'SEO Tactics No Longer Work',
      description: 'Meta tags, backlinks, and keyword stuffing don\'t influence how LLMs respond',
      stat: '58%+ of US searches are now zero-click',
      icon: Search,
      color: 'text-amber-600'
    },
    {
      title: 'Brands Are Falling Behind',
      description: 'There is currently no way to track or optimize LLM visibility with existing SEO tools',
      stat: 'Competitors may be recommended more often',
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ]

  return (
    <section id="why-seo" className="py-24 px-6 bg-wavy-purple">
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <Badge className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 text-sm font-semibold mb-6">
                Market Shift Alert
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl mb-6">
                Why SEO No Longer Works Alone
              </h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto font-medium">
                A major shift in search behavior is underway. Traditional SEO tactics are becoming obsolete 
                as AI search platforms reshape how users discover information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={problem.title} className="border-0 bg-white hover:shadow-xl transition-all duration-300 shadow-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <problem.icon className={`h-12 w-12 ${problem.color} mx-auto mb-6`} />
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {problem.description}
                    </p>
                    <Badge className="bg-red-100 text-red-800 border border-red-200 font-semibold px-4 py-2">
                      {problem.stat}
                    </Badge>
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
