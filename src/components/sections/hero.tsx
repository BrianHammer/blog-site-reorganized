import { CalendarClock, Eye } from "lucide-react";
import { ArticleButtonCanvas } from "../article-buttons/article-button-canvas";
import { ArticleButtonListItem } from "../article-buttons/article-button-list-item";
import { Section } from "../layout/Section";

export const HeroSection = () => {
  return (
    <Section>
      {/** Section is a repeated layout...*/}
      <header className="py-5">
        <h1 className="font-bold text-4xl capitalize hidden">
          Most up to date information on stuff
        </h1>
      </header>

      <ArticleButtonCanvas />

      <section>
        <header className="flex flex-row justify-between items-center py-4">
          <h2 className="font-bold text-primary text-2xl">The Latest</h2>
          <time
            itemProp="date created"
            dateTime="2024-08-26"
            className="flex flex-row gap-1 items-center text-sm text-light-gray"
          >
            <CalendarClock className="w-5 h-5" /> Febuary 26, 2024
          </time>
        </header>

        <ul>
          <li className="border-t border-gray">
            <ArticleButtonListItem />
          </li>

          <li className="border-t border-gray">
            <ArticleButtonListItem />
          </li>

          <li className="border-t border-gray">
            <ArticleButtonListItem />
          </li>

          <li className="border-t border-gray">
            <ArticleButtonListItem />
          </li>
        </ul>
      </section>
    </Section>
  );
};
