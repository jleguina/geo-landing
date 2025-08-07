import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NewEraCTASection() {
  return (
    <section
      id="new-era"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-wavy-purple"
    >
      <div className="mx-auto max-w-7xl">
        {/* Direct CTA Section without white card wrapper */}
        <div className="bg-gradient-to-r from-brand-purple-600 to-brand-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Define the New Era of Search?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            GEO Advisor gives marketing and growth teams visibility, control,
            and leverage in the age of AI-powered search.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-purple-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg"
              asChild
            >
              <Link
                href="https://calendly.com/smirpuri-mba2026/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
