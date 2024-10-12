import { CalendarClock, Eye } from "lucide-react";

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

export const ArticleButtonCanvas = () => {
  return (
    <a href="#">
      <article className="group relative w-full h-96 p-5 flex flex-col gap-4 justify-end items-start bg-background/0 hover:bg-background/75 transition-colors duration-300">
        {/** Category */}
        <p className="bg-background font-bold px-4 py-1 text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
          Economics
        </p>

        {/** Name */}
        <h2 className="bg-background font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
          The economic impacts of Big Chungus eating the world
        </h2>

        {/** Profile Picture and article information */}
        <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-sm">
          {/** I decided not to put a figure around this profile picture image so the footer is more clear */}
          <figure className="flex items-center">
            <img
              src="/dummy-pfp/man.png"
              alt="Profile Picture"
              className="h-12 w-12 rounded-full"
            />
            <figcaption className="sr-only">
              Profile picture of Brian Hammer
            </figcaption>
          </figure>

          <p>
            By <strong className="font-bold">Brian Hammer</strong>{" "}
          </p>

          <time
            itemProp="date created"
            dateTime="2024-08-26"
            className="flex flex-row gap-1 items-center"
          >
            <CalendarClock className="w-5 h-5" /> Febuary 26, 2024
          </time>

          <p className="flex flex-row gap-1 items-center">
            <Eye className="w-5 h-5" /> 23 Views
          </p>
        </footer>

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
