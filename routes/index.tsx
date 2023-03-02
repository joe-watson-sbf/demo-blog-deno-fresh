import Header from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPosts } from "../utils/posts.ts";
import { Post } from "../types.d.tsx";
import { Article } from "../components/Article.tsx";

export const handler: Handlers = {
  async GET(request, context) {
    const post: Post[] | [] = await loadPosts();
    return context.render({ post });
  },
};

export default function Home(props: PageProps) {
  const posts: Post[] = props?.data?.post || [];

  return (
    <>
      <Header />
      <main class="flex gap-4 flex-wrap m-4 justify-center">
        {posts.map((post) => <Article post={post} />)}
      </main>
      <aside>
        ASIDE
      </aside>
    </>
  );
}
