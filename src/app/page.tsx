import Difference from "@/components/difference/Difference";
import Empathy from "@/components/empathy/Empathy";
import FAQ from "@/components/faq/FAQ";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Results from "@/components/results/Results";
import Trainers from "@/components/trainers/Trainers";
import Voice from "@/components/voice/Voice";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Empathy />
      <Difference />
      <Trainers />
      <Results />
      <Pricing />
      <Voice />
      <FAQ />
    </main>
  );
}
