import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function NewEraCTASection() {
  return (
    <section id="new-era" className="py-24 px-6 bg-wavy-purple">
      <div className="mx-auto max-w-7xl">
        {/* Direct CTA Section without white card wrapper */}
        <div className="bg-gradient-to-r from-brand-purple-700 via-brand-purple-600 to-brand-blue-600 rounded-3xl p-16 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Define the New Era of Search?
          </h3>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            GEO Advisor gives marketing and growth teams visibility, control, and leverage 
            in the age of AI-powered search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-purple-700 hover:bg-gray-50 font-semibold px-10 py-4 text-lg">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-purple-700 font-semibold px-10 py-4 text-lg transition-all duration-200">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
