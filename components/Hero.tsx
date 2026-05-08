import HeroCarousel from "./HeroCarousel";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = { dict: Dictionary["hero"]; lang: string };

export default function Hero({ dict, lang }: Props) {
  return (
    <section className="relative w-full h-[480px] sm:h-[560px] md:h-[700px] overflow-hidden">
      <HeroCarousel dict={dict} lang={lang} />
    </section>
  );
}
