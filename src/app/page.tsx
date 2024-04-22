// Components
import { Gallery } from "@/components/gallery";
import { Socials } from "@/components/socials";
import { LatestArticles } from "@/components/latestArticles";
import { Intro } from "@/components/intro";

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
        <h2 className="sticky top-0 -mx-8 py-4 font-mono text-lg text-main backdrop-blur lg:static lg:-mx-0 lg:py-0">
          <span className="ml-8 underline underline-offset-2 lg:ml-0">
            home
          </span>{" "}
          blog
        </h2>
        <LatestArticles />
      </div>
    </div>
  );
}
