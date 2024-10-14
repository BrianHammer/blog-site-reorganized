import { Calendar, Eye } from "lucide-react";

export const ArticleBackgroundSection = ({
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
