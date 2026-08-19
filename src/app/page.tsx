import Empathy from "@/components/empathy/Empathy";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Empathy />
    </main>
  );
}
