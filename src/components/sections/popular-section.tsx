import { CalendarClock, Eye } from "lucide-react";
import { Section } from "../layout/Section";
import { ArticleButtonPopular } from "../article-buttons/article-button-popular";

export const PopularSection = ({ className }: { className?: string }) => {
  return (
    <Section className={className}>
      <header className="">
        <h3 className="text-3xl font-bold mb-5">Popular</h3>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <li>
          <ArticleButtonPopular
            rank={1}
            title={"The Article of Circuits"}
            imageUrl={"dummy-article-images/image-three.jpg"}
          />
        </li>

        <li>
          <ArticleButtonPopular
            rank={2}
            title={"Crazy contraptions for coffee mugs that will make you jump"}
            imageUrl={"dummy-article-images/image-two.jpg"}
          />
        </li>

        <li>
          <ArticleButtonPopular
            rank={3}
            title={"The Article of Angry Buildings"}
            imageUrl={"dummy-article-images/image-4.jpg"}
          />
        </li>

        <li>
          <ArticleButtonPopular
            rank={4}
            title={"The Big Round Dome"}
            imageUrl={"dummy-article-images/image-5.jpg"}
          />
        </li>
      </ul>
    </Section>
  );
};
