import { SquareArrowUpLeft } from "lucide-react";

export function PostHeaderNav() {
  return (
    <a href="/blog" className="group mb-12 flex items-center text-main">
      <SquareArrowUpLeft className="h-5 w-5 shrink-0 transition group-hover:-rotate-45" />
      <p className="ml-2">Back</p>
      <span className="mx-4 min-w-10 grow border-b border-main" />
    </a>
  );
}
