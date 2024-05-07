import { getPosts } from "@/lib/content";
// Components
import { ArticleCard } from "@/components/articleCard";

export async function LatestArticles() {
  const articles = await getPosts();
  
  return (
    <nav>
      <ul>
        <li>
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              slug={article.slug}
              title={article.title}
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
