import { CalendarClock, Eye } from "lucide-react";
import { Section } from "../layout/Section";
import { ArticleButtonPopular } from "../article-buttons/article-button-popular";
import { ArticleButtonFeedItem } from "../article-buttons/article-button-feed-item";

export const ArticleFeedSection = ({ className }: { className?: string }) => {
  return (
    <Section className={className}>
      <header className="">
        <h3 className="text-3xl font-bold mb-5">All Articles</h3>
      </header>

      <div className="flex flex-col gap-8 md:flex-row ">
        <ul className="grid grid-cols-1  gap-8">
          <li>
            <ArticleButtonFeedItem
              title={"Semiconductor Theory"}
              imageUrl={"dummy-article-images/image-three.jpg"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur nemo. Illo voluptatem, voluptas laudantium eveniet delectus facilis? Numquam exercitationem quidem ducimus quo. In, animi! Earum sequi ea magni similique iusto quam laudantium delectus, aut facilis, ad fugit voluptatem ducimus!"
              }
            />
          </li>
          <li>
            <ArticleButtonFeedItem
              title={"Semiconductor Theory"}
              imageUrl={"dummy-article-images/image-three.jpg"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur nemo. Illo voluptatem, voluptas laudantium eveniet delectus facilis? Numquam exercitationem quidem ducimus quo. In, animi! Earum sequi ea magni similique iusto quam laudantium delectus, aut facilis, ad fugit voluptatem ducimus!"
              }
            />
          </li>
          <li>
            <ArticleButtonFeedItem
              title={"Semiconductor Theory"}
              imageUrl={"dummy-article-images/image-three.jpg"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur nemo. Illo voluptatem, voluptas laudantium eveniet delectus facilis? Numquam exercitationem quidem ducimus quo. In, animi! Earum sequi ea magni similique iusto quam laudantium delectus, aut facilis, ad fugit voluptatem ducimus!"
              }
            />
          </li>
          <li>
            <ArticleButtonFeedItem
              title={"Semiconductor Theory"}
              imageUrl={"dummy-article-images/image-three.jpg"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur nemo. Illo voluptatem, voluptas laudantium eveniet delectus facilis? Numquam exercitationem quidem ducimus quo. In, animi! Earum sequi ea magni similique iusto quam laudantium delectus, aut facilis, ad fugit voluptatem ducimus!"
              }
            />
          </li>
        </ul>
        <div className="w-full md:w-1/4">
          <div className="w-full h-52 bg-red-500">YOUR AD HERE</div>
        </div>
      </div>
    </Section>
  );
};
