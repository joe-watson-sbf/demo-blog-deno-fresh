import { Post } from "../types.d.tsx";
import { CSS, render } from "https://deno.land/x/gfm@0.2.0/mod.ts";

export function Article(props: { post: Post; withBody?: boolean }) {
  const { post, withBody } = props || null;
  const path: string = "/blog/" + post.id;

  return (
    <>
      {post && (
        <article
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          class="w-80 border border-1 border-blue-200 m-4 p-4 rounded-md"
        >
          <h1 class="text-4xl font-bold text-blue-400 uppercase font-light">
            {post.title}
          </h1>

          <p class="text-sm text-gray-400 mb-5">
            {Intl.DateTimeFormat("en-US").format(post.date)}
          </p>

          {withBody
            ? (
              <>
                <style dangerouslySetInnerHTML={{ __html: CSS }} />

                <div
                  class="markdown-body"
                  dangerouslySetInnerHTML={{ __html: render(post.body) }}
                />
              </>
            )
            : (
              <div>
                <p class="mb-5 font-italic text-gray-400 text-2xl">
                  {post.excerpt}
                </p>
                <a
                  class="text-gray-500 text-sm block underline hover:text-blue-400"
                  href={path}
                >
                  Read More...
                </a>
              </div>
            )}
        </article>
      )}
    </>
  );
}
