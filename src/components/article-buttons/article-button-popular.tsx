import { ArticlePublishingInfo } from "./article-publishing-info";

type ArticleButtonPopularProps = {
  rank: number;
  title: string;
  imageUrl: string;
};
export const ArticleButtonPopular = ({
  rank,
  title,
  imageUrl,
}: ArticleButtonPopularProps) => {
  return (
    <a href="#">
      <article className="group flex flex-col gap-4">
        {/** Image with hover effect */}
        <figure className="relative">
          <img src={imageUrl} className="w-full h-72 sm:h-52 object-cover" />
          <figcaption className="sr-only">
            The article image of "{title}""
          </figcaption>

          <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300 text-white">
            <span className="font-bold">READ MORE</span>
          </div>
        </figure>

        {/** Image with hover effect */}
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray flex-shrink-0">
            <p className="font-bold text-4xl text-gray group-hover:text-primary transition-colors duration-300">
              {rank}
            </p>
          </div>
          <div>
            <header className="">
              <h4 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                {title}
              </h4>
            </header>

            <ArticlePublishingInfo
              className="group-hover:opacity-75 transition-opacity duration-300"
              author="Brian"
              published={new Date()}
              views={12345}
            />
          </div>
        </div>
      </article>
    </a>
  );
};
