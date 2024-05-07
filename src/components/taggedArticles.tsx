import { getTaggedPosts } from "@/lib/content";
// Components
import { ArticleCard } from "@/components/articleCard";

export async function TaggedArticles({ tag }: { tag: string }) {
  const articles = await getTaggedPosts(tag);

  return (
    <nav>
      <ul>
        <li>
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              slug={article.slug}
              date={article.date}
              description={article.description}
              tags={article.tags}
            />
          ))}
        </li>
      </ul>
    </nav>
  );
}
