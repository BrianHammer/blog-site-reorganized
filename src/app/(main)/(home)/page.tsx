import { HeroSection } from "@/components/sections/hero-section";
import { TrendingSection } from "@/components/sections/trending-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <HeroSection />
      <TrendingSection />
    </main>
  );
}
