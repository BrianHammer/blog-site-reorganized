import { ArticleButtonImageHover } from "./article-button-image-hover";
import { ArticlePublishingInfo } from "./article-publishing-info";

type ArticleButtonFeedItemProps = {
  title: string;
  imageUrl: string;
  paragraph: string;
};
export const ArticleButtonFeedItem = ({
  title,
  paragraph,
  imageUrl,
}: ArticleButtonFeedItemProps) => {
  return (
    <a href="#">
      <article className="group flex flex-col gap-4 md:flex-row">
        {/** Image with hover effect */}
        <ArticleButtonImageHover
          imageUrl={imageUrl}
          title={title}
          className=""
        />

        {/** Image with hover effect */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <header className="">
            <h4 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300 line-clamp-2">
              {title}
            </h4>
          </header>

          <p className="text-muted-foreground group-hover:text-muted-foreground/50 duration-300 line-clamp-3">
            {paragraph}
          </p>

          <ArticlePublishingInfo
            className="group-hover:opacity-75 transition-opacity duration-300"
            author="Brian"
            published={new Date()}
            views={12345}
          />
        </div>
      </article>
    </a>
  );
};
