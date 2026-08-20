import Difference from "@/components/difference/Difference";
import Empathy from "@/components/empathy/Empathy";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Results from "@/components/results/Results";
import Trainers from "@/components/trainers/Trainers";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Empathy />
      <Difference />
      <Trainers />
      <Results />
      <Pricing />
    </main>
  );
}
