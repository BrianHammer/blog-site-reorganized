export const ArticleButtonListItem = () => {
  return (
    <a href="#">
      <article className="group py-5">
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

        <header className="space-y-2">
          <p className="text-xs ">COOKING</p>
          <h3 className="font-bold text-xl  transition-colors duration-300 group-hover:text-primary/100 capitalize">
            How to turn your kitchen into a meth lab
          </h3>
        </header>

        <p className="mt-2 text-light-gray/75 text-sm">
          Cooking meth can be very difficult but rewarding process at the same
          time! Just make sure you dont get caught. Step One is to...
        </p>
      </article>
    </a>
  );
};
