import { z } from "zod";

// Common schemas
const authorSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  location: z.string(),
});

const statsSchema = z.object({
  likes: z.number().optional(),
  comments: z.number().optional(),
  shares: z.number().optional(),
  bookmarks: z.number().optional(),
  interested: z.number().optional(),
});

// Post type-specific content schemas
const noteContentSchema = z.object({
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
});

const videoContentSchema = z.object({
  title: z.string(),
  video: z.object({
    url: z.string(),
    thumbnail: z.string(),
    duration: z.string(),
  }),
  description: z.string(),
  tags: z.array(z.string()).optional(),
});

const articleContentSchema = z.object({
  title: z.string(),
  cover: z.string(),
  description: z.string(),
  html: z.string(),
  tags: z.array(z.string()).optional(),
});

const meetContentSchema = z.object({
  title: z.string(),
  text: z.string(),
  details: z.object({
    type: z.string(),
    format: z.string(),
    gender: z.string(),
    when: z.string(),
    where: z.string(),
    level: z.string(),
  }),
  tags: z.array(z.string()).optional(),
});

const reviewContentSchema = z.object({
  title: z.string(),
  rating: z.number(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
});

const gigContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  details: z.array(
    z.object({
      icon: z.string(),
      text: z.string(),
    })
  ),
  tags: z.array(z.string()).optional(),
});

const askLocalsContentSchema = z.object({
  title: z.string(),
  text: z.string(),
  tags: z.array(z.string()).optional(),
});

const adContentSchema = z.object({
  title: z.string(),
  image: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

// Post schema
export const postSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("note"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: noteContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("video"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: videoContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("article"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: articleContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("meet"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: meetContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("review"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: reviewContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("gig"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: gigContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("ask_locals"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: askLocalsContentSchema,
    stats: statsSchema,
  }),
  z.object({
    type: z.literal("ad"),
    id: z.number(),
    author: authorSchema,
    timestamp: z.string(),
    content: adContentSchema,
    stats: statsSchema,
  }),
]);

export type Post = z.infer<typeof postSchema>;

// Helper types for each post type
export type NotePost = Extract<Post, { type: "note" }>;
export type VideoPost = Extract<Post, { type: "video" }>;
export type ArticlePost = Extract<Post, { type: "article" }>;
export type MeetPost = Extract<Post, { type: "meet" }>;
export type ReviewPost = Extract<Post, { type: "review" }>;
export type GigPost = Extract<Post, { type: "gig" }>;
export type AskLocalsPost = Extract<Post, { type: "ask_locals" }>;
export type AdPost = Extract<Post, { type: "ad" }>;
