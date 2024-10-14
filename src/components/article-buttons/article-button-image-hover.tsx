import { cn } from "@/lib/utils";

type ArticleButtonImageHoverProps = {
  imageUrl: string;
  title: string;
  hideReadMore?: boolean;
  className?: string;
};

export const ArticleButtonImageHover = ({
  imageUrl,
  title,
  className,
  hideReadMore = false,
}: ArticleButtonImageHoverProps) => {
  return (
    <figure className="relative">
      <img
        src={imageUrl}
        className={cn("w-full h-72 sm:h-52 object-cover", className)}
      />
      <figcaption className="sr-only">
        The article image of "{title}""
      </figcaption>

      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300 text-white">
        {!hideReadMore && <span className="font-bold">READ MORE</span>}
      </div>
    </figure>
  );
};

export const ArticleButtonImageHoverVersionTwo = ({
  imageUrl,
  title,
  className,
  hideReadMore = false,
}: ArticleButtonImageHoverProps) => {
  return (
    <figure className="relative">
      <img
        src={imageUrl}
        className={cn("w-full h-72 sm:h-52 object-cover", className)}
      />
      <figcaption className="sr-only">
        The article image of "{title}""
      </figcaption>

      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300 text-white">
        {!hideReadMore && <span className="font-bold">READ MORE</span>}
      </div>
    </figure>
  );
};
