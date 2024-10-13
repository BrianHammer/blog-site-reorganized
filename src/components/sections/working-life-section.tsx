import { CalendarClock, Eye } from "lucide-react";
import { Section } from "../layout/Section";

export const WorkingLifeSection = ({ className }: { className?: string }) => {
  return (
    <Section className={className}>
      <header>
        <h2 className="font-bold text-3xl py-8">Working Life</h2>
      </header>

      {/** Main portion */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
        {/** NOTE! First li element has special sizing. */}
        <li className="sm:col-span-2 xl:lg:col-span-1">
          <a href="#">
            <article className="group relative w-full h-96 md:h-72 mb-28">
              {/** Must set the figure as the background, and push content downwards... */}
              <figure className="">
                <img
                  src="/dummy-article-images/image-6.jpg"
                  alt="Hero Image"
                  className="object-cover w-full h-96 md:h-72"
                />
              </figure>

              {/** The background effect */}
              <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                <span className="font-bold text-xl">READ MORE</span>
              </div>

              {/** The title, category, author, etc. */}
              <div className="absolute bottom-0 p-5 flex flex-col gap-4 justify-end items-start translate-y-28">
                <p className="bg-black font-bold px-4 py-1 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  Engineering
                </p>

                {/** Name */}
                <h3 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  Math Good English Bad
                </h3>

                {/** Profile Picture and article information */}
                <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
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
                    By <strong className="font-bold">Mr Olson</strong>{" "}
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

          <ul className="flex flex-col gap-0">
            <li className="py-4 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <figure
                    className={
                      "text-secondary w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
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
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
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
            </li>

            <li className="py-4 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <figure
                    className={
                      "text-secondary w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
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
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
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
            </li>
          </ul>
        </li>

        <li className="">
          <a href="#">
            <article className="group relative w-full h-96 md:h-72 mb-28">
              {/** Must set the figure as the background, and push content downwards... */}
              <figure className="">
                <img
                  src="/dummy-article-images/image-6.jpg"
                  alt="Hero Image"
                  className="object-cover w-full h-96 md:h-72"
                />
              </figure>

              {/** The background effect */}
              <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                <span className="font-bold text-xl">READ MORE</span>
              </div>

              {/** The title, category, author, etc. */}
              <div className="absolute bottom-0 p-5 flex flex-col gap-4 justify-end items-start translate-y-28">
                <p className="bg-black font-bold px-4 py-1 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  Engineering
                </p>

                {/** Name */}
                <h3 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  Math Good English Bad
                </h3>

                {/** Profile Picture and article information */}
                <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
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
                    By <strong className="font-bold">Mr Olson</strong>{" "}
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

          <ul className="flex flex-col gap-0">
            <li className="py-4 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <figure
                    className={
                      "text-secondary w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
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
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
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
            </li>

            <li className="py-4 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <figure
                    className={
                      "text-secondary w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
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
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
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
            </li>
          </ul>
        </li>

        <li className="">
          <a href="#">
            <article className="group relative w-full h-96 md:h-72 mb-28">
              {/** Must set the figure as the background, and push content downwards... */}
              <figure className="">
                <img
                  src="/dummy-article-images/image-6.jpg"
                  alt="Hero Image"
                  className="object-cover w-full h-96 md:h-72"
                />
              </figure>

              {/** The background effect */}
              <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                <span className="font-bold text-xl">READ MORE</span>
              </div>

              {/** The title, category, author, etc. */}
              <div className="absolute bottom-0 p-5 flex flex-col gap-4 justify-end items-start translate-y-28">
                <p className="bg-black font-bold px-4 py-1 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  Engineering
                </p>

                {/** Name */}
                <h3 className="bg-black font-bold text-3xl px-4 py-1 transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  Math Good English Bad
                </h3>

                {/** Profile Picture and article information */}
                <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray">
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
                    By <strong className="font-bold">Mr Olson</strong>{" "}
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

          <ul className="flex flex-col gap-0">
            <li className="py-4 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <figure
                    className={
                      "text-secondary w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
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
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
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
            </li>

            <li className="py-4 border-t border-gray">
              <a href="#">
                <article className="group flex flex-row gap-4 w-full items-center">
                  <figure
                    className={
                      "text-secondary w-24 h-24 inline-block relative rounded-full overflow-hidden flex-shrink-0 "
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
                  <div className="flex flex-col gap-2">
                    <header className="">
                      <h3 className="font-bold text-foreground text-xl transition-colors duration-300 group-hover:text-light-gray/50">
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
            </li>
          </ul>
        </li>
      </ul>
    </Section>
  );
};
