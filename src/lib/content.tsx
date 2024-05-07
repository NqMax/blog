import fs from "node:fs";

export type PostMetadata = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: { name: string; slug: string }[];
};

export async function getPosts(): Promise<PostMetadata[]> {
  // const fileData = fs.readFileSync(`${basePath}/${file}`, {
  //   encoding: "utf-8",
  // });
  // console.log(process.cwd())

  // As per the Node.js docs: Relative paths will be resolved relative to the current working directory as determined by calling process.cwd()
  // This means that node will resolve relative paths from the root directory and not this folder (./lib)
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
