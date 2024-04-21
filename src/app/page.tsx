// Components
import { Gallery } from "@/components/gallery";
import { Socials } from "@/components/socials";
import { LatestArticles } from "@/components/latestArticles";
import { Intro } from "@/components/intro";

export default function Home() {
  return (
    <div className="container flex min-h-screen gap-x-10">
      <main className="sticky top-0 flex max-h-screen w-1/2 flex-col gap-y-4 py-24">
        <Intro />
        <Gallery />
        <div className="flex gap-x-4">
          <Socials />
          <div className="h-6 w-full rounded bg-[url(/home/footer.svg)]" />
        </div>
      </main>
      <div className="flex w-1/2 flex-col py-24">
        <h2 className="font-mono text-lg text-main">
          <span className="underline underline-offset-2">home</span> blog
        </h2>
        <LatestArticles />
      </div>
    </div>
  );
}
