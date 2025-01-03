import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  type: z.enum([
    "note",
    "video",
    "article",
    "event",
    "question",
    "poll",
    "job",
    "project",
  ]),
  author: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    location: z.string(),
  }),
  timestamp: z.string(),
  content: z.object({
    text: z.string(),
    poll: z
      .object({
        options: z.array(
          z.object({
            id: z.number(),
            text: z.string(),
            votes: z.number(),
          })
        ),
        totalVotes: z.number(),
      })
      .optional(),
    links: z
      .array(
        z.object({
          url: z.string(),
          title: z.string(),
          description: z.string().optional(),
        })
      )
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
  stats: z.object({
    likes: z.number(),
    shares: z.number(),
    comments: z.number(),
  }),
});

export const createPostSchema = postSchema.omit({
  id: true,
  timestamp: true,
  stats: true,
  author: true,
});

export const updateStatsSchema = z.object({
  postId: z.number(),
  action: z.enum(["like", "share", "comment"]),
});

export type Post = z.infer<typeof postSchema>;
export type CreatePost = z.infer<typeof createPostSchema>;
export type UpdateStats = z.infer<typeof updateStatsSchema>;
