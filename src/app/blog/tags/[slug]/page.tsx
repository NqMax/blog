import Link from "next/link";
import { getPosts } from "@/lib/content";
// Components
import { TaggedArticles } from "@/components/taggedArticles";
// Icons
import { SquareArrowUpLeft } from "lucide-react";
// Utils
import { tagsMapping } from "@/lib/tagsMapping";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getPosts();

  const slugs: string[] = [];
  for (const post of posts) {
    post.tags.forEach((tag) => {
      if (!slugs.includes(tag)) {
        slugs.push(tag);
      }
    });
  }

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Tags({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="container xl:max-w-screen-lg">
      <main className="min-h-screen py-20 lg:border-x lg:px-24">
        <Link href="/" className="group mb-12 flex items-center text-main">
          <SquareArrowUpLeft className="h-5 w-5 shrink-0 transition group-hover:-rotate-45" />
          <p className="ml-2">Home</p>
          <span className="mx-4 min-w-10 grow border-b border-main" />
          <h1 className="font-mono text-4xl font-bold text-hl">
            {tagsMapping[slug as keyof typeof tagsMapping].name}
          </h1>
        </Link>
        <TaggedArticles tag={slug} />
      </main>
    </div>
  );
}
