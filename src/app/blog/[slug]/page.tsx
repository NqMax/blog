import { getPost, getPosts } from "@/lib/content";
import { Metadata, ResolvingMetadata } from "next";
// Components
import { PostHeaderNav } from "@/components/postHeaderNav";
import { TableOfContents } from "@/components/tableOfContents";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { metadata } = await getPost(params.slug);

  return {
    title: `Max.BLOG | ${metadata.title}`,
    description: metadata.description,
  };
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { default: Post, metadata } = await getPost(params.slug);

  return (
    <div className="flex">
      <div className="container xl:mx-0 xl:max-w-screen-lg 2xl:ml-auto">
        <main className="min-h-screen py-20 lg:border-x lg:px-24 xl:border-l-0 xl:pl-12 2xl:border-l 2xl:pl-24">
          <PostHeaderNav />
          <article className="prose prose-neutral mx-auto dark:prose-invert prose-headings:scroll-mt-4">
            <time
              dateTime={new Date(metadata.date).toISOString()}
              className="text-sm"
            >
              {metadata.date}
            </time>
            <Post />
          </article>
        </main>
      </div>
      <TableOfContents />
    </div>
  );
}
