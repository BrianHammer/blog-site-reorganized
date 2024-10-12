import { CalendarClock, Eye } from "lucide-react";
import { Section } from "../layout/Section";
import { ArticleButtonListItemWithAuthor } from "../article-buttons/article-button-list-item";

export const TrendingSection = () => {
  return (
    <div className="bg-muted py-16">
      <Section>
        <header className="">
          <h2 className="font-bold text-3xl text-secondary mb-8">
            Trending Now
          </h2>
        </header>

        <ul className="flex flex-col gap-0">
          <li className="py-8 border-t border-border">
            <ArticleButtonListItemWithAuthor />
          </li>
          <li className="py-8 border-t border-border">
            <ArticleButtonListItemWithAuthor />
          </li>
          <li className="py-8 border-t border-border">
            <ArticleButtonListItemWithAuthor />
          </li>
        </ul>
      </Section>
    </div>
  );
};
