import Link from "next/link";
// Utils
import { cn } from "@/lib/utils";
import { tagsColorMapping } from "@/lib/tagsColorMapping";

export function ArticleCard({
  url,
  title,
  date,
  introduction,
  tags,
}: {
  url: string;
  title: string;
  date: string;
  introduction: string;
  tags: string[];
}) {
  return (
    <article className="flex flex-col gap-y-2 border-b border-dashed py-4 first:pb-4">
      <Link href={url} className="group flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2 text-nowrap">
          <h3 className="text-lg font-medium text-hl underline decoration-transparent transition group-hover:decoration-current">
            {title}
          </h3>
          <span className="w-full border-b border-main" />
          <time className="text-sm text-neutral-400 transition group-hover:text-foreground">
            {date}
          </time>
        </div>
        <p className="line-clamp-3 text-neutral-400 transition group-hover:text-foreground">
          {introduction}
        </p>
      </Link>
      <ul className="flex gap-x-2 text-sm">
        {tags.map((tag) => (
          <li
            key={tag}
            className={cn(
              "hover:text-white hover:underline",
              tagsColorMapping[tag as keyof typeof tagsColorMapping],
            )}
          >
            <Link href={`/blog/tags/${tag}`}>#{tag}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
