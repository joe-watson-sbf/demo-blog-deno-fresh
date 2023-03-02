import { loadPost, loadPosts } from "./posts.ts";
import { assertEquals, assertFalse } from "$std/testing/asserts.ts";
import { Post } from "../types.d.tsx";

Deno.test({
  name: "loadPost() returns null if the post does not exist",
  async fn() {
    const post: Post | null = await loadPost("non-existent");
    assertEquals(post, null);
  },
});

Deno.test({
  name: "loadPost() returns Post if the post exist",
  async fn() {
    const post: Post | null = await loadPost("hello-word");
    assertEquals(post?.id, "hello-word");
    assertEquals(post?.title, "First Post");
    assertEquals(post?.excerpt, "This is my first post");
  },
});

Deno.test({
  name: "load all posts",
  async fn() {
    const posts = await loadPosts();
    assertEquals(posts.length, 2);
  },
});
