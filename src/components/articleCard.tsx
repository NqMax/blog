import Link from "next/link";
// Utils
import { cn } from "@/lib/utils";
import { tagsColorMapping } from "@/lib/tagsColorMapping";
import { type PostMetadata } from "@/lib/content";

export function ArticleCard({
  title,
  slug,
  date,
  description,
  tags,
}: PostMetadata) {
  return (
    <article className="flex flex-col gap-y-2 border-b border-dashed py-4 first:pb-4">
      <Link href={`/blog/${slug}`} className="group flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <h3 className="truncate text-lg font-medium text-hl underline decoration-transparent transition group-hover:decoration-current">
            {title}
          </h3>
          <span className="min-w-10 grow border-b border-main" />
          <time className="text-nowrap text-sm font-medium text-neutral-500 transition group-hover:text-foreground">
            {date}
          </time>
        </div>
        <p className="line-clamp-3 text-neutral-500 transition group-hover:text-foreground">
          {description}
        </p>
      </Link>
      <ul className="flex gap-x-2 text-sm">
        {tags.map((tag, index) => (
          <li
            key={index}
            className={cn(
              "hover:text-white hover:underline",
              tagsColorMapping[tag.name as keyof typeof tagsColorMapping],
            )}
          >
            <Link href={`/blog/tags/${tag.slug}`}>#{tag.name}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
