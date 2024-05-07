import Link from "next/link";
import { SquareArrowUpLeft } from "lucide-react";
import { AllArticles } from "@/components/allArticles";

export default function Blog() {
  return (
    <div className="container xl:max-w-screen-lg">
      <main className="min-h-screen py-20 lg:border-x lg:px-24">
        <Link href="/" className="group mb-12 flex items-center text-main">
          <SquareArrowUpLeft className="h-5 w-5 shrink-0 transition group-hover:-rotate-45" />
          <p className="ml-2">Home</p>
          <span className="mx-4 min-w-10 grow border-b border-main" />
          <h1 className="font-mono text-4xl font-bold text-hl">
            Latest Thoughts
          </h1>
        </Link>
        <AllArticles />
      </main>
    </div>
  );
}
