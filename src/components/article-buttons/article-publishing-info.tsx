import {
  formatDate,
  formatDateTimeForHTML5,
  formatNumber,
} from "@/lib/display-formatters";
import { cn } from "@/lib/utils";
import { CalendarClock, Eye } from "lucide-react";

type ArticlePublishingInfoProps = {
  author: string;
  published: Date;
  views: number;
  className?: string;
};

export const ArticlePublishingInfo = ({
  author,
  published,
  views,
  className,
}: ArticlePublishingInfoProps) => {
  return (
    // Todo: determine if useing a footer tag is appropriate
    <footer
      className={cn(
        "flex flex-row gap-x-4 gap-y-2 flex-wrap items-center text-xs text-gray",
        className
      )}
    >
      {author && (
        <p>
          By <strong className="font-bold">{author}</strong>{" "}
        </p>
      )}

      {published && (
        <time
          itemProp="date created"
          dateTime={formatDateTimeForHTML5(published)}
          className="flex flex-row gap-1 items-center"
        >
          <CalendarClock className="w-5 h-5" /> {formatDate(published)}
        </time>
      )}

      {views && (
        <p className="flex flex-row gap-1 items-center">
          <Eye className="w-5 h-5" /> {formatNumber(views)} Views
        </p>
      )}
    </footer>
  );
};
