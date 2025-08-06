import { AIModelsSection } from "@/components/ai-models-section";
import { CapabilityWheel } from "@/components/capability-wheel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MetricsDashboard } from "@/components/metrics-dashboard";
import { NewEraCTASection } from "@/components/new-era-cta-section";
import { QueryAnalysisTable } from "@/components/query-analysis-table";
import { SectionSeparator } from "@/components/section-separator";
import { WhySEOSection } from "@/components/why-seo-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-wavy-purple">
      <Header />
      <div className="pt-16">
        <HeroSection />

        <SectionSeparator />
        <MetricsDashboard />

        <SectionSeparator />
        <AIModelsSection />

        <SectionSeparator />
        <QueryAnalysisTable />

        <SectionSeparator />
        <CapabilityWheel />

        <SectionSeparator />
        <WhySEOSection />

        <SectionSeparator />
        <NewEraCTASection />

        <Footer />
      </div>
    </div>
  );
}
