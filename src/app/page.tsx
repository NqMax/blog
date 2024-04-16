// Components
import { Gallery } from "@/components/gallery";
import { Socials } from "@/components/socials";
import { LatestArticles } from "@/components/latestArticles";

export default function Home() {
  return (
    <div className="container flex min-h-screen gap-x-10">
      <main className="sticky top-0 flex max-h-screen w-1/2 flex-col gap-y-4 py-24">
        <div className="mb-8">
          <p className="font-mono text-lg text-main">Hi, my name is Max</p>
          <h1 className="font-mono text-4xl font-bold text-hl [text-shadow:#fff_0px_0px_0px]">
            Welcome to my blog.
          </h1>
        </div>
        <p>
          My journey into the{" "}
          <span className="font-medium text-hl">world of coding</span> began
          with a fascination for{" "}
          <span className="font-medium text-hl">problem-solving</span> and a
          desire to create impactful solutions through{" "}
          <span className="font-medium text-hl">technology</span>. I thrive on
          challenges, constantly exploring new frameworks and languages to
          expand my skill set.
        </p>
        <p>
          With a solid foundation in{" "}
          <span className="font-medium text-hl">front-end and back-end</span>{" "}
          development, I am committed to honing my abilities to craft seamless,
          user-centric experiences and{" "}
          <span className="font-medium text-hl">
            robust, scalable applications
          </span>{" "}
          that impact our world.
        </p>
        <Gallery />
        <div className="flex gap-x-4">
          <Socials />
          <div className="h-6 w-full rounded bg-[url(/home/footer.svg)]" />
        </div>
      </main>
      <div className="flex w-1/2 flex-col py-24">
        <h2 className="font-mono text-lg text-main"><span className="underline underline-offset-2">home</span> blog</h2>
        <LatestArticles />
      </div>
    </div>
  );
}
