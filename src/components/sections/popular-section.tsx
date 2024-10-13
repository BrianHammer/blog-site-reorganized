import { CalendarClock, Eye } from "lucide-react";
import { Section } from "../layout/Section";

export const PopularSection = ({ className }: { className?: string }) => {
  return (
    <Section className={className}>
      <header className="">
        <h3 className="text-3xl font-bold mb-4">Popular</h3>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <li>
          <a href="#">
            <article className="group flex flex-col gap-4">
              <figure className="relative">
                <img
                  src="dummy-article-images/image-three.jpg"
                  className="w-full h-72 sm:h-52 object-cover"
                />
                <figcaption className="sr-only">
                  The article image of "INSERT_ARTICLE_NAME_HERE"
                </figcaption>

                <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                  <span className="font-bold">READ MORE</span>
                </div>
              </figure>

              <div className="flex flex-row gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray flex-shrink-0">
                  <p className="font-bold text-4xl text-gray ">1</p>
                </div>
                <div>
                  <header className="">
                    <h4 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                      The article of circuits
                    </h4>
                  </header>

                  <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                    <p>
                      By <strong className="font-bold">Mr Angry</strong>{" "}
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
              </div>
            </article>
          </a>
        </li>

        <li>
          <a href="#">
            <article className="group flex flex-col gap-4">
              <figure className="relative">
                <img
                  src="dummy-article-images/image-two.jpg"
                  className="w-full h-72 sm:h-52 object-cover"
                />
                <figcaption className="sr-only">
                  The article image of "INSERT_ARTICLE_NAME_HERE"
                </figcaption>

                <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                  <span className="font-bold">READ MORE</span>
                </div>
              </figure>

              <div className="flex flex-row gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray flex-shrink-0">
                  <p className="font-bold text-4xl text-gray ">2</p>
                </div>
                <div>
                  <header className="">
                    <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                      Crazy contraptions for coffee mugs that will make you jump
                    </h3>
                  </header>

                  <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                    <p>
                      By <strong className="font-bold">Big Chungus</strong>{" "}
                    </p>

                    <time
                      itemProp="date created"
                      dateTime="2024-08-26"
                      className="flex flex-row gap-1 items-center"
                    >
                      <CalendarClock className="w-5 h-5" /> Febuary 26, 2024
                    </time>

                    <p className="flex flex-row gap-1 items-center">
                      <Eye className="w-5 h-5" /> 443 Views
                    </p>
                  </footer>
                </div>
              </div>
            </article>
          </a>
        </li>

        <li>
          <a href="#">
            <article className="group flex flex-col gap-4">
              <figure className="relative">
                <img
                  src="dummy-article-images/image-4.jpg"
                  className="w-full h-72 sm:h-52 object-cover"
                />
                <figcaption className="sr-only">
                  The article image of "INSERT_ARTICLE_NAME_HERE"
                </figcaption>

                <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                  <span className="font-bold">READ MORE</span>
                </div>
              </figure>

              <div className="flex flex-row gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray">
                  <p className="font-bold text-4xl text-gray ">3</p>
                </div>
                <div>
                  <header className="">
                    <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                      The article of Angry Buildings
                    </h3>
                  </header>

                  <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
                    <p>
                      By <strong className="font-bold">Granny Smith</strong>{" "}
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
              </div>
            </article>
          </a>
        </li>

        <li>
          <a href="#">
            <article className="group flex flex-col gap-4">
              <figure className="relative">
                <img
                  src="dummy-article-images/image-5.jpg"
                  className="w-full h-72 sm:h-52 object-cover"
                />
                <figcaption className="sr-only">
                  The article image of "INSERT_ARTICLE_NAME_HERE"
                </figcaption>

                <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                  <span className="font-bold">READ MORE</span>
                </div>
              </figure>

              <div className="flex flex-row gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-r-2 border-gray">
                  <p className="font-bold text-4xl text-gray ">4</p>
                </div>
                <div>
                  <header className="">
                    <h3 className="text-2xl font-bold group-hover:opacity-50 transition-opacity duration-300">
                      The Big Round Dome
                    </h3>
                  </header>

                  <footer className="flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-light-gray/50">
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
              </div>
            </article>
          </a>
        </li>
      </ul>
    </Section>
  );
};
