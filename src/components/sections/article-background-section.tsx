import { Calendar, Eye } from "lucide-react";
import { ArticleButtonImageHover } from "../article-buttons/article-button-image-hover";
import { ArticlePublishingInfo } from "../article-buttons/article-publishing-info";
import { formatButtonTitle } from "@/lib/text-formatters";

export const ArticleBackgroundSectionOld = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <a href="#">
      <section className="relative group w-full py-24 group bg-cover bg-[url('/dummy-article-images/image-7.jpg')]">
        <header className="sr-only">
          <h2>Hello</h2>
        </header>

        <article className="z-50 w-full h-full text-left container mx-auto px-5 flex flex-col gap-4 items-start justify-center">
          {/** Category */}
          <p className="bg-black font-bold px-4 py-1 text-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
            Economics
          </p>

          {/** Name */}
          <h2 className="bg-black font-bold text-5xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background ">
            I love to blow up capacitors
          </h2>

          {/** A demo of the text  */}
          <p className="text-light-gray font-semibold">
            I love the smell when I blow up a capacitor! They are also very
            cheap and I can buy a whole bag for 10 dollars at Home Depot
          </p>

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
              <Calendar className="w-5 h-5" /> Febuary 26, 2024
            </time>

            <p className="flex flex-row gap-1 items-center">
              <Eye className="w-5 h-5" /> 23 Views
            </p>
          </footer>
        </article>
      </section>
    </a>
  );
};

export const ArticleBackgroundSection = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <a href="#">
      <article className="group relative w-full h-[450px]">
        <ArticleButtonImageHover
          className="w-full h-full"
          imageUrl={"/dummy-article-images/image-6.jpg"}
          title={"Title"}
          hideReadMore
        />
        {/** The title, category, author, etc. */}
        <div className=" absolute inset-0 flex flex-col gap-4 justify-center items-start p-5 lg:px-24 w-full h-full  overflow-hidden">
          <p className="bg-black font-bold px-4 py-1 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
            Engineering
          </p>

          {/** Name */}

          <h3 className="bg-black font-bold text-6xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-black break-words hyphens-auto line-clamp-2">
            {`Math Good English Baaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaaaaad`}
          </h3>

          {/** A demo of the text  */}
          <p className="text-light-gray font-semibold line-clamp-3">
            I love the smell when I blow up a capacitor! They are also very
            cheap and I can buy a whole bag for 10 dollars at Home Depot Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            voluptatibus, officia quos tenetur expedita, illum vel atque
            temporibus quae magni nihil rem porro molestias doloribus sed neque
            voluptatem repellat quo vero reprehenderit dicta quasi quibusdam
            ipsam! Quam odit amet dolore necessitatibus commodi repudiandae
            temporibus eum dolorem ea provident nam, accusamus vel pariatur ex
            natus, reiciendis, voluptatum repellat aspernatur at cumque deleniti
            fugit accusantium sapiente! Quam esse eaque obcaecati in, totam sint
            dolor doloribus tempore accusamus illum repudiandae nobis, eveniet
            amet repellat vero, quis possimus nam facere et corrupti vitae
            minima? Rerum iste voluptates hic a incidunt distinctio animi ipsa
            esse.
          </p>

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
