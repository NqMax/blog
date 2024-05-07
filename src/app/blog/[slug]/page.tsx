import { getPost, getPosts } from "@/lib/content";
import { Metadata, ResolvingMetadata } from "next";
// Components
import { PostHeaderNav } from "@/components/postHeaderNav";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

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
    <div className="container xl:max-w-screen-lg">
      <main className="min-h-screen py-20 lg:border-x lg:px-24">
        <PostHeaderNav />
        <article className="prose prose-neutral mx-auto dark:prose-invert">
          <Post />
        </article>
      </main>
    </div>
  );
}
