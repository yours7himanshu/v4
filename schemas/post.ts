import { z } from "zod";

export const PostTypeSchema = z.enum([
  "note",
  "article",
  "event",
  "meet",
  "review",
  "gig",
  "ask_locals",
  "ad",
]);

export const PostAuthorSchema = z.object({
  name: z.string(),
  image: z.string(),
  location: z.string(),
});

export const PostStatsSchema = z.object({
  likes: z.number().optional(),
  interested: z.number().optional(),
  bookmarks: z.number().optional(),
  comments: z.number().optional(),
});

export const LinkSchema = z.object({
  url: z.string().url(),
  title: z.string(),
  description: z.string().optional(),
});

export const PollOptionSchema = z.object({
  id: z.number(),
  text: z.string(),
  votes: z.number(),
});

export const PollSchema = z.object({
  options: z.array(PollOptionSchema),
  totalVotes: z.number(),
});

export const NoteContentSchema = z.object({
  text: z.string(),
  poll: PollSchema.optional(),
  links: z.array(LinkSchema).optional(),
  tags: z.array(z.string()).optional(),
});

export const ArticleContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  cover: z.string().optional(),
  html: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const EventContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  date: z.string(),
  location: z.string(),
  price: z
    .object({
      amount: z.number(),
      currency: z.string(),
    })
    .optional(),
  tags: z.array(z.string()).optional(),
});

export const MeetContentSchema = z.object({
  title: z.string(),
  text: z.string(),
  details: z.object({
    type: z.string().optional(),
    format: z.string().optional(),
    gender: z.string().optional(),
    when: z.string().optional(),
    where: z.string().optional(),
    level: z.string().optional(),
    style: z.string().optional(),
    seats: z.string().optional(),
    contribution: z.string().optional(),
  }),
  tags: z.array(z.string()).optional(),
});

export const ReviewContentSchema = z.object({
  title: z.string(),
  rating: z.number().min(0).max(5),
  description: z.string(),
  tags: z.array(z.string()).optional(),
});

export const GigContentSchema = z.object({
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

export const AskLocalsContentSchema = z.object({
  title: z.string(),
  text: z.string(),
  tags: z.array(z.string()).optional(),
});

export const AdContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const PostContentSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("note"),
    content: NoteContentSchema,
  }),
  z.object({
    type: z.literal("article"),
    content: ArticleContentSchema,
  }),
  z.object({
    type: z.literal("event"),
    content: EventContentSchema,
  }),
  z.object({
    type: z.literal("meet"),
    content: MeetContentSchema,
  }),
  z.object({
    type: z.literal("review"),
    content: ReviewContentSchema,
  }),
  z.object({
    type: z.literal("gig"),
    content: GigContentSchema,
  }),
  z.object({
    type: z.literal("ask_locals"),
    content: AskLocalsContentSchema,
  }),
  z.object({
    type: z.literal("ad"),
    content: AdContentSchema,
  }),
]);

export const PostSchema = z.object({
  type: PostTypeSchema,
  author: PostAuthorSchema,
  timestamp: z.string(),
  content: PostContentSchema,
  stats: PostStatsSchema,
});

// Export types from schemas
export type PostType = z.infer<typeof PostTypeSchema>;
export type Post = z.infer<typeof PostSchema>;
export type PostContent = z.infer<typeof PostContentSchema>;

export type NoteContent = z.infer<typeof NoteContentSchema>;
export type ArticleContent = z.infer<typeof ArticleContentSchema>;
export type EventContent = z.infer<typeof EventContentSchema>;
export type MeetContent = z.infer<typeof MeetContentSchema>;
export type ReviewContent = z.infer<typeof ReviewContentSchema>;
export type GigContent = z.infer<typeof GigContentSchema>;
export type AskLocalsContent = z.infer<typeof AskLocalsContentSchema>;
export type AdContent = z.infer<typeof AdContentSchema>;
