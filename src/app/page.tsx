import Link from "next/link";
// Components
import { Gallery } from "@/components/home/gallery";
import { Socials } from "@/components/home/socials";
import { LatestArticles } from "@/components/home/latestArticles";
import { Intro } from "@/components/home/intro";

export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col gap-x-10 lg:flex-row">
      <main className="top-0 flex max-h-screen flex-col gap-y-4 pt-20 lg:sticky lg:w-1/2 lg:py-24">
        <Intro />
        <Gallery />
        <div className="flex gap-x-4">
          <Socials />
          <div className="h-6 w-full rounded bg-[url(/home/footer.svg)]" />
        </div>
      </main>
      <div className="flex flex-col py-24 lg:w-1/2">
        <nav className="sticky top-0 flex gap-x-2 -mx-8 py-4 font-mono text-lg text-main backdrop-blur lg:static lg:-mx-0 lg:py-0">
          <Link href="/" className="ml-8 underline underline-offset-2 lg:ml-0">
            home
          </Link>
          <Link href="/blog" className="hover:underline underline-offset-2">blog</Link>
        </nav>
        <LatestArticles />
      </div>
    </div>
  );
}
