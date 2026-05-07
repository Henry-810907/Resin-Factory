import Hero from "@/components/Hero";
import FactoryIntro from "@/components/FactoryIntro";
import MagicalMemories from "@/components/MagicalMemories";
import BestSellers from "@/components/BestSellers";
import MagicalCreations from "@/components/MagicalCreations";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactoryIntro />
      <MagicalMemories />
      <BestSellers />
      <MagicalCreations />
      <WhyChooseUs />
    </>
  );
}
