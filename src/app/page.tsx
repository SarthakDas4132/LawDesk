import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee";
import { ShowcaseSection } from "@/components/sections/showcase";
import { FeaturesSection } from "@/components/sections/features";
import { SecuritySection } from "@/components/sections/security";
import { SimplicitySection } from "@/components/sections/simplicity";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { IntegrationsSection } from "@/components/sections/integrations";
import { PricingSection } from "@/components/sections/pricing";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
