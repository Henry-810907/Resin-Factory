import Hero from "@/components/Hero";
import FeaturedOn from "@/components/FeaturedOn";
import FactoryIntro from "@/components/FactoryIntro";
import MagicalMemories from "@/components/MagicalMemories";
import BestSellers from "@/components/BestSellers";
import MagicalCreations from "@/components/MagicalCreations";
import PalsProgram from "@/components/PalsProgram";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedOn />
      <FactoryIntro />
      <MagicalMemories />
      <BestSellers />
      <MagicalCreations />
      <PalsProgram />
      <WhyChooseUs />
    </>
  );
}
