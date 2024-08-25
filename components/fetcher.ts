import { z } from "zod";

export const HackerPostSchema = z.object({
  by: z.string(),
  descendants: z.optional(z.number()),
  id: z.number(),
  kids: z.optional(z.array(z.number())),
  score: z.number(),
  time: z.number(),
  title: z.string(),
  type: z.enum(["story", "comment", "job"]),
  url: z.optional(z.string()),
});

export type HackerPost = z.infer<typeof HackerPostSchema>;

export const HackerPostsSchema = z.array(z.number());

export type HackerPosts = z.infer<typeof HackerPostsSchema>;

export async function fetchPost(id: number): Promise<HackerPost> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const json = await res.json();
  return HackerPostSchema.parse(json);
}

export async function fetchPosts(): Promise<HackerPosts> {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const json = await res.json();
  return HackerPostsSchema.parse(json);
}
