import { CalendarClock, Eye } from "lucide-react";
import { Section } from "../layout/Section";
import { ArticleButtonListItemWithAuthor } from "../article-buttons/article-button-list-item";

export const TrendingSection = ({ className }: { className?: string }) => {
  return (
    <div className="bg-muted py-0">
      <Section className={className}>
        <header className="">
          <h2 className="font-bold text-3xl text-foreground mb-8">
            Trending Now
          </h2>
        </header>

        <ul className="flex flex-col gap-8 lg:flex-row ">
          <li className="border-t border-border">
            <ArticleButtonListItemWithAuthor />
          </li>
          <li className="border-t border-border">
            <ArticleButtonListItemWithAuthor />
          </li>
          <li className="border-t border-border">
            <ArticleButtonListItemWithAuthor />
          </li>
        </ul>
      </Section>
    </div>
  );
};
