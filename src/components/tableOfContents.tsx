"use client";
import { useState, useEffect } from "react";

export function TableOfContents() {
  const [articleChildren, setArticleChildren] = useState<Element[]>([]);

  useEffect(() => {
    const article = document.querySelector("article")!;
    const articleChildren = Array.from(article.children);
    setArticleChildren(articleChildren);
  }, []);

  return (
    <div className="relative top-[150px] mr-auto hidden h-fit grow xl:block 2xl:grow-0">
      <div className="group absolute flex min-w-[20vw] flex-col gap-y-2 pr-8">
        <div className="flex items-center font-mono text-lg text-hl">
          Table of Contents
          <span className="ml-4 grow border-b border-dashed" />
        </div>
        <ol className="flex flex-col gap-y-2 border-b border-dashed pb-4 transition group-hover:text-main">
          {articleChildren
            .filter(
              (element) =>
                element.localName.startsWith("h") &&
                !element.localName.startsWith("h1"),
            )
            .map((element, index) => {
              return (
                <li key={index} className="font-mono">
                  <span className="text-neutral-500">{index + 1}.</span>
                  <a>{(element as HTMLElement).innerText}</a>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
