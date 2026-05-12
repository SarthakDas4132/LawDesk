import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee";
import { ShowcaseSection } from "@/components/sections/showcase";
import { FeaturesSection } from "@/components/sections/features";
import { SecuritySection } from "@/components/sections/security";
import { SimplicitySection } from "@/components/sections/simplicity";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { IntegrationsSection } from "@/components/sections/integrations";
import { PricingSection } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <MarqueeSection />
      <FeaturesSection />
      <IntegrationsSection />
      <SecuritySection />
      <SimplicitySection />
      <ShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}
