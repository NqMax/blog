import { getPosts } from "@/lib/content";
// Components
import { ArticleCard } from "@/components/articleCard";

export async function AllArticles() {
  const articles = await getPosts();
  
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
