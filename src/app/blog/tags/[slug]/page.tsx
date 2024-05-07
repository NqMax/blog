import Link from "next/link";
// Components
import { TaggedArticles } from "@/components/taggedArticles";
// Icons
import { SquareArrowUpLeft } from "lucide-react";
// Utils
import { tagsMapping } from "@/lib/tagsMapping";

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
