import { CalendarClock, Eye } from "lucide-react";
import { ArticlePublishingInfo } from "./article-publishing-info";
import { ArticleButtonImageHover } from "./article-button-image-hover";

type ArticleButtonCanvasProps = {
  title: string;
  src: string;
  imageUrl: string;
  category?: string;

  // These may be grouped together...
  // Info must be optional.
  publishingDate?: Date;
  author?: string;
  authorPfpUrl?: string;
};

/*

export const ArticleButtonCanvasOld = () => {
  return (
    <a href="#">
      <article className="group relative w-full h-96 p-5 flex flex-col gap-4 justify-end items-start bg-black/0 hover:bg-black/75 transition-colors duration-300">

        <p className="bg-black text-white font-bold px-4 py-1 text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
          Economics
        </p>

        <h2 className="bg-black text-white font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
          The economic impacts of Big Chungus eating the world
        </h2>

        <ArticlePublishingInfo
          className="group-hover:text-primary text-white transition-colors duration-300 text-sm"
          author={"Brian Hammer"}
          published={new Date()}
          views={999999999}
        />

        <figure className="absolute top-0 bottom-0 left-0 right-0 -z-10">
          <img
            src="/dummy-article-images/image-one.jpg"
            alt="Hero Image"
            className="object-cover w-full h-96"
          />
        </figure>
      </article>
    </a>
  );
};
*/
export const ArticleButtonCanvas = () => {
  return (
    <a href="#">
      <article className="group relative w-full h-96">
        <ArticleButtonImageHover
          className="w-full h-full"
          imageUrl={"/dummy-article-images/image-6.jpg"}
          title={"Title"}
        />
        {/** The title, category, author, etc. */}
        <div className="absolute bottom-0 p-5 flex flex-col gap-4 justify-end items-start ">
          <p className="bg-black font-bold px-4 py-1 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
            Engineering
          </p>

          {/** Name */}
          <h3 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
            Math Good English Bad
          </h3>

          {/** Profile Picture and article information */}

          <ArticlePublishingInfo
            author={"Brian H"}
            published={new Date()}
            views={1244.555}
          />
        </div>
      </article>
    </a>
  );
};

export const ArticleButtonCanvasForList = () => {
  return (
    <a href="#">
      <article className="group relative w-full h-96 md:h-72 mb-28">
        <ArticleButtonImageHover
          imageUrl={"/dummy-article-images/image-6.jpg"}
          title={"Title"}
        />
        {/** The title, category, author, etc. */}
        <div className="absolute bottom-0 p-5 flex flex-col gap-4 justify-end items-start translate-y-28  ">
          <p className="bg-black font-bold px-4 py-1 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
            Engineering
          </p>

          {/** Name */}
          <h3 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-black">
            Math Good English Bad
          </h3>

          {/** Profile Picture and article information */}

          <ArticlePublishingInfo
            author={"Brian H"}
            published={new Date()}
            views={1244.555}
          />
        </div>
      </article>
    </a>
  );
};
