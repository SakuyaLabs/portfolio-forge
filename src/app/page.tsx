import Difference from "@/components/difference/Difference";
import Empathy from "@/components/empathy/Empathy";
import Hero from "@/components/hero/Hero";
import Trainers from "@/components/trainers/Trainers";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Empathy />
      <Difference />
      <Trainers />
    </main>
  );
}
