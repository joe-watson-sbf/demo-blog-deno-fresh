import { Post } from "../types.d.tsx";
import { extract } from "$std/encoding/front_matter/any.ts";

export async function loadPost(id: string): Promise<Post | null> {
  let raw: string;
  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);
  } catch {
    return null;
  }

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    date: new Date(params.date),
    excerpt: params.excerpt,
    body: body,
  };

  return post;
}

export async function loadPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  for await (const dirEntry of Deno.readDir("./content/posts")) {
    if (dirEntry.isFile) {
      const post = await loadPost(dirEntry.name.replace(/\.md$/, ""));
      if (post) posts.push(post);
    }
  }
  return posts;
}
