import { ArticleBackgroundSection } from "@/components/sections/article-background-section";
import { ArticleFeedSection } from "@/components/sections/article-feed-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PopularSection } from "@/components/sections/popular-section";
import { TrendingSection } from "@/components/sections/trending-section";
import { WorkingLifeSection } from "@/components/sections/working-life-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <HeroSection />
      <TrendingSection />
      <PopularSection />
      <WorkingLifeSection className="pt-0" />
      <ArticleBackgroundSection className="" />
      <ArticleFeedSection />
    </main>
  );
}
