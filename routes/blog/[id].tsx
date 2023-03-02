import { Post } from "../../types.d.tsx";
import { loadPost } from "../../utils/posts.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Article } from "../../components/Article.tsx";
import Header from "../../components/Header.tsx";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post: Post | null = await loadPost(id);
    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};

  return (
    <>
      <Header />
      <main class="flex gap-8 flex-wrap m-4 justify-center">
        <Article post={post} withBody />
      </main>
    </>
  );
}
