import { type PostMetadata } from "@/lib/content";

export function Header({ metadata }: { metadata: PostMetadata }) {
  return (
    <p className="flex flex-col -mb-8">
      <time className="text-lg">{metadata.date}</time>
      <h1 className="text-4xl font-bold text-hl">{metadata.title}</h1>
    </p>
  );
}
