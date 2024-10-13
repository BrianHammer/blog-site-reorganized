import { CalendarClock, Eye } from "lucide-react";

export const ArticleButtonListItem = () => {
  return (
    <a href="#">
      <article className="group py-5">
        {/** Image */}
        <figure className="float-right relative overflow-hidden rounded-full">
          <img
            src="/dummy-pfp/beanie.png"
            className="w-24 h-24  object-cover"
            alt="article image"
          />
          <figcaption className="sr-only">
            Image for the article titled "X"
          </figcaption>

          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
            <span className="font-bold text-sm text-primary">Read More</span>
          </div>
        </figure>

        {/** Title */}
        <header className="space-y-2">
          <p className="text-xs ">COOKING</p>
          <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-primary/100 capitalize">
            How to turn your kitchen into a meth lab
          </h3>
        </header>

        {/** paragraph */}

        <p className="mt-2 text-light-gray/75 text-sm">
          Cooking meth can be very difficult but rewarding process at the same
          time! Just make sure you dont get caught. Step One is to...
        </p>
      </article>
    </a>
  );
};

export const ArticleButtonListItemWithAuthor = () => {
  return (
    <a href="#" className="">
      <article className="group flex flex-row gap-4 w-full items-center">
        <figure
          className={
            "text-white w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
          }
        >
          <img
            src={"dummy-pfp/doctor.png"}
            className="object-cover w-full h-full"
            alt="article image"
          />
          <figcaption className="sr-only">
            Image for the article titled {"X"}
          </figcaption>

          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
            <span className="font-semibold text-sm text-light-gray">
              Read More
            </span>
          </div>
        </figure>

        <div className="flex flex-col gap-2 text-foreground/70 group-hover:text-foreground/100 transition-colors duration-300">
          <header className="">
            <h3 className="font-bold text-xl">
              20 Ya Books That Will Get You Pumped for Study Abroad
            </h3>
          </header>

          {/** This was copied and slightly modified from the hero section... */}
          <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
            <p>
              By <strong className="font-bold">Ligma</strong>{" "}
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
        </div>
      </article>
    </a>
  );
};
