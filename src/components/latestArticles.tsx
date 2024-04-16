// Components
import { ArticleCard } from "@/components/articleCard";

export function LatestArticles() {
  const articles = [
    {
      url: "/",
      title: "React 19 - The good, the bad and the ugly",
      date: "July 7, 2024",
      introduction:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vel explicabo quo tenetur nihil cumque iste est dignissimos minus possimus. Atque, eum deleniti. Hic sequi praesentium eligendi inventore nulla esse.",
      tags: ["React", "Node.js"],
    },
    {
      url: "/",
      title: "The future of Jamstack",
      date: "July 7, 2024",
      introduction:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vel explicabo quo tenetur nihil cumque iste est dignissimos minus possimus. Atque, eum deleniti. Hic sequi praesentium eligendi inventore nulla esse.",
      tags: ["Jamstack", "Next.js"],
    },
    {
      url: "/",
      title: "The rise of TypeScript",
      date: "July 7, 2024",
      introduction:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vel explicabo quo tenetur nihil cumque iste est dignissimos minus possimus. Atque, eum deleniti. Hic sequi praesentium eligendi inventore nulla esse.",
      tags: ["TypeScript", "JavaScript"],
    },
    {
      url: "/",
      title: "The future of WebAssembly",
      date: "July 7, 2024",
      introduction:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vel explicabo quo tenetur nihil cumque iste est dignissimos minus possimus. Atque, eum deleniti. Hic sequi praesentium eligendi inventore nulla esse.",
      tags: ["WebAssembly", "Rust"],
    },
    {
        url: "/",
        title: "The future of Rust",
        date: "July 7, 2024",
        introduction:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vel explicabo quo tenetur nihil cumque iste est dignissimos minus possimus. Atque, eum deleniti. Hic sequi praesentium eligendi inventore nulla esse.",
        tags: ["Rust"],
    }
    
  ];
  return (
    <nav>
      <ul>
        <li>
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              url={article.url}
              title={article.title}
              date={article.date}
              introduction={article.introduction}
              tags={article.tags}
            />
          ))}
        </li>
      </ul>
    </nav>
  );
}
