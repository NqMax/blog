import fs from "node:fs";

export type PostMetadata = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
};

export async function getPosts(): Promise<PostMetadata[]> {
  // As per the Node.js docs: Relative paths will be resolved relative to the current working directory as determined by calling process.cwd()
  // This means that node will resolve relative paths from the root directory and not this folder (./lib)
  // console.log(process.cwd())
  const basePath = "./src/content";
  const files = fs.readdirSync(basePath);

  const metadata = await Promise.all(
    files.map(async (file) => {
      const { metadata } = await import(`@/content/${file}`);
      metadata.slug = file.replace(".mdx", "");
      return metadata;
    }),
  );

  return metadata;
}

export async function getPost(
  name: string,
): Promise<{ default: any; metadata: PostMetadata }> {
  const file = import(`@/content/${name}.mdx`);

  return file;
}

export async function getTaggedPosts(tag: string) {
  const posts = await getPosts();

  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  return filteredPosts;
}
